import React, { Component } from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import Actions from './Actions';

class YouTube extends Component {
	constructor(props) {
		super(props);

		this.state = {
			video: 'http://www.youtube.com/embed/' + this.props.videoID + "?autoplay=" + this.props.autoplay + "&rel=" + this.props.rel
		}

	}


	render() {
		return (
            <div className="video-container row">
                <iframe type="text/html" className='col-xs-12' height={this.props.height} src={this.state.video} color={this.props.color} frameBorder="0"/>
                <Actions />
                <CommentForm type='comment' videoID={this.props.videoID} />
                <CommentList videoID={this.props.videoID} />
            </div>			
		);
	}
}

export default YouTube;