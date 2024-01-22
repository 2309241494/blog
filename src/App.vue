<template>
  <div class="App-container">
    <div class="main-container">
      <div class="left-container">
        <router-view v-slot="{ Component }">
          <transition name="slide-fade" mode="out-in">
            <keep-alive>
              <component :is="Component"/>
            </keep-alive>
          </transition>
        </router-view>
        <Menu/>
      </div>
      <div class="right-container">
        <keep-alive>
          <Phone/>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Phone from "@/views/Phone/index.vue";
import Menu from "@/components/Menu/index.vue";
</script>

<style scoped lang="less">
:deep(.el-loading-mask) {
  z-index: 900;
}
:deep(.el-loading-spinner .path){
  stroke: #363b5f;
}
/* 隐藏滚动条 */

.App-container {
  width: 100vw;
  height: 100vh;
  color: aliceblue;
  align-items: center;
  display: flex;
  animation: start 0.5s ease-in-out;
  position: relative;

  .main-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 95%;
    height: 93%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    .left-container {
      position: relative;
      flex: 1;
      height: 100%;
    }

    .right-container {
      background-color: #363b5f;
      flex: 0 0 25%;
      height: 100%;
      border-radius: 0 15px 15px 0;
      padding: 10px;
    }
  }
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
}

@keyframes start {
  from {
    opacity: 0;
    transform: scale(0.8);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
