import{r as i,b as m}from"./assets/header-b7778bbb.js";import{P as d}from"./assets/vendor-94a85c0e.js";const u=document.querySelector("#tui-pagination-container");let r=2,l=4;window.innerWidth>=768&&(r=3,l=3);const f={itemsPerPage:l,visiblePages:r},h=new d(u,f);h.movePageTo(1);const c={isSupported(){return typeof Storage<"u"},has(e){return localStorage.hasOwnProperty(e)},get(e){let t=localStorage.getItem(e);if(typeof t!="string")return t;if(t!=="undefined")return t==="null"?null:/^'-?\d{1,}?\.?\d{1,}'$/.test(t)||/^'-?\d{1}\.\d+e\+\d{2}'$/.test(t)?Number(t):t[0]==="{"||t[0]==="["?JSON.parse(t):t},set(e,t){if(typeof e!="string")throw new TypeError(`localStorage: Ключ повинен бути рядком. (зчитування '${e}')`);(typeof t=="object"||Array.isArray(t))&&(t=JSON.stringify(t)),localStorage.setItem(e,t)},remove(e){localStorage.removeItem(e)}},a="cart";function k({_id:e,list_name:t,author:o,title:n,book_image:s,description:p,buy_links:g}){return`<li class="shopping-item" data-id="${e}">
            <img
              class="shopping-img"
              src="${s}"
              alt="${n}"
            />
            <div class="shopping-wrap">
              <div class="heading-info">
                <div class="title-container">
                  <h2 class="title-book">
                    ${n}
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
              <p class="descr-shopping">${p}</p>
              <div class="author-info-container">
                <p class="author-info">${o}</p>
                ${b(g)}
              </div>
            </div>
          </li>`}function b(e){const t=e.find(n=>n.name==="Amazon").url,o=e.find(n=>n.name==="Apple Books").url;return`<ul class="shop-link-list">
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
          </ul>`}function y(){i.shoppingListMain.innerHTML="";let e=c.get(a);if(!e||!e.length)return;i.shoppingText.style.marginBottom="40px",i.shoppingEmpty.classList.add("hidden");const o=m(k,e);i.shoppingListMain.innerHTML=o;const n=document.querySelector(".js-shopping-main");console.log(n),n.addEventListener("click",S)}function S(e){if(e.target.tagName==="BUTTON"||e.target.tagName==="svg"||e.target.tagName==="use"){const t=e.target.closest(".shopping-item"),n=c.get(a).filter(({_id:s})=>s!==t.dataset.id);localStorage.setItem(a,JSON.stringify(n)),t.remove()}}y();window.innerWidth<1440&&(console.log("1440"),document.querySelector(".aside").style.display="none");
//# sourceMappingURL=commonHelpers2.js.map
