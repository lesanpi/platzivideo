import React, { Component } from 'react';
import RegularError from './regularError';
class HandleError extends Component {

	state = {
		handleError: false,
	}
	componentDidCatch(error,info){
		this.setState({
			handleError: true,
		})
		//envia este errir a un servicio como sentry
	}

	render(){
		if (this.state.handleError) {
			return(
				<RegularError />
			)
		}
		return this.props.children;
		
	}
}

export default HandleError;