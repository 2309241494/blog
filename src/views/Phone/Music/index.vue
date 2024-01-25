<template>
  <div class="music-home" v-if="audioList && audioList.length > 0">
    <transition name="fade">
      <component :is="views[defaultView - 1].view" :key="views[defaultView - 1].value" @play="handleMusicPlay"></component>
    </transition>
    <div class="bottom">
      <i class="iconfont" v-for="(item,index) in navigationBar" :class="[item.icon,{'active':defaultView === item.value
      } ]" @click="handleChangeView(item.value)" :key="index"></i>
    </div>
    <div class="music-mini-player">
      <el-image :src="audioList[audioIndex].imgUrl" fit="cover"></el-image>
      <div class="song-information">
        <div class="left">
          <span class="song-name">{{ getSongInfo(audioList[audioIndex].name).name }}</span>
          <span class="song-singer">{{ getSongInfo(audioList[audioIndex].name).singer }}</span>
        </div>
        <div class="right">
          <i class="iconfont " @click="handlePlay" :class="[play ? 'icon-zanting' : 'icon-bofang']"></i>
        </div>
      </div>
    </div>
  </div>
  <MusicDetail/>
</template>

<script setup lang="ts">
import {ref, onMounted, watch, Ref} from 'vue';
import MusicDetail from "./Detail.vue"
import {getMusicData} from '@/api/request';
import Home from "./Home/index.vue";
import Personal from "./Personal/index.vue";
import Message from "./Message/index.vue";
import Statistics from "./Statistics/index.vue";

const views = ref([
  {view: Home, value: 1,},
  {view: Statistics, value: 2,},
  {view: Message, value: 3,},
  {view: Personal, value: 4,},
]);
const defaultView = ref(1)
const navigationBar = ref([{icon: 'icon-zhuye05-F', value: 1}, {icon: 'icon-tongji-2', value: 2},
  {icon: 'icon-xiaoxi', value: 3}, {icon: 'icon-geren', value: 4}])
const handleChangeView = (value: number) => {
  defaultView.value = value
}
// 歌曲数据
let audioList: Ref<MusicData[]> = ref([])

// 默认歌曲
const audioIndex = ref(0)

// 获取audio dom
const audio: any = ref<HTMLAudioElement | null>(null)

// 返回歌曲和歌手名字
const getSongInfo = (str: string) => {
  const splitInfo = str.split(' - ');
  const name = splitInfo[0];
  const singer = splitInfo[1];
  return {
    name,
    singer
  };
};

// 播放暂停处理
let play = ref(false)
const handlePlay = () => {
  play.value = !play.value;
  if (play.value) {

  } else {

  }
}

const handleMusicPlay = (index: number) => {
  audioIndex.value = index
  handlePlay()
}

interface MusicData {
  name: string;
  audioUrl: string;
  imgUrl: string;
}

interface MusicDataResponse {
  data: MusicData[]; // 音乐数据数组
  // 其他属性...
}

onMounted(() => {
  const phoneHeader: Element | null = document.querySelector(".phone-header")
  if (phoneHeader !== null) {
    (phoneHeader as HTMLElement).style.color = "black";
  }
  getMusicData().then((res: MusicDataResponse) => {
    audioList.value = res.data;
  })
})

</script>

<style scoped lang='less'>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.music-home {
  width: 100%;
  height: 100%;
  padding-top: 50px;
  background: url("./images/bg.jpg");
  background-size: 100% 100%;
  position: relative;

  .music-mini-player {
    position: absolute;
    bottom: 80px;
    height: 80px;
    width: 100%;
    background: linear-gradient(to right, #f3d6e2 0%, #f1e7ee 50%, #f6e3ee 100%);
    border-radius: 40px 40px 0 0;
    z-index: 0;
    cursor: pointer;

    .song-information {
      margin-left: 120px;
      display: flex;
      margin-top: 8px;
      align-items: center;
      width: 200px;
      justify-content: space-between;

      .right {
        .iconfont {
          color: #f8e5f0;
          padding: 10px;
          background: #472f46;
          border-radius: 50%;
          cursor: pointer;
        }
      }

      .left {
        display: flex;
        flex-direction: column;
        width: 160px;

        .song-singer {
          color: #a08f9e;
          font-size: 14px;
        }

        .song-name {
          font-size: 16px;
          color: #483047;
          font-weight: bold;
        }

        span {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }

    .el-image {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      position: absolute;
      top: -20px;
      left: 40px;
    }
  }

  .bottom {
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    align-items: flex-start;
    padding-top: 30px;
    justify-content: space-evenly;
    background: white;
    height: 100px;
    border-radius: 30px 30px 0 0;
    z-index: 1;

    .active {
      color: #fe579b !important;

      &:after {
        content: '';
        position: absolute;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: #fe579b;
        bottom: -15px;
        left: 50%;
        transform: translateX(-50%);
      }
    }

    .iconfont {
      font-size: 40px;
      color: #e8d1da;
      cursor: pointer;
      transition: color .5s;
      position: relative;
    }
  }
}
</style>
