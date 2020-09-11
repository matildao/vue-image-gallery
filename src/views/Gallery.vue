<template>
	<div>
		<h2 class="gallery-title">Vue Image Gallery</h2>
		<div class="divider"></div>
		<div v-if="!flickrImagesData" id="empty-gallery" class="gallery-wrapper">
			<div v-for="n in 50" :key="n" class="default-tile">
				<p id="p-image-not-available">No Image Available</p>
			</div>
		</div>
		<div v-else id="full-gallery" class="gallery-wrapper">
			<div v-for="photo in flickrImagesData" :key="photo.id">
				<Card
					:id="photo.id"
					class="photo-tile"
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
import { fetchFlickrImages } from "../actions/flickr";

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
		getFlickrImages() {
			fetchFlickrImages().then((res) => {
				this.flickrImagesData = res;
			});
		},
	},
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap");
$tile-bg: rgb(201, 201, 201);

.gallery-wrapper {
	grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
	grid-auto-flow: row dense;
	grid-auto-rows: 400px;
	grid-gap: 10px;
	display: grid;
	margin: 2em;
}

.divider {
	border-bottom: 1.5px solid black;
	margin: 1em;
}

.gallery-title {
	font-family: "Amatic SC", cursive;
	margin: 2em 2em 0 2em;
	text-align: center;
	font-size: 48pt;
}

.default-tile {
	animation: 0.3s ease-in-out both fade-in;
	background: $tile-bg;
	border-radius: 4px;
	float: left;
	margin: 5px;
}

.default-tile p {
	transform: translateX(-50%) translateY(-50%);
	color: rgb(146, 146, 146);
	position: absolute;
	text-align: center;
	font-size: 18pt;
	top: 50%;
	left: 50%;
}

@for $i from 1 through 50 {
	.default-tile {
		&:nth-child(#{$i}) {
			animation-delay: $i * (0.03s);
		}
	}
}

@keyframes fade-in {
	0% {
		opacity: 0;
		transform: scale(0);
	}

	100% {
		opacity: 1;
		transform: scale(1);
	}
}
</style>
