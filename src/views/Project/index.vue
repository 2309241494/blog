<template>
  <div class='index-container container'>
    <div class="left">
      <Sidebar icon="icon-xiangmu" color="#f5cae6" title="MY" main-title="PROJECT"/>
    </div>
    <div class="main">
      <div class="title">
        <Title title="MY" main-title="PROJECT"/>
      </div>
      <Subhead title="项目列表" bg-color="#f5cae6"/>
      <div class="content">
        <div class="mini-container menu-container">
          <div class="menu">
            <span :class="[index === menuIndex ? 'active' : '']" v-for="(item, index) in menu" :key=index
                  @click="menuClick(item.type)">{{ item.title }}
            </span>
          </div>
          <div class="project" v-loading="loading">
            <div class="project-item" v-for="(item, index) in projectList" :key="index">
              <el-image fit="cover" class="project-img" :src="item.imgUrl"/>
              <div class="button" @click="clickDetail(item)"><i
                  class="iconfont icon-tubiaoji2_zhixiang"></i>查看详情
              </div>
              <div class="text">
                <span>{{ item.title }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Detail :show=show @showChange="changeShow" :arr=detailArr />
  </div>
</template>

<script lang="ts" setup>
import {ref, onMounted, reactive} from 'vue';
import Sidebar from '@/components/Sidebar/index.vue';
import Title from '@/components/Title/index.vue';
import Subhead from '@/components/Subhead/index.vue';
import Detail from './Detail.vue';
import {getProject} from '@/api/request'
// 菜单项
const menu = ref([{title: "全部", type: 0}, {title: "PC", type: 1}, {title: "移动端", type: 2}, {title: "微信小程序", type: 3}])

// 默认,切换处理
let menuIndex = ref(0)
const menuClick = (type: number) => {
  queryList.value.type = type
  menuIndex.value = type
  getProjectList()
}

// 显示Detail方法
let show = ref(false)
// 传递给Detail的数据
let detailArr = ref({})
const clickDetail = (item: object) => {
  detailArr.value = item
  show.value = true;
}
const changeShow = (e: any) => {
  show.value = e;
}

interface Project {
  imgUrl: string;
  introduce: string;
  online: string;
  soundCode: string;
  title: string;
  type: number;
}

// 定义包含 Project 对象的数组类型
type ProjectArray = Project[];
//项目列表项
const projectList = ref<Project[]>([])
let queryList = ref({
  type: 0
})
const loading = ref(false)
const getProjectList = () => {
  loading.value = true
  getProject(queryList.value).then((res: any) => {
    const {current_data, current_page, total_page} = res.data
    projectList.value = current_data
  }).finally(() => loading.value = false)
}

onMounted(() => {
  getProjectList()
})

const newList = [...projectList.value]
</script>

<style scoped lang='less'>
.index-container {
  border-radius: 15px 0 0 15px;


  .left {
    flex: 0 0 5%;
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
      .menu-container {
        .menu {
          display: flex;
          align-items: center;
          margin-bottom: 2rem;

          span {
            margin-right: 3rem;
            cursor: pointer;
          }

          .active {
            background-color: #2c3051;
            border-radius: 5px;
            padding: .5rem 1rem;
            border: 1px solid white;
          }
        }

        .project {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          gap: 2rem;

          .project-item {
            flex-basis: calc(48%);
            background-color: white;
            display: flex;
            justify-content: center;
            border-radius: 5px;
            cursor: pointer;
            position: relative;
            overflow: hidden;

            .text {
              position: absolute;
              font-size: 2rem;
              color: aqua;
              font-weight: 900;
              left: -30%;
              bottom: 6%;
              transition: all .5s;
              z-index: 999;
            }

            &:hover .text {
              left: 7%;
            }

            .button {
              position: absolute;
              z-index: 99;
              right: -30%;
              top: 6%;
              transition: .5s all;
              padding: 1rem;
              background-color: #2c3051;
              border-radius: 5px;
              border: 1px solid white;

              .iconfont {
                margin-right: .5rem;
                font-size: 1.5rem;
                vertical-align: -.2rem;
                color: aqua;
              }

              &:hover {
                background-color: #363b5f;
              }
            }

            &:hover .button {
              right: 7%;
              top: 6%;
            }

            &::after {
              position: absolute;
              content: "";
              background-color: rgba(0, 0, 0, 0.5);
              height: 100%;
              width: 100%;
              opacity: 0;
              transition: all .5s;
              z-index: 1;
              border: 3px solid white;
              bottom: 0;
            }

            &:hover .project-img {
              transform: scale(1.03);
            }

            &:hover::after {
              opacity: 1;
            }

            .project-img {
              width: 100%;
              height: 380px;
              border-radius: 5px;
              background-repeat: no-repeat;
              background-size: cover;
              background-position: center center;
              transition: all .5s;
            }
          }
        }

      }
    }
  }

}
</style>
