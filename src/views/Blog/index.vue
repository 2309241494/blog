<template>
    <div class='index-container container'>
        <div class="left">
            <Sidebar icon="icon-jurassic_message" color="#5757f9" title="MY" main-title="DEMO" />
        </div>
        <div class="main">
            <i class="back iconfont icon-cuowu" @click="goBack"></i>
            <div class="title">
                <Title title="MY" main-title="DEMO" />
            </div>
            <Subhead title="笔记" bg-color="#5757f9" />
            <div class="content">
                <!-- <a href="https://www.mythrillfiction.com/the-dark-rider" alt="Mythrill" target="_blank">
                    <div class="card">
                        <div class="wrapper">
                            <img src="https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg"
                                class="cover-image" />
                        </div>
                        <img src="https://ggayane.github.io/css-experiments/cards/dark_rider-title.png" class="title" />
                        <img src="https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp"
                            class="character" />
                    </div>
                </a>
                <a href="https://www.mythrillfiction.com/force-mage" alt="Mythrill" target="_blank">
                    <div class="card">
                        <div class="wrapper">
                            <img src="https://ggayane.github.io/css-experiments/cards/force_mage-cover.jpg"
                                class="cover-image" />
                        </div>
                        <img src="https://ggayane.github.io/css-experiments/cards/force_mage-title.png" class="title" />
                        <img src="https://ggayane.github.io/css-experiments/cards/force_mage-character.webp"
                            class="character" />
                    </div>
                </a> -->
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
.card {
    width: var(--card-width);
    height: var(--card-height);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding: 0 36px;
    perspective: 2500px;
    margin: 0 50px;
}

.cover-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.wrapper {
    transition: all 0.5s;
    position: absolute;
    width: 100%;
    z-index: -1;
}

.card:hover .wrapper {
    transform: perspective(900px) translateY(-5%) rotateX(25deg) translateZ(0);
    box-shadow: 2px 35px 32px -8px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 2px 35px 32px -8px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 2px 35px 32px -8px rgba(0, 0, 0, 0.75);
}

.wrapper::before,
.wrapper::after {
    content: "";
    opacity: 0;
    width: 100%;
    height: 80px;
    transition: all 0.5s;
    position: absolute;
    left: 0;
}

.wrapper::before {
    top: 0;
    height: 100%;
    background-image: linear-gradient(to top,
            transparent 46%,
            rgba(12, 13, 19, 0.5) 68%,
            rgba(12, 13, 19) 97%);
}

.wrapper::after {
    bottom: 0;
    opacity: 1;
    background-image: linear-gradient(to bottom,
            transparent 46%,
            rgba(12, 13, 19, 0.5) 68%,
            rgba(12, 13, 19) 97%);
}

.card:hover .wrapper::before,
.wrapper::after {
    opacity: 1;
}

.card:hover .wrapper::after {
    height: 120px;
}

.title {
    width: 100%;
    transition: transform 0.5s;
}

.card:hover .title {
    transform: translate3d(0%, -50px, 100px);
}

.character {
    width: 100%;
    opacity: 0;
    transition: all 0.5s;
    position: absolute;
    z-index: -1;
}

.card:hover .character {
    opacity: 1;
    transform: translate3d(0%, -30%, 100px);
}

.index-container {

    .left {
        flex: 0 0 5%;
    }

    .main {
        flex: 1;
        overflow-y: scroll;
        padding: 30px 30px 130px 30px;

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