<template>
    <div class='Music-container'>
        <div class="bg" :style="{ backgroundImage: `url(${audioList[audioIndex].imgUrl})` }"></div>
        <div class="cover">
            <img :class="[!play ? 'img-active' : '']" :src=audioList[audioIndex].imgUrl alt="">
        </div>
        <!-- 歌曲描述 -->
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
import { ref, onMounted, reactive, watch, computed } from 'vue';

// 歌曲数据
const audioList = ref([
    {
        name: "Sunroof - Nicky Youre / Dazy", audioUrl: "http://music.163.com/song/media/outer/url?id=1893514633",
        imgUrl: "http://p1.music.126.net/OE6x5vHGHZqBAK0E1kXn0Q==/109951167870371370.jpg?param=130y130"
    },
    {
        name: "昼念 - 罗浩文BF / 苏琛", audioUrl: "http://music.163.com/song/media/outer/url?id=1826191539",
        imgUrl: "http://p2.music.126.net/yaG1zHzAeh3hNavJAV08JQ==/109951165792054236.jpg?param=120y120"
    },
    {
        name: "Kiss Fight - Tülpa / BLANKTS / gnash", audioUrl: "http://music.163.com/song/media/outer/url?id=460112226",
        imgUrl: "http://p1.music.126.net/e3Et4gSGaddRNiw9vLstKA==/109951166562842133.jpg?param=130y130"
    },
    {
        name: "Already Gone - Sleeping at Last", audioUrl: "http://music.163.com/song/media/outer/url?id=35345004",
        imgUrl: "http://p1.music.126.net/1-j3ys5s6ArANxWPwxzHvA==/3302932931079266.jpg?param=130y130"
    },
    {
        name: "Twenty Something - Nightly", audioUrl: "http://music.163.com/song/media/outer/url?id=1371704145",
        imgUrl: "http://p1.music.126.net/SqdM0R_IwFTZA580vsa7-A==/109951164145627069.jpg?param=130y130"
    },
    {
        name: "Honest - rei brown", audioUrl: "http://music.163.com/song/media/outer/url?id=1458667025",
        imgUrl: "http://p1.music.126.net/fk0xpraWVNIcwt8APsd03A==/109951165277456503.jpg?param=130y130"
    },
    {
        name: "晚风 - 7copy / BT07", audioUrl: "http://music.163.com/song/media/outer/url?id=1441758494",
        imgUrl: "http://p1.music.126.net/lCblKUB1hLND5FxiVI1_Lw==/109951164919449758.jpg?param=130y130"
    },
    {
        name: "失落沙洲 - 高睿", audioUrl: "http://music.163.com/song/media/outer/url?id=1948817707",
        imgUrl: "http://p2.music.126.net/XAed3b9j76FgNP8lOYqKMQ==/109951167478316677.jpg?param=130y130"
    },
    {
        name: "Demons - Anthem Lights", audioUrl: "http://music.163.com/song/media/outer/url?id=1435100542",
        imgUrl: "http://p1.music.126.net/cC4-KjMtdsnDnBhL-WYfrQ==/109951164850979773.jpg?param=130y130"
    },
    {
        name: "Princess - XMASwu(吴骜)", audioUrl: "http://music.163.com/song/media/outer/url?id=1869248652.mp3",
        imgUrl: "http://p2.music.126.net/jJT58QCcbrtrRvQ7Prcw3w==/109951166285330042.jpg?param=130y130"
    },
    {
        name: "Sorry But - XMASwu(吴骜)", audioUrl: "http://music.163.com/song/media/outer/url?id=1818153740.mp3",
        imgUrl: "http://p2.music.126.net/I-TvObgAOXZMowOAG2Cgrw==/109951165982469735.jpg?param=130y130"
    },
    {
        name: "Star(反方向的钟) - XMASwu(吴骜)", audioUrl: "http://music.163.com/song/media/outer/url?id=1899705498.mp3",
        imgUrl: "https://p2.music.126.net/6-F8k6AuCnsvMjDNKYHriw==/109951166677305699.jpg?param=130y130"
    },
    {
        name: "没有理由 - 永彬Ryan.B / 周延英（英子-effie）", audioUrl: "http://music.163.com/song/media/outer/url?id=550138197.mp3",
        imgUrl: "https://p1.music.126.net/VAux0wpbTJz6timFFHVgLQ==/109951163237307291.jpg?param=130y130"
    },
    {
        name: "泡沫 - Swang多雷", audioUrl: "http://music.163.com/song/media/outer/url?id=518682659.mp3",
        imgUrl: "https://p2.music.126.net/-mrB7euJ09Fazbu85R6wgQ==/109951164764975405.jpg?param=130y130"
    },
    {
        name: "英雄联盟台词鉴赏 - 人生导师卡密尔（青钢影）", audioUrl: "http://music.163.com/song/media/outer/url?id=1910038914.mp3",
        imgUrl: "http://p2.music.126.net/ndmiknAsBwoymMasVysNgQ==/109951168536773914.jpg?param=130y130"
    },
    {
        name: "AutumnLeaf - re:plus", audioUrl: "http://music.163.com/song/media/outer/url?id=26111937.mp3",
        imgUrl: "https://p2.music.126.net/E323i3eNPwkTYqCgoRT6gQ==/2359551953231145.jpg?param=130y130"
    }])

// 默认歌曲
const audioIndex = ref(3)


// 获取audio dom
const audio: any = ref<HTMLAudioElement | null>(null)


let swidth = ref("")
const playProgressBar: any = ref<HTMLAudioElement | null>(null)
const handleProgressBar = () => {

    //获取当前播放的百分比  当前进度/总进度
    const { currentTime, duration } = audio.value

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

watch(audioIndex, (val, prevVal) => {
    const len = audioList.value.length
    if (val >= len) {
        audioIndex.value = 0
    } else if (val < 0) {
        audioIndex.value = len - 1
    }
})
</script>

<style scoped lang='less'>
.Music-container {
    flex: 1;
    width: 90%;
    background-color: #2c3051;
    padding: 2rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    border-radius: 5px;
    margin-top: .5rem;
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
        }

        p {
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
            width: 3rem;
            height: 2rem;
            background-color: rgba(255, 255, 255, 0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 5px;
            cursor: pointer;

            &:nth-child(2) {
                margin: 0 .7rem;
            }

            .iconfont {
                font-size: 1rem;
            }
        }
    }

    .progressBar {
        width: 390px;
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