<template>
    <div class='miniComponents-container'>
        <div class="header">
            <div class="left">
                <span>{{ hourTime }}</span>
            </div>
            <div class="right">
                <i class="iconfont" :class="[isOnline ? 'icon-wifi' : 'icon-wifi-off']"></i>
                <i class="iconfont icon-battery">
                </i>
                <span>{{ electricquantity }}</span>
            </div>
        </div>
        <!-- <Home /> -->
        <Login />
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { hour } from '../../utils/util';
import { ElMessage } from 'element-plus';
import Home from './Home/index.vue'
import Login from './Login/index.vue'

const isOnline = navigator.onLine;
let electricquantity = ref('');
let hourTime = ref()
hourTime.value = hour().slice(14, 19)
setInterval(() => {
    hourTime.value = hour().slice(14, 19)
}, 1000)
onMounted(() => {
    const navigators: any = navigator
    if (navigators.getBattery) {
        navigators.getBattery().then(function (battery: any) {
            electricquantity.value = battery.level * 100 + "%";
        });
    } else {
        ElMessage({
            message: '你的浏览器不支持获取电脑电量',
            type: 'warning',
        })
    }
})
</script>

<style scoped lang='less'>
.miniComponents-container {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    padding: 27px 30px;
    overflow: hidden;
    position: relative;

    .header {
        position: absolute;
        top: 25px;
        height: 37px;
        width: 80%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: .5rem;
        z-index: 99;
        padding: 20px;
        padding-right: 10px;
        opacity: .8;

        .left {
            margin-left: 1px;
            font-size: .8rem;
        }

        .right {
            display: flex;
            align-items: center;

            .iconfont {
                margin-right: 5px;

                span {
                    font-size: .5px;
                }
            }
        }
    }



    &::after {
        position: absolute;
        content: '';
        background-image: url("/src/assets/img/phone.png");
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        top: 0;
        z-index: 999;
        pointer-events: none;
    }

    &::-webkit-scrollbar {
        width: 0;
        /* 滚动条宽度 */
    }
}
</style>