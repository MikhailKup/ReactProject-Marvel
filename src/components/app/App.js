import { useState } from 'react'
import ComicsPage from '../comicsPage/ComicsPage'
import AppHeader from '../appHeader/AppHeader'
import CharInfo from '../charInfo/CharInfo'
import CharList from '../charList/CharList'
import ErrorBoundary from '../errorBoundary/ErrorBoundary'
import RandomChar from '../randomChar/RandomChar'

import decoration from '../../resources/img/vision.png'

const App = () => {
	const [selectedChar, setChar] = useState(null);

	function onCharSelected(id) {
		setChar(selectedChar => id);
	};
	return (
		<div className='app'>
			<ComicsPage/>
			{/* <AppHeader />
			<main>
				<ErrorBoundary>
					<RandomChar />
				</ErrorBoundary>
				<div className='char__content'>
					<ErrorBoundary>
						<CharList onCharSelected={onCharSelected} />
					</ErrorBoundary>
					<ErrorBoundary>
						<CharInfo charId={selectedChar} />
					</ErrorBoundary>
				</div>
				<img className='bg-decoration' src={decoration} alt='vision' />
			</main> */}
		</div>
	)
}

export default App
