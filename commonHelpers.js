import{r,a as k}from"./assets/renderMarkup-9f256e43.js";import{a as v,S as x,N as S}from"./assets/vendor-dcaf4cbb.js";const E="https://books-backend.p.goit.global/books/";async function u(e,t){try{return(await v.get(E+e,{params:t})).data}catch(o){console.error(o)}}document.querySelector("body");document.querySelector(".modalmenu");document.querySelector(".backdrop");document.querySelector(".modal-close-button");document.querySelector(".modal-list-button");async function C(e){const t=await u(e);console.log(t)}console.log("category-card");r.mainContainer.addEventListener("click",T);const w=async e=>{r.mainContainer.innerHTML="";try{const t=await u("category",e),o=t[0].list_name;r.mainContainer.insertAdjacentHTML("afterbegin",B(o,t));const n=document.querySelectorAll(".sellers-item");n.forEach(a=>{a.classList.add("animation-items")});const s=setTimeout(()=>{n.forEach(a=>{a.classList.remove("animation-items")})},500)}catch(t){console.error("Error fetching category books:",t)}};function T(e){const t=e.target.closest(".sellers-item").dataset.id;C(t)}function B(e,t){return`
  <section class="seller-section">
    <h1 class="section-title">${e}</h1>
    <ul class="sellers-category-list flex-wrap">${k($,t)}</ul>
</section>
    `}function $({book_image:e,title:t,author:o,_id:n}){return`
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
    `}function I(e="show"){const t=document.querySelector(".loader");e==="show"?t.style.display="inline-block":t.style.display="none"}const L=async()=>{r.mainContainer.innerHTML=`
    <section class="seller-section">
      <h1 class="section-title">
        Best Sellers <span class="accent">Books</span>
      </h1>
    </section>`;const e=document.createElement("ul");e.classList.add("sellers-list"),e.innerHTML='<span class="loader"></span>',r.mainContainer.appendChild(e),r.mainContainer.querySelector(".loader"),I();try{const t=await u("top-books"),o=N(t,4);q(e,o);const n=document.querySelectorAll(".sellers-item");n.forEach(a=>{a.classList.add("animation-items")});const s=setTimeout(()=>{n.forEach(a=>{a.classList.remove("animation-items")})},500);e.addEventListener("click",M)}catch(t){console.error(t)}};function q(e,t){const o=A(t);e.innerHTML="",e.appendChild(o)}L();async function M(e){if(e.preventDefault(),e.target.nodeName!=="BUTTON")return;const t=e.target,{name:o}=t.dataset;await w({category:o})}function N(e,t){const o=[];for(;o.length<t;){const n=Math.floor(Math.random()*e.length);o.includes(n)||o.push(n)}return o.map(n=>e[n])}function A(e){const t=document.createDocumentFragment();return e.forEach(({list_name:o,books:n})=>{const s=document.createElement("li");s.className="sellers-category",s.innerHTML=`
      <h2 class="sellers-category-title">${o}</h2>
      <ul class="sellers-category-list">
        ${H(n)}
      </ul>
      <button class="sellers-button" type="button" data-name="${o}">See more</button>
    `,t.appendChild(s)}),t}function H(e){let t="";const o=O(),n=o==="desktop"?5:o==="tablet"?3:1;for(let s=0;s<n&&s<e.length;s++){const{book_image:a,title:i,author:c,_id:l}=e[s];t+=`
      <li class="sellers-item" data-id="${l}">
        <div class="book-image-wrapper">
          <img class="book-image"
          src="${a}"
          alt="${i}"
          >
        </div>
        <h3 class="book-title">${i}</h3>
        <p class="book-author">${c}</p>
      </li>
    `}return t}function O(){const e=window.innerWidth;return e<768?"mobile":e<1440?"tablet":"desktop"}r.categoryListElem.addEventListener("click",D);function D(e){if(e.target.nodeName!=="BUTTON"||e.target.classList.contains("active"))return;r.categoryListElem.querySelector(".active").classList.remove("active");const t=e.target;t.classList.add("active"),t.textContent==="ALL CATEGORIES"?L():w({category:t.textContent})}function j({list_name:e,classButton:t=""}){return`<li class="category-list">
      <button class="category-button ${t}" type="button">${e}</button>
    </li>`}const z=async()=>{const e=await u("category-list");e.unshift({list_name:"ALL CATEGORIES",classButton:"active"}),r.categoryListElem.insertAdjacentHTML("beforeend",k(j,e))};z();const P=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"stc",srcset:"stc@2x.png 2x"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"hope",srcset:"hope@2x.png 2x"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"u24",srcset:"u24@2x.png 2x"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"imc",srcset:"imc@2x.png 2x"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"msf",srcset:"msf@2x.png 2x"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"razom",srcset:"razom@2x.png 2x"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"aah",srcset:"aah@2x.png 2x"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"wv",srcset:"wv@2x.png 2x"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"prytula",srcset:"prytula@2x.png 2x"}];U(P);function U(e){const t=e.map(R);r.supportList.append(...t)}function R(e,t){const{title:o,url:n,img:s,srcset:a}=e,i=document.createElement("li");i.classList.add("swiper-slide");const c=document.createElement("a");c.classList.add("support-link"),c.target="_blank",c.rel="noopener noreferrer",c.ariaLabel=o,c.href=n;const l=document.createElement("span");l.classList.add("support-count"),l.textContent=`0${t+1}`;const d=document.createElement("img");return d.classList.add("support-img"),d.src=`./img/support/${s}.png`,d.srcset=`./img/support/${a}`,d.alt=o,c.append(l,d),i.append(c),i}const p=document.querySelector(".next-btn"),g=document.querySelector(".prev-btn");new x(".support-swiper",{direction:"vertical",slidesPerView:6,slidesPerGroup:6,allowTouchMove:!0,spaceBetween:"20px",modules:[S],navigation:{nextEl:".next-btn",prevEl:".prev-btn",disabledClass:"none"},on:{slideChange:function(){this.activeIndex===0?(g.classList.add("swiper-button-hidden"),p.classList.remove("swiper-button-hidden")):(g.classList.remove("swiper-button-hidden"),p.classList.add("swiper-button-hidden"))}}});const m=document.querySelector(".checkbox-input"),h=document.body;m.addEventListener("change",function(){m.checked?(h.classList.add("dark-theme"),localStorage.setItem("theme","dark-theme")):(h.classList.remove("dark-theme"),localStorage.setItem("theme",""))});const y=document.getElementById("checkbox"),f=document.querySelector(".owl-icon"),b=document.querySelector(".owl-light-icon");y.addEventListener("change",function(){y.checked?(f.style.display="block",b.style.display="none"):(f.style.display="none",b.style.display="block")});window.onload=_;function _(){let e=localStorage.getItem("theme");e==="dark-theme"&&(document.body.classList.add(e),m.checked=!0);const t=document.querySelector(".header-nav").getElementsByTagName("a");for(let o=0;o<t.length;o++)document.location.href.indexOf(t[o].href)>=0&&(t[o].classList.add("active"),console.log(document.location.href))}const F=document.querySelector(".burger-menu-btn"),G=document.querySelector(".mobile-menu-container");F.addEventListener("click",function(){G.classList.add("open-menu")});
//# sourceMappingURL=commonHelpers.js.map
