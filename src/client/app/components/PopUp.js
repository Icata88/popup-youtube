import React, { Component } from 'react';
import YouTube from './YouTube';
import InputField from './InputField';
import checkYouTubeVideoID from './../utils/checkYouTubeVideoID';
import CloseIcon from './../images/close-icon.png';


class PopUp extends Component {
	constructor(props) {
		super(props);

		this.state = {
			urlValue: '',
			defaultValue: 'Paste the URL of the video here',
			isValidVideo: false,
			textColor: '#8d8885',
			fontStyle: 'italic',
			videoID: '',
			errorMessage: ''
		}

		this.onChange = this.onChange.bind(this);
		this.onBlur = this.onBlur.bind(this);
		this.onFocus = this.onFocus.bind(this);
	}

	onChange(e) {
		this.setState({
			[e.target.name]: e.target.value,
			textColor: '#08080b',
			fontStyle: 'normal'
		});

		this.isValidYouTubeURL(e.target.value);		
	}

	onBlur(e) {
		let value = this.state.urlValue ? this.state.urlValue : this.state.defaultValue;
		let textColor = this.state.urlValue ? '#08080b' : '#8d8885';
		let fontStyle = this.state.urlValue ? 'normal' : 'italic';
		this.setState({
			[e.target.name]: value,
			textColor: textColor,
			fontStyle: fontStyle
		});
	}

	onFocus(e) {
		let value = this.state.urlValue && this.state.urlValue !== this.state.defaultValue ? this.state.urlValue : '';
		this.setState({
			[e.target.name]: value
		});
	}

	isValidYouTubeURL(value) {		
		let pattern = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(\?\S*)?$/;
		let matches = value.match(pattern);
		if (!matches) {
			this.setState({
				errorMessage: value ? 'Please enter a valid YouTube URL' : ''
			});
			return;
		}		
		let videoID = matches[1];

		checkYouTubeVideoID(videoID).then((result) => {
			if (result.pageInfo.totalResults) {
				this.setState({
					videoID: videoID,
					isValidVideo: true,
					errorMessage: ''
				});				
			} else {
				this.setState({
					videoID: '',
					isValidVideo: false,
					errorMessage: "The video ID doesn't exist"
				});
			}				
		});
		
	}


	componentDidMount() {
		this.setState({
			urlValue: this.state.defaultValue
		});
	}

	render() {
		return (
			<div className='custom-overlay'>
				<div className='overlay-container wrapper'>
					<div className='overlay-container-inner row'>
						<div className='overlay-content col-xs-12 col-sm-10 col-sm-offset-1 col-lg-6 col-lg-offset-3'>
							<div onClick={this.props.togglePopUp} className='overlay-close'>
								<img src={CloseIcon}/>
							</div>

								{
									this.state.isValidVideo ? 
									<YouTube 
										videoID={this.state.videoID}
										height='350'
										autoplay='0'
										rel='0'
									/>
									: 
									<InputField 
										onChange={this.onChange}
										onBlur={this.onBlur}
										onFocus={this.onFocus}
										value={this.state.urlValue}
										textColor={this.state.textColor} 
										fontStyle={this.state.fontStyle}
										type='text'
										name='urlValue'
										error={this.state.errorMessage}
									/> 

								}

						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default PopUp;