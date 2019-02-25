import React from 'react';
import Category from './category';
import './categories.css';
import Search from './search';
import SearchLayout from './searchLayout'

function Categories(props){
	return(
		<div className='Categories'>
			<Search />
			{
				props.categories.map((item) => {
					return (<Category 
							key={item.id} {...item} 
							handleOpenModal={props.handleOpenModal}/>)
				})
			}
		</div>
	)
}

export default Categories;