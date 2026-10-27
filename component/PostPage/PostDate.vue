<template>
	<view class="sportStyle">
		<text class="label">活动日期：</text>

		<view class="field time-field">
			<!-- 日期：年月日 + 星期 -->
			<picker mode="date" :value="date" @change="onDateChange" :start="startDate" :end="endDate">
				<view class="unit">
					<text class="value" style="font-size: 0.7rem;">{{ date }}</text>
					<uni-icons type="arrow-down" size="14" color="#999"></uni-icons>
				</view>
			</picker>
		</view>
	</view>
</template>

<script setup lang="ts">
	import {
		ref,
		computed
	} from "vue"

	// const WEEK = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"]
	const date = ref(getToday());
	const startDate = ref(getToday());
	const endDate = ref(getEndDay())

	// 获取今天的日期，格式为 YYYY-MM-DD
	function getToday() {
		const now = new Date()
		const year = now.getFullYear()
		const month = String(now.getMonth() + 1).padStart(2, '0')
		const day = String(now.getDate()).padStart(2, '0')

		return `${year}-${month}-${day}`
	}

	function getEndDay() {
		const now = new Date();
		const end = new Date(
			now.getFullYear(),
			now.getMonth() + 1,
			now.getDate()
		)

		// 处理目标月份没有当天日期的情况
		if (end.getDate() !== now.getDate()) {
			end.setDate(0)
		}
		const year = end.getFullYear()
		const month = String(end.getMonth() + 1).padStart(2, '0')
		const day = String(end.getDate()).padStart(2, '0')
		return `${year}-${month}-${day}`
	}

	// 选择日期后触发
	function onDateChange(e : any) {
		date.value = e.detail.value
		// console.log('选择的日期：', date.value)
		emits("update:date", e.detail.value)
	}

	const props = defineProps({
		date: {
			type: String,
			default: "12:00"
		}
	})

	const emits = defineEmits<{ (e : "update:date", data : { modeldate : string }) : void }>()
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
