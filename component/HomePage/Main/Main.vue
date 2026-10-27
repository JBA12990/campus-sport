<template>
	<view class="main-container" v-for="item in list" :key="item.id">
		<text class="sport" :style="{backgroundColor:item.bgColor}">{{item.label}}</text>
		<h2>{{item.text}}</h2>
		<view class="container1">
			<uni-icons type="calendar" size="20" color="#999"></uni-icons>
			<text class="when">{{item.when}}</text>
			<uni-icons type="location" size="20" color="#3984F5" />
			<text class="location">{{item.location}}</text>
			<text class="state"
				:class="{over:item.state === true,sign:item.state === false}">{{item.state === false ? '报名中' : '已截止'}}</text>
		</view>
		<view class="container2">
			<uni-icons type="person" size="24" color="#3984F5" />
			<text class="number">4/10人</text>
		</view>
		<view class="container3">
			<Avatar url="/static/monesy.jpg" :size="48" class="avatar" />
			<text class="name">{{item.user_name}}</text>
			<text class="time">{{timeAgo(item.time)}}</text>
		</view>
	</view>
</template>

<script setup>
	import {
		onMounted,
		ref
	} from "vue";
	import Avatar from "@/component/Avatar/Avatar.vue"
	import {
		timeAgo
	} from "@/utils/time.js"
	import "@/mock/index.js"
	const now = new Date(Date.now());
	const list = ref({});
	onMounted(() => {
		uni.request({
			url: 'https://example.com/api/list',
			method: 'GET',
			success: (res) => {
				console.log(res.data)

				list.value = res.data.data;
			},
			fail: (err) => {
				console.error('请求失败', err)
			}
		})
	})
</script>

<style scoped lang="scss">
	@import "@/style/common.scss";

	.main-container {
		margin-top: 1rem;
		background-color: #fff;
		border-radius: 14px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, .08);
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 0.3rem;
		padding: 1rem;

		.sport {
			width: 5.5rem;
			height: 1.3rem;
			border-radius: 10px;
			@include flex-center;
			color: rgb(110, 107, 109);
			font-size: 1rem;
			font-weight: bold;
		}

		.container1 {
			display: flex;

			.when {
				margin-right: 1rem;
			}

			.location {
				margin-right: 1rem;
			}

			.state {
				padding: .2rem .8rem;
				font-weight: bold;
				@include flex-center;
				border-radius: 8px;
				margin-left: auto;
				margin-right: 3rem;

				&.sign {
					color: rgb(95, 178, 102);
					background-color: rgb(200, 237, 199);
				}

				&.over {
					background-color: rgb(252, 241, 231);
					color: rgb(240, 160, 48);
				}
			}


		}

		.container3 {
			@include flex-center-X;
			position: relative;

			.avatar {
				margin-right: 0.5rem;
			}

			.time {
				margin-left: auto;
				margin-right: 1rem;
				color: rgb(211, 220, 216);
				font-weight: bold;
			}
		}
	}
</style>
