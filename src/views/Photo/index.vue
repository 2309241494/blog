<template>
    <div class='index-container container'>
        <div class="left">
            <Sidebar icon="icon-xiangce" color="#409eff" title="MY" main-title="PHOTO" />
        </div>
        <div class="main">
            <div class="title">
                <Title title="MY" main-title="PHOTO" />
            </div>
            <Subhead title="生活碎片" bg-color="#409eff" />
            <div class="content">
                <div class="segmented-control">
                    <input type="radio" v-model="queryObj.type" name="radio2" value="0" id="tab-1"
                        @change="handleChangeMenu" checked />
                    <label for="tab-1" class="segmented-control__1">
                        <p>全部</p>
                    </label>
                    <input @change="handleChangeMenu" type="radio" v-model="queryObj.type" name="radio2" value="1"
                        id="tab-2" />
                    <label for="tab-2" class="segmented-control__2">
                        <p>游戏</p>
                    </label>
                    <input @change="handleChangeMenu" type="radio" v-model="queryObj.type" name="radio2" value="2"
                        id="tab-3" />
                    <label for="tab-3" class="segmented-control__3">
                        <p>风景</p>
                    </label>
                    <div class="segmented-control__color"></div>
                </div>
                <el-row :gutter="25">
                    <el-col :span="12" v-for="(item, index) in cards" :key="index">
                        <ImgCard :cardList="cards[index]" />
                    </el-col>
                </el-row>
            </div>
            <Paginate @changeCurrentPage="handleCurrentPag" :currentPage="currentPage" :totalPage="totalPage" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, reactive } from 'vue';
import Sidebar from '@/components/Sidebar.vue';
import Title from '@/components/Title.vue';
import Subhead from '@/components/Subhead.vue'
import ImgCard from '@/components/ImgCard.vue';
import Paginate from '@/components/Paginate.vue';
import { getHeroData } from '@/api/request';
let cards = ref([])
let queryObj = ref({
    page: 1,
    size: 4,
    type: 0
})
let currentPage = ref(0)
let totalPage = ref(0)
const handleCurrentPag = (value: number) => {
    queryObj.value.page = value
    initData()
}
const handleChangeMenu = (e: any) => {
    queryObj.value.type = Number(e.target.value)
    queryObj.value.page = 1
    initData()
}
const initData = () => {
    getHeroData(queryObj.value).then((res: any) => {
        const { current_data, current_page, total_page } = res.data
        cards.value = current_data
        currentPage.value = current_page - 1
        totalPage.value = total_page
    })
}
onMounted(() => {
    initData()
})
</script>

<style scoped lang='less'>
@shadow: 0.3rem 0.3rem 0.6rem #000000a2, -0.2rem -0.2rem 0.5rem #000000;
@inner-shadow: inset .2rem .2rem .5rem #181a2c,
    inset -.2rem -.2rem .5rem #4450ac;

.index-container {
    border-radius: 15px 0px 0px 15px;


    .left {
        flex: 0 0 5%;
    }

    :deep(.el-col) {
        margin-bottom: 20px;
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
            .segmented-control {
                grid-column: 3 / 4;
                grid-row: 1 / 2;
                width: 20.4rem;
                height: 4rem;
                box-shadow: @shadow;
                border-radius: 1rem;
                display: flex;
                align-items: center;
                position: relative;
                margin: 25px 0 15px 0;

                input {
                    display: none;
                }

                >input:checked+label {
                    transition: all .5s ease;
                    color: #6d5dfc;
                }

                &__1,
                &__2,
                &__3 {
                    width: 6.8rem;
                    height: 3.6rem;
                    font-size: 1.4rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                    color: #9baacf;
                    transition: all .5s ease;

                    &:hover {
                        color: #6d5dfc;
                    }
                }

                &__color {
                    position: absolute;
                    height: 3.4rem;
                    width: 6.2rem;
                    margin-left: .3rem;
                    border-radius: .8rem;
                    box-shadow: @inner-shadow;
                    pointer-events: none;
                }
            }

            #tab-1:checked~.segmented-control__color {
                transform: translateX(0);
                transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
            }

            #tab-2:checked~.segmented-control__color {
                transform: translateX(6.8rem);
                transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
            }

            #tab-3:checked~.segmented-control__color {
                transform: translateX(13.6rem);
                transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
            }


            .image-container {
                display: flex;
                flex-wrap: wrap;
                justify-content: flex-start;
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
