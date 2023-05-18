<template>
    <div class='Detail-container' v-if="show">
        <div class="main ">
            <i class="back iconfont icon-cuowu" @click="changeShow"></i>
            <img :src=props.arr.imgUrl alt="">
            <Subhead :title=props.arr.title bg-color="#5856e5" />
            <div class="text-container">
                <p>{{ props.arr.introduce }}</p>
            </div>
            <div class="button-container">
                <a class="button" target="_blank" :href=props.arr.online>
                    <i class="iconfont icon-tubiaoji2_zhixiang"></i>
                    <p>{{ props.arr.online ? "在线预览" : "暂未部署到服务器" }}</p>
                </a>
                <a class="button" target="_blank" :href=props.arr.soundCode>
                    <i class="iconfont icon-tubiaoji2_zhixiang"></i>
                    <p>源码地址</p>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue';
import Subhead from '../../components/Subhead.vue';
interface Props {
    show: boolean;
    arr: any
}
const props = withDefaults(defineProps<Props>(), {
    show: false
})

// 触发父组件传递过来的自定义函数
const emit = defineEmits(["showChange"])
const changeShow = () => {
    emit("showChange", false);
}
</script>

<style scoped lang='less'>
.Detail-container {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    overflow-y: auto;
    z-index: 999;

    .main {
        position: absolute;
        width: 50rem;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        padding: 4rem 4rem;
        background: linear-gradient(to right top,
                rgb(15, 12, 41),
                rgb(48, 43, 99),
                rgb(36, 36, 62));


        .back {
            cursor: pointer;
            font-size: 2.4rem;
            display: flex;
            color: rgb(214, 214, 214);
            transition: all .5s;
            position: absolute;
            right: -1%;
            top: 0;

            &:hover {
                color: aliceblue;
            }
        }

        img {
            width: 100%;
            max-height: 500px;
            border-radius: 5px;
            margin-bottom: -2rem;
            object-fit: cover;

        }

        .button-container {
            margin-top: 2rem;
            display: flex;

            .button {
                padding: 1rem;
                background-color: #2c3051;
                border-radius: 5px;
                margin-right: 1rem;
                cursor: pointer;
                display: flex;

                .iconfont {
                    color: aqua;
                    display: block;
                    font-size: 2rem;
                    margin-right: .5rem;
                    transition: all 1s;
                }

                p {
                    display: block;
                    transition: all .5s;
                }

                &:hover .iconfont {
                    transform: translateX(5rem);
                }

                &:hover p {
                    opacity: 0;
                }
            }
        }

        .text-container {

            p {
                color: #a1a1a3;
            }
        }

    }
}
</style>