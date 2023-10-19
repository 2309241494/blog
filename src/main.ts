import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/index";
import ElementPlus from "element-plus";
import { createPinia } from "pinia";
import "./mock/index";
import "element-plus/dist/index.css";
import mavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";
createApp(App)
  .use(router)
  .use(ElementPlus)
  .use(createPinia())
  .use(mavonEditor)
  .mount("#app");
