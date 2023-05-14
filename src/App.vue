<template>
	<layout />
</template>

<script setup lang="ts">
import { ref } from "vue";
import layout from "/src/views/Layout.vue";

</script>

<style scoped>
.coopen {
	background-color: rgb(31, 31, 31);
	top: 0;
	position: absolute;
	z-index: 999;
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
