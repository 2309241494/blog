<template>
  <div class="title-container">
    <h1 class="big-title title">
      {{ props.title }}
    </h1>
  </div>
</template>

<script lang="ts" setup>
interface type {
  title: string;
}
const props = defineProps<type>();
</script>
<style lang="less" scoped>
.title-container {
  height: 100px;
  position: relative;
  .big-title {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: #0c0c0c;
    font-size: 70px;
    font-weight: 900;
    width: auto;
    -webkit-text-stroke: 1px#2e2e2e;
    text-shadow: 2px 2px 3px #000;
  }
}
</style>
