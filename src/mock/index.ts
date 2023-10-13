// src/mock/index.js
import Mock from "mockjs"; //导入mockjs

//使用Mock下面提供的mock方法进行需要模拟数据的封装
//参数1，是需要拦截的完整请求地址，参数2，是请求方式，参数3，是请求的模拟数据

Mock.mock("/api/getData", "get", {
  status: 200, //请求成功状态码
  heroList: [
    {
      e_name: "Breach",
      icon: "https://game.gtimg.cn/images/val/agamezlk/portrait/01.png",
      id: 1,
      name: "铁臂",
    },
    {
      e_name: "Jett",
      icon: "https://game.gtimg.cn/images/val/agamezlk/portrait/02.png",
      id: 2,
      name: "捷风",
    },
    {
      e_name: "Raze",
      icon: "https://game.gtimg.cn/images/val/agamezlk/portrait/03.png",
      id: 3,
      name: "雷兹",
    },
    {
      e_name: "Omen",
      icon: "https://game.gtimg.cn/images/val/agamezlk/portrait/04.png",
      id: 4,
      name: "幽影",
    },
    {
      e_name: "Brimstone",
      icon: "https://game.gtimg.cn/images/val/agamezlk/portrait/05.png",
      id: 5,
      name: "炼狱",
    },
    {
      e_name: "Phoenix",
      icon: "https://game.gtimg.cn/images/val/agamezlk/portrait/06.png",
      id: 6,
      name: "不死鸟",
    },
    {
      e_name: "Sage",
      icon: "https://game.gtimg.cn/images/val/agamezlk/portrait/07.png",
      id: 7,
      name: "贤者",
    },
    {
      e_name: "Sova",
      icon: "https://game.gtimg.cn/images/val/agamezlk/portrait/08.png",
      id: 8,
      name: "猎枭",
    },
    {
      e_name: "Viper",
      icon: "https://game.gtimg.cn/images/val/agamezlk/portrait/09.png",
      id: 9,
      name: "蝰蛇",
    },
    {
      e_name: "Cypher",
      icon: "https://game.gtimg.cn/images/val/agamezlk/portrait/10.png",
      id: 10,
      name: "零",
    },
    {
      e_name: "Reyna",
      icon: "https://game.gtimg.cn/images/val/agamezlk/portrait/11.png",
      id: 11,
      name: "芮娜",
    },
    {
      e_name: "KillJoy",
      icon: "https://game.gtimg.cn/images/val/agamezlk/portrait/12.png",
      id: 12,
      name: "奇乐",
    },
    {
      e_name: "Skye",
      icon: "https://game.gtimg.cn/images/val/agamezlk/portrait/13.png",
      id: 13,
      name: "斯凯",
    },
    {
      e_name: "Yoru",
      icon: "https://game.gtimg.cn/images/val/agamezlk/portrait/14.png",
      id: 14,
      name: "夜露",
    },
    {
      e_name: "Astra",
      icon: "https://game.gtimg.cn/images/val/agamezlk/portrait/15.png",
      id: 15,
      name: "星礈",
    },
    {
      e_name: "KAY/O",
      icon: "https://game.gtimg.cn/images/val/agamezlk/portrait/16.png",
      id: 16,
      name: "K/O",
    },
    {
      e_name: "Chamber",
      icon: "https://game.gtimg.cn/images/val/agamezlk/portrait/17.png",
      id: 17,
      name: "尚勃勒",
    },
    {
      e_name: "Neon",
      icon: "https://game.gtimg.cn/images/val/agamezlk/portrait/18.png",
      id: 18,
      name: "霓虹",
    },
    {
      e_name: "Fade",
      icon: "https://game.gtimg.cn/images/val/agamezlk/portrait/19.png",
      id: 19,
      name: "黑梦",
    },
    {
      e_name: "Harbor",
      icon: "https://game.gtimg.cn/images/val/agamezlk/portrait/20.png",
      id: 20,
      name: "海神",
    },
    {
      e_name: "Gekko",
      icon: "https://game.gtimg.cn/images/val/agamezlk/portrait/21.png",
      id: 21,
      name: "盖可",
    },
    {
      e_name: "Deadlock",
      icon: "https://game.gtimg.cn/images/val/agamezlk/portrait/22.png",
      id: 22,
      name: "钢锁",
    },
  ],
});
