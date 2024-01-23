<template>
  <div v-show="false" class='Music-container' v-if="audioList && audioList.length > 0">
    <div class="bg" :style="{ backgroundImage: `url(${audioList[audioIndex].imgUrl})` }"></div>
    <div class="cover">
      <img :class="[!play ? 'images-active' : '']" :src=audioList[audioIndex].imgUrl alt="">
    </div>
    <div class='title'>
      <h6>{{ audioList[audioIndex].name }}</h6>
      <p>音乐是灵魂的避风港</p>
    </div>
    <div class="icon">
      <div @click="handleUp"><i class="iconfont icon-shangyiqu101"></i></div>
      <div @click="handlePlay"><i class="iconfont " :class="[play ? 'icon-24gl-pause' : 'icon-24gl-play']"></i></div>
      <div @click="handleNext"><i class="iconfont icon-xiayiqu101"></i></div>
    </div>
    <audio @ended="handleNext" @timeupdate="handleProgressBar" ref="audio" id="" :src=audioList[audioIndex].audioUrl>
    </audio>
    <div class="progressBar">
      <div ref="playProgressBar" class="playProgressBar"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted, reactive, watch, computed, Ref} from 'vue';
import {getMusicData} from '@/api/request';
// 歌曲数据
let audioList: Ref<MusicData[]> = ref([])

// 默认歌曲
const audioIndex = ref(0)


// 获取audio dom
const audio: any = ref<HTMLAudioElement | null>(null)


let swidth = ref("")
const playProgressBar: any = ref<HTMLAudioElement | null>(null)
const handleProgressBar = () => {

  //获取当前播放的百分比  当前进度/总进度
  const {currentTime, duration} = audio.value

  let precent = currentTime / duration
  //计算进度条的因子,百分比需要*该因子,最后才能到100%
  let sp = 387 / 100;

  //拼接进度条的width
  swidth.value = (precent * 100 * sp) + "px";

  //设置进度条的播放进度
  playProgressBar.value.style.width = swidth.value;
}

// 播放暂停处理
let play = ref(false)
const handlePlay = () => {
  play.value = !play.value;
  if (play.value) {
    console.log(audio.value)
    audio.value.play()
  } else {
    audio.value.pause()
  }
}

// 下一首
const handleNext = () => {
  audioIndex.value += 1
  play.value = true
  playProgressBar.value.style.width = "0px"
  setTimeout(() => {
    audio.value.play()
  }, 1000)
}
// 上一首
const handleUp = () => {
  audioIndex.value -= 1
  play.value = true;
  playProgressBar.value.style.width = "0px"
  setTimeout(() => {
    audio.value.play()
  }, 1000)
}

watch(audioIndex, (val, prevVal) => {
  const len = audioList.value.length
  if (val >= len) {
    audioIndex.value = 0
  } else if (val < 0) {
    audioIndex.value = len - 1
  }
})

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
  getMusicData().then((res: MusicDataResponse) => {
    audioList.value = res.data;
  })
})
</script>

<style scoped lang='less'>
.Music-container {
  width: 100%;
  height: 100%;
  transition: all 0.5s;
  flex: 1;
  background-color: #2c3051;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  border-radius: 5px;
  overflow: hidden;


  audio {
    opacity: 0;
    position: absolute;
  }

  .bg {
    background-size: 100% 100%;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    filter: blur(20px);
    transition: all 1s;
  }

  .cover {
    width: 12rem;
    height: 12rem;
    background-color: black;
    border-radius: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 990;

    img {
      border-radius: 50%;
      animation: infinite-rotate 10s linear infinite;
    }

    .img-active {
      animation-play-state: paused;
    }

    @keyframes infinite-rotate {
      from {
        transform: rotate(0deg);
      }

      to {
        transform: rotate(360deg);
      }
    }
  }

  .title {
    position: relative;
    z-index: 990;

    margin: 1rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h6 {
      margin-bottom: .5rem;
      font-size: .9rem;
      text-shadow: 2px 2px 4px #000000;
    }

    p {
      text-shadow: 2px 2px 4px #000000;
      font-size: 1rem;
      letter-spacing: .1rem;
      color: rgb(207, 207, 207);
      font-style: italic;
    }
  }

  .icon {
    position: relative;
    z-index: 990;
    display: flex;

    div {
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border-radius: 50%;
      backdrop-filter: blur(10px);
      background-color: rgba(255, 255, 255, 0.5);

      &:nth-child(2) {
        margin: 0 .7rem;
      }

      .iconfont {
        font-size: 30px;
        font-weight: 900 !important;
      }
    }
  }

  .progressBar {
    width: 393px;
    height: .5rem;
    background: rgba(255, 255, 255, 0.1);
    margin-top: 10px;
    position: absolute;
    bottom: 0;

    .playProgressBar {
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgba(255, 255, 255, 0.3);
      height: 30px;
      width: 0px;
      transition: all 1s;
    }

  }
}
</style>
