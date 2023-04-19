<template>
    <div class='left-container'>
        <Avatar class="avatar-hover" raduis="4"
            src="https://marketplace.canva.cn/ShLdI/MACHw9ShLdI/2/tl/canva-MACHw9ShLdI.png" />
        <router-link to="/" class="hr"><i class="iconfont icon-shouye"
                :class="{ active: herf === '/' ? true : false }"></i>主页</router-link>
        <router-link to="/article" class="hr"><i class="iconfont icon-16"
                :class="{ active: herf === '/article' ? true : false }"></i>文章</router-link>
        <router-link to="/about" class="hr"><i class="iconfont icon-guanyuwo"
                :class="{ active: herf === '/about' ? true : false }"></i>关于我</router-link>
        <router-link to="/message" class="hr"><i class="iconfont icon-jurassic_message"
                :class="{ active: herf === '/message' ? true : false }"></i>留言板</router-link>
        <router-link to="/project" class="hr"><i class="iconfont icon-xiangmu"
                :class="{ active: herf === '/project' ? true : false }"></i>项目&效果</router-link>
        <Weather />
    </div>
</template>

<script setup lang="ts">
import Avatar from "/src/components/Avatar/index.vue";
import { Ref, ref, watch } from "vue";
import router from "../router/index";
import Weather from "../components/weather/Weather.vue";
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
    .hr {
        border-bottom: 1px solid #2a2a2a;
        padding: 10px 10px;
        margin: 17px 0;
        display: block;
        transition: 0.2s;
        height: 50px;
        font-weight: bold;

        .iconfont {
            font-size: 20px;
            padding-right: 15px;
            transition: 0.2s;
        }

        .active {
            font-size: 25px !important;
            color: #00d061 !important;
        }
    }


    .hr:hover .iconfont {
        color: #00d061;
        font-size: 25px;
    }

    .relation {
        font-size: 50px;
        border-radius: 25px;
    }
}
</style>