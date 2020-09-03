<template>
	<div class="card">
		<img class="card-image" :src="flickrImage" />
	</div>
</template>

<script>
export default {
	name: "Card",
	props: {
		farm: {
			type: Number,
			default: 1,
		},
		server: {
			type: String,
			default: "",
		},
		id: {
			type: String,
			default: "",
		},
		secret: {
			type: String,
			default: "",
		},
	},
	data() {
		return {
			flickrImage: `https://farm${this.farm}.staticflickr.com/${this.server}/${this.id}_${this.secret}_b.jpg`,
			showFullscreenImage: false,
		};
	},
};
</script>

<style lang="scss">
$shadow-color: #adadad;

.card {
	width: 100%;
	height: 100%;
	-webkit-box-shadow: 0px 7px 5px 0px $shadow-color;
	-moz-box-shadow: 0px 7px 5px 0px $shadow-color;
	box-shadow: 0px 7px 5px 0px $shadow-color;
}

.card-image {
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.card-image:hover {
	transform: scale(1.1);
	transition: all 0.4s ease;
	-webkit-transition: all 0.4s ease;
}
</style>
