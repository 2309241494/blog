<template>
    <div class='Title-container'>
        <h2>{{ props.title }}</h2>
        <h2>{{ props.mainTitle }}</h2>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue';
interface Props {
    title: string
    mainTitle: string
}
const props = withDefaults(defineProps<Props>(), {
    title: "I'M",
    mainTitle: "LILANG"
})
onMounted(() => {
})
</script>

<style scoped lang='less'>
.Title-container {
    display: flex;
    font-size: 2.5rem;
    Letter-spacing: .1rem;
    margin-bottom: 50px;

    h2 {
        &:last-child {
            margin-left: 1.5rem;
            color: aqua;
        }
    }
}
</style>