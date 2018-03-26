import { ADD_COMMENT } from './../actions/types';


let commentReducer = (state = {}, action) => {
	switch(action.type) {		
		case ADD_COMMENT:
		
			let videoID = action.videoID;

			return {
				...state,				
				[videoID]: {
					...state[videoID],
					[new Date(Date.now()).toLocaleString()]: action.comment
				}				
			}
		default:
			return state;
	}
}

export default commentReducer;