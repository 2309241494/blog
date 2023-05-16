<template>
    <div class='Button-container'>
        <button @click="handleClick" v-for="(item, index) in buttonList" :key="index">
            <i class="iconfont" :class="[item.icon]"></i>
            <p>{{ item.title }}</p>
        </button>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue';
import { useRouter } from "vue-router"
const buttonList = ref([{ icon: "icon-jurassic_message", title: "给我留言" }])
const router = useRouter()
const handleClick = () => {
    router.push("/message")
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
        // border: 1px solid #fff;
        border-radius: 5px;
        background-image: linear-gradient(to right, #041a2b, #1e3a5f);
        background-position: -101% 0;
        background-size: 200% 100%;
        transition: background-position 1s, background-color 1s;

        &:hover {
            background-position: 100% 0;
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