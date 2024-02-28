import{r as s,b as m}from"./assets/header-a93767a8.js";import{P as d}from"./assets/vendor-94a85c0e.js";const f=document.querySelector("#tui-pagination-container");let r=2,l=4;window.innerWidth>=768&&(r=3,l=3);const u={itemsPerPage:l,visiblePages:r},h=new d(f,u);h.movePageTo(1);const p={isSupported(){return typeof Storage<"u"},has(e){return localStorage.hasOwnProperty(e)},get(e){let t=localStorage.getItem(e);if(typeof t!="string")return t;if(t!=="undefined")return t==="null"?null:/^'-?\d{1,}?\.?\d{1,}'$/.test(t)||/^'-?\d{1}\.\d+e\+\d{2}'$/.test(t)?Number(t):t[0]==="{"||t[0]==="["?JSON.parse(t):t},set(e,t){if(typeof e!="string")throw new TypeError(`localStorage: Ключ повинен бути рядком. (зчитування '${e}')`);(typeof t=="object"||Array.isArray(t))&&(t=JSON.stringify(t)),localStorage.setItem(e,t)},remove(e){localStorage.removeItem(e)}};function k({_id:e,list_name:t,author:o,title:n,book_image:i,description:c,buy_links:g}){return`<li class="shopping-item" data-id="${e}">
            <img
              class="shopping-img"
              src="${i}"
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
                    <use href="../img/icons/icons.svg#icon-trash"></use>
                  </svg>
                </button>
              </div>
              <p class="descr-shopping">${c}</p>
              <div class="author-info-container">
                <p class="author-info">${o}</p>
                ${b(g)}
              </div>
            </div>
          </li>`}function b(e){const t=e.find(n=>n.name==="Amazon").url,o=e.find(n=>n.name==="Apple Books").url;return`<ul class="shop-link-list">
              <li class=""shop-link-item>
                <a class="shop-link-amazon" href="${t}" target="_blank">
                   <img src="../img/amazon-1x.png" srcset="../img/amazon-2x.png 2x" alt="Amazon" class="amazon-image">
                </a>
              </li>
              <li class=""shop-link-item>
                <a class="shop-link-amazon" href="${o}" target="_blank">
                    <img src="../img/apple-1x.png" srcset="../img/apple-2x.png 2x" alt="Apple-books" class="apple-books-image">
                </a>
              </li>
          </ul>`}const a="cart";function y(){s.shoppingListMain.innerHTML="";const e=p.get(a);if(!e||!e.length)return;s.shoppingText.style.marginBottom="40px",s.shoppingEmpty.classList.add("hidden");const o=m(k,e);s.shoppingListMain.innerHTML=o,document.querySelector(".js-shopping-main").addEventListener("click",S)}function S(e){if(e.target.tagName==="BUTTON"||e.target.tagName==="svg"||e.target.tagName==="use"){const t=e.target.closest(".shopping-item"),n=p.get(a).filter(({_id:i})=>i!==t.dataset.id);localStorage.setItem(a,JSON.stringify(n)),t.remove()}}y();window.innerWidth<1440&&(console.log("1440"),document.querySelector(".aside").style.display="none");
//# sourceMappingURL=commonHelpers2.js.map
