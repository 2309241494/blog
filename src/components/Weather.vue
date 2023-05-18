<template>
    <div class='weather-container'>
        <h5 class="title">{{ weatherArr.arr.province }}-{{ weatherArr.arr.city }}</h5>
        <div class="weather">
            <span class="hour">{{ hourTime }}</span>
            <span>{{ weatherArr.arr.weather }}</span>
            <span>风向 {{ weatherArr.arr.winddirection }}</span>
            <span>{{ weatherArr.arr.temperature }}­°C</span>
            <span>{{ nowTime }}</span>
            <span> 空气湿度{{ weatherArr.arr.humidity }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive, watch } from 'vue';
import { getWeather } from '../api/request';
import { hour } from '../utils/util';

// 天气信息
let weatherArr: any = reactive({ arr: {} });

// 获取当前时间(每秒刷新)
let hourTime = ref()
let nowTime = ref()
hourTime.value = hour().slice(13, 18)
nowTime.value = hour().slice(0, 13)
setInterval(() => {
    hourTime.value = hour().slice(13, 18)
    nowTime.value = hour().slice(0, 13)
}, 1000)


onMounted(async () => {
    weatherArr.arr = await getWeather().then((data: any) => data.lives[0])
})
</script>

<style scoped lang='less'>
.weather-container {
    flex: 0 0 20%;
    color: rgb(212, 212, 212);
    width: 90%;
    border-radius: 5px;
    margin-bottom: 1rem;
    padding: 1.2rem;
    background-color: #2c3051;
    background: linear-gradient(145deg, #2f3357, #282b49);
    box-shadow: 5px 5px 17px #252844,
        -5px -5px 17px #33385e;

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