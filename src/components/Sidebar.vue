<template>
    <div class='Sidebar-container'>
        <div class="top">
            <i class="iconfont" :class="[icon]" :style="{ color: color }"></i>
        </div>
        <div class="bottom">
            <h3>{{ title }}</h3>
            <h3 :style="{ color: color }">{{ mainTitle }}</h3>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue';
interface Props {
    icon?: string
    color?: string
    title?: string
    mainTitle?: string
}

const props = withDefaults(defineProps<Props>(), {
    icon: 'icon-shouye',
    color: "#008c8c",
    title: "HELLO",
    mainTitle: "World"
})
onMounted(() => {
})
</script>

<style scoped lang='less'>
.Sidebar-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;


    .top {
        flex: 0 0 10%;
        display: flex;
        align-items: center;
        justify-content: center;

        .iconfont {
            font-size: 3rem;
        }
    }

    .bottom {
        flex: 1;
        background-color: #363b5f;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h3 {
            writing-mode: vertical-lr;
            text-orientation: mixed;
            Letter-spacing: .5rem;
            font-weight: 900;

            &:first-child {
                margin-bottom: 2rem;
            }

        }
    }
}
</style>