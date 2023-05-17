// 获取天气数据
async function getWeather(
  url: string = "https://restapi.amap.com/v3/weather/weatherInfo?parameters&key=bb2e07008e49543fa3edd6b4ea2fea56&city=510105"
): Promise<string> {
  const result = await fetch(url).then((data) => data);
  return result.json();
}

// 每日一言
async function getPoetry(
  url: string = "https://v.api.aa1.cn/api/api-wenan-mingrenmingyan/index.php?aa1=json"
): Promise<string> {
  const result = await fetch(url).then((data) => data);
  return result.json();
}

export { getPoetry, getWeather };
