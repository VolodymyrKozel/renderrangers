import{a as n,r as l}from"./assets/renderMarkup-67b054f4.js";const p={isSupported(){return typeof Storage<"u"},has(s){return localStorage.hasOwnProperty(s)},get(s){let t=localStorage.getItem(s);if(typeof t!="string")return t;if(t!=="undefined")return t==="null"?null:/^'-?\d{1,}?\.?\d{1,}'$/.test(t)||/^'-?\d{1}\.\d+e\+\d{2}'$/.test(t)?Number(t):t[0]==="{"||t[0]==="["?JSON.parse(t):t},set(s,t){if(typeof s!="string")throw new TypeError(`localStorage: Ключ повинен бути рядком. (зчитування '${s}')`);(typeof t=="object"||Array.isArray(t))&&(t=JSON.stringify(t)),localStorage.setItem(s,t)},remove(s){localStorage.removeItem(s)}};function c({_id:s,list_name:t,author:i,title:e,book_image:a,description:o,buy_links:r}){return`<li class="shopping-item">
            <img
              class="shopping-img"
              src="${a}"
              alt="${e}"
            />
            <div class="shopping-wrap">
              <div class="heading-info">
                <div class="title-container">
                  <h2 class="title-book">
                    ${e}
                  </h2>
                  <p class="category-book">${t}</p>
                </div>
                <button
                  class="delete-shopping-item-btn"
                  data-id="${s}"
                >
                  <svg class="trash-btn-icon" height="16" width="16">
                    <use href="./img/icons/icons.svg#icon-trash"></use>
                  </svg>
                </button>
              </div>
              <p class="descr-shopping">${o}</p>
              <div class="author-info-container">
                <p class="author-info">${i}</p>
                ${g(r)}
              </div>
            </div>
          </li>`}function g(s){const t=s.find(e=>e.name==="Amazon").url,i=s.find(e=>e.name==="Apple Books").url;return`<ul class="shop-link-list">
              <li class=""shop-link-item>
                <a class="shop-link-amazon" href="${t}" target="_blank">
                   <img src="./img/amazon.png" alt="Amazon" class="amazon-image">
                </a>
              </li>
              <li class=""shop-link-item>
                <a class="shop-link-amazon" href="${i}" target="_blank">
                    <img src="./img/apple-1x.png" alt="Apple-books" class="apple-books-image">
                </a>
              </li>
          </ul>`}function m(){n.shoppingListMain.innerHTML="";let s=p.get("cart");if(!s||!s.length)return;n.shoppingText.style.marginBottom="40px",n.shoppingEmpty.classList.add("hidden");const i=l(c,s);n.shoppingListMain.innerHTML=i}m();
//# sourceMappingURL=commonHelpers2.js.map
