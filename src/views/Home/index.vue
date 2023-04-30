<template>
  <div class="carousel">
    <div :style="{ left: offset }">
      <img src="https://picsum.photos/id/132/800/400" alt="Image 1" />
    </div>
    <div :style="{ left: offset }">
      <img src="https://picsum.photos/id/133/800/400" alt="Image 2" />
    </div>
    <div :style="{ left: offset }">
      <img src="https://picsum.photos/id/134/800/400" alt="Image 3" />
    </div>
    <button class="prev" @click="prev">
    </button>
    <button class="next" @click="next">></button>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const itemCount = 3;
const itemWidth = 800;
const offset = ref(0);
const currentItem = ref(0);

function prev() {
  currentItem.value = (currentItem.value - 1 + itemCount) % itemCount;
}

function next() {
  currentItem.value = (currentItem.value + 1) % itemCount;
}

const computedOffset = computed(() => {
  return -currentItem.value * itemWidth + 'px';
});

onMounted(() => {
  offset.value = computedOffset.value;
});

</script>

<style scoped>
.carousel {
  position: relative;
  width: 800px;
  height: 400px;
  overflow: hidden;
}

.carousel div {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.carousel img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  outline: none;
  cursor: pointer;
}

.carousel button.prev {
  left: 0;
}

.carousel button.next {
  right: 0;
}
</style>