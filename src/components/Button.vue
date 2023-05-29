<template>
    <div class='Button-container'>
        <button @click="handleClick">
            <i class="iconfont" :class="[props.icon]"></i>
            <p>{{ props.title }}</p>
        </button>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue';
import { useRouter } from "vue-router"
interface Props {
    icon: string,
    title: string,
    router: string | object
}
const props = withDefaults(defineProps<Props>(), { icon: "icon-tubiaoji2_zhixiang", title: "联系我", router: "/message" })
const router = useRouter()
const handleClick = () => {
    router.push(props.router)
}
onMounted(() => {

})
</script>

<style scoped lang='less'>
.Button-container {
    button {
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        border-radius: 5px;
        background-image: linear-gradient(to right, #041a2b, #1e3a5f);
        background-position: -102% 0;
        background-size: 200% 100%;
        transition: background-position 1s, background-color 1s;

        &:hover {
            background-position: 90% 0;
            background-color: #1e3a5f;
        }

        .iconfont {
            color: #06fff7;
            font-size: 1.4rem;
            margin-right: 1rem;

        }
    }
}

@keyframes start {
    from {
        transform: scale(3) translateX(1rem);
    }

    to {
        transform: scale(1);
    }
}
</style>