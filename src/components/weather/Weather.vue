<template>
    <div class='weather-container'>
        <h5 class="title">{{ weatherArr.arr.province }}-{{ weatherArr.arr.city }}</h5>
        <div class="weather">
            <div class="left"></div>
            <div class="right"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive, watch } from 'vue';
import getWeather from '../../api/request';
import { hour } from '../../utils/util';

let weatherArr: any = reactive({ arr: {} });
onMounted(async () => {
    weatherArr.arr = await getWeather().then((data: any) => data.lives[0])
    console.log(weatherArr.arr.province)
})


</script>

<style scoped lang='less'>
.weather-container {
    width: 300px;
    height: 150px;
    background: linear-gradient(120deg, rgb(255 255 255 / 2%), rgb(255 255 255 / 10%));
    border-radius: 20px;
    margin: 40px 0;
}
</style>