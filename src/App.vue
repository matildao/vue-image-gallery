<template>
	<div id="app">
		<Gallery></Gallery>
	</div>
</template>

<script>
import Gallery from "./views/Gallery.vue";

export default {
	name: "App",
	components: {
		Gallery,
	},
	data() {
		return {
			message: "Hello World",
		};
	},
};
</script>

<style lang="scss">
#app {
	font-size: 18px;
	font-family: "Roboto", sans-serif;
}
</style>
