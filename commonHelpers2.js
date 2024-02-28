import{a as h,c as k,b,d as y,r as S,e as i}from"./assets/header-c80dbf64.js";import{P as $}from"./assets/vendor-94a85c0e.js";function v({_id:e,list_name:t,author:s,title:n,book_image:o,description:a,buy_links:l}){return`<li class="shopping-item" data-id="${e}">
            <img
              class="shopping-img"
              src="${o}"
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
              <p class="descr-shopping">${a}</p>
              <div class="author-info-container">
                <p class="author-info">${s}</p>
                ${L(l)}
              </div>
            </div>
          </li>`}function L(e){const t=e.find(n=>n.name==="Amazon").url,s=e.find(n=>n.name==="Apple Books").url;return`<ul class="shop-link-list">
              <li class=""shop-link-item>
                <a class="shop-link-amazon" href="${t}" target="_blank">
                   <img src="${h}" srcset="${k} 2x" alt="Amazon" class="amazon-image">
                </a>
              </li>
              <li class=""shop-link-item>
                <a class="shop-link-amazon" href="${s}" target="_blank">
                    <img src="${b}" srcset="${y} 2x" alt="Apple-books" class="apple-books-image">
                </a>
              </li>
          </ul>`}function g(e,t,s){const n=document.querySelector("#tui-pagination-container");let o=2,a=4;window.innerWidth>=768&&(o=3,a=3);const l={totalItems:t.length,itemsPerPage:a,visiblePages:o,centerAlign:!0},r=new $(n,l);return r.on("afterMove",d=>{const p=d.page,u=t.slice((p-1)*a,p*a),f=S(v,u);e.innerHTML=f}),r.movePageTo(r.getCurrentPage()),r}const m={isSupported(){return typeof Storage<"u"},has(e){return localStorage.hasOwnProperty(e)},get(e){let t=localStorage.getItem(e);if(typeof t!="string")return t;if(t!=="undefined")return t==="null"?null:/^'-?\d{1,}?\.?\d{1,}'$/.test(t)||/^'-?\d{1}\.\d+e\+\d{2}'$/.test(t)?Number(t):t[0]==="{"||t[0]==="["?JSON.parse(t):t},set(e,t){if(typeof e!="string")throw new TypeError(`localStorage: Ключ повинен бути рядком. (зчитування '${e}')`);(typeof t=="object"||Array.isArray(t))&&(t=JSON.stringify(t)),localStorage.setItem(e,t)},remove(e){localStorage.removeItem(e)}},c="cart";function P(){i.shoppingListMain.innerHTML="";const e=m.get(c);!e||!e.length?i.shoppingEmpty.classList.remove("hidden"):(i.shoppingText.style.marginBottom="40px",i.shoppingEmpty.classList.add("hidden"),g(i.shoppingListMain,e),document.querySelector(".js-shopping-main").addEventListener("click",w))}function w(e){if(e.target.tagName==="BUTTON"||e.target.tagName==="svg"||e.target.tagName==="use"){const t=e.target.closest(".shopping-item"),n=m.get(c).filter(({_id:o})=>o!==t.dataset.id);localStorage.setItem(c,JSON.stringify(n)),g(i.shoppingListMain,n),t.remove()}}P();window.innerWidth<1440&&(console.log("1440"),document.querySelector(".aside").style.display="none");
//# sourceMappingURL=commonHelpers2.js.map
