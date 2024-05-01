import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react'
import useMarvelService from '../../services/MarvelService'
import ErrorMessage from '../errors/ErrorMessage'
import Skeleton from '../skeleton/Skeleton'
import Spinner from '../spinner/Spinner'
import './charInfo.scss'

const CharInfo = props => {
	const [char, setChar] = useState(null)
	const { loading, error, getCharacter, clearError } = useMarvelService()

	useEffect(() => {
		updateChar()
	}, [props.charId])

	const updateChar = () => {
		const { charId } = props
		if (!charId) {
			return
		}
		clearError()
		getCharacter(charId).then(onCharLoaded);
	}

	const onCharLoaded = char => {
		setChar(char)
	}

	const skeleton = char || loading || error ? null : <Skeleton />
	const spinner = loading ? <Spinner /> : null
	const errorMessage = error ? <ErrorMessage /> : null
	const content = !(loading || error || !char) ? <View char={char} /> : null

	return (
		<div className='char__info'>
			{skeleton}
			{spinner}
			{errorMessage}
			{content}
		</div>
	)
}

const View = ({ char }) => {
	const { name, description, thumbnail, homepage, wiki, comics } = char
	let imgStyle = { objectFit: 'cover' }
	if (
		thumbnail ===
		'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'
	) {
		imgStyle = { objectFit: 'contain', heigth: '160px', width: '160px' }
	}
	return (
		<>
			<div className='char__basics'>
				<img src={thumbnail} alt={name} style={imgStyle} />
				<div>
					<div className='char__info-name'>{name}</div>
					<div className='char__btns'>
						<a href={homepage} className='button button__main'>
							<div className='inner'>homepage</div>
						</a>
						<a href={wiki} className='button button__secondary'>
							<div className='inner'>Wiki</div>
						</a>
					</div>
				</div>
			</div>
			<div className='char__descr'>{description}</div>
			<div className='char__comics'>Comics:</div>
			<ul className='char__comics-list'>
				{comics.length > 0 ? null : 'There is comics for this character'}
				{comics.map((item, i) => {
					return (
						<Link to={`/comics/${item.resourceURI.split('/').pop()}`} className='char__comics-item' key={i}>
							{item.name}
						</Link>
					)
				})}
			</ul>
		</>
	)
}

CharInfo.propTypes = {
	charId: PropTypes.number,
}

export default CharInfo
