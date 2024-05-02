import { useState, useCallback } from 'react';
import './Test.css'
import Buttons from './Buttons';

const Apppp = () => {
	const [count, setCount] = useState(0);

	const onPlus = useCallback(() => setCount(count => count + 1), []);

	const onMinus = useCallback(() => setCount(count => count - 1), []);

	return (
		<div className="App">
			<h1>{count}</h1>
			<Buttons onPlus={onPlus} onMinus={onMinus}/>
		</div>
	);
};

export default Apppp;