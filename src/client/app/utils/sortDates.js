let sortDates = (obj) => {

	let sorted = Object.keys(obj).sort((a, b) => {
		let dateA = new Date(a), dateB = new Date(b); 
		return dateB - dateA;
	})
	return sorted;
}

export default sortDates;