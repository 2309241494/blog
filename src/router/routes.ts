import About from "@/views/About/index.vue";
import Blog from "@/views/Blog/index.vue";
import Project from "@/views/Project/index.vue";
import Photo from "@/views/Photo/index.vue";
import Love from "@/views/Love/index.vue";
import Home from "@/views/Home.vue";

export default [
    {path: "/blog/", component: Home, meta: {keepAlive: true, index: 0}},
    {
        path: "/blog/about",
        component: About,
        meta: {keepAlive: true, index: 1},
    },
    {
        path: "/blog/notes",
        component: Blog,
        meta: {keepAlive: true, index: 2},
    },
    {
        path: "/blog/project",
        component: Project,
        meta: {keepAlive: true, index: 3},
    },
    {
        path: "/blog/photo",
        component: Photo,
        meta: {keepAlive: true, index: 4},
    },
    {
        path: "/blog/love",
        component: Love,
        meta: {keepAlive: true, index: 5},
    },
];
