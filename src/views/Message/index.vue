<template>
    <div class='index-container container'>
        <div class="left">
            <Sidebar icon="icon-jurassic_message" color="#6991c7" title="MY" main-title="MESSAGE" />
        </div>
        <div class="main">
            <i class="back iconfont icon-cuowu" @click="goBack"></i>
            <div class="title">
                <Title title="About" main-title="MY" />
            </div>
            <Subhead title="留言" bg-color="#6991c7" />
            <div class="content" v-if="notFound">
                <div class="mini-container">
                    <p>想聊聊吗？留下你的联系方式</p>
                    <form class="from" @submit="handleSubmit">
                        <div class="top">
                            <input type="text" class="name" placeholder="怎么称呼？" v-model="from.name">
                            <input type="text" class="email" placeholder="联系方式" v-model="from.contactWay">
                        </div>
                        <div class="bottom">
                            <textarea name="" id="" cols="30" rows="10" placeholder="留言信息"
                                v-model="from.message"></textarea>
                        </div>
                        <button type="submit">提交留言</button>
                    </form>
                    <div class="message" v-for="(item, index) in message" :key="index">
                        <div class="msg-item"><i class="iconfont icon-tubiaoji2_zhixiang"></i>{{ item.name }}
                            ：{{ item.message }}</div>
                        <span>{{ item.time }}</span>
                    </div>
                </div>
            </div>
            <div class="not-found" v-else>
                <i class="iconfont icon-jieguo-404"></i>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { ref, onMounted, reactive } from 'vue';
import Sidebar from '../../components/Sidebar.vue';
import Title from '../../components/Title.vue';
import Subhead from '../../components/Subhead.vue';

const from: any = ref({ name: "", contactWay: "", message: "" })
const message = ref([{ name: "黎浪", contactWay: "+62800000000", message: "你好！", time: "" }])
const router = useRouter()
const notFound = false
const goBack = () => {
    router.back();
}
onMounted(() => {
})
const handleSubmit = (event: any) => {
    event.preventDefault()
    if (!checkForm()) {
        alert('请完整填写表单');
        return;
    } else {
        from.value.time = getData()
        message.value.unshift(from.value)
        from.value = {}
    }
    console.log(from.value)
}
function checkForm() {
    for (let key in from.value) {
        if (!from.value[key]) {
            return false; // 存在空值，返回 false
        }
    }
    return true; // 表单数据全部非空，返回 true
}
function getData() {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const hour = now.getHours().toString().padStart(2, '0');
    const minute = now.getMinutes().toString().padStart(2, '0');
    const datetime = `${year}年${month}月${day}日${hour}时${minute}分`;
    return datetime;
}
</script>

<style scoped lang='less'>
.index-container {

    .left {
        flex: 0 0 5%;
    }

    .main {
        flex: 1;
        overflow-y: scroll;
        padding: 0 3rem;

        &::-webkit-scrollbar {
            width: 0;
            /* 滚动条宽度 */
        }

        .title {
            // flex: 0 0 20%;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 1rem 3rem 0 3rem;
        }

        .back {
            cursor: pointer;
            font-size: 2.4rem;
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            color: rgb(214, 214, 214);
            transition: all .5s;
            margin-top: 2rem;

            &:hover {
                color: aliceblue;
            }
        }

        .content {
            .mini-container {
                p {
                    color: #a8a8a8;
                    margin-bottom: 2rem;
                }

                .from {
                    button {
                        margin: 1rem 0;
                    }

                    .top {
                        width: 70%;
                        display: flex;
                        flex-wrap: wrap;
                        gap: 2rem;
                        margin: 1rem 0;

                        input {
                            width: calc(50% - 1rem);
                            padding: 1rem;
                            height: 3rem;
                            border-radius: 5px;
                        }
                    }

                    .bottom {
                        width: 70%;

                        textarea {
                            width: 100%;
                            border-radius: 5px;
                            padding: 1rem;
                        }
                    }
                }

                .message {
                    background-color: #2c3051;
                    padding: 1rem;
                    border-radius: 5px;
                    margin-top: 1rem;

                    .iconfont {
                        color: #00ffff;
                        font-size: 1.5rem;
                        margin-right: .5rem;
                        vertical-align: bottom;
                    }

                    span {
                        color: #a8a8a8;
                        font-size: .5rem;
                    }
                }
            }
        }

        .not-found {
            width: 100%;
            height: 100%;
            position: relative;

            .iconfont {
                font-size: 10rem;
                position: absolute;
                color: #6991c7;
                left: 42%;
                top: 30%;
            }
        }
    }
}
</style>