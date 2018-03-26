import React, { Component } from 'react';
import ShareIcon from './../images/share-icon.png';
import ShareIconHover from './../images/share-icon-hover.png';

class Share extends Component {
	constructor(props) {
		super(props);

		this.state = {
			hoverShare: false
		}

		this.onMouseEnterShare = this.onMouseEnterShare.bind(this);
		this.onMouseLeaveShare = this.onMouseLeaveShare.bind(this);		
	}

	onMouseEnterShare() {
		this.setState((prevState) => ({hoverShare: !prevState.hoverShare}));
	}

	onMouseLeaveShare() {
		this.setState((prevState) => ({hoverShare: !prevState.hoverShare}));
	}	

	render() {
		return (
			<div onMouseEnter={this.onMouseEnterShare} onMouseLeave={this.onMouseLeaveShare} className='col-md-3 col-sm-3 no-pd icon-wrap'>
	        	<img className='share-icon icon' src={this.state.hoverShare ? ShareIconHover : ShareIcon} />
	        	<span className='icon-text'>SHARE</span>   
			</div>	
		);
	}
}

export default Share;