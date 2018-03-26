let validateInput = ((comment) => {
	let validComment = (comment) => {
		if (comment.trim() !== '') {
			return true;
		}
		return false;
	}

	return {
		validComment
	};
})();

export default validateInput;