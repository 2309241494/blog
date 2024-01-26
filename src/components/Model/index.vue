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
import {ref, onMounted} from "vue";
import {Engine, Scene, ArcRotateCamera, Vector3} from "@babylonjs/core";
import * as BABYLON from "babylonjs";
import "babylonjs-loaders";

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
}
onMounted(async () => {
  setTimeout(() => {
    if (bjsCanvas.value) {
      createScene(bjsCanvas.value, "https://mp-cd880b8b-a556-4424-ba3e-77537732bc82.cdn.bspapp.com/spider_cat.glb");
    }
  }, 1000)
});
const createScene = async (canvas: HTMLCanvasElement, url: string) => {
  const engine = new Engine(canvas);
  const scene = new Scene(engine);
  scene.clearColor = new BABYLON.Color4(
      40 / 255,
      44 / 255,
      52 / 255,
      1
  );
  const camera = new ArcRotateCamera(
      "camera",
      -Math.PI / 2, // 水平角度
      Math.PI / 3, // 垂直角度
      10, // 距离
      new Vector3(0, 1, 0), // 观察目标位置，确保观察模型正面
      scene
  );
  camera.attachControl(canvas, false);
  // 添加平行光
  const directionalLight = new BABYLON.DirectionalLight(
      "directionalLight",
      new BABYLON.Vector3(0, -1, 0), // 光照方向，朝向模型的表面
      scene
  );
  directionalLight.position = new BABYLON.Vector3(0, 10, 0); // 光源位置，放置在模型上方
  directionalLight.diffuse = new BABYLON.Color3(1, 1, 1); // 漫反射光颜色
  directionalLight.specular = new BABYLON.Color3(1, 1, 1); // 镜面反射光颜色
  BABYLON.SceneLoader.Append("", url, scene, function (scene) {
    scene.createDefaultCameraOrLight(true, true, true);
    // 模型加载完成后的回调函数
    scene.executeWhenReady(function () {
      // 获取模型实例
      const model = scene.meshes[0]; // 假设模型是场景中的第一个网格
      // 计算模型的包围盒
      const boundingInfo = model.getBoundingInfo();
      // 计算模型的中心位置
      const center = boundingInfo.boundingBox.center;
      // 将模型居中
      model.position = model.position.subtract(center);
      // 调整模型朝向
      const target = new BABYLON.Vector3(0, 0, 3); // 设置相机朝向的目标点
      model.lookAt(target);
    });
  });
  engine.runRenderLoop(() => {
    scene.render();
  });
}

</script>
<style scoped lang="less">

</style>
