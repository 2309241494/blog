<template>
  <div class="layout-container">
    <div class="layout-left">
      <div class="me">
        <img id="id" src="https://up2client.com/template/Murillo/main-file/assets/images/news/news-image-one.png"
          alt="" />
      </div>
      <div class="name">NAME</div>
      <router-link to="/" class="hr home"><i class="iconfont icon-shouye"></i>主页</router-link>
      <router-link to="/photo" class="hr photo"><i class="iconfont icon-xiangce"></i>相册</router-link>
      <router-link to="/article" class="hr article"><i class="iconfont icon-16"></i>文章</router-link>
      <router-link to="/about" class="hr About"><i class="iconfont icon-guanyuwo"></i>关于我</router-link>
      <router-link to="/message" class="hr message"><i class="iconfont icon-jurassic_message"></i>留言板</router-link>
      <router-link to="/project" class="hr project"><i class="iconfont icon-xiangmu"></i>项目&效果</router-link>

    </div>
    <div class="layout-right">
      <router-view></router-view>
    </div>
  </div>
</template>
<script></script>
<style scoped>
.layout-container {
  display: flex;
  width: 100vw;
  height: 100vh;
  color: #b0b0b0;
  font-weight: bold;
  text-align: left;
  font-size: 20px;
}

.layout-left {
  background-color: rgb(0, 0, 0);
  flex: 0 0 350px;
  padding: 5px 55px;
}

.layout-right {
  flex: 1 0 auto;
}

.me {
  width: 250px;
  margin: 20px auto;
  transform-origin: center;
}

.me img {
  width: 250px;
  height: 250px;
  border-radius: 5% 15% 5% 15%;
  margin: 0 auto;
  transition: 0.5s;
  cursor: pointer;
  transform: scale(1);
}

.name {
  color: #00d061;
  font-size: 35px;
  margin-bottom: 30px;
}

.hr {
  border-bottom: 1px solid #2a2a2a;
  padding: 10px 10px;
  margin: 17px 0;
  display: block;
  transition: .5s;
  height: 50px;
}

.hr:hover {
  color: #00d061;
  font-size: 23px;
}

.hr:hover .iconfont {
  color: #00d061;
  font-size: 25px;
}

#id:hover {
  transform: scale(1.1);
}

.iconfont {
  font-size: 20px;
  padding-right: 10px;
  transition: 1s;
}
</style>
