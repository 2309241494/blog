<template>
    <div class='Poetry-container'>
        meiriyiyan
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue';
import { getPoetry } from '../api/request';
const poetryArr: any = reactive({ arr: {} })
onMounted(async () => {
    poetryArr.arr = await getPoetry().then(res => console.log(res))
})
</script>

<style scoped lang='scss'></style>