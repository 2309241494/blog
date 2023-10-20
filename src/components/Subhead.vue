<template>
    <div class='Subhead-container'>
        <h2>{{ title }}</h2>
        <div class="bottom-border" :style="{ backgroundColor: bgColor }"></div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue';
interface Props {
    title: string;
    bgColor: string
}
const props = withDefaults(defineProps<Props>(), {
    title: "null",
    bgColor: "red"
})
onMounted(() => {
})
</script>

<style scoped lang='less'>
.Subhead-container {
    display: flex;
    margin-top: 1rem;
    position: relative;
    margin-bottom: 2rem;

    .bottom-border {
        width: 3rem;
        height: .3rem;
        border-radius: 2px;
        position: absolute;
        bottom: -1rem;
    }
}
</style>