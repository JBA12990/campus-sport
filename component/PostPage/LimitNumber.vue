<template>
	<view class="LimitNumber">
		<text class="label">人数限制：</text>
		<!-- <input type="text" class="field input" placeholder="给你的活动起个名字" /> -->
		<view class="number">
			<uni-icons type="minus" size="25" :color="canReduce ? '#333' : '#999'" style="cursor: pointer;"
				@click="reduceNum" />
			<text class="text">{{num}}</text>
			<uni-icons type="plusempty" size="25" :color="canAdd ? '#333' : '#999'"style="cursor: pointer;" @click="addNum" />
			<text>人</text>
		</view>
	</view>
</template>

<script setup>
	import {
		ref,computed
	} from "vue"
	const num = ref(0);
	// 当num.value > 0 返回true
	const canReduce = computed(() => num.value > 0 ) ;
	const canAdd = computed(() => num.value < 20 ) ;

	function addNum() {
		if(num.value < 20){
			num.value++;
		}
	}

	function reduceNum() {
		if (num.value > 0) {
			num.value--;
		}
	}
</script>

<style scoped lang="scss">
	@import "@/style/common.scss";

	.LimitNumber {
		@include form-row;
		box-shadow: 0 4px 12px rgba(0, 0, 0, .08);

		.number {
			@include flex-center;
			gap: 0.5rem;

			text {
				font-size: 1.3rem;
			}

			.text {
				margin: 0 2.5rem;
			}
		}

		// .input {
		// 	font-size: .9rem;
		// 	height: 100%;
		// 	color: #333;
		// }
	}
</style>
