import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useMarvelService from '../../services/MarvelService'
import AppBanner from '../appBanner/AppBanner'
import CriticalErrorMessage from '../errors/ErrorMessage'
import Spinner from '../spinner/Spinner'

const SinglePage = ({Component, dataType}) => {
	const { id } = useParams()
	const [data, setData] = useState(null)
	const { loading, error, getComic, getCharacter, clearError } = useMarvelService()

	useEffect(() => {
		updateData()
	}, [id])

	const updateData = () => {
		clearError()
		switch(dataType) {
			case 'character':
				getCharacter(id).then(onDataLoaded);
				break;
			case 'comic':
				getComic(id).then(onDataLoaded);
				break;
			default:
				throw new Error('Error');
		}
	}

	const onDataLoaded = data => {
		setData(data)
	}

	const errorMessage = error ? <CriticalErrorMessage /> : null
	const spinner = loading ? <Spinner /> : null
	const content = !(loading || error || !data) ? <Component data={data} /> : null
	return (
		<>
			<AppBanner />
			{spinner}
			{errorMessage}
			{content}
		</>
	)
}

export default SinglePage
