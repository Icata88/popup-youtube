import React from 'react';
import Like from './Like';
import Share from './Share';

let Reply = (props) => {
	return (
		<div className='reply-wrap row'>
			<span className='comment-date col-xs-12'>{props.date}</span>
			<li className='comment col-xs-12'>{props.reply}</li>
			<div className='col-xs-12 comment-icons'>
				<div className='row'>
					<div className='col-md-6 col-sm-6 no-pd'>
						<div className='row with-pd-l'>
							<Like />
							<Share />
						</div>
					</div>
				</div>
			</div>
		</div>		
	);
}

export default Reply;