import Home from "/src/views/Home/index.vue";
import About from "/src/views/About/index.vue";
import Message from "/src/views/Message/index.vue";
import Project from "/src/views/Project/index.vue";
import Photo from "/src/views/Photo/index.vue";
import Article from "/src/views/Article/index.vue";

export default [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/message", component: Message },
  { path: "/project", component: Project },
  { path: "/photo", component: Photo },
  { path: "/article", component: Article },
];
