<template>
  <div class="miniComponents-container">
    <div class="header">
      <div class="left">
        <span>{{ hourTime }}</span>
      </div>
      <div class="right">
        <i
            class="iconfont"
            :class="[isOnline ? 'icon-wifi' : 'icon-wifi-off']"
        ></i>
        <i class="iconfont icon-battery"> </i>
        <span>{{ electricquantity }}</span>
      </div>
    </div>
    <Login v-show="isLogin" @login="handleLogin"/>
    <transition name="fade">
      <Home v-show="!isLogin"/>
    </transition>
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted, Ref} from "vue";
import {hour} from "@/utils/util";
import {ElMessage} from "element-plus";
import Login from "./Login/index.vue";
import Home from "@/views/Phone/Home/index.vue";

let isLogin: Ref<boolean> = ref(false)

const handleLogin = (status: boolean) => {
  isLogin.value = status
}
const isOnline = navigator.onLine;
let electricquantity = ref("");
let hourTime = ref();
hourTime.value = hour().slice(13, 19);
setInterval(() => {
  hourTime.value = hour().slice(13, 19);
}, 1000);
onMounted(() => {
  const navigators: any = navigator;
  if (navigators.getBattery) {
    navigators.getBattery().then(function (battery: any) {
      electricquantity.value = battery.level * 100 + "%";
    });
  } else {
    ElMessage({
      message: "你的浏览器不支持获取电脑电量",
      type: "warning",
    });
  }
});
</script>

<style scoped lang="less">
.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-enter {
  opacity: 0;
}

.miniComponents-container {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  padding: 27px 30px;
  overflow: hidden;
  position: relative;

  .header {
    position: absolute;
    top: 25px;
    height: 37px;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.5rem;
    z-index: 99;
    padding: 20px 10px 20px 20px;
    opacity: 0.8;

    .left {
      margin-left: 1px;
      font-size: 0.8rem;
    }

    .right {
      display: flex;
      align-items: center;

      .iconfont {
        margin-right: 5px;

        span {
          font-size: 0.5px;
        }
      }
    }
  }

  &::after {
    position: absolute;
    content: "";
    background-image: url("/src/assets/images/phone.png");
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    top: 0;
    z-index: 999;
    pointer-events: none;
  }

  &::-webkit-scrollbar {
    width: 0;
    /* 滚动条宽度 */
  }
}
</style>
