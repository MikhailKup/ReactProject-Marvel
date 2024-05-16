import CriticalErrorMessage from '../errors/ErrorMessage';
import { Link } from 'react-router-dom';

const Page404 = () => {
	const paragStyle = {'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px'};
	const linkStyle = {'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px', 'marginTop': '30px', 'color': 'red', 'textDecoration': 'underline'};
	return (
		<div>
			<CriticalErrorMessage/>
			<p style={paragStyle}>Page doesn't exist</p>
			<Link style={linkStyle} to='/'>Back to main page</Link>
		</div>
	);
};

export default Page404;