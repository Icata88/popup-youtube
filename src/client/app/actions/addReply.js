import { ADD_REPLY } from './types';

let addReply = (commentID, reply) => {
	console.log(commentID, reply);
	return {
		type: ADD_REPLY,
		reply: reply,
		commentID: commentID
	}
}

export default addReply;