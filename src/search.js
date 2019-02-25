import React, { Component } from 'react';
import SearchLayout from './searchLayout'


class Search extends Component{

	state = {
		value: 'Luis Fonsi'
	}
	handleSubmit = event =>{
		event.preventDefault();
		console.log(this.input.value, 'submit')
	}

	handleInputChange = event => {
		this.setState({
			value: event.target.value.replace(' ','-'),
		})
	}

	setInputRef = element =>{
		this.input = element;
	}

	render(){
		return(
			<SearchLayout 
			setRef = {this.setInputRef}
			handleSubmit={this.handleSubmit}
			handleChange={this.handleInputChange}
			value= {this.state.value}/>
		)
	}
}

export default Search;