import { ADD_REPLY } from './../actions/types';

let replyReducer = (state = {}, action) => {
	switch(action.type) {
		case ADD_REPLY:

		let commentID = action.commentID;

		return {
			...state,
			[commentID]: {
				...state[commentID],
				[new Date(Date.now()).toLocaleString()]: action.reply				
			}
		}
		default:
			return state;
	}
}

export default replyReducer;