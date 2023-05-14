<template>
    <div class='left-container'>
        <router-link to="/" class="hr" :class="{ active: herf === '/' ? true : false }"><i
                class="iconfont icon-shouye"></i>主页</router-link>
        <router-link to="/article" class="hr"><i class="iconfont icon-16"
                :class="{ active: herf === '/article' ? true : false }"></i>文章</router-link>
        <router-link to="/about" class="hr"><i class="iconfont icon-guanyuwo"
                :class="{ active: herf === '/about' ? true : false }"></i>关于我</router-link>
        <router-link to="/message" class="hr"><i class="iconfont icon-jurassic_message"
                :class="{ active: herf === '/message' ? true : false }"></i>留言板</router-link>
        <router-link to="/project" class="hr"><i class="iconfont icon-xiangmu"
                :class="{ active: herf === '/project' ? true : false }"></i>项目&效果</router-link>
    </div>
</template>

<script setup lang="ts">
import { Ref, ref, watch } from "vue";
import router from "../router/index";
import Weather from "../components/weather/Weather.vue"
// 监听路由变化，并通过路由切换组件
let herf: Ref = ref();
watch(
    () => router.currentRoute.value.path,
    (newValue) => {
        herf.value = newValue;
    },
    { immediate: true }
);
</script>

<style scoped lang='less'>
.left-container {
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgb(161, 161, 161);

    .hr {
        padding: 5px 20px;
        margin: 17px 0;
        display: block;
        transition: 0.2s;
        font-weight: bold;
        border-radius: 10px;
        line-height: 30px;

        &:hover {
            color: #fff
        }

        .iconfont {
            font-size: 20px;
            padding-right: 15px;
            transition: 0.2s;
        }
    }
}

.router-link-active,
.router-link-exact-active {
    color: white;
}
</style>