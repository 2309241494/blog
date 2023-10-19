<template>
    <div class='weather-container' :style="{ backgroundImage: `url(${getTimePeriod()})` }">
        <h5 class="title">{{ weatherArr.arr.province }}-{{ weatherArr.arr.city }}</h5>
        <div class="weather">
            <span class="hour">{{ hourTime }}</span>
            <span>{{ weatherArr.arr.weather }}</span>
            <span>{{ weaterTitle === 0 ? "上午好" : weaterTitle === 1 ? "下午好" : "晚上好" }}</span>
            <span>{{ weatherArr.arr.temperature }}­°C</span>
            <span>{{ nowTime }}</span>
            <span> 空气湿度 {{ weatherArr.arr.humidity }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive, watch, watchEffect } from 'vue';
import { getWeather } from '../api/request';
import { hour } from '../utils/util';
// 天气信息
let weatherArr: any = reactive({ arr: {} });
// 获取当前时间(每秒刷新)
let hourTime = ref()
let nowTime = ref()
hourTime.value = hour().slice(14, 19)
nowTime.value = hour().slice(0, 13)
setInterval(() => {
    hourTime.value = hour().slice(14, 19)
    nowTime.value = hour().slice(0, 14)
}, 1000)

onMounted(async () => {
    weatherArr.arr = await getWeather().then((res: any) => {
        return res.lives[0]
    })
})


// 计算当前时间是早上下午晚上
const backgroundWeather = reactive(["https://wallpaperaccess.com/full/5576477.jpg",
    "https://wallpaperaccess.com/full/6111693.jpg",
    "https://wallpaperaccess.com/full/5705490.jpg"])
let weaterTitle = ref<number>(0)
function getTimePeriod(): string {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    if (currentHour < 12) {
        weaterTitle.value = 0
    } else if (currentHour < 18) {
        weaterTitle.value = 1
    } else {
        weaterTitle.value = 2
    }
    return backgroundWeather[weaterTitle.value]
}
</script>

<style scoped lang='less'>
.el-notification {
    opacity: 1 !important;
    background-color: #2c3051 !important;
}

.weather-container {
    width: 100%;
    flex: 0 0 20%;
    color: rgb(255, 255, 255);
    border-radius: 5px;
    margin-bottom: 1rem;
    padding: 1.2rem;
    box-shadow: 5px 5px 17px #252844,
        -5px -5px 17px #33385e;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center;
    object-fit: cover;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);

    .title {
        font-size: .8rem;
        text-align: center;
    }

    .weather {
        margin-top: 1rem;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        font-size: .8rem;

        span {
            flex-basis: 50%;
            flex-shrink: 0;
        }

        & span:nth-child(odd) {
            text-align: left;
        }

        & span:nth-child(even) {
            text-align: right;
        }

        & span:nth-child(1) {
            font-size: 2.8rem;
        }

        & span:nth-child(3) {
            margin-top: .6rem;
        }

        & span:nth-child(4) {
            font-size: 1.6rem;
        }

    }

}
</style>