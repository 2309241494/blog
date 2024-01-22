<template>
  <transition name="scale">
    <div class='Detail-container' v-show="show">
      <div class="main ">
        <i class="iconfont icon-cuowu" @click="changeShow"></i>
        <el-image class="cover" :preview-teleported="true" :preview-src-list="[props.arr.imgUrl]" fit="cover" :src=props.arr.imgUrl alt=""/>
        <Subhead :title=props.arr.title bg-color="#5856e5"/>
        <div class="text-container">
          <p>{{ props.arr.introduce }}</p>
        </div>
        <div class="button-container">
          <a class="button" target="_blank" :href=props.arr.online>
            <i class="iconfont icon-tubiaoji2_zhixiang"></i>
            <p>{{ props.arr.online ? "在线预览" : "暂未部署到服务器" }}</p>
          </a>
          <a class="button" target="_blank" :href=props.arr.soundCode>
            <i class="iconfont icon-tubiaoji2_zhixiang"></i>
            <p>源码地址</p>
          </a>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import {ref, onMounted, reactive} from 'vue';
import Subhead from '@/components/Subhead/index.vue';

interface Props {
  show: boolean;
  arr: any
}

const props = withDefaults(defineProps<Props>(), {
  show: false,
})

// 触发父组件传递过来的自定义函数
const emit = defineEmits(["showChange"])
const changeShow = () => {
  emit("showChange", false);
}
</script>

<style scoped lang='less'>
.scale-enter-active,
.scale-leave-active {
  transition: opacity 0.3s;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
}

.scale-enter-to,
.scale-leave-from {
  opacity: 1;
}

.Detail-container {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  z-index: 9999;


}

.main {
  position: absolute;
  height: 800px;
  overflow: auto;
  left: 50%;
  top: 50%;
  padding: 50px;
  transform: translate(-50%, -50%);
  background: linear-gradient(to right top,
  rgb(15, 12, 41),
  rgb(48, 43, 99),
  rgb(36, 36, 62));
  border-radius: 5px;

  &::-webkit-scrollbar {
    width: 0;
  }

  .icon-cuowu {
    position: absolute;
    font-size: 40px;
    right: 10px;
    top: 10px;
    cursor: pointer;
    color: #9baacf;
    transition: color .5s;

    &:hover {
      color: whitesmoke;
    }
  }

  .cover {
    width: 100%;
    height: 500px;
    border-radius: 5px;
  }

  .button-container {
    margin-top: 2rem;
    display: flex;

    .button {
      padding: 1rem;
      background-color: #2c3051;
      border-radius: 5px;
      margin-right: 1rem;
      cursor: pointer;
      display: flex;

      .iconfont {
        color: aqua;
        display: block;
        font-size: 2rem;
        margin-right: .5rem;
        transition: all 1s;
      }

      p {
        display: block;
        transition: all .5s;
      }

      &:hover .iconfont {
        transform: translateX(5rem);
      }

      &:hover p {
        opacity: 0;
      }
    }
  }

  .text-container {
    font-size: 18px;

    p {
      color: #a1a1a3;
    }
  }
}
</style>
