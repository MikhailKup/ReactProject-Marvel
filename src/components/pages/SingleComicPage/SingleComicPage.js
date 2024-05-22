import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import './SingleComicPage.scss'

const SingleComicPage = ({data}) => {
	const { title, bigdescription, pageCount, thumbnail, language, price } = data;
	return (
		<div className='single-comic'>
			<Helmet>
				<meta
					name={title}
					content={title + ' page'}
				/>
				<title>{title}</title>
			</Helmet>
			<img src={thumbnail} alt={title} className='single-comic__img' />
			<div className='single-comic__info'>
				<h2 className='single-comic__name'>{title}</h2>
				<p className='single-comic__descr'>{bigdescription}</p>
				<p className='single-comic__descr'>{pageCount}</p>
				<p className='single-comic__descr'>Language: {language}</p>
				<div className='single-comic__price'>{price}</div>
			</div>
			<Link className='single-comic__back' to='/comics'>
				Back to all
			</Link>
		</div>
	)
}

export default SingleComicPage
