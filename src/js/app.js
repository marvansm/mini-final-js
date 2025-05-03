var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
});

const product_list = document.querySelector("#products");
const trendGameHTml = document.querySelector("#trendGameHTml");
const joinUS = document.querySelector("#joinUs");
const discountProduct = document.querySelector("#discount");
const blogRender = document.querySelector("#blogRender");

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 5000,
});

const getDataWithApi = async (url) => {
  const res = await axiosInstance.get(url);
  return res.data;
};

getDataWithApi("products").then((data) => {
  const homeData = data.slice(0, 4);

  homeData.forEach((item) => {
    product_list.innerHTML += `
      <div class="col-xl-6">
                 <div class="left">
    
    <div class="box">
<div class="box-img">
  <img src=${item.image} alt="" />
</div>
<div class="box-body">
  <h2>
    ${item.title}
  </h2>
  <div class="stars">
    <i class="ri-star-s-fill"></i>
    <i class="ri-star-s-fill"></i>
    <i class="ri-star-s-fill"></i>
    <i class="ri-star-s-fill"></i>
    <i class="ri-star-s-fill"></i>
  </div>
  <div class="price">
    <span class="old">${item.oldprice}</span>
    <span class="current">${item.current}</span>
  </div>
</div>
</div>
</div>
              </div> 

`;
  });
  const trendGame = data.slice(0, 5);
  trendGame.forEach((item) => {
    trendGameHTml.innerHTML += `  <div class="col">
                  <div class="carts">
                    <div class="carts-img">
                      <img
                        src=${item.image}
                        alt=""
                      />
                      <div class="pos-icon">
                      <i class="ri-shopping-basket-line"></i>
                      <i class="ri-eye-line"></i>
                      </div>
                    </div>
                    <div class="carts-body">
                      <h2 class="title">
                       ${item.title}
                      </h2>
                      <div class="stars">
                        <i class="ri-star-s-fill"></i>
                        <i class="ri-star-s-fill"></i>
                        <i class="ri-star-s-fill"></i>
                        <i class="ri-star-s-fill"></i>
                        <i class="ri-star-s-fill"></i>
                      </div>
                      <div class="price">
                        <span class="current">${item.current} </span>
                      </div>
                    </div>
                  </div>
                </div>`;
    discountProduct.innerHTML += `  <div class="col">
                <div class="carts">
                  <div class="carts-img">
                    <img
                      src=${item.image}
                      alt=""
                    />
                    <div class="pos-icon">
                    <i class="ri-shopping-basket-line"></i>
                    <i class="ri-eye-line"></i>
                    </div>
                  </div>
                  <div class="carts-body">
                    <h2 class="title">
                     ${item.title}
                    </h2>
                    <div class="stars">
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                    </div>
                    <div class="price">
                      <span class="current">${item.current} </span>
                    </div>
                  </div>
                </div>
              </div>`;
  });
});

getDataWithApi("gallery").then((data) => {
  data?.forEach((item) => {
    joinUS.innerHTML += `<div class="col">
              <div class="gallery">
                <img
                  src=${item.image}
                  alt=""
                />
              </div>
            </div>`;
  });
});

getDataWithApi("blog").then((data) => {
  data?.forEach((item) => {
    blogRender.innerHTML += ` <div class="col-xl-4">
              <div class="box">
                <div class="box-img">
                  <img
                    src=${item.img}
                    alt=""
                  />
                  <div class="pos-btn">
                    <button>${item.category}</button>
                  </div>
                </div>
                <div class="box-body">
                  <h2>
                   ${item.title}
                  </h2>
                </div>
              </div>
            </div>`;
  });
});
