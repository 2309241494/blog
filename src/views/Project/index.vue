<template>
    <div class='index-container container'>
        <div class="left">
            <Sidebar icon="icon-xiangmu" color="#43e97b" title="MY" main-title="PROJECT" />
        </div>
        <div class="main">
            <i class="back iconfont icon-cuowu" @click="goBack"></i>
            <div class="title">
                <Title title="MY" main-title="PROJECT" />
            </div>
            <Subhead title="项目列表" bg-color="#43e97b" />
            <div class="content">
                <div class="mini-container menu-container">
                    <div class="menu">
                        <li :class="[index === menuIndex ? 'active' : '']" v-for="(item, index) in menu" :key=index
                            @click="menuClick(index, item.type)">{{ item.title }}
                        </li>
                    </div>
                    <div class="project">
                        <div class="project-item" v-for="(item, index) in projectList" :key="index">
                            <div class="project-img" :style="{ backgroundImage: `url(${item.imgUrl})` }">
                            </div>
                            <div class="button" @click="clickDetail(item)"><i
                                    class="iconfont icon-tubiaoji2_zhixiang"></i>查看详情
                            </div>
                            <div class="text">
                                <span>{{ item.title }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="right">
            <Weather />
            <Poetry />
        </div>
        <Detail :show=show @showChange="changeShow" :arr=detailArr />
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { ref, onMounted, reactive } from 'vue';
import Sidebar from '../../components/Sidebar.vue';
import Weather from '../../components/Weather.vue';
import Poetry from '../../components/Poetry.vue';
import Title from '../../components/Title.vue';
import Subhead from '../../components/Subhead.vue';
import Detail from './Detail.vue';
// 菜单项
const menu = ref([{ title: "全部", }, { title: "PC", type: "pc" }, { title: "移动端", type: "hfive" }, { title: "微信小程序", type: "mini" }])

// 默认,切换处理
let menuIndex = ref(0)
const menuClick = (e: number, type: string | undefined) => {
    menuIndex.value = e
    if (type) {
        projectList.value = newList.filter((item) => item.type === type)
    } else {
        projectList.value = newList
    }
}

// 显示Detail方法
let show = ref(false)
// 传递给Detail的数据
let detailArr = ref({})
const clickDetail = (item: object) => {
    detailArr.value = item
    show.value = true;
}
const changeShow = (e: any) => {
    show.value = e;
}

// 路由回退方法
const router = useRouter();
const goBack = () => {
    router.back();
}

//项目列表项
const projectList = ref([
    {
        type: "pc",
        title: "个人博客",
        online: "www.ilove.vom",
        soundCode: "www.ilovegitee.vom",
        introduce: "此项目使用Typescript搭建",
        imgUrl: "https://img.zcool.cn/community/0127bd5a3b6c15a801201a1f90c7e3.jpg@1280w_1l_2o_100sh.jpg",
    },
    {
        type: "hfive",
        title: "个人博客",
        online: "www.ilove.vom",
        soundCode: "www.ilovegitee.vom",
        introduce: "此项目使用Typescript搭建,Vue 框架：Vue 是一个流行的开源 JavaScript 框架，它提供了一些基本的构建组件化 Web 应用所需的功能，如模板语法、组件系统、路由管理、状态管理、响应式数据绑定等等",
        imgUrl: "https://ts1.cn.mm.bing.net/th/id/R-C.84aaeb8f09d5c757d0a0f888bf37704d?rik=QtnDGxKODF1dOQ&riu=http%3a%2f%2fweb.tedu.cn%2fupload%2f20190522%2f20190522164744_351.jpg&ehk=FLNgJTldtYmW9KdNH8OwBK94yz5kGmJm8bzw4HP3B2c%3d&risl=&pid=ImgRaw&r=0",
    },
    { type: "mini", imgUrl: "https://tse3-mm.cn.bing.net/th/id/OIP-C.Qq9d53ybUj-VhwBkjcVIjAHaEK?pid=ImgDet&rs=1", title: "uniapp" },
    { type: "pc", imgUrl: "https://img.zcool.cn/community/0127bd5a3b6c15a801201a1f90c7e3.jpg@1280w_1l_2o_100sh.jpg", title: "博客后台" },])
const newList = [...projectList.value]
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
            .menu-container {
                .menu {
                    display: flex;
                    align-items: center;
                    margin-bottom: 2rem;

                    li {
                        margin-right: 3rem;
                        cursor: pointer;
                    }

                    .active {
                        background-color: #2c3051;
                        border-radius: 5px;
                        padding: .5rem 1rem;
                        border: 1px solid white;
                    }
                }

                .project {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    justify-content: center;
                    align-items: center;
                    gap: 2rem;

                    .project-item {
                        flex-basis: calc(48%);
                        background-color: #2c3051;
                        display: flex;
                        justify-content: center;
                        border-radius: 5px;
                        cursor: pointer;
                        position: relative;
                        overflow: hidden;

                        .text {
                            position: absolute;
                            font-size: 2rem;
                            color: aqua;
                            font-weight: 900;
                            left: -30%;
                            bottom: 6%;
                            transition: all .5s;
                            z-index: 999;
                        }

                        &:hover .text {
                            left: 7%;
                        }

                        .button {
                            position: absolute;
                            z-index: 99;
                            right: -30%;
                            top: 6%;
                            transition: .5s all;
                            padding: 1rem;
                            background-color: #2c3051;
                            border-radius: 5px;
                            border: 1px solid white;

                            .iconfont {
                                margin-right: .5rem;
                                font-size: 1.5rem;
                                vertical-align: -.2rem;
                                color: aqua;
                            }

                            &:hover {
                                background-color: #363b5f;
                            }
                        }

                        &:hover .button {
                            right: 7%;
                            top: 6%;
                        }

                        &::after {
                            position: absolute;
                            content: "";
                            background-color: rgba(0, 0, 0, 0.5);
                            height: 100%;
                            width: 100%;
                            opacity: 0;
                            transition: all .5s;
                            z-index: 1;
                            border: 3px solid white;
                            bottom: 0;
                        }

                        &:hover .project-img {
                            transform: scale(1.1);
                        }

                        &:hover::after {
                            opacity: 1;
                        }

                        .project-img {
                            width: 100%;
                            height: 27rem;
                            border-radius: 5px;
                            object-fit: cover;
                            background-repeat: no-repeat;
                            background-size: 100% 100%;
                            transition: all .5s;
                        }
                    }
                }

            }
        }
    }

    .right {
        flex: 0 0 23%;
        background-color: #363b5f;
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        align-items: center;
    }



}
</style>