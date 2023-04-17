<template>
  <div class="about-container animate__animated animate__fadeIn">
    <div class="main-container">
      <div class="top">
        <div class="Avatar">
          <Avatar class="img"
            src="https://ts1.cn.mm.bing.net/th?id=OIP-C.zF3IWg3TWafxNR5mnujBrgHaHX&w=196&h=185&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" />
        </div>
        <div class="introduce">
          <Title title="About" />
          <div class="particulars">
            <h3 class=" title">LILANG</h3>
            <p>I am a San francisco-based product designer with a focus on web design,illustration,a
              visual development. I
              have a diverse range of experience having worked across various fields and industries.</p>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="one">
          <h3>工作经验</h3>
          <div class="content" v-for="item in workArr">
            <p>{{ item.start }} ~ {{ item.end }}</p>
            <h3>{{ item.title }}</h3>
            <span>{{ item.post }}</span>
          </div>
        </div>
        <div class="two">
          <h3>教育经历</h3>
          <div class="content" v-for="item in school">
            <p>{{ item.start }} ~ {{ item.end }}</p>
            <h3>{{ item.title }}</h3>
            <span>{{ item.post }}</span>
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

  .main-container {

    .top {
      display: flex;

      .Avatar {
        background: linear-gradient(120deg, rgb(255 255 255 / 12%), rgb(255 255 255 / 1%));
        width: 300px;
        height: 300px;
        border-radius: 10%;
        position: relative;


        .img {
          position: absolute;
          top: 0px;
          left: 25px;
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
          background: linear-gradient(120deg, rgb(255 255 255 / 1%), rgb(255 255 255 / 20%));
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
        width: 350px;
        border-radius: 20px;
        margin-right: 20px;
        padding: 30px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
      }

      .two {
        width: 357px;
        background: linear-gradient(120deg, rgb(255 255 255 / 10%), rgb(255 255 255 / 10%));
        border-radius: 20px;
        padding: 30px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
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
}
</style>