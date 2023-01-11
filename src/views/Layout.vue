<template>
  <div class="layout-container">
    <div class="layout-left">
      <div class="me">
        <img
          id="id"
          src="https://up2client.com/template/Murillo/main-file/assets/images/news/news-image-one.png"
          alt=""
        />
      </div>
      <div class="name">NAME</div>
      <router-link to="/" class="hr home">HOME</router-link>
      <router-link to="/about" class="hr About">ABOUT</router-link>
      <router-link to="/portfolio" class="hr Portfolio">PORTFOLIO</router-link>
      <router-link to="/news" class="hr news">NEWS</router-link>
      <router-link to="/contact" class="hr contact">CONTACT</router-link>
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
  padding: 55px;
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
  transition: 0.5s;
}
.hr:hover {
  color: #00d061;
  font-size: 23px;
}
#id:hover {
  transform: scale(1.1);
}
</style>
