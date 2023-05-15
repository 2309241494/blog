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
    color: #ebebeb;
    width: 91%;
    border-radius: .8rem;
    margin: 1rem 0;
    padding: 1.2rem;
    background: linear-gradient(145deg, #282b49, #2f3357);
    box-shadow: 6px 6px 12px #141624,
        -6px -6px 12px #444a7e;

    .title {
        font-size: .8rem;
    }

    .weather {
        margin-top: 1rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        .left {
            text-align: left;

            .hour {
                font-weight: bold;
                font-size: 2.5rem;
            }

            div {
                font-size: 1rem;
                font-weight: bold;
            }

            p {
                font-size: .6rem;
            }
        }

        .right {
            display: flex;
            flex-direction: column;
            align-items: flex-end;

            .iconfont {
                font-size: 3rem;
                margin-top: -1rem;
                margin-bottom: 1.5rem;
            }

            span {
                font-size: 2rem;
                font-weight: bold;
                margin-bottom: .3rem;
            }

            p {
                font-size: .5rem;
            }
        }
    }

}
</style>