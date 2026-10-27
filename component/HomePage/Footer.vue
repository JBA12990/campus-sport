<template>
	<view class="foot-container">
		<view class="home-div" @click="changeSelect('home')">
			<uni-icons type="home" size="60" :color="current === 'home' ? 'rgb(67, 188, 66)' :'#999'"></uni-icons>
			<text style="text-align: center;" :style="{color:current === 'home' ? 'rgb(67, 188, 66)' :'#999'}">首页</text>
		</view>
		<view class="add-div" @click="goPostSport">
			<uni-icons type="plus" size="80" color="rgb(67, 188, 66)"></uni-icons>
		</view>
		<view class="mine-div" @click="changeSelect('mine')">
			<uni-icons type="person" size="60" :color="current === 'mine' ? 'rgb(67, 188, 66)' :'#999'"></uni-icons>
			<text style="text-align: center;" :style="{color:current === 'mine' ? 'rgb(67, 188, 66)' :'#999'}">我的</text>
		</view>
	</view>
</template>

<script setup lang="ts">
	import {
		ref
	} from 'vue';

	// const options = [{
	// 	id:"Home",
	// 	type:"home",
	// 	label:"首页",
	// }]
	const current = ref('home');

	function changeSelect(target : string) {
		current.value = target;
		emits("change", { current: target })
	}

	const goPostSport = () => {
		uni.navigateTo({
			url: '/pages/PostSport/PostSport'
		})
	}

	const emits = defineEmits<{ (e : 'change', data : { current : string }) }>()
</script>

<style lang="scss" scoped>
	.foot-container {
		// position: fixed;
		width: 100%;
		margin: 0 auto;
		background-color: rgb(255, 255, 255);
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		padding-top: .8rem;

		.home-div {
			display: flex;
			flex-direction: column;
			cursor: pointer;

			text {
				font-weight: bold;
			}
		}

		.add-div {
			margin-top: -0.8rem;
			cursor: pointer;
		}

		.mine-div {
			display: flex;
			flex-direction: column;
			cursor: pointer;

			text {
				font-weight: bold;
			}
		}
	}
</style>
