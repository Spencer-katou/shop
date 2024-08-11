<script>
import { RouterLink } from 'vue-router';
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
              <RouterLink class="nav-link" to="/ShoppingOne">
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
</template>