import React from 'react';
import FullScreenIcon from './full-screen-icon'
import './full-screen.css'
const FullScreen = (props) =>(
	<div 
		className='FullScreen'
		onClick={props.handleFullScreenClick}
	>
		<FullScreenIcon
			size={25}
			color='white'
		/>
	</div>

)

export default FullScreen