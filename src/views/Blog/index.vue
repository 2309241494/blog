<template>
    <div class='index-container container'>
        <div class="left">
            <Sidebar icon="icon-xiangce" color="#f6d365" title="MY" main-title="NOTES" />
        </div>
        <div class="main">
            <i class="back iconfont icon-cuowu" @click="goBack"></i>
            <div class="title">
                <Title title="MY" main-title="NOTES" />
            </div>
            <Subhead title="开发笔记" bg-color="#f6d365" />
            <div class="content">

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