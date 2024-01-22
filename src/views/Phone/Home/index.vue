<template>
  <div class='phone-container'>
    <div class="weather">
      <Weather/>
    </div>
    <main class="main-menu">
      <div class="item" v-for="(item,index) in menu" :key="index">
        <i class="iconfont" :class="item.icon"></i>
        <span>{{ item.title }}</span>
      </div>
    </main>
    <div class="bottom">
      <div class="menu">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted, reactive} from 'vue';
import Weather from '@/components/Weather/index.vue';

const menu = ref([{title: '音乐', icon: 'icon-music'}, {title: '音乐', icon: 'icon-music'}, {title: '首页', icon: 'icon-music'}, {title: '首页', icon: 'icon-music'}, {title: '首页', icon: 'icon-music'}])
onMounted(() => {
})
</script>

<style scoped lang='less'>
.phone-container {
  //background-image: url('https://wallpaperaccess.com/full/1236301.jpg');
  background-image: url('https://mp-cd880b8b-a556-4424-ba3e-77537732bc82.cdn.bspapp.com/微信图片_20240122172226.jpg');
  //background-image: url('https://img.zcool.cn/community/01fcee5ab47f5ea801218207dea2c9.jpg?x-oss-process=image/format,webp');
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  object-fit: cover;
  background-size: cover;
  padding: 0 20px;
  position: relative;
  background-position: center;

  .main-menu {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    flex-wrap: wrap;

    .item {
      display: flex;
      flex-basis: 24%;
      flex-direction: column;
      align-items: center;
      cursor: pointer;
      margin-bottom: 10px;

      span {
        color: white;
        font-size: 14px;
      }

      .iconfont {
        background-color: #3195fd;
        border-radius: 10px;
        width: 60px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        color: #ffffff;
        font-size: 40px;
      }
    }
  }

  .weather {
    height: 17%;
    margin-top: 80px;
  }

  .bottom {
    position: absolute;
    bottom: 20px;
    width: 100%;
    left: 0;
    padding: 0 20px;

    .menu {
      background-color: rgba(255, 255, 255, 0.4);
      width: 100%;
      height: 80px;
      border-radius: 30px;
    }
  }
}
</style>
