<template>
  <div class="Home-container container">
    <!-- 左边区域 -->
    <div class="left">
      <Sidebar />
    </div>
    <!-- 可视化主区域 -->
    <Visualization v-show="changeModule === 0" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive, computed } from "vue";
import Sidebar from "../components/Sidebar.vue";
import Title from "../components/Title.vue";
import Visualization from "../components/Visualization.vue";
import { useMain } from "../store";
// 传递给菜单组件的菜单项
const menuArr = [
  {
    icon: "icon-guanyuwo",
    title: "ABOUT",
    mainTitle: "ME",
    path: "/vite-blog/about",
    color: "#fa709a",
  },
  {
    icon: "icon-xiangmu",
    title: "MY",
    mainTitle: "PROJECT",
    path: "/vite-blog/project",
    color: "#43e97b",
  },
  {
    icon: "icon-xiangce",
    title: "MY",
    mainTitle: "PHOTO",
    path: "/vite-blog/photo",
    color: "#01f8e4",
  },
  {
    icon: "icon-zujianhua",
    title: "MY",
    mainTitle: "NOTES",
    path: "/vite-blog/blog",
    color: "#6991c7",
  },
];
// 打字机效果
const textArr = ["Web Developer"];
const mainStore = useMain();
const changeModule = computed(() => mainStore.getChangeModule);

const typingSpeed = 200;
const landingSpeed = 50;

const currentIndex = ref(0);
const currentDisplayIndex = ref(0);

const updateTextDisplay = () => {
  if (currentDisplayIndex.value < textArr[currentIndex.value].length) {
    currentDisplayIndex.value += 1;
  } else {
    setTimeout(() => {
      currentIndex.value = (currentIndex.value + 1) % textArr.length;
      currentDisplayIndex.value = 0;
    }, landingSpeed);
  }
};

setInterval(updateTextDisplay, typingSpeed);

const currentText = computed(() => {
  return textArr[currentIndex.value].slice(0, currentDisplayIndex.value);
});
</script>

<style scoped lang="less">
.Home-container {
  border-radius: 15px 0px 0px 15px;

  .left {
    flex: 0 0 5%;
  }

  .main {
    flex: 1;

    &::-webkit-scrollbar {
      width: 0;
      /* 滚动条宽度 */
    }

    .title {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 5rem 3rem 0 3rem;

      .typewriter {
        margin-top: 2.5rem;
        font-size: 1.5rem;
        font-style: italic;

        span {
          &:last-child {
            color: aqua;
          }
        }
      }
    }
  }
}
</style>
