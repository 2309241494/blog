<template>
  <div class='card-container'>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span class="card-title">统计</span>
          <button class="custom-btn btn-12"><span @click="handleMenu">Click!</span><span>前往BLOG</span></button>
        </div>
      </template>
      <el-row :gutter="20" class="card-item-container">
        <el-col :span="8" class="card-item">
          <RadialChart/>
        </el-col>
        <el-col :span="16" class="card-item">
          <LineChart/>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import {ref, onMounted, reactive} from 'vue';
import {useMain} from '@/store';
import router from '@/router';
import RadialChart from '../RadialChart/index.vue';
import LineChart from '../LineChart/index.vue';

const mainStore = useMain();
const handleMenu = () => {
  // mainStore.setChangeModule(1);  // 调用 actions 方法改变 changeModule 的值
  router.push('/blog/notes')

}

</script>

<style scoped lang='less'>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-item-container {
  color: #C0C4CC;
  padding: 0 20px;

  .card-item {
    cursor: pointer;
  }
}

.card-title {
  font-size: 1rem;
  font-weight: bold;
}

:deep(.el-card__header) {
  border-bottom: none;
  padding: 25px;
}

:deep(.el-card__body) {
  padding: 0;
}

.box-card {
  background-color: #363b5f;
  color: aliceblue;
  border: none;
  box-shadow: 5px 5px 17px #252844,
    -5px -5px 17px #33385e;
}

.text {
  font-size: 14px;
}

/* 12 */
.custom-btn {
  width: 130px;
  height: 40px;
  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, .5),
  7px 7px 20px 0px rgba(0, 0, 0, .1),
  4px 4px 5px 0px rgba(0, 0, 0, .1);
  outline: none;
}

.btn-12 {
  position: relative;
  right: 20px;
  bottom: 20px;
  border: none;
  box-shadow: none;
  width: 130px;
  height: 40px;
  line-height: 42px;
  -webkit-perspective: 230px;
  perspective: 230px;
}

.btn-12 span {
  background: rgb(0, 172, 238);
  background: linear-gradient(0deg, rgba(0, 172, 238, 1) 0%, rgba(2, 126, 251, 1) 100%);
  display: block;
  position: absolute;
  width: 130px;
  height: 40px;
  border-radius: 5px;
  margin: 0;
  text-align: center;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all .3s;
  transition: all .3s;
}

.btn-12 span:nth-child(1) {
  -webkit-transform: rotateX(90deg);
  -moz-transform: rotateX(90deg);
  transform: rotateX(90deg);
  -webkit-transform-origin: 50% 50% -20px;
  -moz-transform-origin: 50% 50% -20px;
  transform-origin: 50% 50% -20px;
}

.btn-12 span:nth-child(2) {
  -webkit-transform: rotateX(0deg);
  -moz-transform: rotateX(0deg);
  transform: rotateX(0deg);
  -webkit-transform-origin: 50% 50% -20px;
  -moz-transform-origin: 50% 50% -20px;
  transform-origin: 50% 50% -20px;
}

.btn-12:hover span:nth-child(1) {
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, .5),
  7px 7px 20px 0px rgba(0, 0, 0, .1),
  4px 4px 5px 0px rgba(0, 0, 0, .1);
  -webkit-transform: rotateX(0deg);
  -moz-transform: rotateX(0deg);
  transform: rotateX(0deg);
}

.btn-12:hover span:nth-child(2) {
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, .5),
  7px 7px 20px 0px rgba(0, 0, 0, .1),
  4px 4px 5px 0px rgba(0, 0, 0, .1);
  color: transparent;
  -webkit-transform: rotateX(-90deg);
  -moz-transform: rotateX(-90deg);
  transform: rotateX(-90deg);
}
</style>
