import { useState } from 'react'

const TestComponent = () => {
	const [count, setCount] = useState(0);
	const [flag, setFlag] = useState(false);
	
	const handleClick = () => {
		setCount(count => count + 1)
		setFlag(flag => !flag)
	};
	console.log('Render');

	const style = {
		color: flag ? 'blue' : 'black',
	};
	return (
		<div>
			<button onClick={handleClick}>Next</button>
			<h1 style={style}>{count}</h1>
		</div>
	);
};

export default TestComponent;