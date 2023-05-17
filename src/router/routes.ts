import About from "../views/About/index.vue";
import Message from "../views/Message/index.vue";
import Project from "../views/Project/index.vue";
import Photo from "../views/Photo/index.vue";
import Home from "../views/Home.vue";

export default [
  { path: "/", component: Home, meta: { keepAlive: true } },
  { path: "/about", component: About, meta: { keepAlive: true } },
  { path: "/message", component: Message, meta: { keepAlive: true } },
  {
    path: "/project",
    component: Project,
    meta: { keepAlive: true },
  },
  { path: "/photo", component: Photo, meta: { keepAlive: true } },
];
