<template>
	<div>
		<h2 class="gallery-title">Vue Image Gallery</h2>
		<div class="divider"></div>
		<div class="gallery-wrapper">
			<div v-for="photo in flickrImagesData" :key="photo.id">
				<Card
					:id="photo.id"
					:farm="photo.farm"
					:server="photo.server"
					:secret="photo.secret"
				></Card>
			</div>
		</div>
	</div>
</template>

<script>
import Card from "../components/Card.vue";

export default {
	name: "Gallery",
	components: {
		Card,
	},
	data() {
		return {
			flickrImagesData: {},
		};
	},
	beforeMount() {
		this.getFlickrImages();
	},
	methods: {
		async getFlickrImages() {
			const res = await fetch(
				`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.API_KEY}&tags=animals&page=1&format=json&nojsoncallback=1`
			);
			const data = await res.json();
			this.flickrImagesData = data.photos.photo;
		},
	},
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap");

.gallery-wrapper {
	margin: 2em;
	display: grid;
	grid-gap: 10px;
	grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
	grid-auto-rows: 400px;
	grid-auto-flow: row dense;
}

.divider {
	border-bottom: 1.5px solid black;
	margin: 1em;
}

.gallery-title {
	text-align: center;
	margin: 2em 2em 0 2em;
	font-family: "Amatic SC", cursive;
	font-size: 48pt;
}
</style>
