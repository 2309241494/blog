<template>
    <div class='miniComponents-container'>
        <Weather />
        <Music />
        <Poetry />
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue';
import Weather from '../components/Weather.vue';
import Poetry from '../components/Poetry.vue';
import Music from '../components/Music.vue';
onMounted(() => {
})
</script>

<style scoped lang='less'>
.miniComponents-container {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    overflow: hidden;

    &::-webkit-scrollbar {
        width: 0;
        /* 滚动条宽度 */
    }
}
</style>