import{c as m,d,e as f,f as h,r as n,b as u}from"./assets/header-e35e4aad.js";import{P as k}from"./assets/vendor-94a85c0e.js";const y=document.querySelector("#tui-pagination-container");let r=2,l=4;window.innerWidth>=768&&(r=3,l=3);const $={itemsPerPage:l,visiblePages:r},b=new k(y,$);b.movePageTo(1);const c={isSupported(){return typeof Storage<"u"},has(e){return localStorage.hasOwnProperty(e)},get(e){let t=localStorage.getItem(e);if(typeof t!="string")return t;if(t!=="undefined")return t==="null"?null:/^'-?\d{1,}?\.?\d{1,}'$/.test(t)||/^'-?\d{1}\.\d+e\+\d{2}'$/.test(t)?Number(t):t[0]==="{"||t[0]==="["?JSON.parse(t):t},set(e,t){if(typeof e!="string")throw new TypeError(`localStorage: Ключ повинен бути рядком. (зчитування '${e}')`);(typeof t=="object"||Array.isArray(t))&&(t=JSON.stringify(t)),localStorage.setItem(e,t)},remove(e){localStorage.removeItem(e)}};function S({_id:e,list_name:t,author:o,title:s,book_image:i,description:p,buy_links:g}){return`<li class="shopping-item" data-id="${e}">
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
                    <use href="../img/icons/icons.svg#icon-trash"></use>
                  </svg>
                </button>
              </div>
              <p class="descr-shopping">${p}</p>
              <div class="author-info-container">
                <p class="author-info">${o}</p>
                ${v(g)}
              </div>
            </div>
          </li>`}function v(e){const t=e.find(s=>s.name==="Amazon").url,o=e.find(s=>s.name==="Apple Books").url;return`<ul class="shop-link-list">
              <li class=""shop-link-item>
                <a class="shop-link-amazon" href="${t}" target="_blank">
                   <img src="${m}" srcset="${d} 2x" alt="Amazon" class="amazon-image">
                </a>
              </li>
              <li class=""shop-link-item>
                <a class="shop-link-amazon" href="${o}" target="_blank">
                    <img src="${f}" srcset="${h} 2x" alt="Apple-books" class="apple-books-image">
                </a>
              </li>
          </ul>`}const a="cart";function w(){n.shoppingListMain.innerHTML="";const e=c.get(a);if(!e||!e.length)n.shoppingEmpty.classList.remove("hidden");else{n.shoppingText.style.marginBottom="40px",n.shoppingEmpty.classList.add("hidden");const o=u(S,e);n.shoppingListMain.innerHTML=o,document.querySelector(".js-shopping-main").addEventListener("click",L)}}function L(e){if(e.target.tagName==="BUTTON"||e.target.tagName==="svg"||e.target.tagName==="use"){const t=e.target.closest(".shopping-item"),s=c.get(a).filter(({_id:i})=>i!==t.dataset.id);localStorage.setItem(a,JSON.stringify(s)),t.remove()}}w();window.innerWidth<1440&&(console.log("1440"),document.querySelector(".aside").style.display="none");
//# sourceMappingURL=commonHelpers2.js.map
