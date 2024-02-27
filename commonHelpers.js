import{r as f,a}from"./assets/renderMarkup-3fdc6bca.js";import{a as B,S as I,N as M}from"./assets/vendor-dcaf4cbb.js";const N="https://books-backend.p.goit.global/books/";async function p(e,t){try{return(await B.get(N+e,{params:t})).data}catch(s){console.error(s)}}function q(e){e.forEach(t=>{t.classList.add("animation-items")}),setTimeout(()=>{e.forEach(t=>{t.classList.remove("animation-items")})},500)}function O(e,{_id:t,book_image:s,title:n,author:o,description:r,buy_links:c}){return`
  <section class="modalmenu">
      <button type="button" id="modal-close-id" class="close-button modal-close-button" width="28" height="28">
      <svg class="close-icon" width="24" height="24">
        <use src="./img/icons/icons.svg#icon-x-close"></use>
      </svg>
    </button>
  <div class="modal-container">
  <img src="${s}" class="modal-image">
    <div class="modal-wrap">
      <h2 class="modal-title">${n}</h2>
      <p class="modal-author">${o}</p>
      <p class="description">${r}</p>
        <ul class="buy-links-list">
      ${f(A,c.slice(0,2))}
        </ul>       
    </div>
  </div>
   <button class="modal-list-button" type="button" id="modal-list-button-id" data-role="add" data-id="${t}">
      add to shopping list'
    </button>
    </section>
`}function A({name:e,url:t}){return`
    <li class="buy-links-item">
    <a target="_blank" rel="noopener noreferrer" aria-label="${e}" href=${t}>
      <img src="./img/${e.split(" ")[0].toLowerCase()}-1x.png"  srcset="./img/${e.split(" ")[0].toLowerCase()}-2x.png 2x" alt="${e}" class="platform-image">
</a>
</li>
`}const S=document.querySelector("body"),m=document.querySelector(".backdrop");m.addEventListener("click",z);const y=[];let u=!0;async function H(e){const t=await p(e);j(t),document.addEventListener("keydown",E)}function j(e){localStorage.setItem("currentBook",JSON.stringify(e)),y.push(e),m.style.display="flex",S.style.overflow="hidden",m.innerHTML="",m.insertAdjacentHTML("afterbegin",O(u,e)),console.log(J("cart"))}function J(e){return JSON.parse(localStorage.getItem(e))==null?!1:y.find(s=>s.id===JSON.parse(localStorage.getItem("cart")).id)===!0}function D(e){let t=JSON.parse(localStorage.getItem(e));t==null&&(t=[]),t.push(y),localStorage.setItem(e,JSON.stringify(t))}function U(e,t){const n=JSON.parse(localStorage.getItem(t)).filter(o=>o.id!==e);localStorage.setItem(t,JSON.stringify(n))}function z(e){e.target.id==="modal-list-button-id"&&(u&&(D("cart"),e.target.textContent="add to shopping list",u=!1),u===!1&&(U(e.target.dataset.id,"cart"),u=!0,e.target.textContent="remove from the shopping list")),e.target.tagName==="svg"&&g(),e.target.id==="mBackdrop"&&g(),e.target.nodeName}function E(e){e.key==="Escape"&&(g(),document.removeEventListener("keydown",E))}function g(){m.style.display="none",S.style.overflow="auto"}console.log("category-card");a.mainContainer.addEventListener("click",P);const C=async e=>{a.mainContainer.innerHTML="";try{const t=await p("category",e),s=t[0].list_name;a.mainContainer.insertAdjacentHTML("afterbegin",_(s,t));const n=document.querySelectorAll(".sellers-item");q(n)}catch(t){console.error("Error fetching category books:",t)}};function P(e){const t=e.target.closest(".sellers-item").dataset.id;H(t)}function _(e,t){const s=e.split(" "),n=s.pop();return s.push(`<span class="accent">${n}</span>`),`
    <section class="seller-section">
      <h1 class="section-title category-card-title">${s.join(" ")}</h1>
      <ul class="sellers-category-list sellers-exclude flex-wrap">${f(F,t)}</ul>
    </section>
  `}function F({book_image:e,title:t,author:s,_id:n}){return`
    <li class="sellers-item" data-id="${n}">
      <div class="book-image-wrapper">
        <img class="book-image"
        src="${e}"
        alt="${t}"
        >
      </div>
      <h3 class="book-title">${t}</h3>
      <p class="book-author">${s}</p>
    </li>
  `}function R(e="show"){const t=document.querySelector(".loader");e==="show"?t.style.display="inline-block":t.style.display="none"}const $=async()=>{a.mainContainer.innerHTML=`
    <section class="seller-section">
      <h1 class="section-title">
        Best Sellers <span class="accent">Books</span>
      </h1>
    </section>`;const e=document.createElement("ul");e.classList.add("sellers-list"),e.innerHTML='<span class="loader"></span>',a.mainContainer.appendChild(e),a.mainContainer.querySelector(".loader"),R();try{const t=await p("top-books"),s=V(t,4);W(e,s);const n=document.querySelectorAll(".sellers-item");n.forEach(r=>{r.classList.add("animation-items")});const o=setTimeout(()=>{n.forEach(r=>{r.classList.remove("animation-items")})},500);e.addEventListener("click",G)}catch(t){console.error(t)}};function W(e,t){const s=Z(t);e.innerHTML="",e.appendChild(s)}$();async function G(e){if(e.preventDefault(),e.target.nodeName!=="BUTTON")return;const t=e.target,{name:s}=t.dataset;await C({category:s})}function V(e,t){const s=[];for(;s.length<t;){const n=Math.floor(Math.random()*e.length);s.includes(n)||s.push(n)}return s.map(n=>e[n])}function Z(e){const t=document.createDocumentFragment();return e.forEach(({list_name:s,books:n})=>{const o=document.createElement("li");o.className="sellers-category",o.innerHTML=`
      <h2 class="sellers-category-title">${s}</h2>
      <ul class="sellers-category-list">
        ${K(n)}
      </ul>
      <button class="sellers-button" type="button" data-name="${s}">See more</button>
    `,t.appendChild(o)}),t}function K(e){let t="";const s=Q(),n=s==="desktop"?5:s==="tablet"?3:1;for(let o=0;o<n&&o<e.length;o++){const{book_image:r,title:c,author:i,_id:l}=e[o];t+=`
      <li class="sellers-item" data-id="${l}">
        <div class="book-image-wrapper">
          <img class="book-image"
          src="${r}"
          alt="${c}"
          >
        </div>
        <h3 class="book-title">${c}</h3>
        <p class="book-author">${i}</p>
      </li>
    `}return t}function Q(){const e=window.innerWidth;return e<768?"mobile":e<1440?"tablet":"desktop"}a.categoryListElem.addEventListener("click",X);function X(e){if(e.target.nodeName!=="BUTTON"||e.target.classList.contains("active"))return;a.categoryListElem.querySelector(".active").classList.remove("active");const t=e.target;t.classList.add("active"),t.textContent==="ALL CATEGORIES"?$():C({category:t.textContent})}function Y({list_name:e,classButton:t=""}){return`<li class="category-list">
      <button class="category-button ${t}" type="button">${e}</button>
    </li>`}const ee=async()=>{const e=await p("category-list");e.unshift({list_name:"ALL CATEGORIES",classButton:"active"}),a.categoryListElem.insertAdjacentHTML("beforeend",f(Y,e))};ee();const te=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"stc",srcset:"stc@2x.png 2x"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"hope",srcset:"hope@2x.png 2x"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"u24",srcset:"u24@2x.png 2x"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"imc",srcset:"imc@2x.png 2x"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"msf",srcset:"msf@2x.png 2x"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"razom",srcset:"razom@2x.png 2x"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"aah",srcset:"aah@2x.png 2x"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"wv",srcset:"wv@2x.png 2x"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"prytula",srcset:"prytula@2x.png 2x"}];se(te);function se(e){const t=e.map(ne);a.supportList.append(...t)}function ne(e,t){const{title:s,url:n,img:o,srcset:r}=e,c=document.createElement("li");c.classList.add("swiper-slide");const i=document.createElement("a");i.classList.add("support-link"),i.target="_blank",i.rel="noopener noreferrer",i.ariaLabel=s,i.href=n;const l=document.createElement("span");l.classList.add("support-count"),l.textContent=`0${t+1}`;const d=document.createElement("img");return d.classList.add("support-img"),d.src=`./img/support/${o}.png`,d.srcset=`./img/support/${r}`,d.alt=s,i.append(l,d),c.append(i),c}const b=document.querySelector(".next-btn"),k=document.querySelector(".prev-btn");new I(".support-swiper",{direction:"vertical",slidesPerView:6,slidesPerGroup:6,allowTouchMove:!0,spaceBetween:"20px",modules:[M],navigation:{nextEl:".next-btn",prevEl:".prev-btn",disabledClass:"none"},on:{slideChange:function(){this.activeIndex===0?(k.classList.add("swiper-button-hidden"),b.classList.remove("swiper-button-hidden")):(k.classList.remove("swiper-button-hidden"),b.classList.add("swiper-button-hidden"))}}});const h=document.querySelector(".checkbox-input"),w=document.body;h.addEventListener("change",function(){h.checked?(w.classList.add("dark-theme"),localStorage.setItem("theme","dark-theme")):(w.classList.remove("dark-theme"),localStorage.setItem("theme",""))});const L=document.getElementById("checkbox"),v=document.querySelector(".owl-icon"),x=document.querySelector(".owl-light-icon");L.addEventListener("change",function(){L.checked?(v.style.display="block",x.style.display="none"):(v.style.display="none",x.style.display="block")});window.onload=oe;function oe(){let e=localStorage.getItem("theme");e==="dark-theme"&&(document.body.classList.add(e),h.checked=!0);const t=document.querySelector(".header-nav").getElementsByTagName("a");for(let s=0;s<t.length;s++)document.location.href.indexOf(t[s].href)>=0&&(t[s].classList.add("active"),console.log(document.location.href))}const ae=document.querySelector(".burger-menu-btn"),T=document.querySelector(".mobile-menu-container"),re=document.querySelector(".mob-menu-close-btn");ae.addEventListener("click",()=>{T.classList.add("open-menu")});re.addEventListener("click",()=>{T.classList.remove("open-menu")});
//# sourceMappingURL=commonHelpers.js.map
