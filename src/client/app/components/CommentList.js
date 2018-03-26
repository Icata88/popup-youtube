import React from 'react';
import { connect } from 'react-redux';
import sortDates from './../utils/sortDates';
import Comment from './Comment';
 
let CommentList = (props) => {
	let sortedDates = props.comments[props.videoID] ? sortDates(props.comments[props.videoID]) : null;

	let commentList = props.comments[props.videoID] ? sortedDates.map((date, index) => 
		<Comment
			comment={props.comments[props.videoID][date]}
			date={date}
			commentID={props.videoID + '_' + ((sortedDates.length - 1) - index)}
			key={props.videoID + '_' + ((sortedDates.length - 1) - index)} 
		/>
	) : null;	


	let isEmptyList = !commentList ? 'empty' : ''; 

	return (
		<ul className={`col-xs-12 comment-list ${isEmptyList}`}>				
			{commentList}
		</ul>	
	);
}


let mapStateToProps = (state) => {
	return {
		comments: state.comments
	};
 	
}

export default connect(mapStateToProps)(CommentList);