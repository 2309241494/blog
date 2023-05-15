
<template>
	<div class='App-container'>
		<router-view v-slot="{ Component }">
			<transition name="slide-fade" mode="out-in">
				<keep-alive>
					<component :is="Component" />
				</keep-alive>
			</transition>
		</router-view>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive, watch, computed } from 'vue';

</script>

<style scoped lang='less'>
.App-container {
	width: 100vw;
	height: 100vh;
	color: aliceblue;
	display: flex;
	justify-content: center;
	align-items: center;
	animation: start 0.5s ease-in-out;
}

.slide-fade-enter-active {
	transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
	transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
	transform: translateY(40px);
	opacity: 0;
}


@keyframes start {
	from {
		opacity: 0;
		transform: scale(0.8);
	}

	to {
		opacity: 1;
		transform: scale(1);
	}
}
</style>