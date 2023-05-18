<template>
    <div class='index-container container'>
        <div class="left">
            <Sidebar icon="icon-jurassic_message" color="#6991c7" title="MY" main-title="MessageBoard" />
        </div>
        <div class="main">
            <i class="back iconfont icon-cuowu" @click="goBack"></i>
            <div class="title">
                <Title title="About" main-title="MY" />
            </div>
            <Subhead title="基本信息" bg-color="#6991c7" />
            <div class="content">
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { ref, onMounted, reactive } from 'vue';
import Sidebar from '../../components/Sidebar.vue';
import Title from '../../components/Title.vue';
import Subhead from '../../components/Subhead.vue'
const router = useRouter();
const goBack = () => {
    router.back();
}
onMounted(() => {
})
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
    }
}
</style>