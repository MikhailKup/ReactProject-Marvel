import { useContext } from 'react';
import { dataContext } from './Context';

const InputComponent = () => {
	const context = useContext(dataContext);
	return (
		<input value={context.mail} type='email' className='form-control'
		placeholder='name@example.com'/>
	);
};

export default InputComponent;