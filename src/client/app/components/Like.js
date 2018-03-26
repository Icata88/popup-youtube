import React, { Component } from 'react';
import LikeIcon from './../images/like-icon.png';
import LikeIconHover from './../images/like-icon-hover.png';

class Like extends Component {
	constructor(props) {
		super(props);

		this.state = {
			hoverLike: false
		}

		this.onMouseEnterLike = this.onMouseEnterLike.bind(this);
		this.onMouseLeaveLike = this.onMouseLeaveLike.bind(this);		
	}

	onMouseEnterLike() {
		this.setState((prevState) => ({hoverLike: !prevState.hoverLike}));
	}

	onMouseLeaveLike() {
		this.setState((prevState) => ({hoverLike: !prevState.hoverLike}));
	}	

	render() {
		return (
			<div onMouseEnter={this.onMouseEnterLike} onMouseLeave={this.onMouseLeaveLike} className='col-md-3 col-sm-3 no-pd icon-wrap'>
	        	<img className='like-icon icon' src={this.state.hoverLike ? LikeIconHover : LikeIcon} />
	        	<span className='icon-text'>LIKE</span>
			</div>
		);
	}
}

export default Like;