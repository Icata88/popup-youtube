import React, { Component } from 'react';
import { connect } from 'react-redux';
import CommentForm from './CommentForm';
import ReplyList from './ReplyList';
import sortDates from './../utils/sortDates';
import Like from './Like';
import Share from './Share';
import ReplyButton from './ReplyButton';
import Cancel from './Cancel';

class Comment extends Component {
	constructor(props) {
		super(props);

		this.state = {
			commentReplyClickedID: '',
			toggleViewReplies: false
		}

		this.onClickReply = this.onClickReply.bind(this);
		this.onClickCancel = this.onClickCancel.bind(this);
		this.onClickViewReplies = this.onClickViewReplies.bind(this);
	}

	onClickReply(id) {
		this.setState({commentReplyClickedID: id});
	}

	onClickCancel() {
		this.setState({
			commentReplyClickedID: ''
		});
	}

	onClickViewReplies() {
		this.setState((prevState) => ({toggleViewReplies: !prevState.toggleViewReplies}));
	}

	render() {	

		return (
			<div className='comment-wrap row'>
				<span className='comment-date col-xs-12'>{this.props.date}</span>
				<li className='comment col-xs-12'>{this.props.comment}</li>
				<div className='col-xs-12 comment-icons'>
					<div className='row'>
						<div className='col-md-6 col-sm-6'>
							<div className='row'>
								<Like />
								<Share />
								{
									this.state.commentReplyClickedID ? 
									<Cancel onClickCancel={this.onClickCancel} /> : 
									<ReplyButton onClickReply={() => this.onClickReply(this.props.commentID)} />
								}
							</div>
						</div>
					</div>
				</div>

				{
					this.props.commentID === this.state.commentReplyClickedID ? 
					<CommentForm 
						isVisible={this.state.commentReplyClickedID === this.props.commentID} 
						commentID={this.state.commentReplyClickedID} 
						type='reply' 
					/> : 
					null
				}
				{
					this.props.replies[this.props.commentID] ?
					<div className='col-xs-12 view-hide-replies' onClick={this.onClickViewReplies}>
						<span>
							<b>
							{
								!this.state.toggleViewReplies ?
								Object.keys(this.props.replies[this.props.commentID]).length > 1 ? 'View all ' + Object.keys(this.props.replies[this.props.commentID]).length + ' replies' : 'View the reply' :
								'Hide the replies'
							}
							</b>
						</span>
					</div>
					: null						
				}


				{
					this.state.toggleViewReplies ? 
					<ReplyList
					commentID={this.props.commentID} 
					replies={this.props.replies[this.props.commentID]} />
					: null
				}
			</div>
		);
	}
}


let mapStateToProps = (state) => {
	return {
		replies: state.replies
	};
 	
}

export default connect(mapStateToProps)(Comment);