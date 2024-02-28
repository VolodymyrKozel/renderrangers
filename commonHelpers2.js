import{a as n,r as c}from"./assets/header-78493582.js";const r={isSupported(){return typeof Storage<"u"},has(e){return localStorage.hasOwnProperty(e)},get(e){let t=localStorage.getItem(e);if(typeof t!="string")return t;if(t!=="undefined")return t==="null"?null:/^'-?\d{1,}?\.?\d{1,}'$/.test(t)||/^'-?\d{1}\.\d+e\+\d{2}'$/.test(t)?Number(t):t[0]==="{"||t[0]==="["?JSON.parse(t):t},set(e,t){if(typeof e!="string")throw new TypeError(`localStorage: Ключ повинен бути рядком. (зчитування '${e}')`);(typeof t=="object"||Array.isArray(t))&&(t=JSON.stringify(t)),localStorage.setItem(e,t)},remove(e){localStorage.removeItem(e)}},i="cart";function g({_id:e,list_name:t,author:o,title:s,book_image:a,description:l,buy_links:p}){return`<li class="shopping-item" data-id="${e}">
            <img
              class="shopping-img"
              src="${a}"
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
              <p class="descr-shopping">${l}</p>
              <div class="author-info-container">
                <p class="author-info">${o}</p>
                ${m(p)}
              </div>
            </div>
          </li>`}function m(e){const t=e.find(s=>s.name==="Amazon").url,o=e.find(s=>s.name==="Apple Books").url;return`<ul class="shop-link-list">
              <li class=""shop-link-item>
                <a class="shop-link-amazon" href="${t}" target="_blank">
                   <img src="./img/amazon.png" alt="Amazon" class="amazon-image">
                </a>
              </li>
              <li class=""shop-link-item>
                <a class="shop-link-amazon" href="${o}" target="_blank">
                    <img src="./img/apple-1x.png" alt="Apple-books" class="apple-books-image">
                </a>
              </li>
          </ul>`}function d(){n.shoppingListMain.innerHTML="";let e=r.get(i);if(!e||!e.length)return;n.shoppingText.style.marginBottom="40px",n.shoppingEmpty.classList.add("hidden");const o=c(g,e);n.shoppingListMain.innerHTML=o;const s=document.querySelector(".js-shopping-main");console.log(s),s.addEventListener("click",f)}function f(e){if(e.target.tagName==="BUTTON"||e.target.tagName==="svg"||e.target.tagName==="use"){const t=e.target.closest(".shopping-item"),s=r.get(i).filter(({_id:a})=>a!==t.dataset.id);localStorage.setItem(i,JSON.stringify(s)),t.remove()}}d();
//# sourceMappingURL=commonHelpers2.js.map
