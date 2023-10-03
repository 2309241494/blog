
<template>
	<div class='App-container'>
		<div class="main-container">
			<div class="left-container">
				<router-view v-slot="{ Component }">
					<transition name="slide-fade" mode="out-in">
						<keep-alive>
							<component :is="Component" />
						</keep-alive>
					</transition>
				</router-view>
			</div>
			<div class="right-container">
				<keep-alive>
					<MiniComponents />
				</keep-alive>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive, watch, computed } from 'vue';
import MiniComponents from "./views/MiniComponent.vue"
import router from './router';
</script>

<style scoped lang='less'>
.App-container {
	width: 100vw;
	height: 100vh;
	color: aliceblue;
	justify-content: center;
	align-items: center;
	display: flex;
	animation: start 0.5s ease-in-out;

	.main-container {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 90%;
		height: 90%;

		.left-container {
			flex: 1;
			height: 100%;
		}

		.right-container {
			background-color: #363b5f;
			flex: 0 0 25%;
			height: 100%;
		}
	}

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