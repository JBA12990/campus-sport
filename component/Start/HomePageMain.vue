<template>
	<view class="HomePageContainer">
		<view class="title">
			<h1>功能亮点</h1>
		</view>
		<view class="main-child" v-for="item in activities" :key="item.id">
			<IconSvg :type="item.icon" size="50"></IconSvg>
			<view class="child-content">
				<h2>{{item.title}}</h2>
				<text>{{item.desc}}</text>
			</view>
		</view>
	</view>
</template>

<script setup lang="ts">
	import Icon from "@/component/Icon/Icon.vue"
	import IconSvg from "@/component/Icon/IconSVG.vue"
	const activities = [
		{
			id: Date.now(),
			title: '发布约运动',
			desc: '自定义事件、地点、人数',
			icon: 'edit',
		},
		{
			id: Date.now(),
			title: '快速报名',
			desc: '一键报名，轻松找到运动搭子',
			icon: 'userAdd',
		},
		{
			id: Date.now(),
			title: '实时沟通',
			desc: '报名成功后，可在小程序内聊天',
			icon: 'chat',
		},
		{
			id: Date.now(),
			title: '安全可靠',
			desc: '校园实名认证，保障交友安全',
			icon: 'shield',
		},
	]
</script>

<style scoped lang="scss">
	* {
		padding: 0;
		margin: 0;
	}

	@import "@/style/common.scss";

	.HomePageContainer {
		width: 80%;
		margin: 0 auto;
		position: relative;
		@include flex-center;
		flex-direction: column;
		gap: 1.2rem;

		.title {
			display: flex;
			align-self: flex-start;
		}

		.main-child {
			width: 100%;
			height: 10em;
			@include flex-center-X;
			// @include flex-center;
			/* position: absolute; */
			// border: 2px solid black;
			border-radius: 10px;

			.child-content {
				transform: translateY(-0.3rem);

				text {
					color: gray;
				}
			}

			padding-left: 2.3rem;
			gap: 1.5rem;
		}
	}
</style>
