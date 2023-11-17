<template>
    <div class='phone-container'>
        <div class="weather">
            <Weather />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue';
import Weather from '../../components/Weather.vue';
onMounted(() => {
})
</script>

<style scoped lang='less'>
.phone-container {
    background-image: url('https://wallpaperaccess.com/full/1236301.jpg');
    // background-image: url('https://img.zcool.cn/community/018c3e5ab47f5ea801218207aa6c75.jpg@3000w_1l_0o_100sh.jpg');
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    object-fit: cover;
    background-size: cover;
    padding: 0 20px;

    .weather {
        height: 17%;
        margin-top: 80px;
    }
}
</style>