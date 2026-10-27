<template>
	<!-- 绑定属性(:src="url") -->
	<image :src="url" alt="" :style="imgStyle" mode="aspectFill"/>
</template>

<script setup>
	import {
		computed
	} from "vue"
	const props = defineProps({
		url: {
			type: String,
			required: true,
		},
		size: {
			type: Number,
			default: 150,
		},
	})
	const imgStyle = computed(() => {
		return {
			width: props.size + "px",
			height: props.size + "px",
			borderRadius: "50%",
			overflow: "hidden",
		};
	})
</script>

<style scoped>
</style>
