<template>
  <div class='visualization-container'>
    <PanelGroup/>
    <BarChart/>
    <Card/>
    <Model :showModel="true"/>
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted, reactive} from 'vue';
import PanelGroup from '../PanelGroup/index.vue';
import BarChart from '../BarChart/index.vue';
import Card from '../Card/index.vue';
import Model from "@/components/Model/index.vue";

onMounted(() => {
})
</script>

<style scoped lang='less'>
.visualization-container {
  width: 100%;
  padding: 30px 30px 130px 30px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0;
    /* 滚动条宽度 */
  }
}
</style>
