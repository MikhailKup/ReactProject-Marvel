import { useState, useEffect } from 'react'
import './Counters.css'

const useCountersСalculations = initialValue => {
	const [value, setValue] = useState(initialValue)

	useEffect(() => {
		fetch('https://www.random.org/integers/?num=1&min=-50&max=50&col=1&base=10&format=plain&rnd=new')
			.then(res => res.text())
			.then(res => setValue(res))
			.catch(err => console.log(err))
	}, []);
	const incCounter = () => {
		if (value < 50) {
			setValue(value => value + 1)
		}
	}
	const decCounter = () => {
		if (value > -50) {
			setValue(value => value - 1)
		}
	}
	const rndCounter = () => {
		setValue(Math.floor(Math.random() * (100 - 1) + 1))
	}
	const resetCounter = () => {
		setValue(initialValue)
	}
	return { value, incCounter, decCounter, rndCounter, resetCounter }
}
//? ---------------------------------------------------

const Counter = () => {
	const counter = useCountersСalculations(0);
	return (
		<div className='component'>
			<div className='counter'>{counter.value}</div>
			<div className='controls'>
				<button onClick={counter.incCounter}>INC</button>
				<button onClick={counter.decCounter}>DEC</button>
				<button onClick={counter.rndCounter}>RND</button>
				<button onClick={counter.resetCounter}>RESET</button>
			</div>
		</div>
	)
}
//? ---------------------------------------------------
const RndCounter = () => {
	const counter = useCountersСalculations(0);

	return (
		<div className='component'>
			<div className='counter'>{counter.value}</div>
			<div className='controls'>
				<button onClick={counter.rndCounter}>RND</button>
				<button onClick={counter.resetCounter}>RESET</button>
			</div>
		</div>
	)
}


export { Counter, RndCounter }
