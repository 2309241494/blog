<template>
    <div class='Music-container'>
        <div class="bg"></div>
        <div class="cover">
            <img src="https://p2.music.126.net/E323i3eNPwkTYqCgoRT6gQ==/2359551953231145.jpg?param=130y130" alt="">
        </div>
        <!-- 歌曲描述 -->
        <div class='title'>
            <h6>AutumnLeaf - re:plus</h6>
            <span>纯音乐，请欣赏</span>
        </div>
        <div class="icon">
            <a href=""><i></i></a>
            <a href=""><i></i></a>
            <a href=""><i></i></a>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue';
onMounted(() => {
})
</script>

<style scoped lang='less'>
.Music-container {
    width: 90%;
    background-color: #2c3051;
    padding: 2rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;

    .bg {
        background-image: url("https://p2.music.126.net/E323i3eNPwkTYqCgoRT6gQ==/2359551953231145.jpg?param=130y130");
        background-size: 100% 100%;
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 1;
        filter: blur(10px);
    }

    .cover {
        width: 12rem;
        height: 12rem;
        background-color: black;
        border-radius: 60%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        z-index: 999;

        img {
            border-radius: 50%;
        }
    }

    .title {
        position: relative;
        z-index: 999;
    }
}
</style>