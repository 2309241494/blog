<template>
  <!-- animate__animated animate__fadeIn -->
  <div class="about-container">
    <div class="main-container">
      <div class="top">
        <div class="Avatar">
          <Avatar class="img" src="https://marketplace.canva.cn/ShLdI/MACHw9ShLdI/2/tl/canva-MACHw9ShLdI.png" />
        </div>
        <div class="introduce">
          <Title title="About" />
          <div class="particulars">
            <h2 class=" title">黎浪</h2>
            <p style="font-size: 17px;">本人热爱 <strong
                style="color: white">前端行业</strong>，性格热情开朗，待人友好，为人真诚谦虚。能吃苦耐劳，尽职尽责，有耐心。学习刻苦认真，为人诚恳勤奋好学、
              脚踏实地，积极进取。有较强的团队精神，工作积极，勤奋刻苦，态度认真。抗压能力和强烈的责任感
              ...</p>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="one">
          <h3>工作经验</h3>
          <div class="content" v-for="item in   workArr">
            <p>{{ item.start }} ~ {{ item.end }}</p>
            <h3>{{ item.title }}</h3>
            <span>{{ item.post }}</span>
          </div>
        </div>
        <div class="two">
          <h3>教育经历</h3>
          <div class="content" v-for="item in   school">
            <p>{{ item.start }} ~ {{ item.end }}</p>
            <h3>{{ item.title }}</h3>
            <span>{{ item.post }}</span>
          </div>
        </div>
        <div class="three">
          <div class="mall contact">
            <i class="iconfont icon-youxiang"></i>
            <span>
              <h5>E-mail</h5>
              <a href="mailto:2309241494@qq.com" target="_blank">2309241494@qq.com</a>
            </span>
          </div>
          <div class="phont contact">
            <i class="iconfont icon-weixin1"></i>
            <span>
              <h5>WeChat</h5>
              <a href="weixin://Break_LoveFor" target="_blank">Break_LoveFor</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Title from "/src/components/Title/index.vue";
import Avatar from "/src/components/Avatar/index.vue";
import { reactive } from "vue";

// 表单数据
const workArr = reactive([{ title: "四川均龙互动科技有限公司", start: "2020-07-01", end: "2020-08-30", post: "前端研发工程师" }])

// 教育经历
const school = reactive([{ title: "贵州工贸职业学院", start: "2020-07-01", end: "2020-08-30", post: "大数据技术与应用" }])

</script>
<style lang="less" scoped>
.about-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
  animation: slidein 1s;

  @keyframes slidein {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  .main-container {

    .top {
      display: flex;

      .Avatar {
        background: linear-gradient(120deg, rgb(255 255 255 / 12%), rgb(255 255 255 / 12%));
        width: 300px;
        height: 300px;
        border-radius: 10%;
        position: relative;


        .img {
          position: absolute;
          top: 0px;
          left: 25px;

          &:hover {
            transform: scale(1.1);
          }
        }
      }

      .introduce {
        width: 900px;
        height: 300px;
        margin-left: 30px;
        display: flex;
        align-items: center;
        flex-direction: column;

        .title {
          color: white;
        }

        .particulars {
          margin-top: 10px;
          background: linear-gradient(120deg, rgb(255 255 255 / 10%), rgb(255 255 255 / 5%));
          border-radius: 20px;
          height: 350px;
          padding: 30px;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          position: relative;

        }
      }
    }

    .bottom {
      margin-top: 30px;
      display: flex;

      .one {
        background: linear-gradient(120deg, rgb(255 255 255 / 12%), rgb(255 255 255 / 1%));
        width: 470px;
        border-radius: 20px;
        padding: 30px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
      }

      .two {
        width: 400px;
        background: linear-gradient(120deg, rgb(255 255 255 / 1%), rgb(255 255 255 / 12%));
        border-radius: 20px;
        padding: 30px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        margin: 0 30px;
      }

      .three {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
      }

      .contact {
        display: flex;

        .iconfont {
          font-size: 50px;
          color: aliceblue;
          background: linear-gradient(120deg, rgb(255 255 255 / 10%), rgb(255 255 255 / 10%));
          padding: 20px 10px 20px 10px;
          border-radius: 10%;
          margin-right: 20px;
        }

        span {
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
        }
      }
    }

    .content {
      h3 {
        color: aliceblue;
        margin: 6px 0;
        font-size: 17px;
      }

      p,
      span {
        color: #B3B3B3;
        margin-top: 18PX;
        font-size: 15PX;
      }
    }

  }

}
</style>