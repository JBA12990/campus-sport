<template>
	<view class="sportStyle">
		<text class="label">运动类型: </text>

		<picker class="field" mode="selector" :value="sportIndex" :range="sports" range-key="label"
			@change="onSportChange">
			<view class="picker-inner">
				<text class="text">{{ sportIndex >= 0 ? sports[sportIndex].label : "请选择你要进行的运动类型" }}</text>
				<uni-icons v-show="sportIndex < 0" type="arrow-down" size="20" color="#999"></uni-icons>
			</view>
		</picker>
	</view>
</template>

<script setup lang="ts">
	import {
		ref
	} from "vue"

	const props = defineProps({
		sports: {
			type: Array,
			default: () => [],
		},
	})

	const emits = defineEmits<{ (e : "submit", data : { sport : string }):void }>()

	const sportIndex = ref(-1); // -1 = 还没选

	function onSportChange(e : any) {
		sportIndex.value = e.detail.value
		emits("submit",{ sport: props.sports[sportIndex.value].value })
	}
</script>

<style scoped lang="scss">
	@import "@/style/common.scss";

	.sportStyle {
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
