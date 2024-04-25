import { useState, useEffect } from 'react'
import AppHeader from '../appHeader/AppHeader';
import AppBanner from '../appBanner/AppBanner';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import ComicsList from '../comicsList/ComicsList';
import './ComicsPage.scss'

const ComicsPage = () => {
	
	return (
		<div className='comics'>
			<AppHeader />
			<AppBanner />
			<main>
				<ErrorBoundary>
					<ComicsList></ComicsList>
				</ErrorBoundary>
			</main>
		</div>
	);
};

export default ComicsPage