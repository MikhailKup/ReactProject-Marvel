import { Component } from 'react'
import CriticalErrorMessage from '../errors/ErrorMessage'

class ErrorBoundary extends Component {
	state = {
		error: false,
	}

	componentDidCatch(err, errInfo) {
		console.log(err, errInfo)
		this.setState({ error: true })
	}

	render() {
		if (this.state.error) {
			return <CriticalErrorMessage/>
		}
		return this.props.children
	}
}

export default ErrorBoundary
