import { useState } from 'react'
import CharInfo from '../charInfo/CharInfo'
import CharList from '../charList/CharList'
import ErrorBoundary from '../errorBoundary/ErrorBoundary'
import RandomChar from '../randomChar/RandomChar'
import SearchForm from '../searchForm/SearchForm'

import decoration from '../../resources/img/vision.png'

const MainPage = () => {
	const [selectedChar, setChar] = useState(null)

	function onCharSelected(id) {
		setChar(selectedChar => id)
	}

	return (
		<>
			<ErrorBoundary>
				<RandomChar />
			</ErrorBoundary>
			<div className='char__content'>
				<div className='char__content_left'>
					<ErrorBoundary>
						<CharList onCharSelected={onCharSelected} />
					</ErrorBoundary>
				</div>
				<div className='char__content_right'>
					<ErrorBoundary>
						<CharInfo charId={selectedChar} />
					</ErrorBoundary>
					<SearchForm />
				</div>
			</div>
			<img className='bg-decoration' src={decoration} alt='vision' />
		</>
	)
}

export default MainPage
