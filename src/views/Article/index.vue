<template>
    <div class="slider">
        <div class="slider-content" :style="{ transform: `translateX(-${currentSlideIndex.value * 100}%)` }">
            <img v-for="(slide, index) in slides" :key="index" :src="slide">
        </div>
        <div class="slider-dots">
            <span v-for="(slide, index) in slides" :key="index" class="dot"
                :class="{ active: currentSlideIndex.value === index }" @click="changeSlide(index)"></span>
        </div>
    </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
    name: 'Slider',
    props: {
        autoplay: Boolean,
        interval: {
            type: Number,
            default: 3000,
        },
        images: {
            type: Array,
            required: true,
        },
    },
    setup(props) {
        const currentSlideIndex = ref(0);
        const slides = ref(props.images);

        const changeSlide = (index) => (currentSlideIndex.value = index);

        const nextSlide = () => {
            const nextIndex = currentSlideIndex.value + 1;
            currentSlideIndex.value = nextIndex >= slides.value.length ? 0 : nextIndex;
        };

        let intervalId = null;
        const startAutoplay = () => {
            if (props.autoplay) {
                intervalId = setInterval(nextSlide, props.interval);
            }
        };
        const stopAutoplay = () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };

        onMounted(startAutoplay);
        onUnmounted(stopAutoplay);

        return {
            currentSlideIndex,
            slides,
            changeSlide,
        };
    },
};
</script>

<style scoped>
.slider {
    position: relative;
    overflow: hidden;
}

.slider-content {
    display: flex;
    transition: transform 0.3s ease-in-out;
}

.slider-dots {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
}

.dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin: 0 5px;
    background-color: #ccc;
    display: inline-block;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
}

.dot.active {
    background-color: #333;
}

img {
    max-width: 100%;
    height: auto;
}
</style>