<template>
	<div>
		<div class="card" @click="$refs.dialog.openDialog()">
			<img class="card-image" :src="flickrImage" />
		</div>
		<Dialog ref="dialog" :image="flickrImage" />
	</div>
</template>

<script>
import Dialog from "./Dialog.vue";

export default {
	name: "Card",
	components: {
		Dialog,
	},
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
$shadow-size1: 5px;
$shadow-size2: 7px;

.card {
	-webkit-box-shadow: 0px $shadow-size2 $shadow-size1 0px $shadow-color;
	-moz-box-shadow: 0px $shadow-size2 $shadow-size1 0px $shadow-color;
	box-shadow: 0px $shadow-size2 $shadow-size1 0px $shadow-color;
	height: 100%;
	width: 100%;
}

.card-image {
	object-fit: cover;
	height: 100%;
	width: 100%;
}

.card-image:hover {
	-webkit-transition: all 0.4s ease;
	transition: all 0.4s ease;
	transform: scale(1.1);
}
</style>
