import React, { PureComponent} from 'react'
import './media.css';
import PropTypes from 'prop-types';

class Media extends PureComponent{

	state = {
		author: 'Luis Sanchez P'
	}

	/*constructor(props){
		super(props)
		this.state = {
			author: props.author
		} //para cambiar propiedades
	}*/

	handleClick = (event) => {
		
		 //poner la variable que cambiares
		//console.log(this.props.author)
		this.props.openModal(this.props)
	}

	render(){
		 const styles = {
	      	container: {
	        color: '#44546b',
	        cursor: 'pointer',
	        width: 260,
	        border: '1px solid red'
	      }
	    }
		
		return (
			<div className="Media" onClick={this.handleClick}>
				<div className='Media-cover'>
				<img
						width={260}
						height={160}
						src={this.props.cover}
						className='Media-image'
					/>
					<h4 className='Media-title'>{this.props.title}</h4>
					<p className='Media-author'>{this.props.author}</p>
				</div>
			</div>
		);
	}
}

Media.propTypes = {
	cover: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
	type: PropTypes.oneOf(['video','audio'])
	//number 
	//object
	//func
	//array
	//string
}

export default Media;