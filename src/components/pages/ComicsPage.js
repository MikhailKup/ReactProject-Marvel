import AppBanner from '../appBanner/AppBanner';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import ComicsList from '../comicsList/ComicsList';

const ComicsPage = () => {
	return (
		<div className='comics'>
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