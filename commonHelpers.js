import{i as w,r as p,a as E,b as M,c as q,d as B,e as i}from"./assets/header-9ec6239b.js";import{a as x}from"./assets/vendor-94a85c0e.js";const I="https://books-backend.p.goit.global/books/";async function m(e,t){try{return(await x.get(I+e,{params:t})).data}catch(o){console.error(o)}}function N(e){e.forEach(t=>{t.classList.add("animation-items")}),setTimeout(()=>{e.forEach(t=>{t.classList.remove("animation-items")})},500)}function A({_id:e,book_image:t,title:o,author:n,description:s,buy_links:a}){return`
  <section class="modalmenu">
      <button type="button" id="modal-close-id" class="close-button modal-close-button" width="28" height="28">
      <svg class="close-icon" width="12" height="12">
        <use href="${w}#icon-x-close"></use>
      </svg>
    </button>
  <div class="modal-container">
  <img src="${t}" class="modal-image">
    <div class="modal-wrap">
      <h2 class="modal-title">${o}</h2>
      <p class="modal-author">${n}</p>
      <p class="description">${s}</p>
        <ul class="buy-links-list">
      ${p(H,a.slice(0,2).reverse())}
        </ul>       
    </div>
  </div>
   <button class="modal-list-button" type="button" id="modal-list-button-id" data-role="add" data-id="${e}">
      add to shopping list
    </button>
    <p class="cart-info visually-hidden"></p>
    </section>
`}function H({name:e,url:t}){return`
    <li class="buy-links-item">
    <a target="_blank" rel="noopener noreferrer" aria-label="${e}" href=${t}>
      <img src="${e.split(" ")[0].toLowerCase()==="amazon"?E:M}"  srcset="${e.split(" ")[0].toLowerCase()==="amazon"?q:B} 2x" alt="${e}" class="platform-image">
</a>
</li>
`}const f=document.querySelector("body"),r=document.querySelector(".backdrop"),d="cart";async function O(e){const t=await m(e);U(t),document.addEventListener("keydown",h),r.addEventListener("click",_)}function U(e){r.style.display="flex",f.style.overflow="hidden",r.innerHTML="",r.insertAdjacentHTML("afterbegin",A(e));const t=document.querySelector(".modal-list-button"),o=document.querySelector(".cart-info");t.addEventListener("click",()=>{const s=JSON.parse(localStorage.getItem(d))||[];if(s.find(({_id:a})=>a===e._id)){const a=s.filter(({_id:c})=>c!==e._id);localStorage.setItem(d,JSON.stringify(a)),t.textContent="Add to shopping list",o.classList.add("visually-hidden"),o.textContent=""}else s.push(e),localStorage.setItem(d,JSON.stringify(s)),t.textContent="Remove from the shopping list",o.classList.remove("visually-hidden"),o.textContent='Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".'}),(JSON.parse(localStorage.getItem(d))||[]).find(({_id:s})=>s===e._id)?t.textContent="Remove from the shopping list":t.textContent="Add to shopping list"}function _(e){(e.target.tagName==="svg"||e.target.tagName==="use")&&u(),e.target.id==="mBackdrop"&&u(),e.target.nodeName}function h(e){e.key==="Escape"&&(u(),document.removeEventListener("keydown",h))}function u(){r.style.display="none",f.style.overflow="auto"}console.log("category-card");i.mainContainer.addEventListener("click",z);const b=async e=>{i.mainContainer.innerHTML="";const t='<div class="loader"></div>';i.mainContainer.insertAdjacentHTML("afterbegin",t);try{const o=await m("category",e),n=document.querySelector(".loader");n&&n.remove();const s=o[0].list_name;i.mainContainer.insertAdjacentHTML("afterbegin",R(s,o));const a=document.querySelectorAll(".sellers-item");N(a)}catch(o){console.error("Помилка при отриманні книг категорій:",o)}};function z(e){const t=e.target.closest(".sellers-item").dataset.id;O(t)}function R(e,t){const o=e.split(" "),n=o.pop();return o.push(`<span class="accent">${n}</span>`),`
    <section class="seller-section">
      <h1 class="section-title category-card-title">${o.join(" ")}</h1>
      <ul class="sellers-exclude flex-wrap">${p(j,t)}</ul>
    </section>
  `}function j({book_image:e,title:t,author:o,_id:n}){return`
    <li class="sellers-item" data-id="${n}">
      <div class="book-image-wrapper">
        <img class="book-image"
        src="${e}"
        alt="${t}"
        >
      </div>
      <h3 class="book-title">${t}</h3>
      <p class="book-author">${o}</p>
    </li>
  `}function D(e="show"){const t=document.querySelector(".loader");e==="show"?t.style.display="inline-block":t.style.display="none"}const k=async()=>{i.mainContainer.innerHTML=`
    <section class="seller-section">
      <h1 class="section-title">
        Best Sellers <span class="accent">Books</span>
      </h1>
    </section>`;const e=document.createElement("ul");e.classList.add("sellers-list"),e.innerHTML='<span class="loader"></span>',i.mainContainer.querySelector(".seller-section").appendChild(e),i.mainContainer.querySelector(".loader"),D();try{const o=await m("top-books"),n=W(o,4);F(e,n);const s=document.querySelectorAll(".sellers-item");s.forEach(c=>{c.classList.add("animation-items")});const a=setTimeout(()=>{s.forEach(c=>{c.classList.remove("animation-items")})},500);e.addEventListener("click",J)}catch(o){console.error(o)}};function F(e,t){const o=G(t);e.innerHTML="",e.appendChild(o)}k();async function J(e){if(e.preventDefault(),e.target.nodeName!=="BUTTON")return;const t=e.target,{name:o}=t.dataset;await b({category:o})}function W(e,t){const o=[];for(;o.length<t;){const n=Math.floor(Math.random()*e.length);o.includes(n)||o.push(n)}return o.map(n=>e[n])}function G(e){const t=document.createDocumentFragment();return e.forEach(({list_name:o,books:n})=>{const s=document.createElement("li");s.className="sellers-category",s.innerHTML=`
      <h2 class="sellers-category-title">${o}</h2>
      <ul class="sellers-category-list">
        ${Y(n)}
      </ul>
      <button class="sellers-button" type="button" data-name="${o}">See more</button>
    `,t.appendChild(s)}),t}function Y(e){let t="";const o=K(),n=o==="desktop"?5:o==="tablet"?3:1;for(let s=0;s<n&&s<e.length;s++){const{book_image:a,title:c,author:$,_id:T}=e[s];t+=`
      <li class="sellers-item" data-id="${T}">
        <div class="book-image-wrapper">
          <img class="book-image"
          src="${a}"
          alt="${c}"
          >
        </div>
        <h3 class="book-title">${c}</h3>
        <p class="book-author">${$}</p>
      </li>
    `}return t}function K(){const e=window.innerWidth;return e<768?"mobile":e<1440?"tablet":"desktop"}i.categoryListElem.addEventListener("click",P);function P(e){if(e.target.nodeName!=="BUTTON"||e.target.classList.contains("active"))return;i.categoryListElem.querySelector(".active").classList.remove("active");const t=e.target;t.classList.add("active"),t.textContent==="ALL CATEGORIES"?k():b({category:t.textContent})}function Q({list_name:e,classButton:t=""}){return`<li class="category-list">
      <button class="category-button ${t}" type="button">${e}</button>
    </li>`}const V=async()=>{try{const e=await m("category-list");e.unshift({list_name:"ALL CATEGORIES",classButton:"active"}),i.categoryListElem.insertAdjacentHTML("beforeend",p(Q,e))}catch(e){console.error(e)}};V();const L=document.querySelector(".modal-login-form"),g=document.querySelector(".overlayLoginForm"),X=document.querySelector(".user-btn"),Z=document.querySelector(".mobile-menu-authorisation-btn"),ee=document.querySelector(".modal-login-form-close-btn"),te=document.querySelector(".signUp"),oe=document.querySelector(".signIn"),v=document.querySelector(".modal-login-in"),S=document.querySelector(".modal-login-up");function C(){L.style.display="block",g.style.display="block"}function y(){L.style.display="none",g.style.display="none"}function l(e,t){e&&e.addEventListener("click",t)}l(X,C);l(Z,C);l(ee,y);l(g,y);l(te,ne);l(oe,se);window.addEventListener("keydown",function(e){e.key==="Escape"&&y()});function se(){v.classList.remove("is-hidden"),S.classList.add("is-hidden")}function ne(){v.classList.add("is-hidden"),S.classList.remove("is-hidden")}
//# sourceMappingURL=commonHelpers.js.map
