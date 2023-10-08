import About from "../views/About/index.vue";
import Demo from "../views/Demo/index.vue";
import Project from "../views/Project/index.vue";
import Photo from "../views/Photo/index.vue";
import Home from "../views/Home.vue";

export default [
  { path: "/vite-blog/", component: Home, meta: { keepAlive: true } },
  { path: "/vite-blog/about", component: About, meta: { keepAlive: true } },
  { path: "/vite-blog/demo", component: Demo, meta: { keepAlive: true } },
  {
    path: "/vite-blog/project",
    component: Project,
    meta: { keepAlive: true },
  },
  { path: "/vite-blog/photo", component: Photo, meta: { keepAlive: true } },
];
