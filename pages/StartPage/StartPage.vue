<template>
	<view class="StartPageContainer">
		<view class="Home" v-show="selectFoot === 'home'">
			<Home></Home>
		</view>
		<view class="Mine" v-show="selectFoot === 'mine'">
			<Mine></Mine>
		</view>
		<footer class="footer">
			<Footer @change="changePage"></Footer>
		</footer>
	</view>
</template>

<script setup lang="ts">
	import Home from "@/component/HomePage/PageContent/Home.vue"
	import Footer from "@/component/HomePage/Footer.vue"
	import Mine from "@/component/HomePage/PageContent/Mine.vue"
	import { ref, reactive } from "vue"

	const selectFoot = ref("home");
	function changePage(data : { current : string }) : void {
		console.log(data.current);
		selectFoot.value = data.current;
	}
</script>

<style lang="scss" scoped>
	@import "@/style/common.scss";

	.StartPageContainer {

		.footer {
			width: 100%;
			position: fixed;
			bottom: 0;
		}

	}
</style>
