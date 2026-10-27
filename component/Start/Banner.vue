<template>
	<view class="banner-container">
		<swiper :indicator-dots="true" indicator-color="rgba(255,255,255,0.3)" :autoplay="true" :interval="3000"
			:duration="1000">
			<swiper-item v-for="item in swiper">
				<view class="swiper-item">{{item.Image}}</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script setup>
	const swiper = [{
			id: Date.now(),
			Image: "占位",
		},
		{
			id: Date.now(),
			Image: "占位",
		},
		{
			id: Date.now(),
			Image: "占位",
		}
	]
</script>

<style scoped>
	swiper {
		width: 100vw;
		height: 22rem;
		border: 1px solid green;

		swiper-item {
			width: 100%;
			height: 100%;
			background-color: aqua;
		}

		swiper-item:nth-child(2n) {
			background-color: pink;
		}
	}
</style>
