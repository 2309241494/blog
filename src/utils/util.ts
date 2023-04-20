/**
 * 返回当前时分
 * @关键字
 */
export const hour = (): string => {
  const date: Date = new Date();
  const h: number = date.getHours();
  const m: number = date.getMinutes();
  return h + ":" + m;
};
