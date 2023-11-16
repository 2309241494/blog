import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { viteMockServe } from "vite-plugin-mock";
import px2rem from "postcss-px2rem";
// 引入等比适配插件

// 配置基本大小
const postcss = px2rem({
  // 基准大小 baseSize，需要和rem.js中相同
  remUnit: 16,
});

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
  css: {
    preprocessorOptions: {
      postcss: {
        plugins: [postcss],
      },
    },
  },
});
