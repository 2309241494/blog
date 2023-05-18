<template>
  <div class='index-container container'>
    <div class="left">
      <Sidebar icon="icon-guanyuwo" color="#fa709a" title="ABOUT" main-title="ME" />
    </div>
    <div class="main">
      <i class="back iconfont icon-cuowu" @click="goBack"></i>
      <div class="title">
        <Title title="About" main-title="ME" />
      </div>
      <Subhead title="基本信息" bg-color="#fa709a" />
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
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { ref, onMounted, reactive } from 'vue';
import Sidebar from '../../components/Sidebar.vue';
import Title from '../../components/Title.vue';
import Subhead from '../../components/Subhead.vue'
import Button from '../../components/Button.vue'
const router = useRouter();
const goBack = () => {
  router.back();
}
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

</script>

<style scoped lang='less'>
.index-container {

  .left {
    flex: 0 0 5%;
  }

  .main {
    flex: 1;
    overflow-y: scroll;
    padding: 0 3rem;

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
          font-size: .8rem;
          text-indent: 2em;
        }

        .personal-data {
          // margin: 2rem 0;
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
            flex-basis: 50%;
            flex-shrink: 0;
            margin-top: 2rem;

            & span:last-child {
              color: #9c9c9c;
            }

            .iconfont {
              color: #00ffff;
              font-size: 1.3rem;
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
            font-size: 1.5rem;
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
      font-size: 2.4rem;
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
  }

}
</style>