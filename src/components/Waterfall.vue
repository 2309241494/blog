<template>
    <div class="masonry">
        <div class="item" v-for="(item, index) in blogList" :key="index">
            <el-image class="img" loading="lazy" :preview-src-list="[item.cover]" :src="item.cover" />
            <div class="title">
                <div class="tag">
                    <el-tag v-for="(tag, index) in item.tag" :key="index" :style="{ color: item.color }">{{ tag }}</el-tag>
                </div>
                <h2 :style="{ color: getHoverColor(item) }" @mouseover="setHoverColor(item)" @mouseout="resetHoverColor">{{
                    item.name }}</h2>
            </div>
            <div class="date">
                <i class="iconfont" :class="item.icon" :style="{ color: item.color }"></i>
                <p>
                    {{ item.date }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue';
interface Props {
    blogList: {
        name: string;
        url: string;
        color: string;
        icon: string;
        desc: string;
        type: number;
        date: string;
        cover: string;
        tag: []
    }[]
}
const props = withDefaults(defineProps<Props>(), {
})

const hoverColors = reactive(new Map())

const setHoverColor = (item: any) => {
    hoverColors.set(item, item.color)
}

const resetHoverColor = () => {
    hoverColors.clear()
}

const getHoverColor = (item: any) => {
    return hoverColors.get(item) || ""
}

onMounted(() => {
})
</script>

<style scoped lang='less'>
@border-color: 1px solid rgba(255, 255, 255, 0.1);

.masonry {
    width: 100%;
    columns: 2;
    column-gap: 20px;

    .item {
        width: 100%;
        break-inside: avoid;
        margin-bottom: 20px;
        background-color: #1f1f1f;
        border-radius: 15px;
        padding: 15px 0;
        border: @border-color;

        .title {
            padding: 0 30px;
            margin: 20px 0;

            :deep(.el-tag) {
                margin-right: 8px;
                font-size: 16px;
                background: #383935;
                border: none;
                padding: 18px 20px;
                border-radius: 10px;
                letter-spacing: 1px;
                border: 1px solid;
            }

            h2 {
                margin-top: 15px;
                letter-spacing: 1px;
                text-indent: 5px;
                font-size: 20px;
                text-indent: 0;
                width: 300px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                cursor: pointer;
                transition: all 0.3s;
            }
        }

        .date {
            border-top: @border-color;
            display: flex;
            align-items: center;
            padding: 15px 30px 0 30px;

            .iconfont {
                margin-right: 10px;
                font-size: 20px;
            }

            P {
                color: rgba(255, 255, 255, 0.65);
            }
        }

        .img {
            border-radius: 15px;
            margin: 0 15px;
        }
    }
}

@media screen and (min-width: 1024px) and (max-width: 1439.98px) {
    .masonry {
        width: 96vw;
        columns: 3;
        column-gap: 20px;
    }
}

@media screen and (min-width: 768px) and (max-width: 1023.98px) {
    .masonry {
        width: 96vw;
        columns: 2;
        column-gap: 20px;
    }
}

@media screen and (max-width: 767.98px) {
    .masonry {
        width: 96vw;
        columns: 1;
    }
}
</style>