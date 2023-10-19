<template>
    <div class="masonry">
        <div class="item" v-for="(item, index) in blogList" :key="index">
            <el-image class="img" :src="item.cover" />
            <h2>{{ item.name }}</h2>
            <p>
                {{ item.desc }}
            </p>
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
        type: string;
        date: string;
        cover: string;
    }[]
}
const props = withDefaults(defineProps<Props>(), {
})

onMounted(() => {
})
</script>

<style scoped lang='less'>
.masonry {
    width: 100%;
    columns: 3;
    column-gap: 20px;

    .item {
        width: 100%;
        break-inside: avoid;
        margin-bottom: 20px;
        position: relative;
        overflow: hidden;

        .img {
            width: 100%;
            // max-height: 300px;
        }
    }

    h2 {
        text-align: center;
        position: absolute;
        bottom: 20%;
        left: 50%;
        transform: translateX(-50%);
        letter-spacing: 1px;
        text-shadow: 2px 2px 4px #000000;
        width: 100%;
    }

    P {
        color: #555;
        position: absolute;
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