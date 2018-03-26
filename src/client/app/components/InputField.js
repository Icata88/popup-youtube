import React from 'react';

let InputField = (props) => {
	let style = {
		color: props.textColor,
		fontStyle: props.fontStyle
	}
	return (
		<div className='row input-wrap'>			
			<input style={style} id={props.id} className='col-md-12 col-sm-12 input'
				value={props.value}
				onBlur={props.onBlur}
				onFocus={props.onFocus}
				onChange={props.onChange}
				type={props.type}
				name={props.name} />
			{
				'error' in props && props.error && (
					<p className='error-msg'>{props.error}</p>	
				)	
			}
		</div>		
	);
}

export default InputField;