<template>
	<view class="content">
		<Banner />
		<HomePageMain class="HomePageMain"></HomePageMain>
		<button class="btn-start" @click="golist">立即开始</button>
	</view>
</template>

<script setup>
	import Banner from "@/component/Start/Banner.vue"
	import HomePageMain from "@/component/Start/HomePageMain.vue"
	const golist = () => {
		uni.navigateTo({
			url: '/pages/StartPage/StartPage'
		})
	}
</script>

<style scoped>
	.HomePageMain {
		margin-top: 3rem;
	}

	.btn-start {
		width: 20%;
		height: 4rem;
		display: flex;
		justify-content: center;
		align-items: center;
		border: none;
		margin-top: 2rem;
		border-radius: 25px;
		background-color: rgb(70, 185, 66);
		color: white;
		font-size: 1.3rem;
		font-weight: bold;
	}
</style>
