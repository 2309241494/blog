<template>
  <!--  fullscreen 是否全屏-->
  <el-dialog
      :modelValue="showModel"
      title="Tips"
      width="90%"
      :before-close="handleCloseModel"
      append-to-body
  >
    <div v-loading="loading" class="model">
      <canvas
          class="bjsCanvas"
          ref="bjsCanvas"
          width="1300"
          height="700"
          @click.stop
      />
      <i class="el-icon-error" @click="handleCloseModel"></i>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="showModel = false">Cancel</el-button>
        <el-button type="primary" @click="showModel = false">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>

</template>
<script setup lang="ts">
import {createScene} from "@/utils/ModelLoad";
import {ref, onMounted} from "vue";

const props = defineProps({
  modelUrl: {
    type: String,
    default: ''
  },
  showModel: {
    type: Boolean,
    default: true
  }
})
const bjsCanvas = ref(null);
const loading = ref(false);
const model = ref(true)
const handleCloseModel = () => {
  console.log("aaa")
}
onMounted(() => {
  if (bjsCanvas.value) {
    createScene(bjsCanvas.value);
  }
});
</script>
<style scoped lang="less">

</style>
