<template>
    <div class='mark-container' v-show="isMark">
        <div class="main">
            <mavon-editor class="mavon-editor" v-model="text" :subfield="false" :defaultOpen="setting.defaultOpen"
                :toolbarsFlag="setting.toolbarsFlag" :previewBackground="setting.previewBackground"
                :codeStyle="setting.codeStyle" :editable="setting.editable" :scrollStyle="setting.scrollStyle" />
            <el-icon class="circle-close" @click="markClose">
                <CircleCloseFilled />
            </el-icon>
        </div>
    </div>
</template>

<script setup lang="ts" >
import { ref, onMounted, reactive, watch } from 'vue';
import { CircleCloseFilled } from '@element-plus/icons-vue'
interface Props {
    isMark?: Boolean,
    markDown?: String
}
const props = withDefaults(defineProps<Props>(), {
})
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
        width: 90%;
        height: 90%;
        overflow-y: scroll;
        padding: 50px 100px;
        border-radius: 5px;
        background-color: rgb(206, 206, 206);

        .circle-close {
            position: fixed;
            top: 7%;
            right: 3%;
            font-size: 80px;
            cursor: pointer;
            color: white;
            transition: all 0.3s;

            &:hover {
                color: black;
            }
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