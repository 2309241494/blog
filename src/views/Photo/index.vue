<template>
    <div class='index-container container'>
        <div class="left">
            <Sidebar icon="icon-xiangce" color="#f6d365" title="MY" main-title="PHOTO" />
        </div>
        <div class="main">
            <i class="back iconfont icon-cuowu" @click="goBack"></i>
            <div class="title">
                <Title title="About" main-title="ME" />
            </div>
            <Subhead title="生活碎片" bg-color="#f6d365" />
            <div class="content">
                <div class="image-container mini-container">
                    <div class="image-item" v-for="(item, index) in images" :key="index">
                        <img :src="item.src" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import Sidebar from '../../components/Sidebar.vue';
import Title from '../../components/Title.vue';
import Subhead from '../../components/Subhead.vue'
const router = useRouter();
const goBack = () => {
    router.back();
}
const images = [{ src: "https://ts1.cn.mm.bing.net/th/id/R-C.b61e85948514dde6c8f2997871c60766?rik=WSmrFRL1fzIM2A&riu=http%3a%2f%2fpic1.bbzhi.com%2ffengjingbizhi%2fdiqiuguibaodachicunziranfengjingbizhijingxuandiyiji%2fnature_2008_landscape_1680_desktop_01_20183_11.jpg&ehk=UHw5ouJjdlJ4utvTAdWd8UZTuIpkI%2fMSeyoP%2fjtTbpQ%3d&risl=&pid=ImgRaw&r=0", },
{ src: "https://tse4-mm.cn.bing.net/th/id/OIP-C.xq6cOv82ubIhJY9qkFd5AgHaEK?w=316&h=180&c=7&r=0&o=5&pid=1.7", },
{ src: "https://tse1-mm.cn.bing.net/th/id/OIP-C.De4iKAMeTvWwPQxXNK74ZgHaE8?w=241&h=180&c=7&r=0&o=5&pid=1.7", },
{ src: "https://tse1-mm.cn.bing.net/th/id/OIP-C.7-6n_pwnAPz_IkgyRuRI2wHaEo?w=255&h=183&c=7&r=0&o=5&pid=1.7", },
{ src: "https://ts1.cn.mm.bing.net/th/id/R-C.8b5a06e831ae5806110eb424a6f459c9?rik=nPKd57IQk5a3gw&riu=http%3a%2f%2fwww.waibao123.com%2fUploads%2fphoto%2f2014-07-16%2fff544162748b2ddf1d362b908737387f_big.jpg&ehk=bSsTClUJFllXvpJ8jjQH%2f8L6khOAnKYImCV4lSmrtYg%3d&risl=&pid=ImgRaw&r=0", },
{ src: "https://tse1-mm.cn.bing.net/th/id/OIP-C.UkVFnEg1kA8wGDvr7LPLVQHaL2?w=115&h=180&c=7&r=0&o=5&pid=1.7", },
{ src: "https://tse1-mm.cn.bing.net/th/id/OIP-C.RLXQLqOuMFuWxC1F-zijHAHaGl?w=183&h=180&c=7&r=0&o=5&pid=1.7", }]

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