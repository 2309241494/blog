<template>
  <div class='index-container container'>
    <div class="left">
      <Sidebar icon="icon-aixin" color="#ffb8c6" title="MY" main-title="LIKE"/>
    </div>
    <div class="main">
      <div class="title">
        <Title title="MY" main-title="LIKE"/>
      </div>
      <Subhead title="生活碎片" bg-color="#ffb8c6"/>
      <div class="content">

      </div>
    </div>
    <Model :showModel="true"/>
  </div>
</template>

<script lang="ts" setup>
import {ref, onMounted, reactive} from 'vue';
import Sidebar from '@/components/Sidebar/index.vue';
import Title from '@/components/Title/index.vue';
import Subhead from '@/components/Subhead/index.vue'
import {getHeroData} from '@/api/request';
import Model from '@/components/Model/index.vue';

let cards = ref([])
let queryObj = ref({
  page: 1,
  size: 4,
  type: 0
})
let currentPage = ref(0)
let totalPage = ref(0)
const handleCurrentPag = (value: number) => {
  queryObj.value.page = value
  initData()
}
const handleChangeMenu = (e: any) => {
  queryObj.value.type = Number(e.target.value)
  queryObj.value.page = 1
  initData()
}
const initData = () => {
  getHeroData(queryObj.value).then((res: any) => {
    const {current_data, current_page, total_page} = res.data
    cards.value = current_data
    currentPage.value = current_page - 1
    totalPage.value = total_page
  })
}
onMounted(() => {
  initData()
})
</script>

<style scoped lang='less'>
@shadow: 0.3rem 0.3rem 0.6rem #000000a2, -0.2rem -0.2rem 0.5rem #000000;
@inner-shadow: inset .2rem .2rem .5rem #181a2c,
  inset -.2rem -.2rem .5rem #4450ac;

.index-container {
  border-radius: 15px 0 0 15px;

  .left {
    flex: 0 0 5%;
  }

  :deep(.el-col) {
    margin-bottom: 20px;
  }

  .main {
    flex: 1;
    overflow-y: scroll;
    padding: 30px 30px 130px 30px;

    &::-webkit-scrollbar {
      width: 0;
      /* 滚动条宽度 */
    }

    .title {
      // flex: 0 0 20%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1rem 3rem 0 3rem;
    }

    .content {
      .segmented-control {
        grid-column: 3 / 4;
        grid-row: 1 / 2;
        width: 20.4rem;
        height: 4rem;
        box-shadow: @shadow;
        border-radius: 1rem;
        display: flex;
        align-items: center;
        position: relative;
        margin: 25px 0 15px 0;

        input {
          display: none;
        }

        > input:checked + label {
          transition: all .5s ease;
          color: #6d5dfc;
        }

        &__1,
        &__2,
        &__3 {
          width: 6.8rem;
          height: 3.6rem;
          font-size: 1.4rem;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          color: #9baacf;
          transition: all .5s ease;

          &:hover {
            color: #6d5dfc;
          }
        }

        &__color {
          position: absolute;
          height: 3.4rem;
          width: 6.2rem;
          margin-left: .3rem;
          border-radius: .8rem;
          box-shadow: @inner-shadow;
          pointer-events: none;
        }
      }

      #tab-1:checked ~ .segmented-control__color {
        transform: translateX(0);
        transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      }

      #tab-2:checked ~ .segmented-control__color {
        transform: translateX(6.8rem);
        transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      }

      #tab-3:checked ~ .segmented-control__color {
        transform: translateX(13.6rem);
        transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      }


      .image-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        gap: 4rem;

        .image-item {
          width: calc(50% - 2rem);
          height: 20rem;

          img {
            cursor: pointer;
            object-fit: cover;
            width: 100%;
            border-radius: 5px;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>
