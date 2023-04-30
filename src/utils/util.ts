/**
 * 返回当前时间
 * @关键字
 */
export const hour = (): string => {
  const date: Date = new Date();
  const year = date.getFullYear();
  const Month = date.getMonth() + 1;
  const day = date.getDate();
  const str = "星期" + "日一二三四五六".charAt(date.getDay());
  const h = date.getHours();
  const m =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  return `${year}年${Month}月${day}日${str}${h}:${m}`;
};
