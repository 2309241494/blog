<template>
  <div class="home-container">
    <div class="main">
      <Title title="Home" />
      <h1>你好啊</h1>

    </div>
  </div>
</template>
<script lang="ts" setup>
import Title from "/src/components/Title/index.vue";
</script>
<style lang="less" scoped>
.home-container {
  width: 100%;
  height: 100%;
  display: grid;
  align-content: center;
  justify-content: center;
  position: relative;
  z-index: 8;
}
</style>
