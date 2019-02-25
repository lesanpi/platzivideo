import React, { Component } from 'react';
import HomeLayout from './homelayout';
import Categories from './categories';
import data from './api.json';
import Related from './related';
import ModalContainer from './modal';
import Modal from './modal_m';
import HandleError from './handle-error'
import VideoPlayer from './video-player'

class Home extends Component {
	
	state = {
		modalVisible: false,
		//handleError:false,
	}

	handleOpenModal = (media) =>{
		this.setState({
			modalVisible: true,
			media
		})
	}


	handleCloseModal = (event) =>{
		this.setState({
			modalVisible: false,
		})
	}

	/*componentDidCatch(error,info){
		this.setState({
			handleError: true,
		})
	}*/

	render(){
		/*if (this.state.handleError) {
			return <p>OHH hay un error</p>
		}*/
		return(
			<HandleError>
				<HomeLayout>
					<Related />
					
					<Categories categories={this.props.data.categories} 
					handleOpenModal={this.handleOpenModal}/>
					{
						this.state.modalVisible && 					
						<ModalContainer>
								<Modal 
								handleClick={this.handleCloseModal}>
									<VideoPlayer 
										autoplay={true}
										src={this.state.media.src}
										title={this.state.media.title}
									/>
								</Modal>
						</ModalContainer>
					}
				</HomeLayout>
			</HandleError>
		)
	}
		
	
}

export default Home;