// src/mock/index.js
import Mock from "mockjs"; //导入mockjs
import { HERO_LIST, MUSIC_LIST } from "./table";
//使用Mock下面提供的mock方法进行需要模拟数据的封装
//参数1，是需要拦截的完整请求地址，参数2，是请求方式，参数3，是请求的模拟数据
// 启用 Mock.js
Mock.setup({
  // timeout: 1000, // 模拟数据延迟返回的时间，单位毫秒
});

// 获取图片数据
Mock.mock("/getPhoto", "get", HERO_LIST);

// 获取音乐数据
Mock.mock("/getMusic", "get", MUSIC_LIST);
