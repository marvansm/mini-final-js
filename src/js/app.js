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
const closeModal = document.querySelector(".closeBtn");
const modalPage = document.querySelector(".productModals");
const modalBtn = document.querySelectorAll(".ri-eye-line");
const loginModals = document.querySelector(".loginModals");
const login = document.querySelector(".login");
const closelogin = document.querySelector(".closelogin");
const shopProduct = document.querySelector("#shopProduct");
const slider = document.querySelector(".swiper-wrapper");

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 5000,
});

const getDataById = async (url, id) => {
  const res = await axiosInstance.get(url + "?id=" + id);
  return res.data;
};

const getLocalStorageData = () => {
  const localStorageData = JSON.parse(localStorage.getItem("Products")) || [];
  return localStorageData;
};

const addLocalStorageData = async (data) => {
  const localStorageData = getLocalStorageData();

  const index = localStorageData.findIndex((item) => item.id === data.id);
  if (index === -1) {
    const res = await getDataById("products", data.id);
    const newItem = res[0];
    newItem.quantity = 1;
    localStorageData.push(newItem);
  } else {
    localStorageData[index].quantity += 1;
  }

  localStorage.setItem("Products", JSON.stringify(localStorageData));
};

const getDataWithApi = async (url) => {
  const res = await axiosInstance.get(url);
  return res.data;
};

getDataWithApi("products").then((data) => {
  const homeData = data.slice(0, 4);

  product_list &&
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
  trendGameHTml &&
    trendGame.forEach((item) => {
      trendGameHTml.innerHTML += `  <div class="col">
                  <div class="carts">
                    <div class="carts-img">
                      <img
                        src=${item.image}
                        alt=""
                      />
                      <div class="pos-icon">
                      <i class="ri-shopping-basket-line" data-product='${JSON.stringify(
                        item
                      )}'></i>
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
                    <i class="ri-shopping-basket-line" data-product='${JSON.stringify(
                      item
                    )}'></i>
                    <i class="ri-eye-line" ></i>
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

  shopProduct &&
    data?.forEach((item) => {
      shopProduct.innerHTML += `<div class="col">
                  <div class="carts">
                    <div class="carts-img">
                      <img
                        src=${item.image}
                        alt=""
                      />
                      <div class="pos-icon">
                      <i class="ri-shopping-basket-line" data-product='${JSON.stringify(
                        item
                      )}'></i>
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
  document.querySelectorAll(".ri-shopping-basket-line").forEach((Add) => {
    Add.addEventListener("click", async () => {
      const data = JSON.parse(Add.getAttribute("data-product"));
      await addLocalStorageData(data);
      renderBasket();
    });
  });
  document.querySelectorAll(".ri-eye-line").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      modalPage.classList.toggle("active");
    });
  });
  closeModal &&
    closeModal.addEventListener("click", () => {
      modalPage.classList.remove("active");
    });
});

getDataWithApi("gallery").then((data) => {
  joinUS &&
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
  blogRender &&
    data?.forEach((item) => {
      blogRender.innerHTML += ` <div class="col-xl-4">
               <a href="../public/blogg.html"
  ><div class="box">
    <div class="box-img">
      <img src="${item.img}" alt="" />
      <div class="pos-btn">
        <button>${item.category}</button>
      </div>
    </div>
    <div class="box-body">
      <h2>${item.title}</h2>
    </div>
  </div></a
>
          </div>`;
    });
});

login &&
  login.addEventListener("click", () => {
    loginModals.classList.add("activeLogin");
  });
closelogin &&
  closelogin.addEventListener("click", () => {
    loginModals.classList.remove("activeLogin");
  });

const email_Input = document.querySelector(".email");
const password_Input = document.querySelector(".password");
const loginForm = document.querySelector("#loginForm");
const submitButton = document.querySelector("#submit");
const basketModals = document.querySelector(".basketModals");
const closebasket = document.querySelector(".closebasket");
const basketIcon = document.querySelector(".basketIcon");
const basketProduct = document.querySelector(".content");

const axiosLogin = axios.create({
  baseURL: "https://dummyjson.com/auth/",
  timeout: 5000,
});
const postLoginData = async (url, payload) => {
  const res = await axiosLogin.post(url, payload);
  return res.data;
};

loginForm &&
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const payload = {
      username: email_Input.value,
      password: password_Input.value,
    };
    postLoginData("login", payload).then((data) => {
      if (data) {
        Swal.fire({
          title: "Drag me!",
          icon: "success",
          draggable: true,
        });
      }
      sessionStorage.setItem("token", data.accessToken);
      setTimeout(() => {
        window.location.href = "http://127.0.0.1:5500/public/admin.html";
      }, 1000);
    });
  });

basketIcon.addEventListener("click", () => {
  basketModals.classList.add("active");
});

closebasket.addEventListener("click", () => {
  basketModals.classList.remove("active");
});

const renderBasket = () => {
  const basketItem = getLocalStorageData();
  basketProduct.innerHTML = "";

  basketItem.forEach((item) => {
    basketProduct.innerHTML += ` <div class="product">
            <div class="product-img">
              <img src=${item.image} alt="" />
            </div>
            <div class="product-body">
              <h2 class="title">${item.title}</h2>
              <div class="price">
                <ul>
                  <li><i class="ri-subtract-line"></i></li>
                  <li>${item.quantity}</li>
                  <li><i class="ri-add-line"></i></li>
                </ul>
                <span class="current">$${item.current}</span>
              </div>
            </div>
          </div>`;
  });
};
