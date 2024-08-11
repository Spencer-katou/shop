<script>
import { RouterLink } from 'vue-router'

export default {

  data() {
    return {
      totalPrice: '',
      totalCount: '',
      choosePay: '',
      chooseParcel: '',
    };
  },
  mounted() {
    this.getStorage();
  },
  methods: {
    setStorage() {
      sessionStorage.setItem('choose-Pay', JSON.stringify(this.choosePay));
      sessionStorage.setItem('choose-parcel', JSON.stringify(this.chooseParcel));
    },
    // 取得Storage的購物清單資料
    getStorage() {
      try {
        const count = JSON.parse(sessionStorage.getItem('total-count')) || '';
        const price = JSON.parse(sessionStorage.getItem('total-price')) || '';
        this.totalPrice = price;
        this.totalCount = count;
      } catch (error) {
        console.error(error);
      }
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
                <div class="progress-bar w-100 progress-bar-striped progress-bar-animated bg-success"
                  role="progressbar">
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
                <div class="progress-bar w-50 progress-bar-striped progress-bar-animated bg-success" role="progressbar">
                </div>
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
      <section class="row pt-3 px-5">
        <div class="border-top border-success border-2"></div>
        <h6 class="py-3 text-black-50">
          付款方式
        </h6>
        <div class="form-check pb-3">
          <label class="form-check-label" for="flexRadioDefault1">
            <input class="form-check-input" type="radio" name="pay" id="flexRadioDefault1" v-model="choosePay"
              value="信用卡付款">
            信用卡付款
          </label>
        </div>
        <div class="border-top border-success border-2 pt-3 opacity-25"></div>
        <div class="form-check pb-3">
          <label class="form-check-label" for="flexRadioDefault2">
            <input class="form-check-input" type="radio" name="pay" id="flexRadioDefault2" v-model="choosePay"
              value="網路ATM">
            網路ATM
          </label>
        </div>
        <div class="border-top border-success border-2 pt-3 opacity-25"></div>
        <div class="form-check pb-3">
          <label class="form-check-label" for="flexRadioDefault3">
            <input class="form-check-input" type="radio" name="pay" id="flexRadioDefault3" v-model="choosePay"
              value="超商代碼">
            超商代碼
          </label>
        </div>
      </section>
      <div class="border-top border-success border-2"></div>
      <section class="row pt-3 px-5">
        <h6 class="py-3 text-black-50">
          運送方式
        </h6>
        <div class="form-check pb-3">
          <label class="form-check-label" for="flexRadioDefault4">
            <input v-model="chooseParcel" class="form-check-input" type="radio" name="parcel" id="flexRadioDefault4"
              value="黑貓宅配">
            黑貓宅配
          </label>
        </div>
        <div class="border-top border-success border-2 opacity-25 pt-3"></div>
        <div class="form-check pb-3">
          <label class="form-check-label" for="flexRadioDefault5">
            <input v-model="chooseParcel" class="form-check-input" type="radio" name="parcel" id="flexRadioDefault5"
              value=超商店到店>
            超商店到店
          </label>
        </div>
      </section>
      <section class="row">
        <div class="col-2 col-sm"></div>
        <div class="col-2 col-sm"></div>
        <div class="col col-sm-4 col-md-3 px-3">
          <ul class="list-unstyled mt-2">
            <li class="nav-item mb-2 d-flex justify-content-between">
              數量：
              <span id="products-total" class="list-unstyled">
                {{ totalCount }}
              </span>
            </li>
            <li class="nav-item mb-2 d-flex justify-content-between">
              小計：
              <span id="products-total-price" class="list-unstyled">
                $ {{ totalPrice }}
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
                $ {{ totalPrice + 300 }}
              </span>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <hr>
        <ul class="nav px-3 py-5 ">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/ShoppingOne">⬅️ 上一步</RouterLink>
          </li>
          <li class="nav-item ms-auto">
            <RouterLink class="btn btn-success px-5" to="/ShoppingThree" @click="setStorage">下一步</RouterLink>
          </li>
        </ul>
      </section>
    </div>
  </main>
</template>