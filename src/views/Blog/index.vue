<template>
    <div class='index-container container'>
        <div class="left">
            <Sidebar icon="icon-jurassic_message" color="#5757f9" title="MY" main-title="BLOG" />
        </div>
        <div class="main">
            <i class="back iconfont icon-cuowu" @click="goBack"></i>
            <div class="title">
                <Title title="MY" main-title="BLOG" />
            </div>
            <Subhead title="笔记" bg-color="#5757f9" />
            <div class="content">
                <el-row :gutter="40" class="panel-group">
                    <el-col :xs="12" :sm="12" :lg="16" class="card-panel-col">
                        <Waterfall :blog-list="blogList" />
                    </el-col>
                    <el-col :xs="12" :sm="12" :lg="8" class="card-panel-col">
                        <div class="search-box">
                        </div>
                    </el-col>
                </el-row>
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
import { getBlogData } from "../../api/request";
import Waterfall from '../../components/Waterfall.vue';

const router = useRouter()

const goBack = () => {
    router.back();
}
const blogList: any = ref([])
onMounted(async () => {
    blogList.value = await getBlogData({})
    console.log(blogList.value)
})
</script>

<style scoped lang='less'>
.index-container {
    border-radius: 15px 0px 0px 15px;

    .search-box {
        width: 100%;
        height: 500px;
        background-color: #1f1f1f;
    }

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