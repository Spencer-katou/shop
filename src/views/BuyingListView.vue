<script>
import { RouterLink, RouterView } from 'vue-router'
import { totalPrice } from '@/composable/useCount.js';
import { totalCount } from '@/composable/sumCount.js';
import { ShoppingCartStore } from '@/stores/shoppingCart.js';

import ApplePie from '@/assets/imgea/apple-pie.jpg';
import BerryPie from '@/assets/imgea/berrypie.jpg';
import Tiramisu from '@/assets/imgea/Tiramisu.jpg';
import CountBtn from '@/components/Button/CountBtn.vue';

export default {
  components: {
    CountBtn
  },
  setup() {
    const ShoppingCartStore = useShoppingCartStore()
    return { totalPrice, totalCount, ShoppingCartStore };
  },
  data() {
    return {
      shopList: [
        {
          id: 1,
          name: '鄉村蘋果派',
          price: 599,
          photo: ApplePie,
          quantity: 1,
        },
        {
          id: 2,
          name: '綜合莓果派',
          price: 799,
          photo: BerryPie,
          quantity: 1,
        },
        {
          id: 3,
          name: '提拉米蘇',
          price: 499,
          photo: Tiramisu,
          quantity: 1,
        },
      ]
    }
  },
  // computed: {
  // },
  methods: {
    // 將購物清單存在Storage裡
    setStorage() {
      sessionStorage.setItem('shopping-list', JSON.stringify(this.shopList));
      sessionStorage.setItem('total-price', JSON.stringify(this.totalPrice(this.shopList)));
      sessionStorage.setItem('total-count', JSON.stringify(this.totalCount(this.shopList)));
    },
  },
}


</script>

<template>
  <main class="py-5">
    <div class="container px-4 px-lg-5 bg-success bg-opacity-25">
      <section class="row">
        <h5 class="py-3 text-black-50">
          購物車
        </h5>
        <div class="row mx-auto">
          <div class="col text-center">
            <div class="my-circle-shop rounded-circle bg-primary bg-opacity-25 mx-auto fw-bolder lh-lg text-white">
              1
            </div>
            <div class="fs-7 fw-light pt-1">
              確認購物車
            </div>
          </div>
          <div class="col position-relative">
            <div class="position-absolute top-50 start-50 translate-middle w-100">
              <div class="progress" style="height: 10px">
                <div class="progress-bar w-25 progress-bar-striped progress-bar-animated bg-success" role="progressbar">
                </div>
              </div>
              <div class="fs-7 fw-light pt-1"><br></div>
            </div>
          </div>
          <div class="col text-center">
            <div class="my-circle-shop rounded-circle bg-primary bg-opacity-25 mx-auto fw-bolder lh-lg text-white">
              2
            </div>
            <div class="fs-7 fw-light pt-1">
              付款與運送方式
            </div>
          </div>
          <div class="col position-relative">
            <div class="position-absolute top-50 start-50 translate-middle w-100">
              <div class="progress" style="height: 10px">
                <div class="progress-bar" role="progressbar"></div>
              </div>
              <div class="fs-7 fw-light pt-1"><br></div>
            </div>
          </div>
          <div class="col text-center">
            <div class="my-circle-shop rounded-circle bg-primary bg-opacity-25 mx-auto fw-bolder lh-lg text-white">
              3
            </div>
            <div class="fs-7 fw-light pt-1">
              填寫資料
            </div>
          </div>
          <div class="col position-relative">
            <div class="position-absolute top-50 start-50 translate-middle w-100">
              <div class="progress" style="height: 10px">
                <div class="progress-bar" role="progressbar"></div>
              </div>
              <div class="fs-7 fw-light pt-1"><br></div>
            </div>
          </div>
          <div class="col text-center">
            <div class="my-circle-shop rounded-circle bg-primary bg-opacity-25 mx-auto fw-bolder lh-lg text-white">
              4
            </div>
            <div class="fs-7 fw-light pt-1">
              完成訂購
            </div>
          </div>
        </div>
      </section>
      <h6 class="py-3 text-black-50">
        訂單明細
      </h6>
      <section v-for="item in shopList" :key="item.id" class="row pt-3 px-md-5">
        <div class="border-top border-success border-2"></div>
        <div class="col-3 col-md-2 pb-2 pt-3">
          <img :src="item.photo" width="100" height="100" class="rounded">
        </div>
        <div class="col my-auto ps-0 pe-3 ps-sm-4 text-center text-sm-start">
          <h6 class="fs-8 pt-2 text-secondary fw-bolder">{{ item.name }}</h6>
          <b class="fs-7 text-black-50">#{{ item.id }}</b>
        </div>
        <div class="col-2 col-sm-3 col-lg-2 my-auto d-flex justify-content-end px-0">
          <CountBtn @send="(count) => item.quantity = count"></CountBtn>
          <!-- <input type="button" id="reduce1" class="my-btn rounded border-0" value="-">
          <input type="number" id="amount1" class="my-input mx-1 rounded border-0" value="1">
          <input type="button" id="add1" class="my-btn rounded border-0" value="+"> -->
        </div>
        <div class="col-2 col-lg-1 px-0 my-auto text-end fst-italic fs-8">
          <b id="price-1">$ {{ item.price * item.quantity }}</b>
        </div>
      </section>
      <hr>
      <section class="row">
        <div class="col-2 col-sm"></div>
        <div class="col-2 col-sm"></div>
        <div class="col col-sm-4 col-md-3 px-3">
          <ul class="list-unstyled mt-2">
            <li class="nav-item mb-2 d-flex justify-content-between">
              數量：
              <span id="products-total" class="list-unstyled">
                {{ totalCount(shopList) }}
              </span>
            </li>
            <li class="nav-item mb-2 d-flex justify-content-between">
              小計：
              <span id="products-total-price" class="list-unstyled">
                $ {{ totalPrice(shopList) }}
              </span>
            </li>
            <li class="nav-item mb-2 d-flex justify-content-between">
              運費：
              <span id="fare" class="list-unstyled">
                $ 300
              </span>
            </li>
            <li class="nav-item mb-2 d-flex justify-content-between">
              總計：
              <span id="all-price" class="list-unstyled">
                $ {{ totalPrice(shopList) + 300 }}
              </span>
            </li>
          </ul>
        </div>
        <hr>
        <ul class="nav px-3 py-5 ">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/">⬅️ 繼續購物</RouterLink>
          </li>
          <li class="nav-item ms-auto">
            <RouterLink class="btn btn-success px-5" @click="setStorage" to="/CheckList">下一步</RouterLink>
          </li>
        </ul>
      </section>
    </div>
  </main>
</template>