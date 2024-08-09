<script>
import { RouterLink, RouterView } from 'vue-router'

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
                <div class="progress-bar w-100 progress-bar-striped progress-bar-animated bg-success"
                  role="progressbar">
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
                <div class="progress-bar w-100 progress-bar-striped progress-bar-animated bg-success"
                  role="progressbar">
                </div>
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
      <section class="row pt-3 px-sm-0">
        <div class="border-top border-success border-2"></div>
        <h6 class="py-3 text-black-50">
          訂單明細
        </h6>
        <div class="col-3 col-md-2 pb-2">
          <img src="@/assets/imgea/apple-pie.jpg" width="100" height="100" class="rounded">
        </div>
        <div class="col py-3 text-center text-sm-start ">
          <h6 class="fs-8 text-secondary fw-bolder">鄉村蘋果派</h6>
          <b class="fs-7 text-black-50">#6512</b>
        </div>
        <div class="col-2 col-sm-3 col-lg-2 my-auto d-flex justify-content-end">
          <span id="amount1">x 1</span>
        </div>
        <div class="col-2 col-lg-1 my-auto text-end fst-italic fs-8">
          <p>$ 599</p>
        </div>
      </section>
      <section class="row pt-3 px-sm-0">
        <div class="border-top border-success border-2 pt-3"></div>
        <div class="col-3 col-md-2 pb-2">
          <img src="@/assets/imgea/berrypie.jpg" width="100" height="100" class="rounded">
        </div>
        <div class="col py-3 text-center text-sm-start ">
          <h6 class="fs-8 text-secondary fw-bolder">綜合莓果派</h6>
          <b class="fs-7 text-black-50">#3016</b>
        </div>
        <div class="col-2 col-sm-3 col-lg-2 my-auto d-flex justify-content-end">
          <span id="amount2">x 1</span>
        </div>
        <div class="col-2 col-lg-1 my-auto text-end fst-italic fs-8">
          <p>$ 799</p>
        </div>
      </section>
      <section class="row pt-3 px-sm-0">
        <div class="border-top border-success border-2 pt-3"></div>
        <div class="col-3 col-md-2 pb-3">
          <img src="@/assets/imgea/Tiramisu.jpg" width="100" height="100" class="rounded">
        </div>
        <div class="col py-3 text-center text-sm-start ">
          <h6 class="fs-8 text-secondary fw-bolder">提拉米蘇</h6>
          <b class="fs-7 text-black-50">#8496</b>
        </div>
        <div class="col-2 col-sm-3 col-lg-2 my-auto d-flex justify-content-end">
          <span id="amount3">x 1</span>
        </div>
        <div class="col-2 col-lg-1 my-auto text-end fst-italic fs-8">
          <span>$ 499</span>
        </div>
        <div class="border-top border-success border-2 py-3"></div>
      </section>
      <h6 class="py-3 text-black-50">
        寄送資料
      </h6>
      <h6>姓名：
        <span>Stitch</span>
      </h6>
      <h6>電話：
        <span>0922801180</span>
      </h6>
      <h6>Email：
        <span>Kawaikini@gmail.com</span>
      </h6>
      <h6>地址：
        <span>1571 Poipu Rd, Koloa</span>
      </h6>
      <br>
      <div class="border-top border-success border-2 pt-3"></div>
      <section class="row">
        <div class="col-2 col-sm"></div>
        <div class="col-2 col-sm"></div>
        <div class="col col-sm-4 col-md-3 px-3">
          <ul class="list-unstyled mt-2">
            <li class="nav-item mb-2 d-flex justify-content-between">
              數量：
              <span id="products-total" class="list-unstyled">
                3
              </span>
            </li>
            <li class="nav-item mb-2 d-flex justify-content-between">
              小計：
              <span id="products-total-price" class="list-unstyled">
                $ 1897
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
                $ 2197
              </span>
            </li>
          </ul>
        </div>
        <hr>
        <ul class="nav px-3 py-5 ">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/Receiver">
              ⬅️ 上一步
            </RouterLink>
          </li>
          <li class="nav-item ms-auto">
            <RouterLink class="btn btn-success px-5" to="/">完成訂購</RouterLink>
          </li>
        </ul>
      </section>
    </div>
  </main>
</template>