<template>
    <div class='Menu-container'>
        <RouterLink :to=item.path v-for="(item, index) in menuList" :key="index">
            <div class="menu-items">
                <i class="iconfont" :class="[item.icon]" :style="{ color: item.color }"></i>
                <div class="title">
                    <span>{{ item.title }}</span>
                    <span :style="{ color: item.color }">{{ item.mainTitle }}</span>
                </div>
            </div>
        </RouterLink>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue';
import { RouterLink } from 'vue-router';
interface Props {
    menuList?: { icon: string; title: string; mainTitle: string; path: string; color: string; }[]
}

const props = withDefaults(defineProps<Props>(), {
})
onMounted(() => {
})
</script>

<style scoped lang='less'>
.Menu-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;

    .menu-items {
        width: 30rem;
        height: 16rem;
        background-color: #363b5f;
        border-radius: .2rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 4rem 0 0 0;
        transition: all.3s;

        &:hover {
            background-color: #474f7e;
            transform: translateY(-.5rem);
            background: #2c3051;
            box-shadow: inset 5px 5px 8px #121320,
                inset -5px -5px 8px #464d82;
        }

        .iconfont {
            font-size: 4rem;
        }

        .title {
            margin-top: 2rem;
            font-weight: 900;
            font-size: 1.5rem;

            span {
                &:last-child {
                    margin-left: .5rem;
                }
            }
        }
    }

}
</style>