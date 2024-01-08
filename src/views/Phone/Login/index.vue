<template>
    <div class='login-container'>
        <!-- <i class="lock iconfont icon-lock"></i>
        <div class="date">
            <h1>{{ hourTime }}</h1>
            <span>{{ date }} {{ weekday }}</span>
            <p>{{ `距离今年结束还剩${daysLeftInYear()}天` }}</p>
        </div> -->
        <div class="lock-password-container">
            <div class="lock-password">
                <div class="title">请输入6位密码</div>
                <div class="dot">
                    <el-progress :show-text="false" :text-inside="true" :stroke-width="20" :percentage="percentage"
                        :color="customColors" />
                </div>
                <div class="keyboard">
                    <el-row :gutter="20">
                        <el-col :span="8" :class="[item.value === 11 || item.value === 10 ? 'delect' : '']"
                            v-for="(item, index) in passwordList" :key="index" @click="handleClickDot(item.value)">
                            <div>{{ item.name }}</div>
                        </el-col>
                    </el-row>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive, Ref, watch } from 'vue';
import { hour } from '@/utils/util';
import { login } from '@/api/request';
// 获取当前时间(每秒刷新)
let hourTime = ref(hour().slice(14, 19))
let date = ref(hour().slice(5, 11))
let weekday = ref(hour().slice(11, 14))
const percentage = ref(0)
const customColors = [
    { color: '#f56c6c', percentage: 17 },
    { color: '#e6a23c', percentage: 33 },
    { color: '#5cb87a', percentage: 50 },
    { color: '#1989fa', percentage: 67 },
    { color: '#6f7ad3', percentage: 83 },
    { color: '#4343f4', percentage: 100 },
]
const daysLeftInYear = () => {
    const today = new Date();
    const endOfYear = new Date(today.getFullYear(), 11, 31);
    const timeDiff = endOfYear.getTime() - today.getTime();
    const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return daysLeft;
}
const passwordList = ref([
    { name: 1, value: 1 },
    { name: 2, value: 2 },
    { name: 3, value: 3 },
    { name: 4, value: 4 },
    { name: 5, value: 5 },
    { name: 6, value: 6 },
    { name: 7, value: 7 },
    { name: 8, value: 8 },
    { name: 9, value: 9 },
    { name: "删除", value: 10 },
    { name: 0, value: 0 },
    { name: "返回", value: 11 },
])
let pwd: Ref<number[]> = ref([])
const handleClickDot = (value: number) => {
    if (value === 10) {
        // 删除
        if (pwd.value.length > 0) {
            pwd.value.pop();
            percentage.value = Math.round(pwd.value.length / 6 * 100)
        }
    } else if (value === 11) {
        // 返回
    } else {
        // 密码
        if (pwd.value.length <= 6) {
            pwd.value.push(value)
            percentage.value = Math.round(pwd.value.length / 6 * 100)
            console.log(percentage.value)
        }
    }
}
watch(() => pwd.value, (newVal) => {
    // 处理 isMark 变化的逻辑
    if (newVal) {
        console.log(newVal);
        if (newVal.length === 6) {
            // 调用登录方法
            setTimeout(() => {
                login().then(res => {
                    pwd.value = []
                    percentage.value = Math.round(pwd.value.length / 6 * 100)
                })
            }, 1000)
        }
    }
}, { deep: true });
setInterval(() => {
    hourTime.value = hour().slice(14, 19)
    date.value = hour().slice(5, 11)
    weekday.value = hour().slice(11, 14)
}, 1000)
</script>

<style scoped lang='less'>
:deep(.el-progress) {
    width: 200px;
}

.delect {
    font-size: .9rem !important;
}

:deep(.el-col-8) {
    margin: 5px 0;
    font-size: 2rem;
    display: flex !important;
    align-items: center;
    justify-content: center;

    div {
        padding: 15px;
        border-radius: 50%;
        transition: all .3s;
        color: white;

        &:hover {
            background-color: white;
            color: rgb(180, 180, 180);
        }
    }
}

.login-container {
    background-image: url('https://ts1.cn.mm.bing.net/th/id/R-C.110b3d53dbce442ed74a24ebaaa5c95f?rik=qT4JpKRH1bQ7Hg&riu=http%3a%2f%2fimg1.mydrivers.com%2fimg%2f20200623%2ff52e6f929fac4750b2ba53e1fb44621c.png&ehk=cXQTeToUGX1yN%2f0chtP%2b9hg%2fjOR%2bBQORrE5btiklRzU%3d&risl=&pid=ImgRaw&r=0');
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    object-fit: cover;
    background-size: cover;
    position: relative;
    cursor: pointer;

    .lock-password-container {
        position: absolute;
        backdrop-filter: blur(4px);
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        .lock-password {
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            .dot {
                margin-bottom: 9px;
            }

            .title {
                font-size: .8rem;
                margin-bottom: 3px;
            }

            .keyboard {
                width: 300px;
            }
        }
    }

    .lock {
        position: absolute;
        font-weight: bold;
        font-size: 2.5rem;
        top: 10%;
        left: 50%;
        transform: translateX(-50%);
        opacity: 0.8;
    }

    .date {
        font-weight: bold;
        position: absolute;
        top: 15%;
        right: 3%;
        display: flex;
        flex-direction: column;
        text-align: right;
        opacity: 0.8;

        h1 {
            font-size: 4.5rem;
        }

        span {
            font-size: 1.7rem;
        }

        p {
            margin-top: 10px;
            font-size: .7rem;
        }
    }
}
</style>
