<template>
<!-- 左半 -->
<main class="row my-vh w-100 mx-auto my-img-none">
    <div
      class="col-6 d-none p-0 d-md-flex align-items-center justify-content-center flex-column bg-secondary bg-opacity-25 position-relative my-img">
      <h1 class="px-5 w-100 my-z-index">Keep it Fresh</h1>
      <p class="px-5 w-100 my-z-index">只有一個人在旅行時，才聽得到自己的聲音，它會告訴你，這世界比想像中的寬闊。</p>
      <ul class="nav py-3 position-absolute bottom-0">
        <li class="nav-item">
          <a class="nav-link" href="#">
            <i class="bi bi-facebook"></i>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <i class="bi bi-instagram"></i>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <i class="bi bi-twitter"></i>
          </a>
        </li>
      </ul>
    </div>
    <!-- 右半 -->
    <div
      class="col-12 col-md-6 d-flex align-items-center justify-content-center flex-column bg-info bg-opacity-25 position-relative">
      <div class="row">
        <div class="col-12 d-flex align-items-center justify-content-center">
          <img src="@/assets/imgea/kiki.svg" width="100" alt="">
          <h1 class="px-5">FayPie</h1>
        </div>
        <div class="col-12 jsstify-content-center">
          <ul class="nav justify-content-center py-3">
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="bi bi-facebook"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="bi bi-google"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="bi bi-linkedin"></i>
              </a>
            </li>
          </ul>
          <p class="d-flex justify-content-center text-black-50">請輸入帳號或是使用第三方登入</p>
          <form action="./購物車-home.html" class="needs-validation">
            <div class="d-flex justify-content-center">
              <div class="form-floating mb-3 w-75">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" required>
                <label for="floatingInput">Email address</label>
              </div>
            </div>
            <div class="d-flex justify-content-center">
              <div class="form-floating w-75">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password" required>
                <label for="floatingPassword">Password</label>
              </div>
            </div>
            <a href="">
              <p class="pt-2 d-flex justify-content-end pe-5 link-primary">註冊帳號／忘記密碼</p>
            </a>
            <button type="submit" id="sign" class="btn btn-success w-50 d-flex mx-auto justify-content-center">
              🥖 登入 🧁
            </button>
          </form>
        </div>
      </div>
      <ul class="nav py-3 position-absolute bottom-0 d-md-none">
        <li class="nav-item">
          <a class="nav-link" href="#">
            <i class="bi bi-facebook"></i>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <i class="bi bi-instagram"></i>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <i class="bi bi-twitter"></i>
          </a>
        </li>
      </ul>
    </div>
  </main>
</template>

<style>

</style>
