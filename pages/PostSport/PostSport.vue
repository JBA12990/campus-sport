<template>
	<view class="post-container">
		<Select :sports="sports" @submit="onSportChange"></Select>
		<PostTitle v-model="form.title"/>
		<PostDate v-model:date="form.date"/>
		<PostTime v-model:time="form.time"/>
		<SelectLocation :locations="avalibleLocation" @change="onLocationChange" />
		<LimitNumber />
		<!-- <text style="color: red; font-size: 1rem;">form.date = {{ form.date }}</text> -->
		<!-- <button @click="test">click</button> -->
	</view>
</template>

<script setup>
	import {
		ref,
		reactive,
		computed
	} from "vue"
	import Select from "@/component/PostPage/Select.vue"
	import PostTitle from "@/component/PostPage/PostTitle.vue"
	import PostDate from "@/component/PostPage/PostDate.vue"
	import PostTime from "@/component/PostPage/PostTime.vue"
	import SelectLocation from "@/component/PostPage/SelectLocation.vue"
	import LimitNumber from "@/component/PostPage/LimitNumber.vue"

	const sports = ref([{
		value: "all",
		label: "请选择"
	}, {
		value: "running",
		label: "跑步"
	}, {
		value: "badminton",
		label: "羽毛球"
	}, {
		value: "basketball",
		label: "篮球"
	}, {
		value: "swim",
		label: "游泳"
	}, {
		value: "pingpong",
		label: "乒乓球",
	}, ]);

	const locations = ref([{
		sport: "running",
		value: "playground1",
		label: "大田径场",
	}, {
		sport: "running",
		value: "playground2",
		label: "小田径场",
	}, {
		sport: "volleyball",
		value: "volleyball",
		label: "排球场",
	}, {
		sport: "badminton",
		value: "badminton1",
		label: "30栋羽毛球场",
	}, {
		sport: "badminton",
		value: "badminton2",
		label: "图书馆12楼羽毛球场",
	}, {
		sport: "basketball",
		value: "basketball1",
		label: "1栋旁篮球场",
	}, {
		sport: "basketball",
		value: "basketball2",
		label: "26栋旁篮球场",
	}, {
		sport: "swim",
		value: "swim",
		label: "游泳池",
	}, {
		sport: "gym",
		value: "gym",
		label: "健身房",
	}, {
		sport: "pingpong",
		value: "pingpong",
		label: "图书馆11楼乒乓球室",
	}])

	const form = reactive({
		sport: "",
		title: "",
		date: "",
		time: "12:00",
		location: "",
		limit: ""
	})

	const avalibleLocation = computed(() => {
		if (!form.sport) return locations.value
		if (form.sport === "all") return locations.value
		return locations.value.filter((l) => l.sport === form.sport)
	})
	// 运动类型
	function onSportChange({
		sport
	}) {
		// console.table(sport)
		form.sport = sport;
		form.location = "";
		console.log(form.sport)
	}
	// 地点
	function onLocationChange({
		location
	}) {
		form.location = location;
		// console.log(form.location)
	}
	// function test(){
	// 	console.log(form)
	// }

	/*
	父组件写	                子组件 prop 必须叫	子组件 emit 必须叫
	v-model="x"	            modelValue	        update:modelValue
	v-model:title="x"	    title				update:title
	v-model:modelTitle="x"	modelTitle			update:modelTitle
	*/
</script>

<style scoped lang="scss">
	@import "@/style/common.scss";
</style>


