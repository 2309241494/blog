<template>
  <div class="home-container">
    <div class="main">
      <Avatar
        class="avatar"
        src="https://w.wallhaven.cc/full/zy/wallhaven-zygeko.jpg"
        :height="463"
        :width="900"
      />
      <Title title="Home" />
    </div>
    <div class="title">
      <img
        class="animate__animated animate__backInLeft"
        src="/src/assets/img1673435911551.png
      "
        alt=""
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import Title from "/src/components/Title/index.vue";
import Avatar from "/src/components/Avatar/index.vue";
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
  .main {
  }
  .avatar:hover {
    transform: scale(1.1);
  }
}
.title {
  width: 587px;
  font-size: 50px;
  position: absolute;
  left: 50%;
  top: 90%;
  transform: translate(-50%, -50%);
}
</style>
