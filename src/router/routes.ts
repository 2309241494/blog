import About from "@/views/About/index.vue";
import Blog from "@/views/Blog/index.vue";
import Project from "@/views/Project/index.vue";
import Photo from "@/views/Photo/index.vue";
import Home from "@/views/Home.vue";

export default [
  { path: "/vite-blog/", component: Home, meta: { keepAlive: true, index: 0 } },
  {
    path: "/vite-blog/about",
    component: About,
    meta: { keepAlive: true, index: 1 },
  },
  {
    path: "/vite-blog/blog",
    component: Blog,
    meta: { keepAlive: true, index: 2 },
  },
  {
    path: "/vite-blog/project",
    component: Project,
    meta: { keepAlive: true, index: 3 },
  },
  {
    path: "/vite-blog/photo",
    component: Photo,
    meta: { keepAlive: true, index: 4 },
  },
];
