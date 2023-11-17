<template>
    <div class='weather-container' :style="{ backgroundImage: `url(${getTimePeriod()})` }">
        <h5 class="title">{{ weatherArr.arr.province }}-{{ weatherArr.arr.city }}</h5>
        <el-row class="weather">
            <el-col :span="12">
                <span class="hour">{{ hourTime }}</span>
                <span>{{ nowTime }}</span>
                <span class="call">{{ weaterTitle === 0 ? "上午好" : weaterTitle === 1 ? "下午好" : "晚上好" }}</span>
            </el-col>
            <el-col :span="12" class="right">
                <span>{{ weatherArr.arr.weather }}</span>
                <span class="degree-centigrade">{{ weatherArr.arr.temperature }}­°C</span>
                <span>空气湿度 {{ weatherArr.arr.humidity }}</span>
            </el-col>
        </el-row>
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
const backgroundWeather = reactive(["https://marketplace.canva.cn/EADcCtEsBHQ/1/0/1600w/canva-%E8%93%9D%E8%89%B2%E6%B8%90%E5%8F%98%E7%85%A7%E7%89%87%E5%AE%A3%E4%BC%A0%E8%83%8C%E6%99%AF--3Tw5BHY5yE.jpg",
    "https://marketplace.canva.cn/EADcCtEsBHQ/1/0/1600w/canva-%E8%93%9D%E8%89%B2%E6%B8%90%E5%8F%98%E7%85%A7%E7%89%87%E5%AE%A3%E4%BC%A0%E8%83%8C%E6%99%AF--3Tw5BHY5yE.jpg",
    "https://gss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/f2deb48f8c5494ee5786d30f29f5e0fe99257e04.jpg"])
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
    height: 100%;
    color: rgb(255, 255, 255);
    border-radius: 18px;
    padding: 10px;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: cover;
    object-fit: cover;

    .title {
        font-size: 14px;
        text-align: center;
    }

    .weather {
        margin-top: 10px;
        font-size: .5rem;

        .hour {
            font-size: 2rem;
            margin-bottom: 5px !important;
        }

        .call {
            margin-top: -6px !important;
        }

        .right {
            text-align: right;
        }

        .el-col-12 {
            display: flex;
            flex-direction: column;

            span {
                margin: 1px;
            }

            .degree-centigrade {
                font-size: 30px;
            }
        }
    }

}
</style>