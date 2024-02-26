import{r as c,a as x}from"./assets/renderMarkup-299d1bb8.js";import{a as T,S as M,N as I}from"./assets/vendor-dcaf4cbb.js";const q="https://books-backend.p.goit.global/books/";async function g(e,t){try{return(await T.get(q+e,{params:t})).data}catch(o){console.error(o)}}function A(e){e.forEach(t=>{t.classList.add("animation-items")}),setTimeout(()=>{e.forEach(t=>{t.classList.remove("animation-items")})},500)}const E=document.querySelector("body"),m=document.querySelector(".modalmenu"),p=document.querySelector(".backdrop"),S=document.querySelector(".modal-close-button"),l=document.querySelector(".modal-list-button");async function N(e){const t=await g(e);console.log(t),O(t),document.addEventListener("keydown",C),l.addEventListener("click",function(){H(e),l.blur()})}function O(e){var s,i;p.style.display="flex",E.style.overflow="hidden";const t=((s=e.buy_links.find(a=>a.name==="Amazon"))==null?void 0:s.url)||"",o=((i=e.buy_links.find(a=>a.name==="Apple Books"))==null?void 0:i.url)||"",n=`
  <ul class="buy-links-list">
    <li>
      <img src="./img/amazon-1x.jpg" alt="Amazon" class="platform-image" data-url="${t}">
    </li>
    <li>
      <img src="./img/modal-book-1x.jpg" alt="Apple Books" class="platform-image" data-url="${o}">
    </li>
  </ul>
`;m.innerHTML=`
  <div class="modal-container">
  <img src="${e.book_image}" class="modal-image">
    <div class="modal-wrap">
      <h2 class="modal-title">${e.title}</h2>
      <p class="modal-author">${e.author}</p>
      <p class="description">${e.description}</p>
      ${n}
    </div>  
  </div>
`,m.appendChild(S),m.appendChild(l),m.querySelectorAll(".platform-image").forEach(a=>{a.addEventListener("click",()=>{const r=a.dataset.url;r?window.open(r,"_blank"):console.error("Platform URL is not found.")})})}function H(e){const t=l.textContent.trim(),o=localStorage.getItem("shoppingList"),n=JSON.parse(o)||{};t==="Add this book to shopping list"?(n[e]=!0,l.textContent="Remove this book from the shopping list"):(n[e]&&delete n[e],l.textContent="Add this book to shopping list"),localStorage.setItem("shoppingList",JSON.stringify(n))}document.addEventListener("DOMContentLoaded",function(){S.addEventListener("click",function(){h()}),p.addEventListener("click",function(e){e.target===p&&h()})});function C(e){e.key==="Escape"&&(h(),document.removeEventListener("keydown",C))}function h(){p.style.display="none",E.style.overflow="auto"}console.log("category-card");c.mainContainer.addEventListener("click",z);const $=async e=>{c.mainContainer.innerHTML="";try{const t=await g("category",e),o=t[0].list_name;c.mainContainer.insertAdjacentHTML("afterbegin",U(o,t));const n=document.querySelectorAll(".sellers-item");A(n)}catch(t){console.error("Error fetching category books:",t)}};function z(e){const t=e.target.closest(".sellers-item").dataset.id;N(t)}function U(e,t){return`
  <section class="seller-section">
    <h1 class="section-title">${e}</h1>
    <ul class="sellers-category-list flex-wrap">${x(D,t)}</ul>
</section>
    `}function D({book_image:e,title:t,author:o,_id:n}){return`
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
    `}function _(e="show"){const t=document.querySelector(".loader");e==="show"?t.style.display="inline-block":t.style.display="none"}const B=async()=>{c.mainContainer.innerHTML=`
    <section class="seller-section">
      <h1 class="section-title">
        Best Sellers <span class="accent">Books</span>
      </h1>
    </section>`;const e=document.createElement("ul");e.classList.add("sellers-list"),e.innerHTML='<span class="loader"></span>',c.mainContainer.appendChild(e),c.mainContainer.querySelector(".loader"),_();try{const t=await g("top-books"),o=R(t,4);j(e,o);const n=document.querySelectorAll(".sellers-item");n.forEach(i=>{i.classList.add("animation-items")});const s=setTimeout(()=>{n.forEach(i=>{i.classList.remove("animation-items")})},500);e.addEventListener("click",P)}catch(t){console.error(t)}};function j(e,t){const o=F(t);e.innerHTML="",e.appendChild(o)}B();async function P(e){if(e.preventDefault(),e.target.nodeName!=="BUTTON")return;const t=e.target,{name:o}=t.dataset;await $({category:o})}function R(e,t){const o=[];for(;o.length<t;){const n=Math.floor(Math.random()*e.length);o.includes(n)||o.push(n)}return o.map(n=>e[n])}function F(e){const t=document.createDocumentFragment();return e.forEach(({list_name:o,books:n})=>{const s=document.createElement("li");s.className="sellers-category",s.innerHTML=`
      <h2 class="sellers-category-title">${o}</h2>
      <ul class="sellers-category-list">
        ${G(n)}
      </ul>
      <button class="sellers-button" type="button" data-name="${o}">See more</button>
    `,t.appendChild(s)}),t}function G(e){let t="";const o=W(),n=o==="desktop"?5:o==="tablet"?3:1;for(let s=0;s<n&&s<e.length;s++){const{book_image:i,title:a,author:r,_id:d}=e[s];t+=`
      <li class="sellers-item" data-id="${d}">
        <div class="book-image-wrapper">
          <img class="book-image"
          src="${i}"
          alt="${a}"
          >
        </div>
        <h3 class="book-title">${a}</h3>
        <p class="book-author">${r}</p>
      </li>
    `}return t}function W(){const e=window.innerWidth;return e<768?"mobile":e<1440?"tablet":"desktop"}c.categoryListElem.addEventListener("click",J);function J(e){if(e.target.nodeName!=="BUTTON"||e.target.classList.contains("active"))return;c.categoryListElem.querySelector(".active").classList.remove("active");const t=e.target;t.classList.add("active"),t.textContent==="ALL CATEGORIES"?B():$({category:t.textContent})}function V({list_name:e,classButton:t=""}){return`<li class="category-list">
      <button class="category-button ${t}" type="button">${e}</button>
    </li>`}const Z=async()=>{const e=await g("category-list");e.unshift({list_name:"ALL CATEGORIES",classButton:"active"}),c.categoryListElem.insertAdjacentHTML("beforeend",x(V,e))};Z();const K=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"stc",srcset:"stc@2x.png 2x"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"hope",srcset:"hope@2x.png 2x"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"u24",srcset:"u24@2x.png 2x"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"imc",srcset:"imc@2x.png 2x"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"msf",srcset:"msf@2x.png 2x"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"razom",srcset:"razom@2x.png 2x"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"aah",srcset:"aah@2x.png 2x"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"wv",srcset:"wv@2x.png 2x"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"prytula",srcset:"prytula@2x.png 2x"}];Q(K);function Q(e){const t=e.map(X);c.supportList.append(...t)}function X(e,t){const{title:o,url:n,img:s,srcset:i}=e,a=document.createElement("li");a.classList.add("swiper-slide");const r=document.createElement("a");r.classList.add("support-link"),r.target="_blank",r.rel="noopener noreferrer",r.ariaLabel=o,r.href=n;const d=document.createElement("span");d.classList.add("support-count"),d.textContent=`0${t+1}`;const u=document.createElement("img");return u.classList.add("support-img"),u.src=`./img/support/${s}.png`,u.srcset=`./img/support/${i}`,u.alt=o,r.append(d,u),a.append(r),a}const f=document.querySelector(".next-btn"),k=document.querySelector(".prev-btn");new M(".support-swiper",{direction:"vertical",slidesPerView:6,slidesPerGroup:6,allowTouchMove:!0,spaceBetween:"20px",modules:[I],navigation:{nextEl:".next-btn",prevEl:".prev-btn",disabledClass:"none"},on:{slideChange:function(){this.activeIndex===0?(k.classList.add("swiper-button-hidden"),f.classList.remove("swiper-button-hidden")):(k.classList.remove("swiper-button-hidden"),f.classList.add("swiper-button-hidden"))}}});const y=document.querySelector(".checkbox-input"),b=document.body;y.addEventListener("change",function(){y.checked?(b.classList.add("dark-theme"),localStorage.setItem("theme","dark-theme")):(b.classList.remove("dark-theme"),localStorage.setItem("theme",""))});const L=document.getElementById("checkbox"),w=document.querySelector(".owl-icon"),v=document.querySelector(".owl-light-icon");L.addEventListener("change",function(){L.checked?(w.style.display="block",v.style.display="none"):(w.style.display="none",v.style.display="block")});window.onload=Y;function Y(){let e=localStorage.getItem("theme");e==="dark-theme"&&(document.body.classList.add(e),y.checked=!0);const t=document.querySelector(".header-nav").getElementsByTagName("a");for(let o=0;o<t.length;o++)document.location.href.indexOf(t[o].href)>=0&&(t[o].classList.add("active"),console.log(document.location.href))}const ee=document.querySelector(".burger-menu-btn"),te=document.querySelector(".mobile-menu-container");ee.addEventListener("click",function(){te.classList.add("open-menu")});
//# sourceMappingURL=commonHelpers.js.map
