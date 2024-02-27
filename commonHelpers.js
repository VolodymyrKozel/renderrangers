import{r as h,a as i}from"./assets/renderMarkup-f50bf5a7.js";import{a as $,S as T,N as B}from"./assets/vendor-dcaf4cbb.js";const M="https://books-backend.p.goit.global/books/";async function m(e,t){try{return(await $.get(M+e,{params:t})).data}catch(o){console.error(o)}}function I(e){e.forEach(t=>{t.classList.add("animation-items")}),setTimeout(()=>{e.forEach(t=>{t.classList.remove("animation-items")})},500)}function N({_id:e,book_image:t,title:o,author:s,description:n,buy_links:a}){return`
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
      ${h(q,a.slice(0,2))}
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
`}const y=document.querySelector("body"),l=document.querySelector(".backdrop");l.addEventListener("click",j);async function A(e){const t=await m(e);console.log(t),O(t),document.addEventListener("keydown",x)}function O(e){l.style.display="flex",y.style.overflow="hidden",l.innerHTML="",l.insertAdjacentHTML("afterbegin",N(e)),H(e._id,"cart"),D(e._id,"cart"),console.log(e._id)}function H(e,t){let o=JSON.parse(localStorage.getItem(t));!o!=null&&o.find(s=>s.id==e)&&console.log("show delete button")}function _(e,t){let o=JSON.parse(localStorage.getItem(t));o==null&&(o=[]),console.log("filter"),console.log(o.filter(n=>n.id!==e)),console.log("find"),console.log(o.find(n=>n.id==e));var s={id:e};o.push(s),localStorage.setItem(t,JSON.stringify(o))}function j(e){console.log(e.target),e.target.id==="modal-list-button-id"&&(e.dataset.role==="add"?_(e.target.dataset.id,"cart"):(e.target.dataset.id,void 0)),e.target.tagName==="svg"&&p(),e.target.id==="mBackdrop"&&(console.log("x"),l.style.display="none",y.style.overflow="auto",p()),e.target.nodeName}function D(e,t){const o=document.querySelector(".modal-list-button"),s=o.textContent.trim(),n=localStorage.getItem(t),a=JSON.parse(n)||{};s==="Add this book to shopping list"?(a[e]=!0,o.textContent="Remove this book from the shopping list"):(a[e]&&delete a[e],o.textContent="Add this book to shopping list"),localStorage.setItem(t,JSON.stringify(a))}function x(e){e.key==="Escape"&&(p(),document.removeEventListener("keydown",x))}function p(){l.style.display="none",y.style.overflow="auto"}console.log("category-card");i.mainContainer.addEventListener("click",U);const S=async e=>{i.mainContainer.innerHTML="";try{const t=await m("category",e),o=t[0].list_name;i.mainContainer.insertAdjacentHTML("afterbegin",z(o,t));const s=document.querySelectorAll(".sellers-item");I(s)}catch(t){console.error("Error fetching category books:",t)}};function U(e){const t=e.target.closest(".sellers-item").dataset.id;A(t)}function z(e,t){const o=e.split(" "),s=o.pop();return o.push(`<span class="accent">${s}</span>`),`
    <section class="seller-section">
      <h1 class="section-title category-card-title">${o.join(" ")}</h1>
      <ul class="sellers-category-list sellers-exclude flex-wrap">${h(J,t)}</ul>
    </section>
  `}function J({book_image:e,title:t,author:o,_id:s}){return`
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
  `}function P(e="show"){const t=document.querySelector(".loader");e==="show"?t.style.display="inline-block":t.style.display="none"}const E=async()=>{i.mainContainer.innerHTML=`
    <section class="seller-section">
      <h1 class="section-title">
        Best Sellers <span class="accent">Books</span>
      </h1>
    </section>`;const e=document.createElement("ul");e.classList.add("sellers-list"),e.innerHTML='<span class="loader"></span>',i.mainContainer.appendChild(e),i.mainContainer.querySelector(".loader"),P();try{const t=await m("top-books"),o=W(t,4);R(e,o);const s=document.querySelectorAll(".sellers-item");s.forEach(a=>{a.classList.add("animation-items")});const n=setTimeout(()=>{s.forEach(a=>{a.classList.remove("animation-items")})},500);e.addEventListener("click",F)}catch(t){console.error(t)}};function R(e,t){const o=G(t);e.innerHTML="",e.appendChild(o)}E();async function F(e){if(e.preventDefault(),e.target.nodeName!=="BUTTON")return;const t=e.target,{name:o}=t.dataset;await S({category:o})}function W(e,t){const o=[];for(;o.length<t;){const s=Math.floor(Math.random()*e.length);o.includes(s)||o.push(s)}return o.map(s=>e[s])}function G(e){const t=document.createDocumentFragment();return e.forEach(({list_name:o,books:s})=>{const n=document.createElement("li");n.className="sellers-category",n.innerHTML=`
      <h2 class="sellers-category-title">${o}</h2>
      <ul class="sellers-category-list">
        ${V(s)}
      </ul>
      <button class="sellers-button" type="button" data-name="${o}">See more</button>
    `,t.appendChild(n)}),t}function V(e){let t="";const o=Z(),s=o==="desktop"?5:o==="tablet"?3:1;for(let n=0;n<s&&n<e.length;n++){const{book_image:a,title:c,author:r,_id:d}=e[n];t+=`
      <li class="sellers-item" data-id="${d}">
        <div class="book-image-wrapper">
          <img class="book-image"
          src="${a}"
          alt="${c}"
          >
        </div>
        <h3 class="book-title">${c}</h3>
        <p class="book-author">${r}</p>
      </li>
    `}return t}function Z(){const e=window.innerWidth;return e<768?"mobile":e<1440?"tablet":"desktop"}i.categoryListElem.addEventListener("click",K);function K(e){if(e.target.nodeName!=="BUTTON"||e.target.classList.contains("active"))return;i.categoryListElem.querySelector(".active").classList.remove("active");const t=e.target;t.classList.add("active"),t.textContent==="ALL CATEGORIES"?E():S({category:t.textContent})}function Q({list_name:e,classButton:t=""}){return`<li class="category-list">
      <button class="category-button ${t}" type="button">${e}</button>
    </li>`}const X=async()=>{const e=await m("category-list");e.unshift({list_name:"ALL CATEGORIES",classButton:"active"}),i.categoryListElem.insertAdjacentHTML("beforeend",h(Q,e))};X();const Y=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"stc",srcset:"stc@2x.png 2x"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"hope",srcset:"hope@2x.png 2x"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"u24",srcset:"u24@2x.png 2x"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"imc",srcset:"imc@2x.png 2x"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"msf",srcset:"msf@2x.png 2x"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"razom",srcset:"razom@2x.png 2x"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"aah",srcset:"aah@2x.png 2x"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"wv",srcset:"wv@2x.png 2x"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"prytula",srcset:"prytula@2x.png 2x"}];ee(Y);function ee(e){const t=e.map(te);i.supportList.append(...t)}function te(e,t){const{title:o,url:s,img:n,srcset:a}=e,c=document.createElement("li");c.classList.add("swiper-slide");const r=document.createElement("a");r.classList.add("support-link"),r.target="_blank",r.rel="noopener noreferrer",r.ariaLabel=o,r.href=s;const d=document.createElement("span");d.classList.add("support-count"),d.textContent=`0${t+1}`;const u=document.createElement("img");return u.classList.add("support-img"),u.src=`./img/support/${n}.png`,u.srcset=`./img/support/${a}`,u.alt=o,r.append(d,u),c.append(r),c}const f=document.querySelector(".next-btn"),b=document.querySelector(".prev-btn");new T(".support-swiper",{direction:"vertical",slidesPerView:6,slidesPerGroup:6,allowTouchMove:!0,spaceBetween:"20px",modules:[B],navigation:{nextEl:".next-btn",prevEl:".prev-btn",disabledClass:"none"},on:{slideChange:function(){this.activeIndex===0?(b.classList.add("swiper-button-hidden"),f.classList.remove("swiper-button-hidden")):(b.classList.remove("swiper-button-hidden"),f.classList.add("swiper-button-hidden"))}}});const g=document.querySelector(".checkbox-input"),k=document.body;g.addEventListener("change",function(){g.checked?(k.classList.add("dark-theme"),localStorage.setItem("theme","dark-theme")):(k.classList.remove("dark-theme"),localStorage.setItem("theme",""))});const w=document.getElementById("checkbox"),L=document.querySelector(".owl-icon"),v=document.querySelector(".owl-light-icon");w.addEventListener("change",function(){w.checked?(L.style.display="block",v.style.display="none"):(L.style.display="none",v.style.display="block")});window.onload=oe;function oe(){let e=localStorage.getItem("theme");e==="dark-theme"&&(document.body.classList.add(e),g.checked=!0);const t=document.querySelector(".header-nav").getElementsByTagName("a");for(let o=0;o<t.length;o++)document.location.href.indexOf(t[o].href)>=0&&(t[o].classList.add("active"),console.log(document.location.href))}const se=document.querySelector(".burger-menu-btn"),C=document.querySelector(".mobile-menu-container"),ne=document.querySelector(".mob-menu-close-btn");se.addEventListener("click",()=>{C.classList.add("open-menu")});ne.addEventListener("click",()=>{C.classList.remove("open-menu")});
//# sourceMappingURL=commonHelpers.js.map
