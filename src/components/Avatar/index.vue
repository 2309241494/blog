<template>
  <div class="Avatar-container" ref="avatar">
    <img :src="src" alt="" :style="{ height: height + 'px', width: width + 'px', borderRadius: raduis + '%' }" />
  </div>
</template>

<script lang="ts" setup>
interface Props {
  width?: string;
  height?: string;
  raduis?: string;
  src: string;
}

const props = withDefaults(defineProps<Props>(), {
  width: "250",
  height: "250",
  raduis: "10"
});

</script>
<style lang="less" scoped>
.Avatar-container {
  margin: 20px auto;
  transform-origin: center;
  transition: 0.5s;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  img {
    height: 100%;
    width: 100%;
    -webkit-filter: grayscale(0%);
    filter: grayscale(0%);
    transition: all 1s;

    &:hover {
      -webkit-filter: grayscale(100%);
      filter: grayscale(100%);
    }
  }
}
</style>
