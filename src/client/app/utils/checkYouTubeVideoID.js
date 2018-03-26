const apiKey = 'AIzaSyCLcSvC6VhTwp4pNelp7_aA8Cm-thAXpiQ';
const hostURL = 'https://www.googleapis.com/youtube/v3/videos?part=id';


let checkYouTubeVideoID = (id) =>  {
	return fetch(`${hostURL}&id=${id}&key=${apiKey}`)
		.then(response => response.json())
		.catch(error => console.log('Error: ', error))
		.then(parsedResponse => {
			return parsedResponse;
		})
}

export default checkYouTubeVideoID;