import{a as o,r as l}from"./assets/header-78493582.js";const p={isSupported(){return typeof Storage<"u"},has(e){return localStorage.hasOwnProperty(e)},get(e){let t=localStorage.getItem(e);if(typeof t!="string")return t;if(t!=="undefined")return t==="null"?null:/^'-?\d{1,}?\.?\d{1,}'$/.test(t)||/^'-?\d{1}\.\d+e\+\d{2}'$/.test(t)?Number(t):t[0]==="{"||t[0]==="["?JSON.parse(t):t},set(e,t){if(typeof e!="string")throw new TypeError(`localStorage: Ключ повинен бути рядком. (зчитування '${e}')`);(typeof t=="object"||Array.isArray(t))&&(t=JSON.stringify(t)),localStorage.setItem(e,t)},remove(e){localStorage.removeItem(e)}},c="cart";function g({_id:e,list_name:t,author:n,title:s,book_image:i,description:a,buy_links:r}){return`<li class="shopping-item" data-id="${e}">
            <img
              class="shopping-img"
              src="${i}"
              alt="${s}"
            />
            <div class="shopping-wrap">
              <div class="heading-info">
                <div class="title-container">
                  <h2 class="title-book">
                    ${s}
                  </h2>
                  <p class="category-book">${t}</p>
                </div>
                <button
                  class="delete-shopping-item-btn"
                  
                >
                  <svg class="trash-btn-icon" height="16" width="16">
                    <use href="./img/icons/icons.svg#icon-trash"></use>
                  </svg>
                </button>
              </div>
              <p class="descr-shopping">${a}</p>
              <div class="author-info-container">
                <p class="author-info">${n}</p>
                ${m(r)}
              </div>
            </div>
          </li>`}function m(e){const t=e.find(s=>s.name==="Amazon").url,n=e.find(s=>s.name==="Apple Books").url;return`<ul class="shop-link-list">
              <li class=""shop-link-item>
                <a class="shop-link-amazon" href="${t}" target="_blank">
                   <img src="./img/amazon.png" alt="Amazon" class="amazon-image">
                </a>
              </li>
              <li class=""shop-link-item>
                <a class="shop-link-amazon" href="${n}" target="_blank">
                    <img src="./img/apple-1x.png" alt="Apple-books" class="apple-books-image">
                </a>
              </li>
          </ul>`}function d(){o.shoppingListMain.innerHTML="";let e=p.get(c);if(!e||!e.length)return;o.shoppingText.style.marginBottom="40px",o.shoppingEmpty.classList.add("hidden");const n=l(g,e);o.shoppingListMain.innerHTML=n;const s=document.querySelector(".shop-link-list");console.log(s),s.addEventListener("click",u)}function u(e){console.log(e.currentTarget)}d();
//# sourceMappingURL=commonHelpers2.js.map
