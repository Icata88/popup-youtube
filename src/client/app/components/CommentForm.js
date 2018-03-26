import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputField from './InputField';
import addComment from './../actions/addComment';
import addReply from './../actions/addReply';
import validateInput from './../utils/validateInput';

class CommentForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			commentValue: '',
			defaultCommentValue: this.props.type === 'comment' ? 'comment...' : 'reply...',
			textColor: '#8d8885',
			fontStyle: 'italic',
			commentValueState: false
		}

		this.onChange = this.onChange.bind(this);
		this.onBlur = this.onBlur.bind(this);
		this.onFocus = this.onFocus.bind(this);	
		this.onSubmit = this.onSubmit.bind(this);	
	}


	onSubmit(e) {
		e.preventDefault();
		let comment = this.state.commentValue;
		let id = 'videoID' in this.props ? this.props.videoID : this.props.commentID;
		if (!comment) {
			return;
		}
		if (this.props.type === 'comment') {
			this.props.addComment(id, comment);
		} else {
			this.props.addReply(id, comment);
		}
		let type = this.props.type;
		document.getElementById(type).blur();
		this.setState({
			commentValue: this.state.defaultCommentValue,
			fontStyle: 'italic',
			textColor: '#8d8885',
			commentValueState: false
		});
	}

	onChange(e) {
		let commentValueState = e.target.value ? true : false;
		this.setState({
			[e.target.name]: e.target.value,
			textColor: '#08080b',
			fontStyle: 'normal',
			commentValueState: commentValueState
		});		
	}

	onBlur(e) {		
		let value = this.state.commentValue ? this.state.commentValue : this.state.defaultCommentValue;
		let textColor = this.state.commentValue ? '#08080b' : '#8d8885';
		let fontStyle = this.state.commentValue ? 'normal' : 'italic';

		this.setState({
			[e.target.name]: value,
			textColor: textColor,
			fontStyle: fontStyle			
		});
	}

	onFocus(e) {		
		let value = this.state.commentValue && this.state.commentValue !== this.state.defaultCommentValue ? this.state.commentValue : '';
		this.setState({
			[e.target.name]: value
		});
	}	


	componentDidMount() {
		this.setState({
			commentValue: this.state.defaultCommentValue
		});
	}


	render() {
		let isValidComment = validateInput(this.state.commentValue);

		return (
			<form onSubmit={this.onSubmit} className='col-xs-12'>
	            <InputField 
	            	onChange={this.onChange}
	            	onBlur={this.onBlur}
	            	onFocus={this.onFocus}
	            	textColor={this.state.textColor}
	            	fontStyle={this.state.fontStyle}
	            	value={this.state.commentValue}
	            	id={this.props.type}
	            	type='text'
	            	name='commentValue'
	            />
	            <input type='submit' value={this.props.type === 'comment' ? 'POST' : 'REPLY'} style={({'display': this.state.commentValueState && isValidComment ? '' : 'none'})} className='button submit-comment' />
			</form>
		);
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		addComment: (videoID, comment) => dispatch(addComment(videoID, comment)),
		addReply: (commentID, comment) => dispatch(addReply(commentID, comment))
	}
}

export default connect(null, mapDispatchToProps)(CommentForm);