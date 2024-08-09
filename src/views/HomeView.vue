<script> 
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  mounted() {
    AOS.init()
    
  }
}
</script>

<template>
  <header class="mb-5">
    <div id="carouselExampleCaptions" class="carousel slide">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
          aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
          aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
          aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="@/assets/imgea/pie-1.jpg" class="d-block w-100 my-h-75" alt="...">
          <div class="carousel-caption d-none d-md-block text-start">
            <h2>新鮮就在你手中</h2>
            <p>食材採用友善農耕作物，有機無毒，讓我們一起為自然生態而努力</p>
            <button type="button" class="btn btn-primary btn-lg">了解更多</button>
          </div>
        </div>
        <div class="carousel-item">
          <img src="@/assets/imgea/pie-2.jpg" class="d-block w-100 my-h-75" alt="...">
          <div class="carousel-caption d-none d-md-block text-end">
            <h2 class="text-dark"><span class="bg-light bg-opacity-50">美味，僅需品味</span></h2>
            <p class="text-dark">無須言語，吃了就知道</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="@/assets/imgea/KIKI.webp" class="d-block w-100 my-h-75" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h2>快來找我們玩</h2>
            <p></p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </header>
  <main class="container py-5 px-5">
    <section data-aos="fade-up" data-aos-anchor-placement="top-center" class="text-center pb-5">
      <h1> Keep it Fresh</h1>
      <p>對於食物，永遠給你最新鮮的。如同你的生活，每天都要過的鮮豔有趣。
      </p>
    </section>
    <section data-aos="zoom-in-up" class="row">
      <div class="col-lg-4 px-3 py-5 text-center">
        <div class="my-circle rounded-circle mx-auto"></div>
        <h2 class="pt-3">產銷履歷</h2>
        <h5 class="fs-6 fw-light py-3 px-4">了解食材的產地，看見他們所用心培養的食材，認識在地小農</h5>
        <button type="button" class="btn btn-outline-success">了解更多 »</button>
      </div>
      <div class="col-lg-4 px-3 py-5 text-center">
        <div class="my-circle-2 rounded-circle bg-secondary mx-auto"></div>
        <h2 class="pt-3">二次元食物</h2>
        <h5 class="fs-6 fw-light py-3 px-4">
          即刻報名，挑戰製作來自二次元的美食，快來挑戰你喜歡的二次元美食吧
        </h5>
        <button type="button" class="btn btn-outline-success">即刻報名 »</button>
      </div>
      <div class="col-lg-4 px-3 py-5 text-center">
        <div class="my-circle-3 rounded-circle bg-secondary m-auto text-auto pt-2 bg-opacity-10"><i
            class="bi bi-clipboard-plus-fill fs-10"></i></div>
        <h2 class="pt-3">即刻訂購</h2>
        <h5 class="fs-6 fw-light py-3 px-4">
          歡迎訂購各項商品，皆採用冷藏運送，當天出貨，讓您的美食隨時保持新鮮</h5>
        <button type="button" class="btn btn-outline-success">前往預定 »</button>
      </div>
      <button type="button" class="btn btn-success opacity-75 w-25 mx-auto my-2">了解更多 »</button>
    </section>
    <br>
    <section class="row py-5">
      <div data-aos="fade-down-right" class="col-12 col-md-3 d-flex flex-warp flex-column my-auto">
        <p class="fs-5">
          歡迎來到我們的烘焙坊！我們致力於提供最新鮮、美味的烘焙產品。
        </p>
      </div>
      <div data-aos="fade-down-left" class="col col-md-9">
        <p>
          我們的烘焙師傅以其精湛的技藝和創造力而著稱，他們每天早晨都在烘焙坊開始新的一天，為您準備各種新鮮出爐的驚喜。我們使用的原材料都經過精心挑選，確保每一個產品都符合我們的高標準和您的期望。
        </p>
      </div>
    </section>
    <div class="container">
      <div class="row">
        <div class="col-6">
          <div class="row">
            <div class="col-6 px-1">
              <img src="@/assets/imgea/招牌.webp" height="150px" class="w-100" alt="">
            </div>
            <div class="col-6 px-1">
              <img src="@/assets/imgea/店.webp" height="150px" class="w-100" alt="">
            </div>
          </div>
          <div class="row">
            <div class="col px-1 pt-2">
              <img src="@/assets/imgea/飛雁.gif" height="310px" class="w-100" alt="">
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="row">
            <div class="col px-1 pb-2">
              <img src="@/assets/imgea/rob-wicks-IIlv0_OI6vM-unsplash.jpg" height="310px" class="w-100" alt="">
            </div>
          </div>
          <div class="row">
            <div class="col-6 px-1">
              <img src="https://dummyimage.com/500x300/000/60616b" height="150px" class="w-100" alt="">
            </div>
            <div class="col-6 px-1">
              <img src="https://dummyimage.com/500x300/000/60616b" height="150px" class="w-100" alt="">
            </div>
          </div>
        </div>
      </div>
      <br>
      <div data-aos="flip-up" class="text-center my-5">
        <h2>
          「傳統與創新的美味結合：探索我們的烘焙坊」
        </h2>
        <p>
          在這裡，您不僅可以品嘗到傳統的經典烘焙美食，還可以發現我們不斷創新和改良的新品。無論您是追求經典口味還是尋求新鮮感的冒險家，我們的烘焙坊都能滿足您的味蕾。
        </p>
      </div>
      <table data-aos="zoom-out-up" class="table">
        <thead class="table-warning">
          <tr>
            <th scope="col">套餐</th>
            <th scope="col">品名</th>
            <th scope="col">品名</th>
            <th scope="col">品名</th>
            <th scope="col">選擇</th>
          </tr>
        </thead>
        <tbody class="table-success">
          <tr>
            <th scope="row">早餐</th>
            <td>法式麵包</td>
            <td>餅乾</td>
            <td>季節性蛋糕</td>
            <td>
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
            </td>
          </tr>
          <tr>
            <th scope="row">下午茶</th>
            <td>多穀麵包</td>
            <td>小點心</td>
            <td>特色茶品</td>
            <td>
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
            </td>
          </tr>
          <tr>
            <th scope="row">季節限定</th>
            <td colspan="2">彩虹時光沙拉</td>
            <td>節慶主題糕點</td>
            <td>
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
            </td>
          </tr>
        </tbody>
      </table>
      <div class="row">
        <div class="col">
          <a href="">
            了解更多 »
          </a>
        </div>
        <div class="col d-flex justify-content-end">
          <button type="button" class="btn btn-success opacity-75 my-2">
            前往預訂 »
          </button>
        </div>
      </div>
      <section class="row py-5">
        <div data-aos="fade-right" class="col-12 col-md-6 d-flex flex-warp flex-column my-auto">
          <p class="fs-4">
            客製化服務，如果您對我們的產品或服務有任何疑問或想要訂購，請隨時與我們聯繫。我們期待為您提供專業、友善的服務！
          </p>
        </div>
        <div data-aos="fade-left" class="col">
          <p>
            不論是慶祝生日、結婚紀念日還是公司活動，我們也提供定制蛋糕服務，讓每一個特別的時刻都更加難忘。我們的團隊樂意為您量身打造獨一無二的甜點，讓您的活動充滿甜蜜和歡樂。
          </p>
        </div>
      </section>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 py-5">
        <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2800" class="col">
          <div class="card h-100">
            <img src="@/assets/imgea/cadr41.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">悠然自得</h5>
              <p class="card-text">
                無論您是在這裡閱讀一本書、尋找片刻的寧靜還是簡單地放鬆身心，我們的一個人下午茶將帶給您溫馨和美味的結合。
              </p>
            </div>
          </div>
        </div>
        <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2500" class="col">
          <div class="card h-100">
            <img src="@/assets/imgea/card42.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2300" class="col">
          <div class="card h-100">
            <img src="@/assets/imgea/card43.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">彩虹時光沙拉</h5>
              <p class="card-text">
                這些蔬菜和水果不僅營養豐富，還帶來豐富的口感和美麗的色澤，確保您每一口都能享受到濃郁而清新的風味
              </p>
            </div>
          </div>
        </div>
        <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="500" class="col">
          <div class="card h-100">
            <img src="@/assets/imgea/card44.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
      </div>
      <section data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" class="row py-5">
        <div class="col-md-7 d-flex flex-warp flex-column my-auto">
          <h2 class="lh-1 display-6">First featurette heading. It’ll blow your mind.</h2>
          <p class="fs-5">Some great placeholder content for the first featurette here. Imagine some exciting prose
            here.
          </p>
        </div>
        <div class="col-md-5">
          <img class="w-100" src="@/assets/imgea/pie-3.jpg" alt="">
        </div>
      </section>
      <hr>
      <section data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" class="row py-5">
        <div class="col-md-7 d-flex flex-warp flex-column my-auto order-md-2">
          <h2 class="lh-1">Oh yeah, it’s that good. See for yourself.</h2>
          <p class="fs-5">Another featurette? Of course. More placeholder content here to give you an idea of how this
            layout would work with some actual real-world content in place.
          </p>
        </div>
        <div class="col-md-5 order-md-1">
          <img class="w-100" src="@/assets/imgea/pie-4.jpg" alt="">
        </div>
      </section>
      <hr>
      <section data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" class="row py-5">
        <div class="col-md-7 d-flex flex-warp flex-column my-auto">
          <h2 class="lh-1">And lastly, this one. Checkmate.</h2>
          <p class="fs-5">And yes, this is the last block of representative placeholder content. Again, not really
            intended to be actually read, simply here to give you a better view of what this would look like with some
            actual content. Your content.
          </p>
        </div>
        <div class="col-md-5">
          <img class="w-100" src="@/assets/imgea/pie-5.jpg" alt="">
        </div>
      </section>
      <div class="row justify-content-center mb-5">
        <button type="button" class="btn btn-primary btn-lg w-50">Large button</button>
      </div>
      <br>
      <section class="row justify-content-center mt-5">
        <div data-aos="zoom-in-right" class="col-12 col-md-6">
          <img src="@/assets/imgea/faypie.jpg" alt="" class="w-100 h-100">
        </div>
        <div data-aos="zoom-in-left" class="col">
          <p class="fs-5">二次元的美味</p>
          <h3>銀魚南瓜派</h3>
          <ul class="nav p-0">
            <li class="nav-item">
              <a class="nav-link disabled px-0">⭐⭐⭐⭐★</a>
            </li>
            <li class="nav-item">
              <a class="nav-link border-end" href="#">4 Reviews</a>
            </li>
            <li class="nav-item ms-5 ms-lg-0">
              <a class="nav-link" href="#"><i class="bi bi-facebook"></i></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><i class="bi bi-twitter"></i></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><i class="bi bi-chat-fill"></i></a>
            </li>
          </ul>
          <p>
            銀魚南瓜派是我們烘焙坊的一道特色甜點，結合了南瓜的濃郁和銀魚的鮮香，帶來獨特的口味體驗。這款派的製作過程精心設計，從選擇新鮮成熟的南瓜到加入香脆的銀魚，每一步都堅持高品質和美味。
          </p>
          <div class="row">
            <div class="col-2 d-flex align-items-center">Color</div>
            <div class="col-3 d-flex align-items-center">
              <div class="my-ball border border-dark rounded-circle bg-secondary text-auto pt-2 bg-opacity-10 me-1">
              </div>
              <div class="my-ball border border-dark rounded-circle bg-dark text-auto pt-2 me-1"></div>
              <div class="my-ball border border-dark rounded-circle bg-danger text-auto pt-2 bg-opacity-10"></div>
            </div>
            <div class="col d-flex align-items-center">Size
              <select class="form-select ms-2 mb-3" id="validationDefault04" required>
                <option selected disabled value="">請選擇...</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
              </select>
            </div>
            <hr>
            <ul class="nav">
              <li class="nav-item">
                <a class="nav-link disabled px-0">
                  <p class="fs-3">$ 599</p>
                </a>
              </li>
              <li class="nav-item ms-auto">
                <a class="nav-link" href="#">
                  <button type="button" class="btn btn-success">Success</button>
                </a>
              </li>
              <li class="nav-item  ms-lg-0">
                <a class="nav-link" href="#">🩶</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 py-5 mt-5">
        <div data-aos="flip-up" data-aos-duration="2500" class="col">
          <div class="card h-100">
            <img src="@/assets/imgea/card-81.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div data-aos="flip-down" data-aos-duration="2500" class="col">
          <div class="card h-100">
            <img src="@/assets/imgea/card-82.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div data-aos="flip-up" data-aos-duration="2500" class="col">
          <div class="card h-100">
            <img src="@/assets/imgea/card-83.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional
                content.</p>
            </div>
          </div>
        </div>
        <div data-aos="flip-down" data-aos-duration="2500" class="col">
          <div class="card h-100">
            <img src="@/assets/imgea/card-84.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div data-aos="flip-up" data-aos-duration="2500" class="col">
          <div class="card h-100">
            <img src="@/assets/imgea/card-85.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div data-aos="flip-down" data-aos-duration="2500" class="col">
          <div class="card h-100">
            <img src="@/assets/imgea/card-86.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div data-aos="flip-up" data-aos-duration="2500" class="col">
          <div class="card h-100">
            <img src="@/assets/imgea/card-87.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div data-aos="flip-down" data-aos-duration="2500" class="col">
          <div class="card h-100">
            <img src="@/assets/imgea/card-88.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
      </div>
      <a href="#">
        <div class="go-top">🡡 回到頁首</div>
      </a>
    </div>
  </main>
  <div class=" position-relative">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14552.074584737316!2d120.95484699999999!3d24.241126599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3468e31039c74c37%3A0x950d94b716c2db78!2z6bO25Zi05bGx!5e0!3m2!1szh-TW!2stw!4v1721279477040!5m2!1szh-TW!2stw"
      width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy"
      referrerpolicy="no-referrer-when-downgrade" class="w-100 my-h-75" id="my-map"></iframe>
    <div class="row px-md-5 w-100 my-h-75 mt-5 position-absolute top-0 justify-content-center">
      <div class="col-6 d-none d-lg-block"></div>
      <!-- <div class="col-6 d-none d-md-block"></div> -->
      <div class="col p-0 p-md-5 mx-auto d-flex flex-column justify-content-center">
        <div class="w-75 bg-light p-3 mx-auto">
          <h2>聯絡我們</h2>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="輸入您的信箱">
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">寫下你的意見或是問題</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <button type="button" class="btn btn-outline-success d-flex mx-auto mt-3">Success</button>
        </div>
      </div>
    </div>
  </div>
</template>
