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
    flex: 0 0 25%;
    margin-top: 1.5rem;
    width: 90%;
    padding: 1rem;
    border-radius: 5px;
    background: linear-gradient(225deg, #3a3f66, #313556);
    box-shadow: -12px 12px 24px #2c304e,
        12px -12px 24px #404670;
    display: flex;
    justify-content: center;
    align-items: center;

    .left {
        width: 100%;

        h6 {
            text-align: center;
            font-size: 1rem;
            margin-bottom: .4rem;
        }

        p {
            font-size: 1rem;
            color: rgb(212, 212, 212);
            margin: 1.8rem 0;
        }

        h5 {
            font-size: 0.5rem;
            text-align: right;
            font-weight: 100;
        }
    }
}
</style>