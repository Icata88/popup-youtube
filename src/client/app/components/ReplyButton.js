import React, { Component } from 'react';
import ReplyIcon from './../images/reply-icon.png';
import ReplyIconHover from './../images/reply-icon-hover.png';


class ReplyButton extends Component {
	constructor(props) {
		super(props);

		this.state = {
			hoverReply: false
		}

		this.onMouseEnterReply = this.onMouseEnterReply.bind(this);
		this.onMouseLeaveReply = this.onMouseLeaveReply.bind(this);		
	}

	onMouseEnterReply() {
		this.setState({hoverReply: true});
	}

	onMouseLeaveReply() {
		this.setState({hoverReply: false});
	}	

	render() {
		return (
			<div onClick={this.props.onClickReply} onMouseEnter={this.onMouseEnterReply} onMouseLeave={this.onMouseLeaveReply} className='col-md-3 col-sm-3 no-pd icon-wrap'>
	        	<img className='reply-icon icon' src={this.state.hoverReply ? ReplyIconHover : ReplyIcon} />
	        	<span className='icon-text'>REPLY</span>   
			</div>	
		);
	}
}

export default ReplyButton;