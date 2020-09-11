export const fetchFlickrImages = () => {
	return fetch(
		`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.API_KEY}&tags=animals&page=1&format=json&nojsoncallback=1`
	)
		.then((res) => res.json())
		.then((data) => data.photos.photo)
		.catch((error) => console.log(error));
};
