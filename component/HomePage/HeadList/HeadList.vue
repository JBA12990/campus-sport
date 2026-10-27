<template>
	<view class="head-list">
		<view class="row" v-for="item in mainList" :key="item.id" :style="{backgroundColor:item.color}">
			<IconSvg :type="item.icon" :size="80"></IconSvg>
			<strong>{{item.label}}</strong>
		</view>
		<view class="cat" style="background-color: rgb(248, 241, 250);" @click="expanded = false" v-show="expanded">
			<IconSvg type="more" :size="80" />
			<strong>更多</strong>
		</view>
		<view class="more" v-for="item in moreList" :key="item.id" :style="{backgroundColor:item.color}"
			v-show="!expanded">
			<IconSvg :type="item.icon" :size="80"></IconSvg>
			<strong>{{item.label}}</strong>
		</view>
		<view class="cat" style="background-color: rgb(234, 246, 252);" @click="expanded = true" v-show="!expanded">
			<IconSvg type="collapse" :size="80" />
			<strong>收起</strong>
		</view>
	</view>
</template>

<script setup lang="ts">
	import IconSvg from "@/component/Icon/IconSVG.vue"
	import { ref, computed } from "vue"
	// interface Category {
	// 	id : string,
	// 	label : string,
	// 	icon : string,
	// }
	// const props = withDefaults(defineProps<{
	// 	categories : Category[]
	// 	activeId ?: string
	// 	visibleCount ?: number
	// }>(), {
	// 	activeId: "all",
	// 	visibleCount: 6,
	// })
	const test = [
		{
			id: "all",
			label: "全部",
			icon: "all",
			color: "rgb(230, 244, 246)",
			group: "main",
		},
		{
			id: "run",
			label: "跑步",
			icon: "run",
			color: "rgb(237, 247, 247)",
			group: "main",
		},
		{
			id: "basketball",
			label: "篮球",
			icon: "basketball",
			color: "rgb(252, 241, 231)",
			group: "main",
		}, {
			id: "badminton",
			label: "羽毛球",
			icon: "badminton",
			color: "rgb(234, 246, 252)",
			group: "main",
		}, {
			id: "dumbbell",
			label: "健身",
			icon: "dumbbell",
			color: "rgb(230, 244, 246)",
			group: "main",
		}, {
			id: "tennis",
			label: "网球",
			icon: "tennis",
			color: "rgb(233, 236, 230)",
			group: "more",
		}, {
			id: "volleyball",
			label: "排球",
			icon: "volleyball",
			color: "rgb(230, 244, 246)",
			group: "more",
		}, {
			id: "pingpong",
			label: "乒乓",
			icon: "pingpong",
			color: "rgb(248, 241, 250)",
			group: "more",
		}, {
			id: "skateboard",
			label: "滑板",
			icon: "skateboard",
			color: "rgb(248, 241, 250)",
			group: "more",
		}, {
			id: "football",
			label: "足球",
			icon: "football",
			color: "rgb(232, 232, 232)",
			group: "more",
		}, {
			id: "swim",
			label: "游泳",
			icon: "swim",
			color: "rgb(230, 244, 246)",
			group: "more",
		}, {
			id: "cycling",
			label: "骑行",
			icon: "cycling",
			color: "rgb(252, 241, 231)",
			group: "more",
		}, {
			id: "yoga",
			label: "瑜伽",
			icon: "yoga",
			color: "rgb(248, 241, 250)",
			group: "more",
		},]
	const expanded = ref(true);
	const mainList = computed(() => test.filter(i => i.group === "main"));
	const moreList = computed(() => test.filter(i => i.group === "more"));
</script>

<style scoped lang="scss">
	@import "@/style/common.scss";

	.head-list {
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		gap: 2.5rem;

		// place-items: center;
		.row {
			border-radius: 25%;
			width: 90px;
			@include flex-center;
			flex-direction: column;

			strong {
				color: rgb(110, 107, 109);
			}

			cursor: pointer;
		}

		.cat {
			border-radius: 20px;
			width: 90px;
			@include flex-center;
			flex-direction: column;

			strong {
				color: rgb(110, 107, 109);
			}

			cursor: pointer;
		}

		.more {
			border-radius: 20px;
			width: 90px;
			@include flex-center;
			flex-direction: column;

			strong {
				color: rgb(110, 107, 109);
			}

			cursor: pointer;
		}
	}
</style>
