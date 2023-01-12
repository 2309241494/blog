<template>
  <div class="Avatar-container" ref="avatar">
    <img
      :src="src"
      alt=""
      :style="{ height: height + 'px', width: width + 'px' }"
    />
  </div>
</template>

<script lang="ts" setup>
interface Props {
  width?: string | number;
  height?: string | number;
  src: string;
}

const props = withDefaults(defineProps<Props>(), {
  width: "250",
  height: "250",
});
</script>
<style lang="less" scoped>
.Avatar-container {
  margin: 20px auto;
  transform-origin: center;
  transition: 0.5s;
  position: relative;
  overflow: hidden;
  border-radius: 5%;
  cursor: pointer;
  img {
    height: 100%;
    width: 100%;
  }
}
</style>
