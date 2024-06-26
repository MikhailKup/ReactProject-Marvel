import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useMarvelService from '../../services/MarvelService'
import AppBanner from '../appBanner/AppBanner'
import setContent from '../../utils/setContent'

const SinglePage = ({Component, dataType}) => {
	const { id } = useParams()
	const [data, setData] = useState(null)
	const { getComic, getCharacter, clearError, process, setProcess } = useMarvelService()

	useEffect(() => {
		updateData()
	}, [id])

	const updateData = () => {
		clearError()
		switch(dataType) {
			case 'character':
				getCharacter(id)
					.then(onDataLoaded)
					.then(() => setProcess('confirmed'));
				break;
			case 'comic':
				getComic(id)
					.then(onDataLoaded)
					.then(() => setProcess('confirmed'));
				break;
			default:
				throw new Error('Error');
		}
	}

	const onDataLoaded = data => {
		setData(data)
	}

	return (
		<>
			<AppBanner />
			{setContent(process, Component, data)}
		</>
	)
}

export default SinglePage
