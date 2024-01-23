<template>
  <div class="music-home-container " v-if="audioList && audioList.length > 0">
    <div class="avatar">
      <el-image :preview-teleported="true" :preview-src-list="['https://mp-cd880b8b-a556-4424-ba3e-77537732bc82.cdn.bspapp.com/640.jpg']" fit="cover"
                src="https://mp-cd880b8b-a556-4424-ba3e-77537732bc82.cdn.bspapp.com/640.jpg"></el-image>
      <el-icon>
        <CloseBold/>
      </el-icon>
    </div>
    <div class="search">
      <el-input placeholder="搜索你想听的歌曲" :suffix-icon="Pointer"></el-input>
    </div>
    <div class="like">
      <div class="left">
        <el-image :src="audioList[audioIndex].imgUrl" fit="cover"></el-image>
        <i class="iconfont " @click="handlePlay" :class="[play ? 'icon-zanting' : 'icon-bofang']"></i>
        <div class="song-information">
          <span class="song-name">{{ getSongInfo(audioList[audioIndex].name).name }}</span>
          <span class="song-singer">{{ getSongInfo(audioList[audioIndex].name).singer }}</span>
        </div>
      </div>
      <div class="right">
        <div>
          <span class="title">我的喜欢</span>
          <span class="sub-title">只属于你的歌单</span>
        </div>
        <div>
          <span class="title">每日分享</span>
          <span class="sub-title">分享音乐赢好礼</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted, watch, Ref} from 'vue';
import MusicDetail from "./Detail.vue"
import {getMusicData} from '@/api/request';
import {CloseBold, Pointer} from "@element-plus/icons-vue";

const navigationBar = ref([{icon: 'icon-zhuye05-F', value: 1}, {icon: 'icon-tongji-2', value: 2},
  {icon: 'icon-xiaoxi', value: 3}, {icon: 'icon-geren', value: 4}])

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

watch(audioIndex, (val) => {
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


<style scoped lang="less">
.music-home-container {

  .avatar {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 40px;
    align-items: center;

    .el-image {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }

    .el-icon {
      cursor: pointer;
      color: #521632
    }
  }

  .search {
    margin-top: 20px;

    .el-input {
      padding: 0 30px;
      height: 40px;

      :deep(.el-input__wrapper) {
        border-radius: 15px !important;
        position: relative;
        box-shadow: 1px 0 80px rgba(0, 0, 0, 0.04);

        .el-input__suffix {
          position: absolute;
          right: -5px;
          top: -1px;
          width: 50px;
          height: 42px;
          background: #f14193;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 18px;
          cursor: pointer;
          color: #ffffff;
          font-size: 30px;
          box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);

          .el-icon {
            margin-left: 0;
          }
        }

        .el-input__inner {
          &::placeholder {
            text-align: center; /* 让placeholder文本居中 */
            letter-spacing: 1px;
            font-size: 18px;
            color: #d0d0d0;
          }
        }
      }
    }
  }

  .like {
    padding: 0 28px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    height: 180px;

    .left {
      background: #492d3f;
      width: calc(50% - 10px);
      margin-right: 10px;
      height: 100%;
      border-radius: 25px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;

      .iconfont {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        padding: 5px 10px;
        border-radius: 15px;
        font-size: 20px;
        background: rgba(255, 255, 255, 0.3);
        backdrop-filter: blur(5px);
        cursor: pointer;
      }

      .song-information {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(15px);
        padding: 2px 10px;
        display: flex;
        flex-direction: column;

        span {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          text-shadow: 2px 2px 4px #000000;
        }

        .song-singer {
          letter-spacing: .5px;
          font-size: 15px;
          color: #d8d8d8;
        }

        .song-name {
          font-weight: bold;
          font-size: 20px;
        }
      }

      .el-image {
        border-radius: 50%;
        width: 125px;
        height: 125px;
      }
    }

    .right {
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      div {
        border-radius: 25px;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 8px;
        cursor: pointer;

        .title {
          font-weight: bold;
          font-size: 22px;
          width: 75px;
          margin-bottom: 3px;
        }

        .sub-title {
          width: 75px;
          text-align: center;
          font-size: 12px;
          background: rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(5px);
          border-radius: 7px;
        }

        &:before {
          content: '';
          position: absolute;
          right: 8px;
          background-repeat: no-repeat;
          background-size: 100% 100%;
          object-fit: cover;
        }

        &:first-child {
          margin-bottom: 5px;
          height: calc(50% - 5px);
          background: linear-gradient(to top right, #f45888, #fa91b0);

          &:before {
            bottom: -2px;
            background-image: url("../images/radio.png");
            width: 60px;
            height: 75px;
          }
        }

        &:last-child {
          margin-top: 5px;
          height: calc(50% - 5px);
          background: linear-gradient(to top right, #43c8ed, #99e7fd);

          &:before {
            bottom: -5px;
            background-image: url("../images/gift.png");
            width: 60px;
            height: 65px;
          }
        }
      }
    }
  }
}
</style>
