import Skeleton from '../components/skeleton/Skeleton';
import Spinner from '../components/spinner/Spinner';
import CriticalErrorMessage from '../components/errors/ErrorMessage';

const setContent = (process, Component, data) => {
	switch(process) {
		case 'waiting':
			return <Skeleton/>;
		case 'loading':
			return <Spinner/>;
		case 'confirmed':
			return <Component data={data}/>;
		case 'error':
			return <CriticalErrorMessage/>
		default:
			throw new Error();
	}
};

export default setContent;