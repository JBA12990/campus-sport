<template>
	<view class="sportStyle">
		<text class="label">标题内容：</text>
		<input type="text" class="field input" placeholder="给你的活动起个名字" @input="onInput" />
	</view>
</template>

<script setup lang="ts">
	import { ref } from "vue"
	// const Title = ref("");
	const props = defineProps({
		modelValue: {
			type: String,
			default: ""
		}
	})
	const emits = defineEmits<{ (e : "update:modelValue", value : string) : void }>()

	function onInput(e : any) {
		emits("update:modelValue", e.detail.value)
		// console.log(e.detail.value)
	}
</script>

<style scoped lang="scss">
	@import "@/style/common.scss";

	.sportStyle {
		@include form-row;
		box-shadow: 0 4px 12px rgba(0, 0, 0, .08);

		.input {
			font-size: .9rem;
			height: 100%;
			color: #333;
		}
	}
</style>
