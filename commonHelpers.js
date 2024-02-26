import{r as c,a as S}from"./assets/renderMarkup-ecb567fe.js";import{a as E,S as C,N as T}from"./assets/vendor-dcaf4cbb.js";const M="https://books-backend.p.goit.global/books/";async function g(e,t){try{return(await E.get(M+e,{params:t})).data}catch(o){console.error(o)}}console.log("category-card");const $=async e=>{c.mainContainer.innerHTML="";try{const t=await g("category",e),o=t[0].list_name;c.mainContainer.insertAdjacentHTML("afterbegin",B(o,t))}catch(t){console.error("Error fetching category books:",t)}};function B(e,t){return console.log(t),`
  <section class="seller-section">
    <h1 class="section-title">${e}</h1>
    <ul class="sellers-category-list flex-wrap">${S(I,null,t)}</ul>
</section>
    `}function I({book_image:e,title:t,author:o,_id:s}){return`
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
    `}function q(e="show"){const t=document.querySelector(".loader");e==="show"?t.style.display="inline-block":t.style.display="none"}const v=document.querySelector(".seller-section"),d=document.createElement("ul");d.classList.add("sellers-list");d.innerHTML='<span class="loader"></span>';v.innerHTML=`
  <h1 class="section-title">
    Best Sellers <span class="accent">Books</span>
  </h1>`;v.appendChild(d);const x=async()=>{q();try{const e=await g("top-books"),t=A(e,4);N(t);const o=document.querySelectorAll(".sellers-item");o.forEach(n=>{n.classList.add("animation-items")});const s=setTimeout(()=>{o.forEach(n=>{n.classList.remove("animation-items")})},500)}catch(e){console.error(e)}};x();function A(e,t){const o=[];for(;o.length<t;){const s=Math.floor(Math.random()*e.length);o.includes(s)||o.push(s)}return o.map(s=>e[s])}function N(e){const t=H(e);d.innerHTML="",d.appendChild(t)}function H(e){const t=document.createDocumentFragment();return e.forEach(({list_name:o,books:s})=>{const n=document.createElement("li");n.className="sellers-category",n.innerHTML=`
      <h2 class="sellers-category-title">${o}</h2>
      <ul class="sellers-category-list">
        ${O(s)}
      </ul>
      <button class="sellers-button" type="button">See more</button>
    `,t.appendChild(n)}),t}function O(e){let t="";const o=j(),s=o==="desktop"?5:o==="tablet"?3:1;for(let n=0;n<s&&n<e.length;n++){const{book_image:u,title:a,author:r,_id:i}=e[n];t+=`
      <li class="sellers-item" data-id="${i}">
        <div class="book-image-wrapper">
          <img class="book-image"
          src="${u}"
          alt="${a}"
          >
        </div>
        <h3 class="book-title">${a}</h3>
        <p class="book-author">${r}</p>
      </li>
    `}return t}function j(){const e=window.innerWidth;return e<768?"mobile":e<1200?"tablet":"desktop"}c.categoryListElem.addEventListener("click",D);function D(e){if(e.target.nodeName!=="BUTTON"||e.target.classList.contains("active"))return;c.categoryListElem.querySelector(".active").classList.remove("active");const t=e.target;t.classList.add("active"),t.textContent==="ALL CATEGORIES"?x():$({category:t.textContent})}function z({list_name:e,classButton:t=""}){return`<li class="category-list">
      <button class="category-button ${t}" type="button">${e}</button>
    </li>`}function P(e){return e.map(z).join("")}function _(e){const t=P(e);c.categoryListElem.insertAdjacentHTML("beforeend",t)}const R=async()=>{const e=await g("category-list");e.unshift({list_name:"ALL CATEGORIES",classButton:"active"}),_(e)};R();const U=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"stc",srcset:"stc@2x.png 2x"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"hope",srcset:"hope@2x.png 2x"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"u24",srcset:"u24@2x.png 2x"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"imc",srcset:"imc@2x.png 2x"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"msf",srcset:"msf@2x.png 2x"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"razom",srcset:"razom@2x.png 2x"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"aah",srcset:"aah@2x.png 2x"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"wv",srcset:"wv@2x.png 2x"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"prytula",srcset:"prytula@2x.png 2x"}];F(U);function F(e){const t=e.map(G);c.supportList.append(...t)}function G(e,t){const{title:o,url:s,img:n,srcset:u}=e,a=document.createElement("li");a.classList.add("swiper-slide");const r=document.createElement("a");r.classList.add("support-link"),r.target="_blank",r.rel="noopener noreferrer",r.ariaLabel=o,r.href=s;const i=document.createElement("span");i.classList.add("support-count"),i.textContent=`0${t+1}`;const l=document.createElement("img");return l.classList.add("support-img"),l.src=`./img/support/${n}.png`,l.srcset=`./img/support/${u}`,l.alt=o,r.append(i,l),a.append(r),a}const h=document.querySelector(".next-btn"),y=document.querySelector(".prev-btn");new C(".support-swiper",{direction:"vertical",slidesPerView:6,slidesPerGroup:6,allowTouchMove:!0,spaceBetween:"20px",modules:[T],navigation:{nextEl:".next-btn",prevEl:".prev-btn",disabledClass:"none"},on:{slideChange:function(){this.activeIndex===0?(y.classList.add("swiper-button-hidden"),h.classList.remove("swiper-button-hidden")):(y.classList.remove("swiper-button-hidden"),h.classList.add("swiper-button-hidden"))}}});const W=document.querySelector("body");document.querySelector(".modalmenu");const m=document.querySelector(".backdrop"),V=document.querySelector(".modal-close-button");document.querySelector(".modal-list-button");document.addEventListener("DOMContentLoaded",function(){V.addEventListener("click",function(){f()}),m.addEventListener("click",function(e){e.target===m&&f()})});function f(){m.style.display="none",W.style.overflow="auto"}const p=document.querySelector(".checkbox-input"),b=document.body;p.addEventListener("change",function(){p.checked?(b.classList.add("dark-theme"),localStorage.setItem("theme","dark-theme")):(b.classList.remove("dark-theme"),localStorage.setItem("theme",""))});const k=document.getElementById("checkbox"),w=document.querySelector(".owl-icon"),L=document.querySelector(".owl-light-icon");k.addEventListener("change",function(){k.checked?(w.style.display="block",L.style.display="none"):(w.style.display="none",L.style.display="block")});window.onload=Z;function Z(){let e=localStorage.getItem("theme");e==="dark-theme"&&(document.body.classList.add(e),p.checked=!0);const t=document.querySelector(".header-nav").getElementsByTagName("a");for(let o=0;o<t.length;o++)document.location.href.indexOf(t[o].href)>=0&&(t[o].classList.add("active"),console.log(document.location.href))}const J=document.querySelector(".burger-menu-btn"),K=document.querySelector(".mobile-menu-container");J.addEventListener("click",function(){K.classList.add("open-menu")});
//# sourceMappingURL=commonHelpers.js.map
