import { defineStore } from 'pinia';

export const useShoppingCartStore = defineStore('shopping-cart', {
  // 變數設置的地方
  state: () => {
    return {
      cart: [1, 2, 3]
    }
  },
  // getters
  getters:{

  },
  // 處理的地方
  actions: {
    addData() {

    }
  },
});