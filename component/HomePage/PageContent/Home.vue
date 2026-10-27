<template>
	<view class="Home">
		<SearchInput class="search"></SearchInput>
		<HeadList class="head-list"></HeadList>
		<main class="main">
			<view class="select" v-for="item in options" :key="item.id">
				<text @click="activeId = item.id" :class="{active:item.id === activeId}">{{item.label}}</text>
			</view>
			<view class="main-container">
				<Main></Main>
			</view>
		</main>
	</view>
</template>

<script setup>
	import SearchInput from "@/component/HomePage/SearchInput/SearchInput.vue"
	import HeadList from "@/component/HomePage/HeadList/HeadList.vue"
	import Main from "@/component/HomePage/Main/Main.vue"

	import {
		ref,
		computed,
	} from "vue"

	const options = [{
		id: "recommend",
		label: "推荐"
	}, {
		id: "news",
		label: "最新"
	}]

	const activeId = ref("recommend");
</script>

<style scoped lang="scss">
	.Home {
		width: 100%;
		display: flex;
		align-items: center;
		flex-direction: column;
		padding-bottom: 5rem;
		gap: 3rem;
	}

	.head-list {
		width: 80%;
	}

	.main {
		width: 90%;
		height: 100%;
		background-color: rgb(239, 239, 239);
		border-radius: 14px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, .08);
		padding-bottom: 1rem;
		display: grid;
		grid-template-columns: repeat(2, 1fr);

		// display: flex;
		.select {
			display: flex;
			align-items: center;
			height: 4rem;
			border-bottom: 1px solid rgb(232, 228, 225);

			text {
				font-size: 1.8rem;
				font-weight: bold;
				color: rgb(132, 138, 139);
				cursor: pointer;
				padding: 2rem;
			}

			text.active {
				color: black;
			}
		}

		.main-container {
			width: 90%;
			margin: 0 auto;
			grid-column: 1 / -1;
			margin: 0 auto;
		}
	}
</style>
