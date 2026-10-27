<template>
	<view class="search">
		<Icon class="Icon-search" type="search" :size="30"></Icon>
		<input class="search-input" type="text" placeholder="搜索运动类型、地点">
		<Icon class="Icon-message" type="message1" :size="30"></Icon>
	</view>
</template>

<script setup>
	import Icon from "@/component/Icon/Icon.vue"
</script>

<style lang="scss" scoped>
.search {
		position: relative;
		width: 75%;

		.Icon-search {
			position: absolute;
			left: 1.2rem;
			top: 50%;
			transform: translateY(-50%);
			z-index: 1;
			pointer-events: none;
		}

		.Icon-message {
			position: absolute;
			right: -1.8rem;
			top: 50%;
			transform: translateY(-50%);
		}

		.search-input {
			height: 3.5rem;
			/* border: 2px solid black; */
			background-color: rgb(245, 245, 245);
			padding-left: 4rem;
			color: rgb(128, 128, 128);
			border-radius: 2rem;
		}
}
</style>
