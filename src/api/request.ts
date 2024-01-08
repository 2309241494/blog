import instance from "@/utils/request";
// import Mock from "mockjs"; // 导入 mockjs

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
export function getHeroData(data: object) {
    return instance({
        url: "/getPhoto",
        method: "POST",
        data,
    });
}

// 获取音乐数据
export function getMusicData() {
    return instance({
        url: "/getMusic",
        method: "GET",
    });
}

// 获取笔记数据
export function getBlogData(data: object) {
    return instance({
        url: "/getBlog",
        method: "POST",
        data,
    });
}

// 获取最新笔记数据
export function getNewBlog() {
    return instance({
        url: "/getNewBlog",
        method: "get",
    });
}

// 获取笔记标签数据
export function getBlogTitle() {
    return instance({
        url: "/getBlogTitle",
        method: "get",
    });
}

// 登录
export function login() {
    return instance({
        url: "/login",
        method: "get",
    });
}

// 获取项目数据
export function getProject(data: object) {
    return instance({
        url: "/getProjectList",
        method: "POST",
        data
    });
}
