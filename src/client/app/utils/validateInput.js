let validateInput = (comment) => {
	let validComment = (() => {
		if (comment !== '') {
			return true;
		}
		return false;
	})();

	return {
		validComment
	};
};

export default validateInput;