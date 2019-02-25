import React from 'react';
import Volume from './volume';
import './volumen.css'



function Volumen(props){
	
	
	

	return(
		<button
			className="Volume"
			>
			<div onClick={ props.handleVolumeToggle }>
				<Volume 
				color="white"
				size={25}
				
				/>
			</div>
			<div className="Volume-range">
				<input 
					type='range'
					min={0}
					max={1}
					step={.05}
					onChange={props.handleVolumenChange}
					id='range'
				/>
			</div>
		</button>
		
	)
}

export default Volumen;