import { defineStore } from 'pinia';

export const useShoppingCartStore = defineStore('shopping-cart', {
  // 變數設置的地方，等於vue的data
  state: () => {
    return {
      cartData: {
        products: [
          { id: '1221', name: '紅茶', price: 300, count: 1 },
          { id: '2332', name: '綠茶', price: 400, count: 1 },
          { id: '3211', name: '花茶', price: 500, count: 1 },
        ],
        methods: {
          pay: '',
          deliver: '',
        },
        userData: {
          name: '',
          phone: '',
          email: '',
          city: '',
          postalCode: '',
          address: '',
        },
      },
    };
  },
  // 等於vue的computed
  getters: {
    // 計算價格
    totalPrice() {
      const total = this.cartData.products.reduce((acc, item) => {
        acc += item.price * item.count;
        return acc;
      }, 0);

      return total;
    },
  },
  // 等於vue的methods
  actions: {
    addCart(item) {
      this.cart.push(item);
    },
    // 回到初始值
    reset() {
      this.$reset();
    }
  },
});
