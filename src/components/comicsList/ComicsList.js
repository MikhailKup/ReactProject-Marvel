import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import useMarvelService from '../../services/MarvelService';
import CriticalErrorMessage from '../errors/ErrorMessage';
import Spinner from '../spinner/Spinner';
import './comicsList.scss';

const ComicsList = (props) => {
	const [comicsList, setComicsList] = useState([]);
	const [newItemLoading, setNewItemLoading] = useState(false);
	const [offset, setOffset] = useState(0);
	const [comicsEnded, setComicsEnded] = useState(false);

    const {loading, error, getAllComics} = useMarvelService();
    useEffect(() => {
		onRequest(offset, true)
	}, []);
	
	const onRequest = (offset, initial) => {
		initial ? setNewItemLoading(false) : setNewItemLoading(true)
		getAllComics(offset)
			.then(onComicsListLoaded)
	}

	const onComicsListLoaded = newComicsList => {
		let ended = false
		if (newComicsList.length < 8) {
			ended = true
		}
		setComicsList(comicsList => [...comicsList, ...newComicsList])
		setNewItemLoading(false)
		setOffset(offset => offset + 8)
		setComicsEnded(ended)
	}

	function renderItems(arr) {
		const items = arr.map((item, i) => {
			return (
                <li className="comics__item" key={i}>
                    <Link to={`/comics/${item.id}`}>
                        <img src={item.thumbnail} alt={item.name} className="comics__item-img"/>
                        <div className="comics__item-name">{item.description}</div>
                        <div className="comics__item-price">{item.price}</div>
                    </Link>
                </li>
			)
		})
		return <ul className='comics__grid'>{items}</ul>
	}

    const items = renderItems(comicsList);
    const errorMessage = error ? <CriticalErrorMessage /> : null
	const spinner = loading && !newItemLoading ? <Spinner /> : null

    return (
        <div className="comics__list">
            {errorMessage}
            {spinner}
            {items}
            <button
				className='button button__main button__long'
				disabled={newItemLoading}
				style={{ display: comicsEnded ? 'none' : 'block' }}
				onClick={() => onRequest(offset)}
			>
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

export default ComicsList;