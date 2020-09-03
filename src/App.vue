<template>
	<div id="app">
		<Gallery />
	</div>
</template>

<script>
import Gallery from "./views/Gallery.vue";

export default {
	name: "App",
	components: {
		Gallery,
	},
};
</script>

<style lang="scss">
#app {
	font-size: 18px;
	font-family: "Roboto", sans-serif;
}
</style>
