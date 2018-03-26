import React from 'react';
import Reply from './Reply';

import sortDates from './../utils/sortDates';
 
let ReplyList = (props) => {
	let sortedDates = sortDates(props.replies);

	let replyList = sortedDates.map((date, index) => 
		<Reply 
			reply={props.replies[date]}
			date={date}
			key={props.commentID + '_' + ((sortedDates.length - 1) - index)}
		 />
	);

	return (
		<ul className='col-xs-11 col-xs-offset-1 reply-list'>				
			{replyList}
		</ul>	
	);
}

export default ReplyList;


