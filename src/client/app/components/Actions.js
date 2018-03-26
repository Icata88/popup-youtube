import React from 'react';
import Like from './Like';
import Share from './Share';
import Edit from './Edit';
import Delete from './Delete';

let Actions = () => {
	return (
		<div className='col-xs-12'>
			<div className='actions row middle-xs'>
	            <div className='icons-wrap col-md-6 col-sm-6'>
	            	<div className='row'>
	            		<Like />
	            		<Share />	            	
	            	</div>              	
	            </div>

	            <div className='button-wrap col-md-6 col-sm-6 end-md'>	            	
	            	<Edit />
	            	<Delete />
	            </div>
			</div>
		</div>
	);
}

export default Actions;