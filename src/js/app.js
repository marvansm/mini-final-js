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
const modalPage = document.querySelector(".productModals");
const modalBtn = document.querySelectorAll(".ri-eye-line");
const loginModals = document.querySelector(".loginModals");
const login = document.querySelector(".login");
const closelogin = document.querySelector(".closelogin");
const shopProduct = document.querySelector("#shopProduct");
const shopSlide = document.querySelector("#shop-slide");
const relatedProduct = document.querySelector("#relatedProduct");
const details = document.querySelector("#details");
const blogDetail = document.querySelector("#blogDetail");
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

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

getDataById("products", id).then((data) => {
  data?.forEach((item) => {
    details.innerHTML = `            <div class="col-xl-6 mt-5">
               <div class="carts">
                 <h2>
                  ${item.title}
                 </h2>
                 <a href="../public/shop.html">
                   <h3>${item.name}</h3>
                 </a>
                 <div class="price">
                   <span class="old">${item.oldprice}</span>
                   <span class="current">${item.current}</span>
                 </div>
                 <p class="status">Tax included</p>

                 <div class="time">
                   <p class="status"><i class="ri-timer-line"></i>Hurry up</p>
                   <div class="counter">
                     <span
                       >745
                       <p>Days</p></span
                     >
                     <span
                       >20
                       <p>Hour</p></span
                     >
                     <span
                       >08
                       <p>Mins</p></span
                     >
                     <span
                       >31
                       <p>Sec</p></span
                     >
                   </div>
                 </div>
                 <div class="process">
                   <div class="load">
                     <span class="start"></span>
                     <span></span>
                     <span></span>
                     <span></span>
                     <span></span>
                     <span></span>
                     <span class="last"></span>
                   </div>
                 </div>
                 <p class="desc">
              ${item.description}
                 </p>
                 <div class="addCart">
                   <ul>
                     <li><i class="ri-subtract-line"></i></li>
                     <li>0</li>
                     <li><i class="ri-add-line"></i></li>
                   </ul>
                   <button>
                     <i class="ri-shopping-bag-line"></i>Add To Cart
                   </button>
                 </div>
                 <div class="info">
                   <div class="left">
                     <ul>
                       <li><i class="ri-share-line"></i></li>
                       <li>
                         <h2>Genre:</h2>
                         <h3>PvP, Tower Defense, RPG</h3>
                       </li>
                     </ul>
                     <ul>
                       <li><i class="ri-global-line"></i></li>
                       <li>
                         <h2>Languages:</h2>
                         <h3>English[UK], French, Dutch</h3>
                       </li>
                     </ul>
                   </div>
                   <div class="right">
                     <ul>
                       <li><i class="ri-team-fill"></i></li>
                       <li>
                         <h2>Developers:</h2>
                         <h3>Sony Interactive Entertainment</h3>
                       </li>
                     </ul>
                     <ul>
                       <li><i class="ri-gamepad-fill"></i></li>
                       <li>
                         <h2>Platform:</h2>
                         <h3>PS 5, Xbox Series X, Steam Share</h3>
                       </li>
                     </ul>
                   </div>
                 </div>
                 <ul class="media">
                   <li>Share</li>
                   <li><i class="ri-facebook-circle-line"></i></li>
                   <li><i class="ri-twitter-line"></i></li>
                   <li><i class="ri-linkedin-box-line"></i></li>
                   <li><i class="ri-telegram-line"></i></li>
                 </ul>
               </div>
             </div>
             <div class="col-xl-6 mt-5">
               <div class="carts-img">
                 <img
                   src=${item.image}
                   alt=""
                 />
                 <ul>
                   <li>
                     <img
                       src=${item.image}
                       alt=""
                     />
                   </li>
                   <li>
                     <img
                       src=${item.image}
                       alt=""
                     />
                   </li>
                 </ul>
               </div>
             </div>`;
  });
});

getDataById("blog", id).then((data) => {
  data?.forEach((item) => {
    blogDetail.innerHTML += `   <div class="col-xl-9">
            <div class="left">
                <div class="left-img">
                    <img src=${item.img} alt="">
                </div>
                <div class="content">
                    <h2>${item.title}
                    </h2>
                    <ul>
                      <li><i class="ri-calendar-2-line"></i>August 7, 2024
                        /</li>
                        <li>Posted by
                          rosetyler
                          /</li>
                          <li><i class="ri-eye-2-line"></i>548
                            /</li>
                            <li><i class="ri-chat-2-line"></i>0</li>
                    </ul>
                    <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Purus sem magna dis; per justo feugiat. Velit eros ornare libero nisl placerat nisl porttitor elementum. Tellus fames condimentum facilisi curae nullam. Dapibus felis pulvinar nec, efficitur primis platea eget. Justo hendrerit accumsan magna malesuada platea; habitasse conubia. Eget himenaeos dui vulputate bibendum finibus suspendisse litora tellus elit. Curae ligula dolor eget ad montes aenean metus. Dis massa congue netus euismod adipiscing taciti non est.</p>
                    <p>Dapibus aptent magnis augue class penatibus porttitor. Mauris inceptos nascetur himenaeos elit rutrum sem netus rutrum. Rutrum integer varius lacus tellus egestas vel viverra. Nulla maecenas integer facilisis vulputate rutrum phasellus. Primis vel at venenatis nulla mus dui pretium. Vehicula in curabitur; accumsan suscipit blandit ad vulputate. Vehicula bibendum condimentum nibh curae libero pellentesque tincidunt class purus. Hendrerit ligula venenatis tempus blandit malesuada platea. Ultrices orci sed lacinia nibh quisque integer.</p>
                    <p>Dictum efficitur aliquet elementum maximus tristique eget. Senectus curae ex senectus at pulvinar massa, volutpat dui varius. Commodo facilisis luctus gravida molestie dui, leo ultrices sociosqu. Cursus amet consequat finibus rhoncus primis. Dapibus magnis turpis torquent curabitur facilisi mi blandit rhoncus. Duis duis curae urna fames diam convallis euismod facilisis magnis. Mus orci elit nullam potenti mi bibendum. Purus phasellus lacinia fermentum enim ipsum aptent molestie. Pulvinar risus vel sagittis non ridiculus etiam penatibus.</p>
                    <p>Conubia feugiat commodo scelerisque nulla semper eget tempus hac. Diam nisl parturient vehicula pretium auctor justo sapien odio. Sapien tincidunt himenaeos neque eget amet primis nullam condimentum. Curae lobortis sociosqu morbi ullamcorper sapien volutpat erat sem urna. Finibus fames iaculis purus tempor cursus ultrices vivamus. Nunc cras parturient; litora dictum ex dictum. Quis non venenatis leo placerat tempor porta eget ante amet. Pharetra bibendum conubia interdum consectetur, egestas interdum a?
                    </p>
                    <div class="social">
                      <i class="ri-facebook-circle-line"></i>
                      <i class="ri-twitter-line"></i>
                      <i class="ri-telegram-2-line"></i>
                      <i class="ri-linkedin-box-line"></i>
                      <i class="ri-youtube-line"></i>
                      <i class="ri-whatsapp-line"></i>
                    </div>
                    <div class="title-text">
                      <h2>About author</h2>
                      <div class="blog-cart mt-5">
                        <div class="blog-img">
                          <img src="https://xstore.b-cdn.net/elementor2/home-decor02/wp-content/uploads/sites/9/2023/04/ava.jpg" alt="">
                        </div>
                         <div class="blog-body">
                          <h2>
                            rosetyler</h2>
                            <p>There are many variations of passages of available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going there isn't anything embarrassing hidden in the middle of text.</p>
                            <button>
												Other posts by rosetyler                                            
                            </button>
                         </div>
                      </div>
                      
                    </div>
                    <div class="title-text">
                      <h2>Related posts</h2>
                      <div class="related my-5">
                        <div class="image">
                          <img src=${item.img} alt="">
                        </div>
                        <div class="text">
                          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</h2>
                          <ul>
                            <li><i class="ri-calendar-2-line"></i>August 7, 2024
                              /</li>
                              <li>Posted by
                                rosetyler
                                /</li>
                                <li><i class="ri-eye-2-line"></i>548
                                  /</li>
                                  <li><i class="ri-chat-2-line"></i>0</li>
                          </ul>
                          <p>
                            Lorem ipsum odor amet, consectetuer adipiscing elit. Congue hac et dis cursus ipsum. Tortor nascetur facilisi maecenas montes ultrices fames. Dui montes litora cubilia maximus... </p>
                            <button>Continue reading
                            </button>
                          
                        </div>
                      </div>
                    </div>
                    
                  
                </div>
            </div>
        </div>
        <div class="col-xl-3">
          <div class="right">
          <form >
            <input type="text" name="" id="" placeholder="Search">
            <i class="ri-search-line"></i>
          </form>
          <div class="head-text">
            <h2>Recent Posts</h2>
            <div class="text">
<p>Perfecting Souls-Like Games: The Rise of a WinningFormula Gaming</p>
 <p>Difficulty, Deception and Death: The Design of aSouls-Like
  Game Taxonomy </p> <p>Transform Game Development:Here’s How
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
            </div>
          </div>
          <div class="head-text">
            <h2>Recent Posts</h2>
            <div class="text">
<p>Perfecting Souls-Like Games: The Rise of a WinningFormula Gaming</p>
 <p>Difficulty, Deception and Death: The Design of aSouls-Like
  Game Taxonomy </p> <p>Transform Game Development:Here’s How
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
            </div>
          </div>
          <div class="head-text">
            <h2>Recent Posts</h2>
            <div class="text">
<p>Perfecting Souls-Like Games: The Rise of a WinningFormula Gaming</p>
 <p>Difficulty, Deception and Death: The Design of aSouls-Like
  Game Taxonomy </p> <p>Transform Game Development:Here’s How
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
            </div>
          </div>
          <div class="head-text">
            <h2>Recent Posts</h2>
            <div class="text">
<p>Perfecting Souls-Like Games: The Rise of a WinningFormula Gaming</p>
 <p>Difficulty, Deception and Death: The Design of aSouls-Like
  Game Taxonomy </p> <p>Transform Game Development:Here’s How
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
            </div>
          </div>
          </div>
          
        </div>`;
  });
});

getDataWithApi("products").then((data) => {
  const homeData = data.slice(0, 4);

  product_list &&
    homeData.forEach((item) => {
      product_list.innerHTML += `
<a href="../public/detail.html?id=${item.id}">

      <div class="col">
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
    />

`;
    });
  const trendGame = data.slice(0, 5);
  trendGameHTml &&
    trendGame.forEach((item) => {
      trendGameHTml.innerHTML += `  <div class="col">
                    <div class="carts">
        <div class="carts-img">
        <a href="../public/detail.html?id=${item.id}">
          <img
            src=${item.image}
            alt=""
          />
          </a>
          <div class="pos-icon">
          <i class="ri-shopping-basket-line" data-product='${JSON.stringify(
            item
          )}'></i>
          <i class="ri-eye-line" data-product='${JSON.stringify(item)}'></i>
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
                 <a href="../public/detail.html?id=${item.id}">

        <img
          src=${item.image}
          alt=""
        />
        </a>
        <div class="pos-icon">
        <i class="ri-shopping-basket-line" data-product='${JSON.stringify(
          item
        )}'></i>
        <i class="ri-eye-line" data-product='${JSON.stringify(item)}' ></i>
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
  const category = data.slice(0, 6);
  shopSlide &&
    category.forEach((item) => {
      shopSlide.innerHTML += `  <div class="col">
            <div class="shop-box">
              <div class="shop-img">
                <img src=${item.image} alt="" />
              </div>
              <h2>${item.name}</h2>
            </div>
          </div>`;
    });

  shopProduct &&
    data?.forEach((item) => {
      shopProduct.innerHTML += `<div class="col">
                 <div class="carts">
    <div class="carts-img">
      <a href="../public/detail.html?id=${item.id}">  
      <img
        src=${item.image}
        alt=""
      />
      </a>
      <div class="pos-icon">
      <i class="ri-shopping-basket-line" data-product='${JSON.stringify(
        item
      )}'></i>
      <i class="ri-eye-line" data-product='${JSON.stringify(item)}'></i>
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
  const related = data.slice(0, 6);
  relatedProduct &&
    related?.forEach((item) => {
      relatedProduct.innerHTML += `<div class="col">
                 <div class="carts">
    <div class="carts-img">
      <a href="../public/detail.html?id=${item.id}">  
      <img id="detailimg"
        src=${item.image}
        alt="" data-product='${JSON.stringify(item)}'
      />
      </a>
      <div class="pos-icon">
      <i class="ri-shopping-basket-line" data-product='${JSON.stringify(
        item
      )}'></i>
      <i class="ri-eye-line" data-product='${JSON.stringify(item)}'></i>
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

  document.querySelectorAll(".ri-eye-line").forEach((btn) => {
    btn.addEventListener("click", () => {
      const data = JSON.parse(btn.getAttribute("data-product"));
      modalPage.innerHTML = ` <div class="modalContent">
        <div class="closeBtn">
          <button><i class="ri-close-large-line"></i></button>
        </div>
        <div class="carts">
          <div class="carts-img">
            <img src=${data.image} alt="" />
          </div>
          <div class="carts-body">
            <h2 class="title">
             ${data.title}
            </h2>
            <div class="price">
              <span class="current">${data.current}</span>
            </div>
            <div class="stars">
              <i class="ri-star-s-fill"></i>
              <i class="ri-star-s-fill"></i>
              <i class="ri-star-s-fill"></i>
              <i class="ri-star-s-fill"></i>
              <i class="ri-star-s-fill"></i>
            </div>
            <p class="desc">
            ${data.description}
            </p>
            <div class="addtocart">
              <ul>
                <li><i class="ri-subtract-line"></i></li>
                <li class="countmd">0</li>
                <li><i class="ri-add-line"></i></li>
              </ul>
              <button><i class="ri-shopping-bag-line"></i>Add To Cart</button>
            </div>
          </div>
        </div>
      </div>`;

      modalPage.classList.add("active");
      document.querySelector(".closeBtn").addEventListener("click", () => {
        modalPage.classList.remove("active");
      });
    });
  });
  document.querySelectorAll(".ri-shopping-basket-line").forEach((Add) => {
    Add.addEventListener("click", async () => {
      const data = JSON.parse(Add.getAttribute("data-product"));
      await addLocalStorageData(data);
      renderBasket();
    });
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
            <a href="../public/blogg.html?id=${item.id}"
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
      </a>
  </div>
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
const productlistAdmin = document.querySelector("#product-list");
const adminName = document.querySelector("#adminName");
const AdminDesc = document.querySelector("#AdminDesc");
const Adminprice = document.querySelector("#Adminprice");
const Adminimage = document.querySelector("#Adminimage");
const Adminsubmit = document.querySelector("#Adminsubmit");
const productform = document.querySelector("#product-form");
const deleteProduct = document.querySelectorAll("#deleteProduct");

productform &&
  productform.addEventListener("submit", (e) => {
    e.preventDefault();
    e.stopPropagation();
    const addData = {
      id: crypto.randomUUID(),
      title: adminName.value,
      description: AdminDesc.value,
      current: Adminprice.value,
      image: Adminimage.value,
    };
    axios.post("http://localhost:3000/products", addData).then((data) => {});
  });

getDataWithApi("products").then((data) => {
  productlistAdmin &&
    data?.forEach((item) => {
      productlistAdmin.innerHTML += `<div class="col" data-product='${JSON.stringify(
        item
      )}'>
                    <div class="carts">
        <div class="carts-img">
        <a href="../public/detail.html?id=${item.id}">
          <img
            src=${item.image}
            alt=""
          />
          </a>
          <div class="pos-icon">
          <i class="ri-shopping-basket-line" data-product='${JSON.stringify(
            item
          )}'></i>
          <i class="ri-eye-line" data-product='${JSON.stringify(item)}'></i>
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
          <button id="deleteProduct" class="btn btn-danger"><i class="ri-delete-bin-line"></i></button>
        </div>
      </div>
                </div>`;
    });
});

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
          title: "Done!",
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

basketIcon &&
  basketIcon.addEventListener("click", () => {
    basketModals.classList.add("active");
  });

closebasket &&
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
                  <li class="zero">${item.quantity}</li>
                  <li><i class="ri-add-line"></i></li>
                </ul>
                <span class="current">$${item.current}</span>
              </div>
            </div>
          </div>`;
  });
};
