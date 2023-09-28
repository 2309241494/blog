import { defineStore } from "pinia";

export const useMain = defineStore("useStore", {
  /**
   * 存储全局状态
   * 1.必须是箭头函数: 为了在服务器端渲染的时候避免交叉请求导致数据状态污染
   * 和 TS 类型推导
   */
  state: () => {
    return {
      changeModule: 0,
    };
  },
  /**
   * 用来封装计算属性 有缓存功能  类似于computed
   */
  getters: {
    getChangeModule: (state) => {
      return state.changeModule;
    },
  },
  /**
   * 编辑业务逻辑  类似于methods
   */
  actions: {
    setChangeModule(value: number) {
      this.changeModule = value;
      console.log(this.changeModule);
    },
  },
});
