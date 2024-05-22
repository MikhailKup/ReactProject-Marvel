import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import './SingleCharPage.scss'

const SingleCharPage = ({data}) => {
	const { name, bigdescription, thumbnail } = data;
	return (
		<div className='singlechar'>
			<Helmet>
				<meta
					name={name}
					content={name + ' page'}
				/>
				<title>{name}</title>
			</Helmet>
			<img src={thumbnail} alt={name} className='singlechar__img' />
			<div className='singlechar__info'>
				<h2 className='singlechar__name'>{name}</h2>
				<p className='singlechar__descr'>{bigdescription}</p>
			</div>
			<Link className='singlechar__back' to='/'>
				Back to all
			</Link>
		</div>
	)
}

export default SingleCharPage;
