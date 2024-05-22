import { useState, useEffect, useRef } from 'react'
import useMarvelService from '../../services/MarvelService'
import CriticalErrorMessage from '../errors/ErrorMessage'
import Spinner from '../spinner/Spinner'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './charList.scss'

const setContent = (process, Component, newItemLoading) => {
	switch(process) {
		case 'waiting':
			return <Spinner/>;
		case 'loading':
			return newItemLoading ? <Component/> : <Spinner/>;
		case 'confirmed':
			return <Component/>;
		case 'error':
			return <CriticalErrorMessage/>
		default:
			throw new Error();
	}
};

const CharList = (props) => {
	const [charList, setCharList] = useState([]);
	const [newItemLoading, setNewItemLoading] = useState(false);
	const [offset, setOffset] = useState(210);
	const [charEnded, setCharEnded] = useState(false);

	const { getAllCharacters, process, setProcess } = useMarvelService();

	useEffect(() => {
		onRequest(offset, true)
	}, []);
	
	const onRequest = (offset, initial) => {
		initial ? setNewItemLoading(false) : setNewItemLoading(true)
		getAllCharacters(offset)
			.then(onCharListLoaded)
			.then(() => setProcess('confirmed'));
	}

	const onCharListLoaded = newCharList => {
		let ended = false
		if (newCharList.length < 9) {
			ended = true
		}
		setCharList(charList => [...charList, ...newCharList])
		setNewItemLoading(false)
		setOffset(offset => offset + 9)
		setCharEnded(ended)
	}

	const itemsRef = useRef([]);

	const focusOnItem = id => {
		itemsRef.current.forEach(item => item.classList.remove('char__item_selected'))
		itemsRef.current[id].classList.add('char__item_selected')
		itemsRef.current[id].focus()
	}

	function renderItems(arr) {
		const items = arr.map((item, i) => {
			let imgStyle = { objectFit: 'cover' }
			if (
				item.thumbnail ===
				'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'
			) {
				imgStyle = { objectFit: 'unset' }
			}

			return (
				<CSSTransition timeout={500} key={item.id} classNames='char__item'>
					<li
						className='char__item'
						tabIndex={0}
						ref={el => itemsRef.current[i] = el}
						key={item.id}
						onClick=    {() => {
							props.onCharSelected(item.id)
							focusOnItem(i)
						}}
						onKeyPress={(e) => {
							if (e.key === ' ' || e.key === 'Enter') {
								props.onCharSelected(item.id)
								focusOnItem(i)
							}
						}}
					>
						<img src={item.thumbnail} alt={item.name} style={imgStyle} />
						<div className='char__name'>{item.name}</div>
					</li>
				</CSSTransition>
			)
		})
		return (
			<ul className='char__grid'>
				<TransitionGroup component={null}>
					{items}
				</TransitionGroup>
			</ul>
		)
	}

	return (
		<div className='char__list'>
			{setContent(process, () => renderItems(charList), newItemLoading)}
			<button
				className='button button__main button__long'
				disabled={newItemLoading}
				style={{ display: charEnded ? 'none' : 'block' }}
				onClick={() => onRequest(offset)}
			>
				<div className='inner'>load more</div>
			</button>
		</div>
	)
};

export default CharList