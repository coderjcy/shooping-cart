import { defineStore } from "pinia";
import Big from "big.js";

import { localCache } from "@/utils/cache";

interface ICartType {
  goods: any[];
  // count: number;
  badgePos: {
    left: number;
    top: number;
  };
}
const useShoppingCartStore = defineStore("shopping-cart", {
  state: (): ICartType => ({
    goods: [
      // { id: 23, count: 12 },
      // { id: 2333, count: 23 },
    ],
    badgePos: {
      left: 0,
      top: 0,
    },
  }),
  getters: {
    sum(state) {
      return state.goods.reduce((pre, good) => {
        return parseFloat(
          new Big(pre).plus(new Big(good.count).times(good.price))
        );
      }, 0);
    },
    count(state) {
      return state.goods.reduce((pre, good) => pre + good.count, 0);
    },
  },
  actions: {
    addGoods(goodInfo: any) {
      const a =
        this.goods.find((i) => {
          if (i.id === goodInfo.id) {
            i.count++;
            return true;
          }
        }) || this.goods.push({ ...goodInfo, count: 1 });

      localCache.setCache("localCart", this.goods);
    },
    reduceGoods(goodInfo: any) {
      const index = this.goods.findIndex((i) => i.id === goodInfo.id);
      if (this.goods[index].count - 1 === 0) {
        this.goods.splice(index, 1);
      } else {
        this.goods[index].count--;
      }
      localCache.setCache("localCart", this.goods);
    },
    clearGoods() {
      this.goods = [];
      localCache.setCache("localCart", this.goods);
    },
  },
});

export default useShoppingCartStore;
