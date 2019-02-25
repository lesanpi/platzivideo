import React from 'react';
import './search.css';

/*function SearchLayout(props){

	return(

	)

}*/

const SearchLayout = (props) => (
	<form className="Search"
		onSubmit={props.handleSubmit}>
		
		<input type="text" 
		ref={props.setRef}
		className="Search-input"
		placeholder="Busca tus videos aqui. "
		onChange = {props.handleChange}
		value={props.value}/>
	</form>
)

export default SearchLayout