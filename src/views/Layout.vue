<template>
  <div class="layout-container">
    <div class="layout-top">
      <Left />
    </div>
    <div class="layout-bottom">
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
  // color: #b0b0b0;
  text-align: left;
  font-size: 20px;
  flex-direction: column;
  overflow-x: hidden;

  .layout-top {
    background-color: #ffffff;
    position: fixed;
    width: 100%;
    border-top: 2px solid black;
    border-bottom: 7px solid black;
  }

  .layout-bottom {
    margin: 200px 100px 0 100px;
  }
}

::-webkit-scrollbar {
  width: 0px;
  scrollbar-width: none
}
</style>
