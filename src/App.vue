<template>
  <HelloWorld msg="Vite + Vue" />
  <div class="left coopen"></div>
  <div class="right coopen"></div>
  <div class="radio">
    <div class="li" v-for="item in 51"></div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

// 当页面加载结束，触发load
let left = ref(50 + "vw");
let right = ref(50 + "vw");
window.addEventListener("load", (e) => {
  console.log("Loaded!", e);
  left.value = 0 + "vw";
  right.value = 0 + "vw";
});
</script>

<style scoped>
.coopen {
  background-color: black;
  top: 0;
  position: absolute;
}
.left {
  left: 0;
  height: 100vh;
  width: v-bind(left);
  transition: 2s;
}
.right {
  right: 0;
  height: 100vh;
  width: v-bind(right);
  transition: 2s;
}
.radio {
  height: 160px;
  width: 160px;
  border-radius: 50%;
  overflow: hidden;
  background: rgb(31, 31, 31);
  position: absolute;
  top: 100px;
  left: 430px;
  animation: move 5s linear infinite;
}
@keyframes move {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
.li {
  width: 100%;
  height: 2px;
  background: rgb(255, 255, 255);
  margin-top: 10px;
}
</style>
