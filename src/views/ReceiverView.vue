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
                <div class="progress-bar w-75 progress-bar-striped progress-bar-animated bg-success" role="progressbar">
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
      <section class="row pt-3 px-5">
        <div class="border-top border-success border-2"></div>
        <h6 class="py-3 text-black-50">
          寄送資料
        </h6>
        <form class="">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">姓名：</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Stitch">
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">電話：</label>
            <input type="text" class="form-control" id="exampleFormControlInput2" placeholder="0922801180">
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email：</label>
            <input type="email" class="form-control" id="exampleFormControlInput3" placeholder="Kawaikini@gmail.com">
          </div>
          <label for="exampleFormControlInput1" class="form-label">地址：</label>
          <div class="mb-3 d-flex">
            <input type="text" class="form-control" placeholder="城市">
            <span>&nbsp;</span>
            <input type="text" class="form-control" placeholder="郵遞區號">
          </div>
          <input type="text" class="form-control" placeholder="詳細地址">
        </form>
      </section>
      <br>
      <div class="border-top border-success border-2 pt-3"></div>
      <section class="row">
        <div class="col-2 col-sm"></div>
        <div class="col-2 col-sm-1"></div>
        <div class="col col-sm-4 col-md-3 px-3">
          <ul>
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
      </section>
      <hr>
      <section>
        <ul class="nav px-3 py-5 ">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/CheckList">⬅️ 上一步</RouterLink>
          </li>
          <li class="nav-item ms-auto">
            <RouterLink class="btn btn-success px-5" to="/CheckRecever">下一步</RouterLink>
          </li>
        </ul>
      </section>
    </div>
  </main>
</template>