import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { viteMockServe } from "vite-plugin-mock";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteMockServe({
      mockPath: "./mock/",
    }),
  ], // 跟vue一样被当作函数执行，里面有一些参数可配置。这里不具体展开介绍。感兴趣的小伙伴自己去查阅资料哈],
  build: {
    minify: false,
  },
  base: "/vite-blog",
});
