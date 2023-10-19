<template>
    <div class='detail-container'>
        <mavon-editor class="mavon-editor" v-model="source" :subfield="false" :defaultOpen="setting.defaultOpen"
            :toolbarsFlag="setting.toolbarsFlag" :previewBackground="setting.previewBackground"
            :codeStyle="setting.codeStyle" :editable="setting.editable" :scrollStyle="setting.scrollStyle" />
    </div>
</template>

<script setup lang="ts" >
import { ref, onMounted, reactive } from 'vue';
const source = `
## 卸载node

### windows

进入添加和删除程序进行卸载

### mac

https://www.jianshu.com/p/88cd55296983

## 下载安装 nvm

### windows

链接: https://pan.baidu.com/s/1uoxlk8CVNHV2KTCwIGbQMQ?pwd=yi5m 

提取码: yi5m 

### mac

修改 HOSTS（建议使用 SwitchHosts）

\`\`\`javascript
? raw.githubusercontent.com
? objects.githubusercontent.com
? pkg-containers.githubusercontent.com
\`\`\`

> ？位置需要通过 https://www.ipaddress.com/ 查询 ip

打开终端运行下面的命令

\`\`\`shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash
\`\`\`

## nvm 的基本使用

\`\`\`shell
# 查看当前安装和使用的 node 版本
nvm list

# 安装某个 node 版本
nvm install 版本号

# 切换 node 版本
nvm use 版本号

# 设置默认版本
nvm alias v12.22.12
\`\`\`
`;
const setting = {
    subfield: false,// 单双栏模式
    defaultOpen: 'preview',//edit： 默认展示编辑区域 ， preview： 默认展示预览区域 
    editable: false,
    toolbarsFlag: false,
    scrollStyle: true,
    previewBackground: "#f4f4f5",
    codeStyle: 'androidstudio'
}
onMounted(() => {
})
</script>

<style scoped lang='less'>
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