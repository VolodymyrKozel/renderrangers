import{b as h,d as k,a as v,c as y,r as P,e as r}from"./assets/header-5dd58675.js";import{P as b}from"./assets/vendor-94a85c0e.js";const $="/renderrangers/assets/icons-509775d3.svg";function S({_id:t,list_name:e,author:o,title:n,book_image:s,description:g,buy_links:i}){return`<li class="shopping-item" data-id="${t}">
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
                  <p class="category-book">${e}</p>
                </div>
                <button
                  class="delete-shopping-item-btn"
                  
                >
                  <svg class="trash-btn-icon" height="16" width="16">
                    <use href="${$}#icon-trash"></use>
                  </svg>
                </button>
              </div>
              <p class="descr-shopping">${g}</p>
              <div class="author-info-container">
                <p class="author-info">${o}</p>
                ${w(i)}
              </div>
            </div>
          </li>`}function w(t){const e=t.find(n=>n.name==="Amazon").url,o=t.find(n=>n.name==="Apple Books").url;return`<ul class="shop-link-list">
              <li class=""shop-link-item>
                <a class="shop-link-amazon" href="${e}" target="_blank">
                   <img src="${h}" srcset="${k} 2x" alt="Amazon" class="amazon-image">
                </a>
              </li>
              <li class=""shop-link-item>
                <a class="shop-link-amazon" href="${o}" target="_blank">
                    <img src="${v}" srcset="${y} 2x" alt="Apple-books" class="apple-books-image">
                </a>
              </li>
          </ul>`}function L(t,e){const o=document.querySelector("#tui-pagination-container");let n=2,s=4;window.innerWidth>=768&&(n=3,s=3);const g={totalItems:e.length,itemsPerPage:s,visiblePages:n,centerAlign:!0},i=new b(o,g);return i.on("afterMove",m=>{const c=m.page,d=c,u=e.slice((c-1)*s,c*s),f=P(S,u);t.innerHTML=f,i.prevPage=d}),i.movePageTo(i.getCurrentPage()),i}const p={isSupported(){return typeof Storage<"u"},has(t){return localStorage.hasOwnProperty(t)},get(t){let e=localStorage.getItem(t);if(typeof e!="string")return e;if(e!=="undefined")return e==="null"?null:/^'-?\d{1,}?\.?\d{1,}'$/.test(e)||/^'-?\d{1}\.\d+e\+\d{2}'$/.test(e)?Number(e):e[0]==="{"||e[0]==="["?JSON.parse(e):e},set(t,e){if(typeof t!="string")throw new TypeError(`localStorage: Ключ повинен бути рядком. (зчитування '${t}')`);(typeof e=="object"||Array.isArray(e))&&(e=JSON.stringify(e)),localStorage.setItem(t,e)},remove(t){localStorage.removeItem(t)}},l="cart";p.get(l);let a;function N(){r.shoppingListMain.innerHTML="";const t=p.get(l);!t||!t.length?r.shoppingEmpty.classList.remove("hidden"):(r.shoppingText.style.marginBottom="40px",r.shoppingEmpty.classList.add("hidden"),a=L(r.shoppingListMain,t),a.movePageTo(a.getCurrentPage()),document.querySelector(".js-shopping-main").addEventListener("click",T))}function T(t){if(t.target.tagName==="BUTTON"||t.target.tagName==="svg"||t.target.tagName==="use"){const e=t.target.closest(".shopping-item"),n=p.get(l).filter(({_id:s})=>s!==e.dataset.id);if(localStorage.setItem(l,JSON.stringify(n)),n.length/a._options.itemsPerPage<=1){a._view._containerElement.style.display="none";let s=a.getCurrentPage();a.reset(n.length),a.movePageTo(s)}e.remove()}}N();window.innerWidth<1440&&(document.querySelector(".aside").style.display="none");
//# sourceMappingURL=commonHelpers2.js.map
