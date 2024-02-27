import{r as h,a}from"./assets/renderMarkup-f50bf5a7.js";import{a as C,S as T,N as B}from"./assets/vendor-dcaf4cbb.js";const M="https://books-backend.p.goit.global/books/";async function m(e,t){try{return(await C.get(M+e,{params:t})).data}catch(o){console.error(o)}}function I(e){e.forEach(t=>{t.classList.add("animation-items")}),setTimeout(()=>{e.forEach(t=>{t.classList.remove("animation-items")})},500)}function N({_id:e,book_image:t,title:o,author:s,description:n,buy_links:r}){return`
  <section class="modalmenu">
      <button type="button" id="modal-close-id" class="close-button modal-close-button" width="28" height="28">
      <svg class="close-icon" width="24" height="24">
        <use src="./img/icons/icons.svg#icon-x-close"></use>
      </svg>
    </button>
  <div class="modal-container">
  <img src="${t}" class="modal-image">
    <div class="modal-wrap">
      <h2 class="modal-title">${o}</h2>
      <p class="modal-author">${s}</p>
      <p class="description">${n}</p>
        <ul class="buy-links-list">
      ${h(q,r.slice(0,2))}
        </ul>       
    </div>
  </div>
   <button class="modal-list-button" type="button" id="modal-list-button-id" data-id="${e}">
      Add this book to shopping list
    </button>
    </section>
`}function q({name:e,url:t}){return`
    <li class="buy-links-item">
    <a target="_blank" rel="noopener noreferrer" aria-label="${e}" href=${t}>
      <img src="./img/${e.split(" ")[0].toLowerCase()}-1x.png"  srcset="./img/${e.split(" ")[0].toLowerCase()}-2x.png 2x" alt="${e}" class="platform-image">
</a>
</li>
`}const y=document.querySelector("body"),l=document.querySelector(".backdrop");l.addEventListener("click",_);async function A(e){const t=await m(e);console.log(t),O(t),document.addEventListener("keydown",x)}function O(e){l.style.display="flex",y.style.overflow="hidden",l.innerHTML="",l.insertAdjacentHTML("afterbegin",N(e)),H(e._id,"cart"),console.log(e._id)}function H(e,t){let o=JSON.parse(localStorage.getItem(t));o!=null&&o.find(s=>s.id==e)&&console.log("show delete button")}function j(e,t){let o=JSON.parse(localStorage.getItem(t));o==null&&(o=[]),o.push(e),localStorage.setItem(t,JSON.stringify(o))}function _(e){console.log(e.target),e.target.id==="modal-list-button-id"&&(e.dataset.role==="add"?j(e.target.dataset.id,"cart"):(e.target.dataset.id,void 0)),e.target.tagName==="svg"&&p(),e.target.id==="mBackdrop"&&(console.log("x"),l.style.display="none",y.style.overflow="auto",p()),e.target.nodeName}function x(e){e.key==="Escape"&&(p(),document.removeEventListener("keydown",x))}function p(){l.style.display="none",y.style.overflow="auto"}console.log("category-card");a.mainContainer.addEventListener("click",D);const E=async e=>{a.mainContainer.innerHTML="";try{const t=await m("category",e),o=t[0].list_name;a.mainContainer.insertAdjacentHTML("afterbegin",U(o,t));const s=document.querySelectorAll(".sellers-item");I(s)}catch(t){console.error("Error fetching category books:",t)}};function D(e){const t=e.target.closest(".sellers-item").dataset.id;A(t)}function U(e,t){const o=e.split(" "),s=o.pop();return o.push(`<span class="accent">${s}</span>`),`
    <section class="seller-section">
      <h1 class="section-title category-card-title">${o.join(" ")}</h1>
      <ul class="sellers-category-list sellers-exclude flex-wrap">${h(z,t)}</ul>
    </section>
  `}function z({book_image:e,title:t,author:o,_id:s}){return`
    <li class="sellers-item" data-id="${s}">
      <div class="book-image-wrapper">
        <img class="book-image"
        src="${e}"
        alt="${t}"
        >
      </div>
      <h3 class="book-title">${t}</h3>
      <p class="book-author">${o}</p>
    </li>
  `}function P(e="show"){const t=document.querySelector(".loader");e==="show"?t.style.display="inline-block":t.style.display="none"}const S=async()=>{a.mainContainer.innerHTML=`
    <section class="seller-section">
      <h1 class="section-title">
        Best Sellers <span class="accent">Books</span>
      </h1>
    </section>`;const e=document.createElement("ul");e.classList.add("sellers-list"),e.innerHTML='<span class="loader"></span>',a.mainContainer.appendChild(e),a.mainContainer.querySelector(".loader"),P();try{const t=await m("top-books"),o=W(t,4);F(e,o);const s=document.querySelectorAll(".sellers-item");s.forEach(r=>{r.classList.add("animation-items")});const n=setTimeout(()=>{s.forEach(r=>{r.classList.remove("animation-items")})},500);e.addEventListener("click",R)}catch(t){console.error(t)}};function F(e,t){const o=G(t);e.innerHTML="",e.appendChild(o)}S();async function R(e){if(e.preventDefault(),e.target.nodeName!=="BUTTON")return;const t=e.target,{name:o}=t.dataset;await E({category:o})}function W(e,t){const o=[];for(;o.length<t;){const s=Math.floor(Math.random()*e.length);o.includes(s)||o.push(s)}return o.map(s=>e[s])}function G(e){const t=document.createDocumentFragment();return e.forEach(({list_name:o,books:s})=>{const n=document.createElement("li");n.className="sellers-category",n.innerHTML=`
      <h2 class="sellers-category-title">${o}</h2>
      <ul class="sellers-category-list">
        ${J(s)}
      </ul>
      <button class="sellers-button" type="button" data-name="${o}">See more</button>
    `,t.appendChild(n)}),t}function J(e){let t="";const o=V(),s=o==="desktop"?5:o==="tablet"?3:1;for(let n=0;n<s&&n<e.length;n++){const{book_image:r,title:c,author:i,_id:d}=e[n];t+=`
      <li class="sellers-item" data-id="${d}">
        <div class="book-image-wrapper">
          <img class="book-image"
          src="${r}"
          alt="${c}"
          >
        </div>
        <h3 class="book-title">${c}</h3>
        <p class="book-author">${i}</p>
      </li>
    `}return t}function V(){const e=window.innerWidth;return e<768?"mobile":e<1440?"tablet":"desktop"}a.categoryListElem.addEventListener("click",Z);function Z(e){if(e.target.nodeName!=="BUTTON"||e.target.classList.contains("active"))return;a.categoryListElem.querySelector(".active").classList.remove("active");const t=e.target;t.classList.add("active"),t.textContent==="ALL CATEGORIES"?S():E({category:t.textContent})}function K({list_name:e,classButton:t=""}){return`<li class="category-list">
      <button class="category-button ${t}" type="button">${e}</button>
    </li>`}const Q=async()=>{const e=await m("category-list");e.unshift({list_name:"ALL CATEGORIES",classButton:"active"}),a.categoryListElem.insertAdjacentHTML("beforeend",h(K,e))};Q();const X=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"stc",srcset:"stc@2x.png 2x"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"hope",srcset:"hope@2x.png 2x"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"u24",srcset:"u24@2x.png 2x"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"imc",srcset:"imc@2x.png 2x"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"msf",srcset:"msf@2x.png 2x"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"razom",srcset:"razom@2x.png 2x"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"aah",srcset:"aah@2x.png 2x"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"wv",srcset:"wv@2x.png 2x"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"prytula",srcset:"prytula@2x.png 2x"}];Y(X);function Y(e){const t=e.map(ee);a.supportList.append(...t)}function ee(e,t){const{title:o,url:s,img:n,srcset:r}=e,c=document.createElement("li");c.classList.add("swiper-slide");const i=document.createElement("a");i.classList.add("support-link"),i.target="_blank",i.rel="noopener noreferrer",i.ariaLabel=o,i.href=s;const d=document.createElement("span");d.classList.add("support-count"),d.textContent=`0${t+1}`;const u=document.createElement("img");return u.classList.add("support-img"),u.src=`./img/support/${n}.png`,u.srcset=`./img/support/${r}`,u.alt=o,i.append(d,u),c.append(i),c}const f=document.querySelector(".next-btn"),b=document.querySelector(".prev-btn");new T(".support-swiper",{direction:"vertical",slidesPerView:6,slidesPerGroup:6,allowTouchMove:!0,spaceBetween:"20px",modules:[B],navigation:{nextEl:".next-btn",prevEl:".prev-btn",disabledClass:"none"},on:{slideChange:function(){this.activeIndex===0?(b.classList.add("swiper-button-hidden"),f.classList.remove("swiper-button-hidden")):(b.classList.remove("swiper-button-hidden"),f.classList.add("swiper-button-hidden"))}}});const g=document.querySelector(".checkbox-input"),k=document.body;g.addEventListener("change",function(){g.checked?(k.classList.add("dark-theme"),localStorage.setItem("theme","dark-theme")):(k.classList.remove("dark-theme"),localStorage.setItem("theme",""))});const w=document.getElementById("checkbox"),L=document.querySelector(".owl-icon"),v=document.querySelector(".owl-light-icon");w.addEventListener("change",function(){w.checked?(L.style.display="block",v.style.display="none"):(L.style.display="none",v.style.display="block")});window.onload=te;function te(){let e=localStorage.getItem("theme");e==="dark-theme"&&(document.body.classList.add(e),g.checked=!0);const t=document.querySelector(".header-nav").getElementsByTagName("a");for(let o=0;o<t.length;o++)document.location.href.indexOf(t[o].href)>=0&&(t[o].classList.add("active"),console.log(document.location.href))}const oe=document.querySelector(".burger-menu-btn"),$=document.querySelector(".mobile-menu-container"),se=document.querySelector(".mob-menu-close-btn");oe.addEventListener("click",()=>{$.classList.add("open-menu")});se.addEventListener("click",()=>{$.classList.remove("open-menu")});
//# sourceMappingURL=commonHelpers.js.map
