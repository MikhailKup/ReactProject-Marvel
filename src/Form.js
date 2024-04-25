import { useState } from 'react'
import { Container } from 'react-bootstrap'
import './Form.css'

function useInputWithValidate(initialValue) {
	const [value, setValue] = useState(initialValue)
	const onChange = e => {
		setValue(e.target.value)
	}
	const validateInput = () => {
		return value.search(/\d/) >= 0 ? true : false
	}
	return { value, onChange, validateInput }
}

const Form = () => {
	const input = useInputWithValidate('')
	const textArea = useInputWithValidate('')

	const color = input.validateInput() ? 'red' : null

	return (
		<Container>
			<form className='w-50 border mt-5 p-3 m-auto'>
				<div className='mb-3 form-wrapper'>
					<input
						value={`${input.value} / ${textArea.value}`}
						type='text'
						className='form-control'
						readOnly
					/>
					<label htmlFor='exampleFormControlInput1' className='form-label mt-3'>
						Email address
					</label>
					<input
						onChange={input.onChange}
						type='email'
						value={input.value}
						className={`form-control ${color}`}
						id='exampleFormControlInput1'
						placeholder='name@example.com'
					/>
				</div>
				<div className='mb-3 form-bottom'>
					<label htmlFor='exampleFormControlTextarea1' className='form-label'>
						Example textarea
					</label>
					<textarea
						onChange={textArea.onChange}
						className='form-control'
						id='exampleFormControlTextarea1'
						rows='3'
					></textarea>
				</div>
			</form>
		</Container>
	)
}

function Appp() {
	return <Form />
}

export default Appp
