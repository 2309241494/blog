import Mock from "mockjs"; //导入mockjs
import {shuffleArray} from "@/utils/util";
import {BLOG_LIST, HERO_LIST, MUSIC_LIST, PROJECT_LIST} from "./table";
//使用Mock下面提供的mock方法进行需要模拟数据的封装
//参数1，是需要拦截的完整请求地址，参数2，是请求方式，参数3，是请求的模拟数据
// 启用 Mock.js
Mock.setup({
    timeout: 500, // 模拟数据延迟返回的时间，单位毫秒
});

// 获取图片数据
Mock.mock("/getPhoto", "post", (option) => {
    const {type, page, size} = JSON.parse(option.body);
    // 根据类型筛选数据
    let filteredData = [];
    if (type == 0) {
        filteredData = HERO_LIST; // 查询全部数据
    } else {
        filteredData = HERO_LIST.filter((item) => item.type === type); // 按照type筛选数据
    }

    // 计算总页数
    const totalPage = Math.ceil(filteredData.length / size);

    // 根据页码和每页数据量得到当前页数据
    const startIndex = (page - 1) * size;
    const endIndex = page * size;
    const currentPageData = filteredData.slice(startIndex, endIndex);

    return {
        code: 200,
        data: {
            total_page: totalPage,
            current_page: page,
            current_data: shuffleArray(currentPageData),
        },
    };
});

// 获取音乐数据
Mock.mock("/getMusic", "get", MUSIC_LIST);

// 获取笔记数据
Mock.mock("/getBlog", "post", (options) => {
    const {name, tags} = JSON.parse(options.body);
    let filteredData = BLOG_LIST;
    if (name !== "") {
        filteredData = filteredData.filter((blog) => blog.name.includes(name));
    }
    if (Array.isArray(tags) && tags.length > 0) {
        filteredData = filteredData.filter((blog) => {
            return tags.every((tag) => blog.tag.includes(tag));
        });
    }
    return filteredData;
});

// 获取最新笔记数据
Mock.mock("/getNewBlog", "get", () => {
    // 创建一个副本以避免修改原始数据
    const sortedData = [...BLOG_LIST];
    // 根据日期字段进行降序排序
    sortedData.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    // 取出最新发布的五条数据
    return sortedData.slice(0, 5);
});

// 获取笔记标签数据
Mock.mock("/getBlogTitle", "get", () => {
    const tagSet = new Set<string>();
    BLOG_LIST.forEach((item) => {
        item.tag.forEach((tag) => tagSet.add(tag));
    });
    return Array.from(tagSet);
});

// 获取项目数据
Mock.mock("/getProjectList", "post", (option) => {
    const {type} = JSON.parse(option.body);
    // 根据类型筛选数据
    let filteredData = [];
    if (type == 0) {
        filteredData = PROJECT_LIST; // 查询全部数据
    } else {
        filteredData = PROJECT_LIST.filter((item) => item.type === type); // 按照type筛选数据
    }
    return {
        code: 200,
        data: {
            current_data: filteredData,
        },
    };
});

// 登录
Mock.mock("/login", "get", () => {
    return {
        code: 200,
        msg: "操作成功",
    };
});
