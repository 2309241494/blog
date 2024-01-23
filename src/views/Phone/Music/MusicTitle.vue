<template>
  <div class="music-title">
    <h2>{{ title }}</h2>
    <div class="right" @click="handleMore">
      <span>更多</span>
      <el-icon class="right-icon">
        <ArrowRightBold/>
      </el-icon>
    </div>
  </div>
</template>
<script setup lang="ts">
import {ArrowRightBold} from "@element-plus/icons-vue";

const props = defineProps({
  title: {
    type: String,
    default: '热门歌单'
  },
  handleMore: {
    type: Function,
    default: () => {
    }
  }
})
</script>
<style scoped lang="less">
.music-title {
  color: #333333;
  padding: 0 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  .right {
    cursor: pointer;
    color: #c4ccd3;
    display: flex;
    align-items: center;

    .right-icon {
      font-size: 12px;
      font-weight: bold;
    }

    span {
      font-size: 12px;
      letter-spacing: 1px;
    }
  }

  h2 {
    font-size: 17px;
    position: relative;

    &:after {
      content: "";
      position: absolute;
      width: 52%;
      background: #ff0269;
      height: 5px;
      right: -2px;
      bottom: 3px;
      opacity: 0.5;
      border-radius: 2px;
    }
  }
}
</style>
