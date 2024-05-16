import { useState } from 'react';
import Form from './Form';
import { dataContext } from './Context';

const {Provider} = dataContext;

function Appp() {
	const [data, setData] = useState({
		mail: "name@example.com",
		text: "some text"
	});
	return (
		<Provider value={data}>
			<Form text={data.text}/>
			<button
			onClick={() => setData({
				mail: "second@example.com",
				text: "another text"
			})}
			>Click me</button>
		</Provider>
	)
}

export default Appp