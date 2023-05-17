<template>
    <div class='Poetry-container'>
        <div class="main" :style="{ backgroundImage: '' }">
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue';
const poetryArr: any = ref("")
onMounted(() => {

})
</script>

<style scoped lang='less'>
.Poetry-container {
    width: 90%;
    background-color: aqua;
}
</style>