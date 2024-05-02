import { memo } from 'react';

const Buttons = memo(({ onPlus, onMinus}) => {
	console.log('Buttons!');
	return (
		<>
		<button onClick={onPlus}>+</button>
		<button onClick={onMinus}>-</button>
		</>
	)
})

export default Buttons;