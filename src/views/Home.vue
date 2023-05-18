<template>
    <div class='Home-container container'>
        <!-- 左边区域 -->
        <div class="left">
            <Sidebar />
        </div>
        <!-- 主区域 -->
        <div class="main">
            <!-- 标题 -->
            <div class="title">
                <Title />
                <div class="typewriter">
                    <span>As a </span>
                    <span>{{ currentText }}</span>
                </div>
            </div>
            <!-- 内容区域 -->
            <div class="content">
                <Menu :menu-list="menuArr" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive, computed } from 'vue';
import { RouterLink, RouterView } from "vue-router";
import Sidebar from '../components/Sidebar.vue';
import Title from "../components/Title.vue"
import Menu from '../components/Menu.vue';
import MiniComponents from './MiniComponent.vue';

// 传递给菜单组件的菜单项
const menuArr = [{ icon: "icon-guanyuwo", title: "ABOUT", mainTitle: "ME", path: "/about", color: "#fa709a" },
{ icon: "icon-xiangmu", title: "MY", mainTitle: "PROJECT", path: "/project", color: "#43e97b" },
{ icon: "icon-xiangce", title: "MY", mainTitle: "PHOTO", path: "/photo", color: "#f6d365" },
{ icon: "icon-jurassic_message", title: "MY", mainTitle: "MessageBoard", path: "/message", color: "#6991c7" }
]
// 打字机效果
const textArr = [
    'Web Developer',
];

const typingSpeed = 200;
const landingSpeed = 50;

const currentIndex = ref(0);
const currentDisplayIndex = ref(0);

const updateTextDisplay = () => {
    if (currentDisplayIndex.value < textArr[currentIndex.value].length) {
        currentDisplayIndex.value += 1;
    } else {
        setTimeout(() => {
            currentIndex.value = (currentIndex.value + 1) % textArr.length;
            currentDisplayIndex.value = 0;
        }, landingSpeed);
    }
};

setInterval(updateTextDisplay, typingSpeed);

const currentText = computed(() => {
    return textArr[currentIndex.value].slice(0, currentDisplayIndex.value);
});

</script>

<style scoped lang='less'>
.Home-container {


    .left {
        flex: 0 0 5%;
    }

    .main {
        flex: 1;
        overflow-y: scroll;

        &::-webkit-scrollbar {
            width: 0;
            /* 滚动条宽度 */
        }

        .title {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 5rem 3rem 0 3rem;

            .typewriter {
                margin-top: 2.5rem;
                font-size: 1.5rem;
                font-style: italic;

                span {
                    &:last-child {
                        color: aqua;
                    }
                }
            }
        }
    }

}
</style>
