import { ADD_COMMENT } from './types';

let addComment = (videoID, comment) => {
	return {
		type: ADD_COMMENT,
		comment: comment,
		videoID: videoID
	}
}

export default addComment;