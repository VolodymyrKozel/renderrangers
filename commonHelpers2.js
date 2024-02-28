import{a as i,r as c}from"./assets/header-b73bccc1.js";import{P as g}from"./assets/vendor-f6623f5a.js";const m=document.querySelector("#pagination"),u={itemsPerPage:4,visiblePages:2,page:1,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-button">{{page}}</a>',currentPage:'<strong class="tui-page-button tui-is-selected">{{page}}</strong>',moreButton:'<a href="#" class="tui-page-button tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}};new g(m,u);const r={isSupported(){return typeof Storage<"u"},has(e){return localStorage.hasOwnProperty(e)},get(e){let t=localStorage.getItem(e);if(typeof t!="string")return t;if(t!=="undefined")return t==="null"?null:/^'-?\d{1,}?\.?\d{1,}'$/.test(t)||/^'-?\d{1}\.\d+e\+\d{2}'$/.test(t)?Number(t):t[0]==="{"||t[0]==="["?JSON.parse(t):t},set(e,t){if(typeof e!="string")throw new TypeError(`localStorage: Ключ повинен бути рядком. (зчитування '${e}')`);(typeof t=="object"||Array.isArray(t))&&(t=JSON.stringify(t)),localStorage.setItem(e,t)},remove(e){localStorage.removeItem(e)}},o="cart";function d({_id:e,list_name:t,author:a,title:s,book_image:n,description:l,buy_links:p}){return`<li class="shopping-item" data-id="${e}">
            <img
              class="shopping-img"
              src="${n}"
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
                <p class="author-info">${a}</p>
                ${f(p)}
              </div>
            </div>
          </li>`}function f(e){const t=e.find(s=>s.name==="Amazon").url,a=e.find(s=>s.name==="Apple Books").url;return`<ul class="shop-link-list">
              <li class=""shop-link-item>
                <a class="shop-link-amazon" href="${t}" target="_blank">
                   <img src="./img/amazon.png" alt="Amazon" class="amazon-image">
                </a>
              </li>
              <li class=""shop-link-item>
                <a class="shop-link-amazon" href="${a}" target="_blank">
                    <img src="./img/apple-1x.png" alt="Apple-books" class="apple-books-image">
                </a>
              </li>
          </ul>`}function h(){i.shoppingListMain.innerHTML="";let e=r.get(o);if(!e||!e.length)return;i.shoppingText.style.marginBottom="40px",i.shoppingEmpty.classList.add("hidden");const a=c(d,e);i.shoppingListMain.innerHTML=a;const s=document.querySelector(".js-shopping-main");console.log(s),s.addEventListener("click",k)}function k(e){if(e.target.tagName==="BUTTON"||e.target.tagName==="svg"||e.target.tagName==="use"){const t=e.target.closest(".shopping-item"),s=r.get(o).filter(({_id:n})=>n!==t.dataset.id);localStorage.setItem(o,JSON.stringify(s)),t.remove()}}h();
//# sourceMappingURL=commonHelpers2.js.map
