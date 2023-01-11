import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/index";
import "animate.css/animate.css";
createApp(App).use(router).mount("#app");
