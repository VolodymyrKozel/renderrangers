import{i as k,r as u,a as v,b as L,c as C,d as $,e as r}from"./assets/header-94bf4df7.js";import{a as T}from"./assets/vendor-94a85c0e.js";const S="https://books-backend.p.goit.global/books/";async function d(e,t){try{return(await T.get(S+e,{params:t})).data}catch(o){console.error(o)}}function w(e){e.forEach(t=>{t.classList.add("animation-items")}),setTimeout(()=>{e.forEach(t=>{t.classList.remove("animation-items")})},500)}function E({_id:e,book_image:t,title:o,author:a,description:s,buy_links:n}){return`
  <section class="modalmenu">
      <button type="button" id="modal-close-id" class="close-button modal-close-button" width="28" height="28">
      <svg class="close-icon" width="12" height="12">
        <use href="${k}#icon-x-close"></use>
      </svg>
    </button>
  <div class="modal-container">
  <img src="${t}" class="modal-image">
    <div class="modal-wrap">
      <h2 class="modal-title">${o}</h2>
      <p class="modal-author">${a}</p>
      <p class="description">${s}</p>
        <ul class="buy-links-list">
      ${u(M,n.slice(0,2).reverse())}
        </ul>       
    </div>
  </div>
   <button class="modal-list-button" type="button" id="modal-list-button-id" data-role="add" data-id="${e}">
      add to shopping list
    </button>
    <p class="cart-info visually-hidden"></p>
    </section>
`}function M({name:e,url:t}){return`
    <li class="buy-links-item">
    <a target="_blank" rel="noopener noreferrer" aria-label="${e}" href=${t}>
      <img src="${e.split(" ")[0].toLowerCase()==="amazon"?v:L}"  srcset="${e.split(" ")[0].toLowerCase()==="amazon"?C:$} 2x" alt="${e}" class="platform-image">
</a>
</li>
`}const p=document.querySelector("body"),l=document.querySelector(".backdrop"),c="cart";async function x(e){const t=await d(e);B(t),document.addEventListener("keydown",g),l.addEventListener("click",N)}function B(e){l.style.display="flex",p.style.overflow="hidden",l.innerHTML="",l.insertAdjacentHTML("afterbegin",E(e));const t=document.querySelector(".modal-list-button"),o=document.querySelector(".cart-info");t.addEventListener("click",()=>{const s=JSON.parse(localStorage.getItem(c))||[];if(s.find(({_id:n})=>n===e._id)){const n=s.filter(({_id:i})=>i!==e._id);localStorage.setItem(c,JSON.stringify(n)),t.textContent="Add to shopping list",o.classList.add("visually-hidden"),o.textContent=""}else s.push(e),localStorage.setItem(c,JSON.stringify(s)),t.textContent="Remove from the shopping list",o.classList.remove("visually-hidden"),o.textContent='Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".'}),(JSON.parse(localStorage.getItem(c))||[]).find(({_id:s})=>s===e._id)?t.textContent="Remove from the shopping list":t.textContent="Add to shopping list"}function N(e){(e.target.tagName==="svg"||e.target.tagName==="use")&&m(),e.target.id==="mBackdrop"&&m(),e.target.nodeName}function g(e){e.key==="Escape"&&(m(),document.removeEventListener("keydown",g))}function m(){l.style.display="none",p.style.overflow="auto"}console.log("category-card");r.mainContainer.addEventListener("click",I);const y=async e=>{r.mainContainer.innerHTML="";const t='<div class="loader"></div>';r.mainContainer.insertAdjacentHTML("afterbegin",t);try{const o=await d("category",e),a=document.querySelector(".loader");a&&a.remove();const s=o[0].list_name;r.mainContainer.insertAdjacentHTML("afterbegin",A(s,o));const n=document.querySelectorAll(".sellers-item");w(n)}catch(o){console.error("Помилка при отриманні книг категорій:",o)}};function I(e){const t=e.target.closest(".sellers-item").dataset.id;x(t)}function A(e,t){const o=e.split(" "),a=o.pop();return o.push(`<span class="accent">${a}</span>`),`
    <section class="seller-section">
      <h1 class="section-title category-card-title">${o.join(" ")}</h1>
      <ul class="sellers-exclude flex-wrap">${u(q,t)}</ul>
    </section>
  `}function q({book_image:e,title:t,author:o,_id:a}){return`
    <li class="sellers-item" data-id="${a}">
      <div class="book-image-wrapper">
        <img class="book-image"
        src="${e}"
        alt="${t}"
        >
      </div>
      <h3 class="book-title">${t}</h3>
      <p class="book-author">${o}</p>
    </li>
  `}function H(e="show"){const t=document.querySelector(".loader");e==="show"?t.style.display="inline-block":t.style.display="none"}const f=async()=>{r.mainContainer.innerHTML=`
    <section class="seller-section">
      <h1 class="section-title">
        Best Sellers <span class="accent">Books</span>
      </h1>
    </section>`;const e=document.createElement("ul");e.classList.add("sellers-list"),e.innerHTML='<span class="loader"></span>',r.mainContainer.querySelector(".seller-section").appendChild(e),r.mainContainer.querySelector(".loader"),H();try{const o=await d("top-books"),a=z(o,4);O(e,a);const s=document.querySelectorAll(".sellers-item");s.forEach(i=>{i.classList.add("animation-items")});const n=setTimeout(()=>{s.forEach(i=>{i.classList.remove("animation-items")})},500);e.addEventListener("click",_)}catch(o){console.error(o)}};function O(e,t){const o=R(t);e.innerHTML="",e.appendChild(o)}f();async function _(e){if(e.preventDefault(),e.target.nodeName!=="BUTTON")return;const t=e.target,{name:o}=t.dataset;await y({category:o})}function z(e,t){const o=[];for(;o.length<t;){const a=Math.floor(Math.random()*e.length);o.includes(a)||o.push(a)}return o.map(a=>e[a])}function R(e){const t=document.createDocumentFragment();return e.forEach(({list_name:o,books:a})=>{const s=document.createElement("li");s.className="sellers-category",s.innerHTML=`
      <h2 class="sellers-category-title">${o}</h2>
      <ul class="sellers-category-list">
        ${j(a)}
      </ul>
      <button class="sellers-button" type="button" data-name="${o}">See more</button>
    `,t.appendChild(s)}),t}function j(e){let t="";const o=D(),a=o==="desktop"?5:o==="tablet"?3:1;for(let s=0;s<a&&s<e.length;s++){const{book_image:n,title:i,author:h,_id:b}=e[s];t+=`
      <li class="sellers-item" data-id="${b}">
        <div class="book-image-wrapper">
          <img class="book-image"
          src="${n}"
          alt="${i}"
          >
        </div>
        <h3 class="book-title">${i}</h3>
        <p class="book-author">${h}</p>
      </li>
    `}return t}function D(){const e=window.innerWidth;return e<768?"mobile":e<1440?"tablet":"desktop"}r.categoryListElem.addEventListener("click",U);function U(e){if(e.target.nodeName!=="BUTTON"||e.target.classList.contains("active"))return;r.categoryListElem.querySelector(".active").classList.remove("active");const t=e.target;t.classList.add("active"),t.textContent==="ALL CATEGORIES"?f():y({category:t.textContent})}function J({list_name:e,classButton:t=""}){return`<li class="category-list">
      <button class="category-button ${t}" type="button">${e}</button>
    </li>`}const W=async()=>{try{const e=await d("category-list");e.unshift({list_name:"ALL CATEGORIES",classButton:"active"}),r.categoryListElem.insertAdjacentHTML("beforeend",u(J,e))}catch(e){console.error(e)}};W();
//# sourceMappingURL=commonHelpers.js.map
