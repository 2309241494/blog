import Mock from "mockjs"; //导入mockjs
import { shuffleArray } from "../utils/util";
import { HERO_LIST, MUSIC_LIST, BLOG_LIST } from "./table";
//使用Mock下面提供的mock方法进行需要模拟数据的封装
//参数1，是需要拦截的完整请求地址，参数2，是请求方式，参数3，是请求的模拟数据
// 启用 Mock.js
Mock.setup({
  // timeout: 1000, // 模拟数据延迟返回的时间，单位毫秒
});

// 获取图片数据
Mock.mock("/getPhoto", "post", (option) => {
  const { type, page, size } = JSON.parse(option.body);
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
Mock.mock("/getBlog", "post", () => {
  return BLOG_LIST;
});

// 获取音乐数据
Mock.mock("/getMusic", "get", MUSIC_LIST);
