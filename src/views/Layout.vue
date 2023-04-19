<template>
  <div class="layout-container">
    <div class="layout-left">
      <Left />
    </div>
    <div class="layout-right">
      <router-view></router-view>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Left from "./Left.vue"
</script>
<style scoped lang="less">
.layout-container {
  display: flex;
  width: 100vw;
  height: 100vh;
  color: #b0b0b0;
  text-align: left;
  font-size: 20px;

  .layout-left {
    background-color: #0e0b11;
    flex: 0 0 350px;
    padding: 5px 55px;
  }

  .layout-right {
    flex: 1 0 auto;
    overflow-y: auto;
  }
}
</style>
