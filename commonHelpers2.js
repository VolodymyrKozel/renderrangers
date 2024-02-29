import{b as k,d as v,a as y,c as P,r as b,e as l}from"./assets/header-5dd58675.js";import{P as S}from"./assets/vendor-94a85c0e.js";function $({_id:t,list_name:e,author:o,title:n,book_image:s,description:i,buy_links:c}){return`<li class="shopping-item" data-id="${t}">
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
                    <use href="../img/icons/icons.svg#icon-trash"></use>
                  </svg>
                </button>
              </div>
              <p class="descr-shopping">${i}</p>
              <div class="author-info-container">
                <p class="author-info">${o}</p>
                ${w(c)}
              </div>
            </div>
          </li>`}function w(t){const e=t.find(n=>n.name==="Amazon").url,o=t.find(n=>n.name==="Apple Books").url;return`<ul class="shop-link-list">
              <li class=""shop-link-item>
                <a class="shop-link-amazon" href="${e}" target="_blank">
                   <img src="${k}" srcset="${v} 2x" alt="Amazon" class="amazon-image">
                </a>
              </li>
              <li class=""shop-link-item>
                <a class="shop-link-amazon" href="${o}" target="_blank">
                    <img src="${y}" srcset="${P} 2x" alt="Apple-books" class="apple-books-image">
                </a>
              </li>
          </ul>`}function L(t,e,o){const n=document.querySelector("#tui-pagination-container");let s=2,i=4;window.innerWidth>=768&&(s=3,i=3);const c={totalItems:e.length,itemsPerPage:i,visiblePages:s,centerAlign:!0},r=new S(n,c);return r.on("afterMove",d=>{const p=d.page,u=p,f=e.slice((p-1)*i,p*i),h=b($,f);t.innerHTML=h,r.prevPage=u}),r.movePageTo(r.getCurrentPage()),r}const m={isSupported(){return typeof Storage<"u"},has(t){return localStorage.hasOwnProperty(t)},get(t){let e=localStorage.getItem(t);if(typeof e!="string")return e;if(e!=="undefined")return e==="null"?null:/^'-?\d{1,}?\.?\d{1,}'$/.test(e)||/^'-?\d{1}\.\d+e\+\d{2}'$/.test(e)?Number(e):e[0]==="{"||e[0]==="["?JSON.parse(e):e},set(t,e){if(typeof t!="string")throw new TypeError(`localStorage: Ключ повинен бути рядком. (зчитування '${t}')`);(typeof e=="object"||Array.isArray(e))&&(e=JSON.stringify(e)),localStorage.setItem(t,e)},remove(t){localStorage.removeItem(t)}},g="cart";m.get(g);let a;function N(){l.shoppingListMain.innerHTML="";const t=m.get(g);!t||!t.length?l.shoppingEmpty.classList.remove("hidden"):(l.shoppingText.style.marginBottom="40px",l.shoppingEmpty.classList.add("hidden"),a=L(l.shoppingListMain,t),a.movePageTo(a.getCurrentPage()),document.querySelector(".js-shopping-main").addEventListener("click",T))}function T(t){if(t.target.tagName==="BUTTON"||t.target.tagName==="svg"||t.target.tagName==="use"){const e=t.target.closest(".shopping-item"),n=m.get(g).filter(({_id:s})=>s!==e.dataset.id);if(localStorage.setItem(g,JSON.stringify(n)),n.length/a._options.itemsPerPage<=1){a._view._containerElement.style.display="none";let s=a.getCurrentPage();a.reset(n.length),a.movePageTo(s)}e.remove()}}N();window.innerWidth<1440&&(document.querySelector(".aside").style.display="none");
//# sourceMappingURL=commonHelpers2.js.map
