<template>
	<image class="icon-svg" :src="src" mode="aspectFit" :style="{ width: size + 'px', height: size + 'px' }" />
</template>

<script setup lang="ts">
	import {
		computed
	} from 'vue';
	const svgMap = {
		run: "/static/icons-svg/01-run.svg",
		edit: "/static/icons-svg/02-edit.svg",
		userAdd: "/static/icons-svg/03-user-add.svg",
		chat: "/static/icons-svg/04-chat.svg",
		shield: "/static/icons-svg/05-shield-check-purple.svg",
		pin: "/static/icons-svg/06-pin-outline.svg",
		pinGreen: "/static/icons-svg/07-pin-green.svg",
		search: "/static/icons-svg/08-search.svg",
		home: "/static/icons-svg/09-home.svg",
		list: "/static/icons-svg/10-list.svg",
		add: "/static/icons-svg/11-plus-circle.svg",
		bell: "/static/icons-svg/12-bell-grey.svg",
		chatAdd: "/static/icons-svg/15-chat-add.svg",
		imageCamera: "/static/icons-svg/16-image-camera.svg",
		imageAdd: "/static/icons-svg/17-image-add.svg",
		bellGreen: "/static/icons-svg/18-bell-green.svg",
		shieldGreen: "/static/icons-svg/19-shield-check-green.svg",
		shoe: "/static/icons-svg/20-shoe.svg",
		basketball: "/static/icons-svg/21-basketball.svg",
		badminton: "/static/icons-svg/22-badminton.svg",
		film: "/static/icons-svg/23-film.svg",
		dumbbell: "/static/icons-svg/24-dumbbell.svg",
		lock: "/static/icons-svg/25-lock.svg",
		heart: "/static/icons-svg/27-heart.svg",
		server: "/static/icons-svg/28-server-grey.svg",
		serverGreen: "/static/icons-svg/29-server-green.svg",
		message: "/static/icons-svg/30-chat-dots.svg",
		all: "/static/icons-svg/31-all.svg",
		more: "/static/icons-svg/32-more.svg",
		collapse: "/static/icons-svg/33-collapse.svg",
		tennis: "/static/icons-svg/34-tennis.svg",
		volleyball: "/static/icons-svg/35-volleyball.svg",
		pingpong: "/static/icons-svg/36-pingpong.svg",
		skateboard: "/static/icons-svg/37-skateboard.svg",
		football: "/static/icons-svg/38-football.svg",
		swim: "/static/icons-svg/39-swim.svg",
		cycling: "/static/icons-svg/40-cycling.svg",
		yoga: "/static/icons-svg/41-yoga.svg",
	}
	const props = defineProps({
		type: {
			type: String,
			required: true,
		},
		size: {
			type: Number,
			default: 16,
		},
	})

	const src = computed(() => svgMap[props.type as keyof typeof svgMap])
</script>


<style>
	.icon-svg {
		display: block;
	}
</style>
