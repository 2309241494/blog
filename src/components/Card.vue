<template>
    <div class='card-container'>
        <el-card class="box-card">
            <template #header>
                <div class="card-header">
                    <span class="card-title">笔记</span>
                    <button class="custom-btn btn-12"><span @click="handleMenu">Click!</span><span>前往BLOG</span></button>
                </div>
            </template>
            <el-row class="card-item-container">
                <el-col :span="8" v-for="(item, index) in cardList" :key="index" class="card-item">
                    <div class="card-item-content">
                        <i class="iconfont" :style="{ color: item.color }" :class="[item.icon]"></i>
                        <span>{{ item.name }}</span>
                    </div>
                    <div class="desc">{{ item.desc }}</div>
                    <div class="card-item-footer">
                        <span>{{ item.type }}</span>
                        <span>{{ item.date }}</span>
                    </div>
                </el-col>
            </el-row>
        </el-card>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, reactive } from 'vue';
import { useMain } from '../store/index';
import router from '../router';
const mainStore = useMain();
const handleMenu = () => {
    // mainStore.setChangeModule(1);  // 调用 actions 方法改变 changeModule 的值
    router.push('/vite-blog/blog')

}
const cardList = reactive([{
    name: 'Vue模型渲染',
    url: 'https://developer.mozilla.org/zh-CN/',
    color: "#41b883",
    icon: 'icon-vue',
    desc: 'Vue 的模型渲染是指 Vue.js 框架中通过数据绑定将数据模型渲染到视图上。Vue 使用了响应式的数据绑定机制，当数据发生变化时，模型会自动更新视图，反之亦然。',
    type: 'VUE',
    date: '2022-03-14'
}, {
    name: '闭包',
    url: 'https://developer.mozilla.org/zh-CN/',
    color: "#f5dd1e",
    icon: 'icon-JavaScript',
    desc: 'JavaScript闭包详解',
    type: 'JS',
    date: '2022-03-14'
}, {
    name: 'Hooks',
    url: 'https://developer.mozilla.org/zh-CN/',
    color: "#00bcd4",
    icon: 'icon-react',
    desc: 'Mozilla Developer Network',
    type: 'React',
    date: '2022-03-14'
}, {
    name: '属性值的计算过程',
    url: 'https://developer.mozilla.org/zh-CN/',
    color: "#4bbfeb",
    icon: 'icon-css',
    desc: 'Mozilla Developer Network',
    type: 'CSS',
    date: '2022-03-14'
}, {
    name: 'H5新特性',
    url: 'https://developer.mozilla.org/zh-CN/',
    color: "#f7622c",
    icon: 'icon-html',
    desc: 'Mozilla Developer Network',
    type: 'HTML',
    date: '2022-03-14'
}, {
    name: '小程序开发规范',
    url: 'https://developer.mozilla.org/zh-CN/',
    color: "#00b240",
    icon: 'icon-xiaochengxu',
    desc: 'Mozilla Developer Network',
    type: '小程序',
    date: '2022-03-14'
}])
</script>

<style scoped lang='less'>
.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.card-item-container {
    color: #C0C4CC;

    .card-item {
        border-right: 1px solid #2b2f50;
        border-top: 1px solid #2b2f50;
        padding: 20px;
        font-size: 14px;
        cursor: pointer;

        .desc {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .card-item-content {
            display: flex;
            align-items: center;
            margin-bottom: 15px;
            color: #EBEEF5;
            font-size: 16px;

            .iconfont {
                font-size: 35px;
                margin-right: 20px;
            }
        }

        .card-item-footer {
            margin-top: 15px;
            display: flex;
            justify-content: space-between;
        }
    }
}

.card-title {
    font-size: 20px;
    font-weight: bold;
}

:deep(.el-card__header) {
    // border-bottom: 1px solid #2b2f50;
    border-bottom: none;
}

:deep(.el-card__body) {
    padding: 0;
}

.box-card {
    background-color: #363b5f;
    color: aliceblue;
    border: none;
    box-shadow: 5px 5px 17px #252844,
        -5px -5px 17px #33385e;
}

.text {
    font-size: 14px;
}

/* 12 */
.custom-btn {
    width: 130px;
    height: 40px;
    color: #fff;
    border-radius: 5px;
    padding: 10px 25px;
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, .5),
        7px 7px 20px 0px rgba(0, 0, 0, .1),
        4px 4px 5px 0px rgba(0, 0, 0, .1);
    outline: none;
}

.btn-12 {
    position: relative;
    right: 20px;
    bottom: 20px;
    border: none;
    box-shadow: none;
    width: 130px;
    height: 40px;
    line-height: 42px;
    -webkit-perspective: 230px;
    perspective: 230px;
}

.btn-12 span {
    background: rgb(0, 172, 238);
    background: linear-gradient(0deg, rgba(0, 172, 238, 1) 0%, rgba(2, 126, 251, 1) 100%);
    display: block;
    position: absolute;
    width: 130px;
    height: 40px;
    border-radius: 5px;
    margin: 0;
    text-align: center;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transition: all .3s;
    transition: all .3s;
}

.btn-12 span:nth-child(1) {
    -webkit-transform: rotateX(90deg);
    -moz-transform: rotateX(90deg);
    transform: rotateX(90deg);
    -webkit-transform-origin: 50% 50% -20px;
    -moz-transform-origin: 50% 50% -20px;
    transform-origin: 50% 50% -20px;
}

.btn-12 span:nth-child(2) {
    -webkit-transform: rotateX(0deg);
    -moz-transform: rotateX(0deg);
    transform: rotateX(0deg);
    -webkit-transform-origin: 50% 50% -20px;
    -moz-transform-origin: 50% 50% -20px;
    transform-origin: 50% 50% -20px;
}

.btn-12:hover span:nth-child(1) {
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, .5),
        7px 7px 20px 0px rgba(0, 0, 0, .1),
        4px 4px 5px 0px rgba(0, 0, 0, .1);
    -webkit-transform: rotateX(0deg);
    -moz-transform: rotateX(0deg);
    transform: rotateX(0deg);
}

.btn-12:hover span:nth-child(2) {
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, .5),
        7px 7px 20px 0px rgba(0, 0, 0, .1),
        4px 4px 5px 0px rgba(0, 0, 0, .1);
    color: transparent;
    -webkit-transform: rotateX(-90deg);
    -moz-transform: rotateX(-90deg);
    transform: rotateX(-90deg);
}
</style>