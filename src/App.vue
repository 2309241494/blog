<template>
	<layout />
	<div class="left coopen"></div>
	<div class="right coopen"></div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import layout from "/src/views/Layout.vue";
// 当页面加载结束，触发load
let left = ref(50 + "vw");
let right = ref(50 + "vw");
window.addEventListener("load", (e) => {
	left.value = 0 + "vw";
	right.value = 0 + "vw";
});
</script>

<style scoped>
.coopen {
	background-color: rgb(31, 31, 31);
	top: 0;
	position: absolute;
	z-index: 999;
}

.left {
	left: 0;
	height: 100vh;
	width: v-bind(left);
	transition: 1s;
}

.right {
	right: 0;
	height: 100vh;
	width: v-bind(right);
	transition: 1s;
}

.radio {
	height: 160px;
	width: 160px;
	border-radius: 50%;
	overflow: hidden;
	background: #0c0c0c;
	position: absolute;
	top: 100px;
	left: 430px;
	z-index: 0;
	animation: move 8s linear infinite;
}

@keyframes move {
	0% {
		transform: rotate(0);
	}

	100% {
		transform: rotate(360deg);
	}
}
</style>
