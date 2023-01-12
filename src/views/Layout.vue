<template>
  <div class="layout-container">
    <div class="layout-left">
      <Avatar
        class="avatar-hover"
        src="https://up2client.com/template/Murillo/main-file/assets/images/news/news-image-one.png"
      />
      <div class="name">NAME</div>
      <router-link to="/" class="hr"
        ><i
          class="iconfont icon-shouye"
          :class="{ active: herf === '/' ? true : false }"
        ></i
        >主页</router-link
      >
      <router-link to="/photo" class="hr"
        ><i
          class="iconfont icon-xiangce"
          :class="{ active: herf === '/photo' ? true : false }"
        ></i
        >相册</router-link
      >
      <router-link to="/article" class="hr"
        ><i
          class="iconfont icon-16"
          :class="{ active: herf === '/article' ? true : false }"
        ></i
        >文章</router-link
      >
      <router-link to="/about" class="hr"
        ><i
          class="iconfont icon-guanyuwo"
          :class="{ active: herf === '/about' ? true : false }"
        ></i
        >关于我</router-link
      >
      <router-link to="/message" class="hr"
        ><i
          class="iconfont icon-jurassic_message"
          :class="{ active: herf === '/message' ? true : false }"
        ></i
        >留言板</router-link
      >
      <router-link to="/project" class="hr"
        ><i
          class="iconfont icon-xiangmu"
          :class="{ active: herf === '/project' ? true : false }"
        ></i
        >项目&效果</router-link
      >
    </div>
    <div class="layout-right">
      <router-view></router-view>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Avatar from "/src/components/Avatar/index.vue";
import { ref, watch } from "vue";
import router from "../router/index";

// 监听路由变化
let herf = ref();
watch(
  () => router.currentRoute.value.path,
  (newValue) => {
    herf.value = newValue;
  },
  { immediate: true }
);
</script>
<style scoped lang="less">
.layout-container {
  display: flex;
  width: 100vw;
  height: 100vh;
  color: #b0b0b0;
  font-weight: bold;
  text-align: left;
  font-size: 20px;
  .layout-left {
    background-color: rgb(0, 0, 0);
    flex: 0 0 350px;
    padding: 5px 55px;
    .name {
      color: #00d061;
      font-size: 35px;
      margin-bottom: 30px;
    }
    .hr {
      border-bottom: 1px solid #2a2a2a;
      padding: 10px 10px;
      margin: 17px 0;
      display: block;
      transition: 0.5s;
      height: 50px;
      .iconfont {
        font-size: 20px;
        padding-right: 15px;
        transition: 0.5s;
      }
      .active {
        font-size: 25px;
        color: #00d061;
      }
    }
    .hr:hover {
      color: #00d061;
      font-size: 23px;
    }

    .hr:hover .iconfont {
      color: #00d061;
      font-size: 25px;
    }
  }
  .layout-right {
    flex: 1 0 auto;
  }
}
</style>
