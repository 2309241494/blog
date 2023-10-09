<template>
    <div class='index-container container'>
        <div class="left">
            <Sidebar icon="icon-xiangce" color="#893b5b" title="MY" main-title="PHOTO" />
        </div>
        <div class="main">
            <i class="back iconfont icon-cuowu" @click="goBack"></i>
            <div class="title">
                <Title title="MY" main-title="PHOTO" />
            </div>
            <Subhead title="生活碎片" bg-color="#893b5b" />
            <div class="content">
                <el-row :gutter="20">
                    <el-col :span="6" v-for="(item, index) in cards" :key="index">
                        <ImgCard :cardList="cards[index]" />
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Sidebar from '../../components/Sidebar.vue';
import Title from '../../components/Title.vue';
import Subhead from '../../components/Subhead.vue'
import ImgCard from '../../components/ImgCard.vue';
const router = useRouter();
const goBack = () => {
    router.back();
}
const cards = ref([
    {
        image: 'https://w.wallhaven.cc/full/j5/wallhaven-j57z5m.jpg',
        title: 'Jett',
        content: '捷风'
    },
    {
        image: 'https://w.wallhaven.cc/full/gp/wallhaven-gp97xl.png',
        title: 'Neon',
        content: '霓虹'
    },
    {
        image: 'https://w.wallhaven.cc/full/lm/wallhaven-lmp1ml.jpg',
        title: 'viper',
        content: '蝰蛇'
    },
    {
        image: 'https://w.wallhaven.cc/full/l3/wallhaven-l3zzg2.jpg',
        title: 'Sova',
        content: '猎枭'
    },
    {
        image: 'https://w.wallhaven.cc/full/rd/wallhaven-rdepgm.jpg',
        title: 'Rez',
        content: '雷兹'
    },
    {
        image: 'https://w.wallhaven.cc/full/pk/wallhaven-pkwld3.jpg',
        title: 'K/O',
        content: '机器人'
    },
    {
        image: 'https://w.wallhaven.cc/full/g8/wallhaven-g8r8je.jpg',
        title: 'Killjoy',
        content: '奇乐'
    },
    {
        image: 'https://w.wallhaven.cc/full/57/wallhaven-57v3d7.jpg',
        title: 'Fade',
        content: '黑梦'
    },
])
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
            .image-container {
                display: flex;
                flex-wrap: wrap;
                justify-content: start;
                gap: 4rem;

                .image-item {
                    width: calc(50% - 2rem);
                    height: 20rem;

                    img {
                        cursor: pointer;
                        object-fit: cover;
                        width: 100%;
                        border-radius: 5px;
                        height: 100%;
                    }
                }



            }

        }
    }

}
</style>