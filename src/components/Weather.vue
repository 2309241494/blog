<template>
    <div class='weather-container'>
        <h5 class="title">{{ weatherArr.arr.province }}-{{ weatherArr.arr.city }}</h5>
        <div class="weather">
            <div class="left">
                <span class="hour">{{ hourTime }}</span>
                <div>{{ nowTime }}</div>
                <p>风向 {{ weatherArr.arr.winddirection }}</p>
            </div>
            <div class="right">
                <i class="iconfont icon-qing"></i>
                <span>{{ weatherArr.arr.temperature }}­°C</span>
                <p>{{ weatherArr.arr.weather }} 空气湿度{{ weatherArr.arr.humidity }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive, watch } from 'vue';
import getWeather from '../api/request';
import { hour } from '../utils/util';

// 天气信息
let weatherArr: any = reactive({ arr: {} });

// 获取当前时间(每20秒刷新)
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
    color: aliceblue;
    width: 300px;
    height: 150px;
    background: linear-gradient(120deg, rgb(255 255 255 / 2%), rgb(255 255 255 / 10%));
    border-radius: 20px;
    margin: 40px 0;
    padding: 15px;

    .title {
        font-size: 12px;
    }

    .weather {
        margin-top: 16px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        .left {
            .hour {
                font-weight: bold;
                font-size: 40px;
            }

            div {
                font-size: 14px;
                font-weight: bold;
            }

            p {
                font-size: 12px;
            }
        }

        .right {
            display: flex;
            flex-direction: column;
            align-items: flex-end;

            .iconfont {
                font-size: 50px;
                margin-top: -15px;
                margin-bottom: 20px;
            }

            span {
                font-size: 30px;
                font-weight: bold;
                margin-bottom: 2px;
            }

            p {
                font-size: 12px;
            }
        }
    }

}
</style>