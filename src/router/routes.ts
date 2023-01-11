import Home from "/src/views/Home/index.vue";
import About from "/src/views/About/index.vue";
import Contact from "/src/views/Contact/index.vue";
import News from "/src/views/News/index.vue";
import Portfolio from "/src/views/Portfolio/index.vue";

export default [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/contact", component: Contact },
  { path: "/news", component: News },
  { path: "/portfolio", component: Portfolio },
];
