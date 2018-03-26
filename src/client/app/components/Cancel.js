import React from 'react';
import CancelIcon from './../images/cancel-icon.png';

let CancelReply = (props) => {
	return (
		<div onClick={props.onClickCancel} className='col-md-3 col-sm-3 no-pd icon-wrap'>
        	<img className='cancel-icon icon' src={CancelIcon} />
        	<span className='icon-text'>CANCEL</span>   
		</div>	
	);
}

export default CancelReply;