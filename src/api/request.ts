import instance from "../utils/request";
import Mock from "mockjs"; // 导入 mockjs
// 获取天气数据
export function getWeather() {
  return instance({
    url: "https://restapi.amap.com/v3/weather/weatherInfo?parameters&key=bb2e07008e49543fa3edd6b4ea2fea56&city=310115",
    method: "GET",
  });
}

// 每日一言
export function getPoetry() {
  return instance({
    url: "https://v1.hitokoto.cn/?c=d",
    method: "GET",
  });
}

// 获取英雄数据
export function getHeroData() {
  return instance({
    url: "/getPhoto",
    method: "GET",
  });
}

// 获取英雄数据
export function getMusicData() {
  return instance({
    url: "/getMusic",
    method: "GET",
  });
}
