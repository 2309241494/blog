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

/**
 * 打乱数组顺序
 * @关键字
 */
type Item = {
  e_name: string;
  icon: string;
  id: number;
  name: string;
  type: number;
};
export const shuffleArray = (array: Item[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
