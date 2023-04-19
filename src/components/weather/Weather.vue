<template>
    <div class='weather-container'>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue';
import getWeather from '../../api/request';
let weatherArr: any = reactive([]);
onMounted(async () => {
    weatherArr = await getWeather().then((data) => data)
    console.log(weatherArr)
})
</script>

<style scoped lang='scss'></style>