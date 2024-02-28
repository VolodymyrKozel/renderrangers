import{r as s,b as g}from"./assets/header-5cf470a5.js";import{P as c}from"./assets/vendor-94a85c0e.js";const m=document.querySelector("#tui-pagination-container");let o=2,a=4;window.innerWidth>=768&&(o=3,a=3);const d={itemsPerPage:a,visiblePages:o},h=new c(m,d);h.movePageTo(1);const u={isSupported(){return typeof Storage<"u"},has(e){return localStorage.hasOwnProperty(e)},get(e){let t=localStorage.getItem(e);if(typeof t!="string")return t;if(t!=="undefined")return t==="null"?null:/^'-?\d{1,}?\.?\d{1,}'$/.test(t)||/^'-?\d{1}\.\d+e\+\d{2}'$/.test(t)?Number(t):t[0]==="{"||t[0]==="["?JSON.parse(t):t},set(e,t){if(typeof e!="string")throw new TypeError(`localStorage: Ключ повинен бути рядком. (зчитування '${e}')`);(typeof t=="object"||Array.isArray(t))&&(t=JSON.stringify(t)),localStorage.setItem(e,t)},remove(e){localStorage.removeItem(e)}};function f({_id:e,list_name:t,author:n,title:i,book_image:r,description:p,buy_links:l}){return`<li class="shopping-item" data-id="${e}">
            <img
              class="shopping-img"
              src="${r}"
              alt="${i}"
            />
            <div class="shopping-wrap">
              <div class="heading-info">
                <div class="title-container">
                  <h2 class="title-book">
                    ${i}
                  </h2>
                  <p class="category-book">${t}</p>
                </div>
                <button
                  class="delete-shopping-item-btn"
                  
                >
                  <svg class="trash-btn-icon" height="16" width="16">
                    <use href="../img/icons/icons.svg#icon-trash"></use>
                  </svg>
                </button>
              </div>
              <p class="descr-shopping">${p}</p>
              <div class="author-info-container">
                <p class="author-info">${n}</p>
                ${b(l)}
              </div>
            </div>
          </li>`}function b(e){const t=e.find(i=>i.name==="Amazon").url,n=e.find(i=>i.name==="Apple Books").url;return`<ul class="shop-link-list">
              <li class=""shop-link-item>
                <a class="shop-link-amazon" href="${t}" target="_blank">
                   <img src="../img/amazon-1x.png" srcset="../img/amazon-2x.png 2x" alt="Amazon" class="amazon-image">
                </a>
              </li>
              <li class=""shop-link-item>
                <a class="shop-link-amazon" href="${n}" target="_blank">
                    <img src="../img/apple-1x.png" srcset="../img/apple-2x.png 2x" alt="Apple-books" class="apple-books-image">
                </a>
              </li>
          </ul>`}function k(){s.shoppingListMain.innerHTML="";let e=u.get("cart");if(!e||!e.length)s.shoppingEmpty.classList.remove("hidden");else{s.shoppingText.style.marginBottom="40px",s.shoppingEmpty.classList.add("hidden");const n=g(f,e);s.shoppingListMain.innerHTML=n}}k();
//# sourceMappingURL=commonHelpers2.js.map
