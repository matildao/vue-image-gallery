import "babel-polyfill";
import { fetchFlickrImages } from "../src/actions/flickr";
import fetchMock from "fetch-mock";

describe("flickrAPI", () => {
	const restoreMock = () => {
		fetchMock.reset();
	};

	it("returns result if containing data", async () => {
		expect.assertions(2);

		let photoResponseData = [
			{
				farm: 66,
				id: "0000000",
				isfamily: 0,
				ispublic: 1,
				owner: "Test Testsson",
				secret: "334356",
				server: "43656",
				title: "test response",
			},
		];

		fetchMock.mock(
			`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.API_KEY}&tags=animals&page=1&format=json&nojsoncallback=1`,
			{
				status: 200,
				headers: { "Content-Type": "application/json" },
				body: {
					photos: {
						photo: photoResponseData,
					},
				},
			}
		);

		const response = await fetchFlickrImages();

		expect(Array.isArray(response)).toBe(true);
		expect(response).toStrictEqual(photoResponseData);

		restoreMock();
	});
});
