<template>
	<div v-if="show" class="dialog">
		<button class="close-button" @click="closeDialog()">x</button>
		<img class="fullscreen-image" :src="image" />
	</div>
</template>

<script>
export default {
	name: "Dialog",
	props: {
		image: {
			type: String,
			default: "",
		},
		open: Boolean,
	},
	data() {
		return {
			show: false,
		};
	},
	methods: {
		openDialog() {
			this.show = true;
		},
		closeDialog() {
			this.show = false;
		},
	},
};
</script>

<style lang="scss">
$shadow-color: #2424245d;

.dialog {
	-webkit-box-shadow: 0px 7px 5px 0px $shadow-color;
	-moz-box-shadow: 0px 7px 5px 0px $shadow-color;
	box-shadow: 0px 7px 5px 0px $shadow-color;
	transform: translate(-50%, -50%);
	border: 0.5px solid #efefef;
	position: absolute;
	top: 50%;
	left: 50%;
	z-index: 2;
	margin: 0 2em 2em 2em;
	background-color: white;
}

.close-button {
	border: none;
	background: none;
	color: #a1a1a138;
	font-size: 2em;
	float: right;
	cursor: pointer;
	outline: inherit;
}
</style>
