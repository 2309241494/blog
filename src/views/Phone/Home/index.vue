<template>
    <div class='phone-container'>
        <div class="weather">
            <Weather />
        </div>
        <div class="bottom">
            <div class="menu">
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue';
import Weather from '../../../components/Weather.vue';
onMounted(() => {
})
</script>

<style scoped lang='less'>
.phone-container {
    // background-image: url('https://wallpaperaccess.com/full/1236301.jpg');
    background-image: url('https://img.zcool.cn/community/01fcee5ab47f5ea801218207dea2c9.jpg?x-oss-process=image/format,webp');
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    object-fit: cover;
    background-size: cover;
    padding: 0 20px;
    position: relative;
    cursor: pointer;

    .weather {
        height: 17%;
        margin-top: 80px;
    }

    .bottom {
        position: absolute;
        bottom: 20px;
        width: 100%;
        left: 0;
        padding: 0 20px;

        .menu {
            background-color: rgba(255, 255, 255, 0.4);
            width: 100%;
            height: 80px;
            border-radius: 30px;
        }
    }
}
</style>