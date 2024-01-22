<template>
  <div class='index-container container'>
    <div class="left">
      <Sidebar icon="icon-guanyuwo" color="#f54888" title="ABOUT" main-title="ME" />
    </div>
    <div class="main">
      <div class="title">
        <Title title="About" main-title="ME" />
      </div>
      <Subhead title="基本信息" bg-color="#f54888" />
      <div class="content">
        <div class="mini-container content-container">
          <p>
            {{ introduce }}
          </p>
          <div class="personal-data">
            <div class="personal-item" v-for="(item, index) in personalData.arr" :key="index">
              <i class="iconfont icon-tubiaoji2_zhixiang"></i>
              <span>{{ item.title }} ：</span>
              <span>{{ item.value }}</span>
            </div>
          </div>
          <div class="icons">
            <a :href=item.path v-for="(item, index) in iconList" :key="index" target="_blank"><i class="iconfont"
                :class="[item.icon]"></i></a>
          </div>
          <div class="button">
            <Button />
          </div>
        </div>

      </div>
      <Subhead title="个人经历" bg-color="#fa709a" />
      <div class="mini-container work-container">
        <div class="work">
          <div class="top">
            <h2>教育经历</h2>
          </div>
          <div class="bottom" v-for="(item, index) in education" :key="index">
            <p><i class="iconfont icon-tubiaoji2_zhixiang"></i><span>学校名称：</span> {{ item.school }}</p>
            <p> <i class="iconfont icon-tubiaoji2_zhixiang"></i><span>所学专业：</span> {{ item.major }}</p>
            <p> <i class="iconfont icon-tubiaoji2_zhixiang"></i><span>时间：</span> {{ item.time }}</p>
            <p>{{ item.described }}</p>
          </div>
        </div>
        <div class="work">
          <div class="top">
            <h2>工作经历</h2>
          </div>
          <div class="bottom" v-for="(item, index) in work" :key="index">
            <p> <i class="iconfont icon-tubiaoji2_zhixiang"></i><span>公司：</span>{{ item.work }}</p>
            <p> <i class="iconfont icon-tubiaoji2_zhixiang"></i><span>职位：</span>{{ item.job }}</p>
            <p> <i class="iconfont icon-tubiaoji2_zhixiang"></i><span>时间：</span>{{ item.time }}</p>
            <p>{{ item.described }}</p>
          </div>
        </div>
        <div class="work">
          <div class="top">
            <h2>项目经历</h2>
          </div>
          <div class="bottom" v-for="(item, index) in project" :key="index">
            <p> <i class="iconfont icon-tubiaoji2_zhixiang"></i><span>项目名称：</span>{{ item.title }}</p>
            <p> <i class="iconfont icon-tubiaoji2_zhixiang"></i><span>担任职位：</span>{{ item.job }}</p>
            <p> <i class="iconfont icon-tubiaoji2_zhixiang"></i><span>所在公司：</span>{{ item.work }}</p>
            <p> <i class="iconfont icon-tubiaoji2_zhixiang"></i><span>技术栈：</span>{{ item.skill }}</p>
            <p> <i class="iconfont icon-tubiaoji2_zhixiang"></i><span>时间：</span>{{ item.time }}</p>
            <p>{{ item.described }}</p>
          </div>
        </div>
        <Button title="前往项目页" router="/vite-blog/project" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, reactive } from 'vue';
import Sidebar from '@/components/Sidebar/index.vue';
import Title from '@/components/Title/index.vue';
import Subhead from '@/components/Subhead/index.vue'
import Button from '@/components/Button/index.vue'
const introduce = ref("我叫黎浪，所学专业是大数据技术与应用。作为一名前端开发者，我拥有扎实的 HTML、CSS 和 JavaScript 技能。我能够从设计师给出的图稿中构建出无障碍的、兼容性良好的网站，并且能够在保持代码清晰易读的同时，使用最佳的性能实践进行开发。我的兴趣爱好包括探索新技术、阅读前端文章、写博客、贡献开源社区等，对前端开发抱有浓厚的热情。我具有良好的虚心好学，并且有过团队协作开发的经验。在生活中我愿意在业余时间提升自己，愿意花时间提升技术水平，钻研新技术等。")
const personalData = reactive({
  arr: [
    { title: "姓名", value: "黎浪" },
    { title: "民族", value: "土家族" },
    { title: "出生日期", value: "2002.9.11" },
    { title: "电话", value: "17585857492" },
    { title: "邮箱", value: "webli666@foxmail.com" },
    { title: "微信", value: "Break_LoveFor" }
  ]
})
const iconList = ref(
  [{ icon: "icon-youxiang", path: "mailto:webli666@foxmail.com" },
  { icon: "icon-github", path: "https://github.com/2309241494" },
  { icon: "icon-gitee-fill-round", path: "https://gitee.com/LL--LL" },
  { icon: "icon-weixin1", path: "weixin://" }])

const education = ref([{ time: "2020-9 ~ 2023-7", school: "贵州工贸职业学院", major: "大数据技术与应用", described: "在校期间学习了Java、mysql、linux、Python等技术" }])
const work = ref([
  { time: "2022-10 ~ 2023-3", work: "四川均龙科技有限公司", job: "实习前端研发工程师", described: "钧龙科技是国内领先的BIM信息化集成方案提供商，目前主要定向服务于中国建筑集团等大型企业的信息化项目，在公司期间负责与 UI 设计师进行沟通，通过 HTML/CSS/JacaScript/React/vue/echarts 等其他技术还原页面，参与团队的沟通协调，按质按时完成分配的任务，对老项目进行维护更新等工作。" }])
const project = ref([{
  title: "党建后台", time: "2022.10 ~ 2322.11", job: "实习前端研发工程师", skill: "TypeScript、Vite、Sass、Vue3、Arco-Design", work: "四川均龙科技有限公司",
  described: "该项目住主要用于工作人员对前台页面的信息进行增删改查"
},
{
  title: "两岸三地小程序一期", time: "2023.01 ~ 2323.02", job: "实习前端研发工程师", skill: "uniapp、Sass、Vue3、Echarts", work: "四川均龙科技有限公司",
  described: "该项目分为多个地盘，每个地盘显示的数据以不同的图表进行可视化展示，使用了大量的Echarts来展示数据"
}])
</script>

<style scoped lang='less'>
.index-container {
  border-radius: 15px 0px 0px 15px;

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
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1rem 3rem 0 3rem;
    }

    .content {
      .content-container {
        padding-right: 18rem;

        p {
          color: #9c9c9c;
          font-size: .7rem;
          text-indent: 2em;
        }

        .personal-data {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;


          .personal-item:nth-child(even) {
            flex-basis: 30%;
          }

          .personal-item:nth-child(odd) {
            flex-basis: 70%;
          }


          .personal-item {
            font-size: .9rem;
            flex-basis: 50%;
            flex-shrink: 0;
            margin-top: 2rem;

            & span:last-child {
              color: #9c9c9c;
            }

            .iconfont {
              color: #00ffff;
              font-size: 1rem;
              vertical-align: bottom;
              margin-right: .5rem;
            }
          }
        }

        .icons {
          margin: 2.5rem 0;
          display: flex;
          align-items: flex-start;

          .iconfont {
            font-size: 1rem;
            color: black;
            margin-right: 1rem;
            background-color: white;
            padding: .5rem;
            border-radius: 50%;
            transition: all .5s;

            &:hover {
              color: white;
              background-color: black;
            }
          }
        }
      }
    }

    .back {
      cursor: pointer;
      font-size: 2rem;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      color: rgb(214, 214, 214);
      transition: all .5s;
      margin-top: 2rem;

      &:hover {
        color: aliceblue;
      }
    }

    .work-container {
      display: flex;
      flex-direction: column;

      .work {
        margin-bottom: 2rem;

        .top {
          background: #2c3051;
          text-align: center;
          padding: 1rem;
          color: aqua;
          font-size: .7rem;
        }

        .bottom {
          padding: 1rem;
          border: 1px solid #2c3051;
          border-top: none;

          p {
            margin: .5rem 0;
            font-size: .8rem;
            color: #9c9c9c;

            .iconfont {
              color: #00ffff;
              font-size: 1rem;
              vertical-align: bottom;
              margin-right: .5rem;
            }

            span {
              color: white;
            }
          }

          & p:last-child {
            color: #9c9c9c;
            font-size: .7rem;
            width: 50rem;
          }

        }
      }
    }
  }

}
</style>
