<template>
    <div class='Poetry-container mini-container'>
        <div class="left">
            <h6>每日一言</h6>
            <p>{{ poetry.hitokoto }}</p>
            <h5>《{{ poetry.from }}》{{ poetry.from_who }}</h5>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive, watch } from 'vue';
import { getPoetry } from "../api/request"
let poetry: any = ref("")
onMounted(async () => {
    poetry.value = await getPoetry().then((res: any) => res)
})

</script>

<style scoped lang='less'>
.Poetry-container {
    flex: 0 0 23%;
    margin-top: 1.5rem;
    width: 100%;
    padding: 1rem;
    border-radius: 5px;
    box-shadow: 5px 5px 17px #252844,
        -5px -5px 17px #33385e;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);

    &::after {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        background: url("https://picsum.photos/200");
        background-size: cover;
        background-repeat: no-repeat;
        filter: blur(10px);
        z-index: 1;
    }

    .left {
        width: 100%;
        position: relative;
        z-index: 999;
        color: aliceblue;

        h6 {
            text-align: center;
            font-size: 1rem;
            margin-bottom: .4rem;
        }

        p {
            font-size: 1rem;
            margin: 1.8rem 0;
        }

        h5 {
            font-size: 0.8rem;
            text-align: right;
            font-weight: 100;
        }
    }
}
</style>