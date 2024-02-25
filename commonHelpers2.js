import{a as e,r as i,g as n}from"./assets/renderMarkup-6b6f4730.js";import"./assets/vendor-0cb09735.js";const t={isSupported(){return typeof Storage<"u"},has(o){return localStorage.hasOwnProperty(o)},get(o){let s=localStorage.getItem(o);if(typeof s!="string")return s;if(s!=="undefined")return s==="null"?null:/^'-?\d{1,}?\.?\d{1,}'$/.test(s)||/^'-?\d{1}\.\d+e\+\d{2}'$/.test(s)?Number(s):s[0]==="{"||s[0]==="["?JSON.parse(s):s},set(o,s){if(typeof o!="string")throw new TypeError(`localStorage: Ключ повинен бути рядком. (зчитування '${o}')`);(typeof s=="object"||Array.isArray(s))&&(s=JSON.stringify(s)),localStorage.setItem(o,s)},remove(o){localStorage.removeItem(o)}};t.remove("cart1");const a=async()=>{const o=await n("643282b1e85766588626a0b2"),s=[];s.push(o),t.set("cart",s)};a();if(t.has("cart")){const o=t.get("cart");console.log(o[0]),e(r,i.shoppingListMain,t.get("cart"))}else e(p);function p(o){return console.log(o),`<section class="shopping-list">
        <h1 class="shopping-list-text">
          Shopping <span class="shopping-list-span">List</span>
        </h1>
        <div class="shopping-list-container">
          <p class="shopping-list-container-text">
            This page is empty, add some books <br />
            and proceed to order.
          </p>
        </div>
      </section>`}function r(o){return console.log(o),`<section class="shopping-list">
        <h2 class="shopping-list-text">
          Shopping <span class="shopping-list-span">List</span>
        </h2>
        <div class="shopping-list-container">
        <ul class="shopping-list">
  <li class="shopping-item">
    <img class="shopping-img" src="${book_image}" alt="${title}" width="100" height="142" />
    <svg class="header-logo-icon-bookshelf" width="12" height="12">
      <use href="./img/icons/icons.svg#icon-bookshelf"></use>
    </svg>
    <h2 class="shopping-item-title">${title}</h2>
    <p class="shopping-category-title">${list_name}</p>
    <p class="shopping-desc"></p>
    <p class="shopping-autor"></p>
    <ul class="shopping-shop-list">
      <li class="shopping-shop-item">
        <a class="shopping-shop-link" href="">
          <svg class="header-logo-icon-bookshelf" width="77" height="14">
            <use href="./img/icons/icons.svg#icon-amazon"></use>
          </svg>
        </a>
        <a class="shopping-shop-link" href="">
          <svg class="header-logo-icon-bookshelf" width="77" height="14">
            <use href="./img/icons/icons.svg#icon-amazon"></use>
          </svg>
        </a>
      </li>
    </ul>
  </li>
</ul>
        </div>
      </section>`}
//# sourceMappingURL=commonHelpers2.js.map