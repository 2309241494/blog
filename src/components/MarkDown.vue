<template>
    <div class='mark-container' v-show="isMark">
        <div class="main" ref="main">
            <mavon-editor class="mavon-editor" v-model="text" :subfield="false" :defaultOpen="setting.defaultOpen"
                :toolbarsFlag="setting.toolbarsFlag" :previewBackground="setting.previewBackground"
                :codeStyle="setting.codeStyle" :editable="setting.editable" :scrollStyle="setting.scrollStyle" />
            <el-icon class="circle-close icon" @click="markClose">
                <Close />
            </el-icon>
            <el-icon class="full-screen icon" @click="handleFullScreen">
                <FullScreen />
            </el-icon>
        </div>
    </div>
</template>

<script setup lang="ts" >
import { ref, onMounted, reactive, watch } from 'vue';
import { Close, FullScreen } from '@element-plus/icons-vue'
interface Props {
    isMark?: Boolean,
    markDown?: String
}
const props = withDefaults(defineProps<Props>(), {
})
// 处理全屏
const main = ref<HTMLElement>()
const handleFullScreen = () => {
    const element = main.value;
    if (element) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        }
    }
}
let text = ref("")
watch(() => props.isMark, (newVal) => {
    // 处理 isMark 变化的逻辑
    if (newVal) {
        text.value = props.markDown as string
    }
});
const setting = {
    subfield: false,// 单双栏模式
    defaultOpen: 'preview',//edit： 默认展示编辑区域 ， preview： 默认展示预览区域 
    editable: false,
    toolbarsFlag: false,
    scrollStyle: true,
    previewBackground: "#f4f4f5",
    codeStyle: 'androidstudio'
}
const emit = defineEmits(["closeMark"])
const markClose = () => {
    emit("closeMark")
}

</script>

<style scoped lang='less'>
@keyframes shake {
    0% {
        transform: translateX(0);
    }

    10% {
        transform: translateX(-10px);
    }

    20% {
        transform: translateX(10px);
    }

    30% {
        transform: translateX(-10px);
    }

    40% {
        transform: translateX(10px);
    }

    50% {
        transform: translateX(-10px);
    }

    60% {
        transform: translateX(10px);
    }

    70% {
        transform: translateX(-10px);
    }

    80% {
        transform: translateX(10px);
    }

    90% {
        transform: translateX(-10px);
    }

    100% {
        transform: translateX(0);
    }
}

.mark-container {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;

    .main {
        position: relative;
        width: 91%;
        height: 90%;
        overflow-y: scroll;
        padding: 70px 100px;
        border-radius: 5px;
        background-color: rgb(206, 206, 206);

        .icon {
            position: fixed;
            top: 6%;
            right: 130px;
            font-size: 60px;
            cursor: pointer;
            color: #cecece;
            transition: all 0.3s;
            padding: 10px;
            background-color: #f4f4f5;
            border-radius: 50%;

            &:hover {
                animation: shake 1s infinite;
            }
        }

        .circle-close {}

        .full-screen {
            top: 12%;
        }

        &::-webkit-scrollbar {
            width: 0;
            /* 滚动条宽度 */
        }
    }
}

:deep(.v-note-wrapper) {
    z-index: 99;
}

:deep(.single-show) {
    border-radius: 5px;

    .hljs {
        border-radius: 2px;
        padding: 10px;
    }
}
</style>