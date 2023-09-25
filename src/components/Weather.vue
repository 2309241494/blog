<!--
 * @Author: 黎浪 lil@creatoo.cn
 * @Date: 2023-09-08 10:15:13
 * @LastEditors: 黎浪 lil@creatoo.cn
 * @LastEditTime: 2023-09-15 17:30:40
 * @FilePath: \vite-blog\src\components\Weather.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class='weather-container' :style="{ backgroundImage: `url(${getTimePeriod()})` }">
        <h5 class="title">{{ weatherArr.arr.province }}-{{ weatherArr.arr.city }}</h5>
        <div class="weather">
            <span class="hour">{{ hourTime }}</span>
            <span>{{ weatherArr.arr.weather }}</span>
            <span>{{ weaterTitle === 0 ? "上午好" : weaterTitle === 1 ? "下午好" : "晚上好" }}</span>
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
import { ElNotification } from 'element-plus'
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

// 计算当前时间是早上下午晚上
const backgroundWeather = reactive(["https://img.zcool.cn/community/01cb8657dd13690000012e7e082455.jpg@1280w_1l_2o_100sh.jpg",
    "https://bpic.588ku.com/back_our/20210318/bg/ecef85d079003.png",
    "https://img-qn-0.51miz.com/preview/video/00/00/13/46/V-134610-6B323855.jpg"])
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
watch(weaterTitle, (newValue, oldValue) => {
    // 在这里可以处理 weatherTitle 变化时的逻辑
    ElNotification({
        title: weaterTitle.value === 0 ? "上午好" : weaterTitle.value === 1 ? "下午好" : "晚上好",
        position: 'top-left',
        message: weaterTitle.value === 0 ? "上午好！拥抱清晨的阳光，享受新的开始！" : weaterTitle.value === 1 ? "希望您度过一个愉快而充实的下午，保持精力充沛，继续努力并享受每一刻的美好！" : "忙碌一天，尽早入眠，让疲惫瞬间消散，为明天的精彩绽放！",
        duration: 2000,
        type: 'success',
    })
});
</script>

<style scoped lang='less'>
.weather-container {
    width: 100%;
    flex: 0 0 20%;
    color: rgb(255, 255, 255);
    border-radius: 5px;
    margin-bottom: 1rem;
    padding: 1.2rem;
    background-color: #2c3051;
    box-shadow: 5px 5px 17px #252844,
        -5px -5px 17px #33385e;
    background-repeat: no-repeat;
    background-size: cover;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

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