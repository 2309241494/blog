<template>
    <div class='miniComponents-container'>
        <Weather />
        <Poetry />

        <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=320 height=450
            src="https://music.163.com/outchain/player?type=0&id=616795500&auto=0&height=auto"></iframe>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue';
import Weather from '../components/Weather.vue';
import Poetry from '../components/Poetry.vue';
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
}
</style>