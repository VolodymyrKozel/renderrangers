import{i as M,r as p,a as q,b as B,c as I,d as x,e as i}from"./assets/header-b44a4156.js";import{a as A}from"./assets/vendor-94a85c0e.js";const N="https://books-backend.p.goit.global/books/";async function m(e,t){try{return(await A.get(N+e,{params:t})).data}catch(o){console.error(o)}}function H(e){e.forEach(t=>{t.classList.add("animation-items")}),setTimeout(()=>{e.forEach(t=>{t.classList.remove("animation-items")})},500)}function O({_id:e,book_image:t,title:o,author:n,description:s,buy_links:a}){return`
  <section class="modalmenu">
      <button type="button" id="modal-close-id" class="close-button modal-close-button" width="28" height="28">
      <svg class="close-icon" width="12" height="12">
        <use href="${M}#icon-x-close"></use>
      </svg>
    </button>
  <div class="modal-container">
  <img src="${t}" class="modal-image">
    <div class="modal-wrap">
      <h2 class="modal-title">${o}</h2>
      <p class="modal-author">${n}</p>
      <p class="description">${s}</p>
        <ul class="buy-links-list">
      ${p(U,a.slice(0,2).reverse())}
        </ul>       
    </div>
  </div>
   <button class="modal-list-button" type="button" id="modal-list-button-id" data-role="add" data-id="${e}">
      add to shopping list
    </button>
    <p class="cart-info visually-hidden"></p>
    </section>
`}function U({name:e,url:t}){return`
    <li class="buy-links-item">
    <a target="_blank" rel="noopener noreferrer" aria-label="${e}" href=${t}>
      <img src="${e.split(" ")[0].toLowerCase()==="amazon"?q:B}"  srcset="${e.split(" ")[0].toLowerCase()==="amazon"?I:x} 2x" alt="${e}" class="platform-image">
</a>
</li>
`}const b=document.querySelector("body"),r=document.querySelector(".backdrop"),d="cart";async function z(e){const t=await m(e);R(t),document.addEventListener("keydown",k),r.addEventListener("click",_)}function R(e){r.style.display="flex",b.style.overflow="hidden",r.innerHTML="",r.insertAdjacentHTML("afterbegin",O(e));const t=document.querySelector(".modal-list-button"),o=document.querySelector(".cart-info");t.addEventListener("click",()=>{const s=JSON.parse(localStorage.getItem(d))||[];if(s.find(({_id:a})=>a===e._id)){const a=s.filter(({_id:l})=>l!==e._id);localStorage.setItem(d,JSON.stringify(a)),t.textContent="Add to shopping list",o.classList.add("visually-hidden"),o.textContent=""}else s.push(e),localStorage.setItem(d,JSON.stringify(s)),t.textContent="Remove from the shopping list",o.classList.remove("visually-hidden"),o.textContent='Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".'}),(JSON.parse(localStorage.getItem(d))||[]).find(({_id:s})=>s===e._id)?t.textContent="Remove from the shopping list":t.textContent="Add to shopping list"}function _(e){(e.target.tagName==="svg"||e.target.tagName==="use")&&u(),e.target.id==="mBackdrop"&&u(),e.target.nodeName}function k(e){e.key==="Escape"&&(u(),document.removeEventListener("keydown",k))}function u(){r.style.display="none",b.style.overflow="auto"}console.log("category-card");i.mainContainer.addEventListener("click",D);const j=async e=>{i.mainContainer.innerHTML="";const t='<div class="loader"></div>';i.mainContainer.insertAdjacentHTML("afterbegin",t);try{const o=await m("category",e),n=document.querySelector(".loader");n&&n.remove();const s=o[0].list_name;i.mainContainer.insertAdjacentHTML("afterbegin",F(s,o));const a=document.querySelectorAll(".sellers-item");H(a)}catch(o){console.error("Помилка при отриманні книг категорій:",o)}};function D(e){if(e.target.textContent==="See more"){console.log(e.target);return}const t=e.target.closest(".sellers-item").dataset.id;z(t)}function F(e,t){const o=e.split(" "),n=o.pop();return o.push(`<span class="accent">${n}</span>`),`
    <section class="seller-section">
      <h1 class="section-title category-card-title">${o.join(" ")}</h1>
      <ul class="sellers-exclude flex-wrap">${p(J,t)}</ul>
    </section>
  `}function J({book_image:e,title:t,author:o,_id:n}){return`
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
  `}function W(e="show"){const t=document.querySelector(".loader");e==="show"?t.style.display="inline-block":t.style.display="none"}const L=async()=>{i.mainContainer.innerHTML=`
    <section class="seller-section">
      <h1 class="section-title">
        Best Sellers <span class="accent">Books</span>
      </h1>
    </section>`;const e=document.createElement("ul");e.classList.add("sellers-list"),e.innerHTML='<span class="loader"></span>',i.mainContainer.querySelector(".seller-section").appendChild(e),i.mainContainer.querySelector(".loader"),W();try{const o=await m("top-books"),n=Y(o,4);G(e,n);const s=document.querySelectorAll(".sellers-item");s.forEach(l=>{l.classList.add("animation-items")});const a=setTimeout(()=>{s.forEach(l=>{l.classList.remove("animation-items")})},500);e.addEventListener("click",v)}catch(o){console.error(o)}};function G(e,t){const o=K(t);e.innerHTML="",e.appendChild(o)}L();function Y(e,t){const o=[];for(;o.length<t;){const n=Math.floor(Math.random()*e.length);o.includes(n)||o.push(n)}return o.map(n=>e[n])}function K(e){const t=document.createDocumentFragment();return e.forEach(({list_name:o,books:n})=>{const s=document.createElement("li");s.className="sellers-category",s.innerHTML=`
      <h2 class="sellers-category-title">${o}</h2>
      <ul class="sellers-category-list">
        ${P(n)}
      </ul>
      <button class="sellers-button" type="button" data-name="${o}">See more</button>
    `,t.appendChild(s)}),t}function P(e){let t="";const o=Q(),n=o==="desktop"?5:o==="tablet"?3:1;for(let s=0;s<n&&s<e.length;s++){const{book_image:a,title:l,author:T,_id:E}=e[s];t+=`
      <li class="sellers-item" data-id="${E}">
        <div class="book-image-wrapper">
          <img class="book-image"
          src="${a}"
          alt="${l}"
          >
        </div>
        <h3 class="book-title">${l}</h3>
        <p class="book-author">${T}</p>
      </li>
    `}return t}function Q(){const e=window.innerWidth;return e<768?"mobile":e<1440?"tablet":"desktop"}i.categoryListElem.addEventListener("click",v);function v(e){if(e.target.nodeName!=="BUTTON"||e.target.classList.contains("active"))return;i.categoryListElem.querySelector(".active").classList.remove("active");const t=e.target,{name:o}=t.dataset;document.querySelector(`[data-name="${o}"]`).classList.add("active"),o==="ALL CATEGORIES"?L():j({category:o})}function V({list_name:e,classButton:t=""}){return`<li class="category-list">
      <button class="category-button ${t}" data-name="${e}" type="button">${e}</button>
    </li>`}const X=async()=>{try{const e=await m("category-list");e.unshift({list_name:"ALL CATEGORIES",classButton:"active"}),i.categoryListElem.insertAdjacentHTML("beforeend",p(V,e))}catch(e){console.error(e)}};X();const S=document.querySelector(".modal-login-form"),g=document.querySelector(".overlayLoginForm"),Z=document.querySelector(".user-btn"),ee=document.querySelector(".mobile-menu-authorisation-btn"),te=document.querySelector(".modal-login-form-close-btn"),y=document.querySelector(".signUp"),f=document.querySelector(".signIn"),C=document.querySelector(".modal-login-in"),$=document.querySelector(".modal-login-up");function w(){S.style.display="block",g.style.display="block"}function h(){S.style.display="none",g.style.display="none"}function c(e,t){e&&e.addEventListener("click",t)}c(Z,w);c(ee,w);c(te,h);c(g,h);c(y,se);c(f,oe);window.addEventListener("keydown",function(e){e.key==="Escape"&&h()});function oe(){f.classList.add("underline"),y.classList.remove("underline"),C.classList.remove("is-hidden"),$.classList.add("is-hidden")}function se(){y.classList.add("underline"),f.classList.remove("underline"),C.classList.add("is-hidden"),$.classList.remove("is-hidden")}
//# sourceMappingURL=commonHelpers.js.map
