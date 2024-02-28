import{a as p,c as g,b as m,d,e as i,r as f}from"./assets/header-1e610626.js";import{P as u}from"./assets/vendor-94a85c0e.js";function h(e){const t=document.querySelector("#tui-pagination-container");let n=2,s=4;window.innerWidth>=768&&(n=3,s=3);const o={totalItems:e,itemsPerPage:s,visiblePages:n,centerAlign:!0},a=new u(t,o);return a.on("afterMove",r=>{r.page}),a}h(20);const c={isSupported(){return typeof Storage<"u"},has(e){return localStorage.hasOwnProperty(e)},get(e){let t=localStorage.getItem(e);if(typeof t!="string")return t;if(t!=="undefined")return t==="null"?null:/^'-?\d{1,}?\.?\d{1,}'$/.test(t)||/^'-?\d{1}\.\d+e\+\d{2}'$/.test(t)?Number(t):t[0]==="{"||t[0]==="["?JSON.parse(t):t},set(e,t){if(typeof e!="string")throw new TypeError(`localStorage: Ключ повинен бути рядком. (зчитування '${e}')`);(typeof t=="object"||Array.isArray(t))&&(t=JSON.stringify(t)),localStorage.setItem(e,t)},remove(e){localStorage.removeItem(e)}};function k({_id:e,list_name:t,author:n,title:s,book_image:o,description:a,buy_links:r}){return`<li class="shopping-item" data-id="${e}">
            <img
              class="shopping-img"
              src="${o}"
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
              <p class="descr-shopping">${a}</p>
              <div class="author-info-container">
                <p class="author-info">${n}</p>
                ${y(r)}
              </div>
            </div>
          </li>`}function y(e){const t=e.find(s=>s.name==="Amazon").url,n=e.find(s=>s.name==="Apple Books").url;return`<ul class="shop-link-list">
              <li class=""shop-link-item>
                <a class="shop-link-amazon" href="${t}" target="_blank">
                   <img src="${p}" srcset="${g} 2x" alt="Amazon" class="amazon-image">
                </a>
              </li>
              <li class=""shop-link-item>
                <a class="shop-link-amazon" href="${n}" target="_blank">
                    <img src="${m}" srcset="${d} 2x" alt="Apple-books" class="apple-books-image">
                </a>
              </li>
          </ul>`}const l="cart";function b(){i.shoppingListMain.innerHTML="";const e=c.get(l);if(!e||!e.length)i.shoppingEmpty.classList.remove("hidden");else{i.shoppingText.style.marginBottom="40px",i.shoppingEmpty.classList.add("hidden");const n=f(k,e);i.shoppingListMain.innerHTML=n,document.querySelector(".js-shopping-main").addEventListener("click",S)}}function S(e){if(e.target.tagName==="BUTTON"||e.target.tagName==="svg"||e.target.tagName==="use"){const t=e.target.closest(".shopping-item"),s=c.get(l).filter(({_id:o})=>o!==t.dataset.id);localStorage.setItem(l,JSON.stringify(s)),t.remove()}}b();window.innerWidth<1440&&(console.log("1440"),document.querySelector(".aside").style.display="none");
//# sourceMappingURL=commonHelpers2.js.map
