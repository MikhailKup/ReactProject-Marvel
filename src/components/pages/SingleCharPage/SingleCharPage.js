import { Link } from 'react-router-dom'
import './SingleCharPage.scss'

const SingleCharPage = ({data}) => {
	const { name, description, thumbnail } = data;
	return (
		<div className='singlechar'>
			<img src={thumbnail} alt={name} className='singlechar__img' />
			<div className='singlechar__info'>
				<h2 className='singlechar__name'>{name}</h2>
				<p className='singlechar__descr'>{description}</p>
			</div>
			<Link className='singlechar__back' to='/'>
				Back to all
			</Link>
		</div>
	)
}

export default SingleCharPage;
