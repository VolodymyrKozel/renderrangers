import{a as t,r}from"./assets/renderMarkup-08015c79.js";const o={isSupported(){return typeof Storage<"u"},has(e){return localStorage.hasOwnProperty(e)},get(e){let s=localStorage.getItem(e);if(typeof s!="string")return s;if(s!=="undefined")return s==="null"?null:/^'-?\d{1,}?\.?\d{1,}'$/.test(s)||/^'-?\d{1}\.\d+e\+\d{2}'$/.test(s)?Number(s):s[0]==="{"||s[0]==="["?JSON.parse(s):s},set(e,s){if(typeof e!="string")throw new TypeError(`localStorage: Ключ повинен бути рядком. (зчитування '${e}')`);(typeof s=="object"||Array.isArray(s))&&(s=JSON.stringify(s)),localStorage.setItem(e,s)},remove(e){localStorage.removeItem(e)}};o.remove("cart1");if(o.has("cart")){const e=o.get("cart");console.log(e[0]),t(a,r.shoppingListMain,o.get("cart"))}else t(n);function n(e){return console.log(e),`<p class="shopping-list-container-text">
            This page is empty, add some books <br />
            and proceed to order.
          </p>`}function a({book_image:e,title:s,list_name:i}){return console.log(book),`<ul class="shopping-list">
  <li class="shopping-item">
    <img class="shopping-img" src="${e}" alt="${s}" width="100" height="142" />
    <svg class="header-logo-icon-bookshelf" width="12" height="12">
      <use href="./img/icons/icons.svg#icon-bookshelf"></use>
    </svg>
    <h2 class="shopping-item-title">${s}</h2>
    <p class="shopping-category-title">${i}</p>
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
</ul>`}
//# sourceMappingURL=commonHelpers2.js.map
