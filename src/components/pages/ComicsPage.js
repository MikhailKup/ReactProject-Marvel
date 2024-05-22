import { Helmet } from 'react-helmet'
import AppBanner from '../appBanner/AppBanner';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import ComicsList from '../comicsList/ComicsList';

const ComicsPage = () => {
	return (
		<div className='comics'>
			<Helmet>
				<meta
					name="description"
					content="Page with list of our comics"
				/>
				<title>Comics page</title>
			</Helmet>
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