import React from 'react';
import Media from './media.js';
import './playlist.css';

//si no me hace falta un ciclo de vida has un componente funcional
function Playlist(props){
		//const playlist = props.data.categories[0].playlist
		//console.log(props.data)
		return(
			<div className="Playlist">
				{
					props.playlist.map((item) => {
						return <Media {...item} key={item.id} openModal={props.handleOpenModal}/>
					})
				}
			</div>
//...item forma de enviar todos los datos
		)
}

export default Playlist;
/*
function handleClick(){

}

function Playlist(props){
	return(
		<div onClick={handleClick}>
			{props}
		</div>


		)
}
*/
