import React, { Component } from 'react';
import VideoPlayerLayout from './video-player-layout';
import Video from './video';
import Title from './title';
import PlayPause from './playpause';
import Timer from './timer'
import VideoPlayerControls from './video-player-controls';
import ProgressBar from './progres-bar';
import Spinner from './spinner';
import Volumen from './volumen';
import FullScreen from './full-screen';

class VideoPlayer extends Component{
	state = {
		pause: true,
		duration: 0,
		currentTime: 0,
		loading:false,
		volume: 1,
		lastVolume: null,
	}

	togglePlay = (event) => {
		this.setState({
			pause:!this.state.pause,
		})
	}
	componentDidMount(){
		this.setState({
			pause: (!this.props.autoplay)
		})
	}

	handleLoadedMetadata = event =>{
		this.video = event.target;
		this.setState({
			duration: this.video.duration,
		});
	}

	handleTimeUpdate = event =>{
		console.log(this.video.currentTime);
		this.setState({
			currentTime: this.video.currentTime,
		})
	}
	handleProgressChange = event =>{
		//event.target.value
		this.video.currentTime = event.target.value;
	}
	handleSeeking = (event) =>{
		this.setState({
			loading: true
		})
	}
	handleSeeked = (event) =>{
		this.setState({
			loading: false
		})
	}

	handleVolumenChange = (event) =>{
		this.video.volume = event.target.value;
	}

	handleVolumeToggle = event => {
    this.setState({
      lastVolume: this.state.volume,
      volume: this.state.volume===0 ? this.state.lastVolume : 0
    })
    this.video.volume = this.state.lastVolume
  }

  	handleFullScreenClick = event => {
  		if(!document.webkitIsFullScreen){
  			this.player.webkitRequestFullScreen()
  		}else{
  			this.player.webkitExitFullscreen();
  		}
  	}

  	setRef = element =>{
  		this.player = element;
  	}

	render(){
		return(
			<VideoPlayerLayout
				setRef={this.setRef}>
				<Title 
					title={this.props.title}
				/>
				<VideoPlayerControls>
					<PlayPause 
					pause = {this.state.pause}
					handleClick={this.togglePlay}
					/>
					<Timer 
					duration={this.state.duration}
					currentTime={this.state.currentTime}
					/>
					<ProgressBar 
					duration={this.state.duration}
					value={this.state.currentTime}
					handleProgressChange={this.handleProgressChange}
					/>
					<Volumen 
						handleVolumeToggle={this.handleVolumeToggle}
						handleVolumenChange={this.handleVolumenChange}
					/>
					<FullScreen 
						handleFullScreenClick={this.handleFullScreenClick}/>
				</VideoPlayerControls>
				<Spinner 
					active={this.state.loading}
				/>
				<Video 
					autoplay={this.props.autoplay}
					pause={this.state.pause}
	          		src={this.props.src}				
	          		handleLoadedMetadata={this.handleLoadedMetadata}
	          		handleTimeUpdate={this.handleTimeUpdate}
	          		handleSeeking={this.handleSeeking}
	          		handleSeeked={this.handleSeeked}
          		/>
			</VideoPlayerLayout>
		)
	}
}

export default VideoPlayer;