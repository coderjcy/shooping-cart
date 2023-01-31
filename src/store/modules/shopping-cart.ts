import { defineStore } from "pinia";
import Big from "big.js";

interface ICartType {
  goods: any[];
  count: number;
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
    count: 0,
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
  },
  actions: {},
});

export default useShoppingCartStore;
