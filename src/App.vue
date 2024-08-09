<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
  watch:{
    // 監聽路由，當路由改變時，動態去改變title
    $route(to){
      document.title = to.meta.title || 'shopping Cart'
    }
  }
}
</script>

<template>
  <header>

    <nav class="px-5 navbar navbar-expand-lg bg-warning-subtle animate__bounceIn">
      <div class="container-fluid">
        <div>
          <RouterLink class="navbar-brand" to="/">
            <img src="@/assets/imgea/kiki.svg" alt="Logo" width="70" height="">
            FayPie
          </RouterLink>
        </div>
        <a class="navbar-brand" href="#"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item me-1">
              <a class="nav-link" href="#">
                活動情報
              </a>
            </li>
            <li class="nav-item dropdown me-1">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                全部商品
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" target="_blank" href="https://www.fm-station.com.tw/index.html">
                    馥漫麵包
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" target="_blank" href="https://www.lamaisoncake.com/%E9%A6%96%E9%A0%81">
                    梅笙蛋糕
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" target="_blank" href="https://www.imomi.com.tw/">
                    艾媽咪鄉村派
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item me-1">
              <RouterLink class="nav-link" to="/#aaa5">
                About
              </RouterLink>
            </li>
            <li class="nav-item me-1">
              <RouterLink class="nav-link" to="/#my-map">
                Contact
              </RouterLink>
            </li>
            <li class="nav-item me-1">
              <RouterLink class="nav-link" to="/BuyingList">
                <i class="bi bi-cart4"></i>
              </RouterLink>
            </li>
            <li class="nav-item dropdown me-1">
              <a class="nav-link my-dropdown-icon dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                <i class="bi bi-search"></i>
              </a>
              <ul class="my-dropdown-menu dropdown-menu px-1 my-www">
                <form class="d-flex" role="search">
                  <input class="form-control me-1" type="search" placeholder="Search">
                  <button class="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link my-dropdown-icon dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                <i class="bi bi-person-circle"></i>
              </a>
              <ul class="my-dropdown-menu dropdown-menu">
                <li>
                  <RouterLink to="/SignIn" class="dropdown-item icon-link icon-link-hover">
                    Login &nbsp;&nbsp;
                    <i class="bi bi-door-closed-fill"></i>
                  </RouterLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  
  <RouterView />

  <footer class="bg-info-subtle py-5 mt-5 ">
    <div class="container">
      <div class="row">
        <div class="col-lg-2 px-2 py-2 text-center">
          <a class="navbar-brand my-auto" href="#">
            <img class="" src="@/assets/imgea/kiki.svg" alt="Logo" width="70" height=""> FayPie
          </a>
          <p class="py-2 px-5 px-lg-1 small fw-light">只有一個人在旅行時，才聽得到自己的聲音，它會告訴你，這世界比想像中的寬闊。
          </p>
        </div>
        <div class="col-lg-2"></div>
        <div class="col-lg-2 col-md-3 col-sm-6 px-3 py-5 text-md-start text-center">
          <h5 class="">GATEGORIES</h5>
          <ul class="list-unstyled mt-2">
            <li class="nav-item mb-2">
              <a class="nav-link" href="#">First Link</a>
            </li>
            <li class="nav-item mb-2">
              <a class="nav-link" href="#">Second Linl</a>
            </li>
            <li class="nav-item mb-2">
              <a class="nav-link" href="#">Third Link</a>
            </li>
            <li class="nav-item mb-2">
              <a class="nav-link" href="#">Fourth Link</a>
            </li>
          </ul>
        </div>
        <div class="col-lg-2 col-md-3 col-sm-6 px-3 py-5 text-md-start text-center">
          <h5 class="">GATEGORIES</h5>
          <ul class="list-unstyled mt-2">
            <li class="nav-item mb-2">
              <a class="nav-link" href="#">First Link</a>
            </li>
            <li class="nav-item mb-2">
              <a class="nav-link" href="#">Second Linl</a>
            </li>
            <li class="nav-item mb-2">
              <a class="nav-link" href="#">Third Link</a>
            </li>
            <li class="nav-item mb-2">
              <a class="nav-link" href="#">Fourth Link</a>
            </li>
          </ul>
        </div>
        <div class="col-lg-2 col-md-3 col-sm-6 px-3 py-5 text-md-start text-center">
          <h5 class="">GATEGORIES</h5>
          <ul class="list-unstyled mt-2">
            <li class="nav-item mb-2">
              <a class="nav-link" href="#">First Link</a>
            </li>
            <li class="nav-item mb-2">
              <a class="nav-link" href="#">Second Linl</a>
            </li>
            <li class="nav-item mb-2">
              <a class="nav-link" href="#">Third Link</a>
            </li>
            <li class="nav-item mb-2">
              <a class="nav-link" href="#">Fourth Link</a>
            </li>
          </ul>
        </div>
        <div class="col-lg-2 col-md-3 col-sm-6 px-3 py-5 text-md-start text-center">
          <h5 class="">GATEGORIES</h5>
          <ul class="list-unstyled mt-2">
            <li class="nav-item mb-2">
              <a class="nav-link" href="#">First Link</a>
            </li>
            <li class="nav-item mb-2">
              <a class="nav-link" href="#">Second Linl</a>
            </li>
            <li class="nav-item mb-2">
              <a class="nav-link" href="#">Third Link</a>
            </li>
            <li class="nav-item mb-2">
              <a class="nav-link" href="#">Fourth Link</a>
            </li>
          </ul>
        </div>
      </div>
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link disabled">©2024 Company, Inc</a>
        </li>
        <li class="nav-item ms-auto">
          <a class="nav-link" href="#"><i class="bi bi-facebook"></i></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><i class="bi bi-instagram"></i></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><i class="bi bi-twitter"></i></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><i class="bi bi-linkedin"></i></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><i class="bi bi-chat-dots"></i></a>
        </li>
      </ul>
    </div>
  </footer>

</template>

<style scoped></style>
