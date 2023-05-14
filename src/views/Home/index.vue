<template></template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue';




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