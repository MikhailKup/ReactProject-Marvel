import img from './error.gif'
import './ErrorMessage.scss'

const ErrorMessage = () => {
	return (
		<div className="error-message">
			<img src={img} alt="Error" className='error-message'/>
		</div>
  )
};

export default ErrorMessage