<template>
	<view class="sportStyle">
		<text class="label">活动时间：</text>

		<view class="field time-field">
			<!-- 时间：XX:XX-->
			<picker mode="time" :value="time" @change="onTimeChange">
				<view class="unit">
					<text class="value" style="font-size: 0.7rem;">{{ time }}</text>
					<uni-icons type="arrow-down" size="14" color="#999"></uni-icons>
				</view>
			</picker>
		</view>
	</view>
</template>

<script setup lang="ts">
	import {
		ref
	} from "vue"
	// const time = ref("12:00");

	const props = defineProps({
		time: {
			type: String,
			default: "12:00"
		}
	})

	const emits = defineEmits<{ (e : "update:time", data : { time : string }) : void }>()

	// 选择日期后触发
	function onTimeChange(e:any) {
		emits("update:time",e.detail.value);
	}

	/* 写法  			 冒号后面	展开结果
	   v-model:time="x"	 time		:time="x" + @update:time="x = $event"
	*/
</script>

<style scoped lang="scss">
	@import "@/style/common.scss";

	.sportStyle {
		@include form-row;
		box-shadow: 0 4px 12px rgba(0, 0, 0, .08);

		.time-field {
			display: flex;
			align-items: center;
			gap: .8rem;
		}

		.unit {
			display: flex;
			align-items: center;
			gap: .3rem;
			padding: .3rem .6rem;
			border: 1px solid #e5e5e5;
			border-radius: 8px;
			white-space: nowrap;
			cursor: pointer;
		}

		.value {
			color: #333;
			font-size: .9rem;
			cursor: pointer;
		}
	}
</style>
