import { createLocalVue, shallowMount } from "@vue/test-utils";
import Gallery from "../src/views/Gallery.vue";
import fetchMock from "fetch-mock";
import "babel-polyfill";

const localVue = createLocalVue();

function setupGalleryInstance() {
	return shallowMount(Gallery, {
		localVue,
	});
}

describe("gallery", () => {
	fetchMock.mock(
		`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.API_KEY}&tags=animals&page=1&format=json&nojsoncallback=1`,
		{
			status: 200,
			headers: { "Content-Type": "application/json" },
			body: {
				photos: {
					photo: [
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
					],
				},
			},
		}
	);

	it("passes the correct props correctly and checks types", async () => {
		expect.assertions(1);
		const spyUpdate = jest.spyOn(Gallery.methods, "getFlickrImages");
		setupGalleryInstance();

		expect(spyUpdate).toHaveBeenCalledTimes(1);
	});

	it("waaaaaaaaaaa", async () => {
		expect.assertions(1);

		let wrapper = setupGalleryInstance();

		wrapper.vm.flickrImagesData = [
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
		await wrapper.vm.$forceUpdate();

		expect(wrapper.find(".photo-tile").exists()).toBe(true);
	});
});
