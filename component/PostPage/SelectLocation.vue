<template>
	<view class="locationStyle">
		<text class="label">地点：</text>

		<picker class="field" mode="selector" :value="LocationIndex" :range="locations" range-key="label"
			@change="onLocationChange">
			<view class="picker-inner">
				<text class="text">{{ LocationIndex >= 0 ? locations[LocationIndex].label : "请选择你要进行运动的场所" }}</text>
				<uni-icons v-show="LocationIndex < 0" type="arrow-down" size="20" color="#999"></uni-icons>
			</view>
		</picker>
	</view>
</template>

<script setup lang="ts">
	import {
		ref,watch
	} from "vue"

	const props = defineProps({
		locations: {
			type: Array,
			default: () => [],
		},
	})

	const emits = defineEmits < {
		(e: "change", data: {
			location: string
		}): void
	} > ()

	const LocationIndex = ref(-1)
	// 检测响应式,一旦发生变化说明换了运动,清空已选场地
	watch(() => props.locations, () => {
		LocationIndex.value = -1
		emits("change", {
			location: ""
		})
	})

	function onLocationChange(e) {
		LocationIndex.value = e.detail.value
		// 上传地址
		emits("change", {
			location: props.locations[LocationIndex.value].value
		})
	}
</script>

<style scoped lang="scss">
	@import "@/style/common.scss";

	.locationStyle {
		width: 100%;
		@include form-row;
		box-shadow: 0 4px 12px rgba(0, 0, 0, .08);

		.picker-inner {
			display: flex;
			align-items: center;
			justify-content: space-between; // 文字靠左，箭头靠右
			width: 100%;
		}

		.text {
			color: #999;
			font-size: .9rem;
		}
	}
</style>
