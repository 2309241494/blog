<template>
    <div class='index-container container'>
        <div class="left">
            <Sidebar icon="icon-jurassic_message" color="#5757f9" title="MY" main-title="BLOG" />
        </div>
        <div class="main">
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
                            <Subhead title="搜索" bg-color="#c9f31d" />
                            <el-input v-model="queryList.name" class="search-input" placeholder="输入搜索内容">
                                <template #append>
                                    <el-button @click="handleSearch" :icon="Search" />
                                </template>
                            </el-input>
                            <Subhead title="标签" bg-color="#00b240" />
                            <div class="tag">
                                <el-tag :class="{ 'active-tag': queryList.tags.includes(tag) }" @click="handleTag(tag)"
                                    v-for="(tag, index) in tagList" :key="index">{{ tag
                                    }}</el-tag>
                            </div>
                            <Subhead title="最新发布" bg-color="#f54888" />
                            <div class="new-blog-item" v-for="(item, index) in newBlogList" :key="index">
                                <el-image fit="cover" class="img" :src="item.cover" :preview-src-list="[item.cover]" />
                                <div class="right" @click="handleMarkDetail(item)">
                                    <div class="date">
                                        <el-icon :style="{ color: item.color }">
                                            <Opportunity />
                                        </el-icon>
                                        <span>{{ item.date }}</span>
                                    </div>
                                    <h2>{{ item.name }}</h2>
                                </div>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
        <MarkDown @closeMark="handleCloseMark" :isMark="isMark" :markDown="md" />
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, reactive } from 'vue';
import Sidebar from '../../components/Sidebar.vue';
import Title from '../../components/Title.vue';
import Subhead from '../../components/Subhead.vue';
import { getBlogData, getNewBlog, getBlogTitle } from "../../api/request";
import Waterfall from '../../components/Waterfall.vue';
import { Search, Opportunity, Back } from '@element-plus/icons-vue'
import MarkDown from '../../components/MarkDown.vue'
let isMark = ref(false)
let md = ref()
interface mdList {
    md: string
}
const handleMarkDetail = (data: mdList) => {
    console.log("aaa")
    isMark.value = true
    md.value = data.md
}
const handleCloseMark = () => {
    isMark.value = false
}
const blogList: any = ref([])
const newBlogList: any = ref([])
const tagList: any = ref([])

interface QueryList {
    name: string;
    tags: string[];
}

let queryList = ref<QueryList>({
    name: '',
    tags: []
})
const handleSearch = () => {
    initBlogList()
}
const handleTag = (tag: string) => {
    if (queryList.value.tags.includes(tag)) {
        // 如果标签已被选中，则取消选中，从列表中移除
        queryList.value.tags = queryList.value.tags.filter(activeTag => activeTag !== tag);
    } else {
        // 如果标签未被选中，则添加到列表中
        queryList.value.tags.push(tag);
    }
    initBlogList()
}
const initBlogList = async () => {
    blogList.value = await getBlogData(queryList.value)
}
onMounted(async () => {
    initBlogList()
    newBlogList.value = await getNewBlog()
    tagList.value = await getBlogTitle()
})
</script>

<style scoped lang='less'>
.index-container {
    border-radius: 15px 0px 0px 15px;

    .search-box {
        width: 100%;
        background-color: #1f1f1f;
        border-radius: 15px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        padding: 30px 20px;

        .tag {
            .active-tag {
                border: 1px solid #00b240 !important;
            }

            :deep(.el-tag) {
                margin-right: 8px;
                font-size: 16px;
                background: #363636;
                padding: 18px 20px;
                border-radius: 10px;
                letter-spacing: 1px;
                border: 1px solid #1f1f1f;
                cursor: pointer;
                margin-bottom: 10px;
                color: rgba(255, 255, 255, 0.65);
                font-weight: 600;
            }
        }

        .new-blog-item {
            display: flex;
            padding: 20px 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            align-items: center;

            .img {
                width: 60px;
                height: 60px;
                border-radius: 50%;
                margin-right: 10px;
            }

            .right {
                margin-left: 10px;
                cursor: pointer;

                &:hover h2 {
                    color: #f54888;
                }

                .date {
                    display: flex;
                    align-items: flex-start;

                    :deep(.el-icon) {
                        font-size: 25px;
                        font-weight: bold;
                        margin-right: 3px;
                        margin-bottom: 5px;
                    }

                    span {
                        color: rgba(255, 255, 255, 0.65);
                        font-size: 14px;
                    }
                }

                h2 {
                    width: 200px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    font-size: 16px;
                    font-weight: normal;
                    transition: all 0.3s;
                }
            }
        }

        :deep(.el-input__wrapper) {
            height: 45px;
            background-color: #131313;
            border-radius: 10px 0 0 10px;
            border: 1px solid rgba(255, 255, 255, 0.1) !important;
            border-right: none !important;
            box-shadow: 0 0 0 1px #131313 inset;
            margin-bottom: 10px;
        }

        :deep(.el-input__inner::placeholder) {
            color: #747474;
        }

        :deep(.el-input__wrapper.is-focus) {
            box-shadow: 0 0 0 1px #131313 inset;
        }

        :deep(.el-input-group__append) {
            border: none;
            background-color: #131313;
            box-shadow: 0 0 0 1px #131313 inset;
            border: 1px solid rgba(255, 255, 255, 0.1) !important;
            border-radius: 0 10px 10px 0;
            border-left: none !important;
            margin-bottom: 10px;
        }

        :deep(.el-icon) {
            color: #c9f31d;
        }
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