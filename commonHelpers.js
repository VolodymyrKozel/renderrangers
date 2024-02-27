import{r as y,a as r}from"./assets/renderMarkup-d1b0c9bc.js";import{a as T,S as B,N as I}from"./assets/vendor-dcaf4cbb.js";const M="https://books-backend.p.goit.global/books/";async function p(e,t){try{return(await T.get(M+e,{params:t})).data}catch(s){console.error(s)}}function N(e){e.forEach(t=>{t.classList.add("animation-items")}),setTimeout(()=>{e.forEach(t=>{t.classList.remove("animation-items")})},500)}function q(e,{_id:t,book_image:s,title:o,author:n,description:c,buy_links:a}){return`
  <section class="modalmenu">
      <button type="button" id="modal-close-id" class="close-button modal-close-button" width="28" height="28">
      <svg class="close-icon" width="24" height="24">
        <use href="./img/icons/icons.svg#icon-x-close"></use>
      </svg>
    </button>
  <div class="modal-container">
  <img src="${s}" class="modal-image">
    <div class="modal-wrap">
      <h2 class="modal-title">${o}</h2>
      <p class="modal-author">${n}</p>
      <p class="description">${c}</p>
        <ul class="buy-links-list">
      ${y(O,a.slice(0,2))}
        </ul>       
    </div>
  </div>
   <button class="modal-list-button" type="button" id="modal-list-button-id" data-role="add" data-id="${t}">
      add to shopping list
    </button>
    </section>
`}function O({name:e,url:t}){return`
    <li class="buy-links-item">
    <a target="_blank" rel="noopener noreferrer" aria-label="${e}" href=${t}>
      <img src="./img/${e.split(" ")[0].toLowerCase()}-1x.png"  srcset="./img/${e.split(" ")[0].toLowerCase()}-2x.png 2x" alt="${e}" class="platform-image">
</a>
</li>
`}const S=document.querySelector("body"),m=document.querySelector(".backdrop");m.addEventListener("click",D);const x=[];let l=!0;async function A(e){const t=await p(e);H(t),document.addEventListener("keydown",E)}function H(e){localStorage.setItem("currentBook",JSON.stringify(e)),x.push(e),m.style.display="flex",S.style.overflow="hidden",m.innerHTML="",m.insertAdjacentHTML("afterbegin",q(l,e)),console.log(_(e._id,"cart"))}function _(e,t){let s=JSON.parse(localStorage.getItem(t));s===null&&(s=[],localStorage.setItem(t,JSON.stringify(s))),s.find(o=>o._id===e)&&(document.querySelector(".modal-list-button").textContent="remove from the shopping list",l=!1,console.log("same adres"))}function j(e){let t=JSON.parse(localStorage.getItem(e));localStorage.setItem(e,JSON.stringify(x,...t))}function J(e,t){const o=JSON.parse(localStorage.getItem(t)).filter(n=>n._id!==e);localStorage.setItem(t,JSON.stringify(o))}function D(e){e.target.id==="modal-list-button-id"&&(l&&(j("cart"),e.target.textContent="add to shopping list",l=!1),l||(J(e.target.dataset.id,"cart"),l=!0,e.target.textContent="remove from the shopping list")),e.target.tagName==="svg"&&g(),e.target.id==="mBackdrop"&&g(),e.target.nodeName}function E(e){e.key==="Escape"&&(g(),document.removeEventListener("keydown",E))}function g(){m.style.display="none",S.style.overflow="auto"}console.log("category-card");r.mainContainer.addEventListener("click",U);const C=async e=>{r.mainContainer.innerHTML="";try{const t=await p("category",e),s=t[0].list_name;r.mainContainer.insertAdjacentHTML("afterbegin",z(s,t));const o=document.querySelectorAll(".sellers-item");N(o)}catch(t){console.error("Error fetching category books:",t)}};function U(e){const t=e.target.closest(".sellers-item").dataset.id;A(t)}function z(e,t){const s=e.split(" "),o=s.pop();return s.push(`<span class="accent">${o}</span>`),`
    <section class="seller-section">
      <h1 class="section-title category-card-title">${s.join(" ")}</h1>
      <ul class="sellers-category-list sellers-exclude flex-wrap">${y(P,t)}</ul>
    </section>
  `}function P({book_image:e,title:t,author:s,_id:o}){return`
    <li class="sellers-item" data-id="${o}">
      <div class="book-image-wrapper">
        <img class="book-image"
        src="${e}"
        alt="${t}"
        >
      </div>
      <h3 class="book-title">${t}</h3>
      <p class="book-author">${s}</p>
    </li>
  `}function F(e="show"){const t=document.querySelector(".loader");e==="show"?t.style.display="inline-block":t.style.display="none"}const $=async()=>{r.mainContainer.innerHTML=`
    <section class="seller-section">
      <h1 class="section-title">
        Best Sellers <span class="accent">Books</span>
      </h1>
    </section>`;const e=document.createElement("ul");e.classList.add("sellers-list"),e.innerHTML='<span class="loader"></span>',r.mainContainer.querySelector(".seller-section").appendChild(e),r.mainContainer.querySelector(".loader"),F();try{const s=await p("top-books"),o=G(s,4);R(e,o);const n=document.querySelectorAll(".sellers-item");n.forEach(a=>{a.classList.add("animation-items")});const c=setTimeout(()=>{n.forEach(a=>{a.classList.remove("animation-items")})},500);e.addEventListener("click",W)}catch(s){console.error(s)}};function R(e,t){const s=V(t);e.innerHTML="",e.appendChild(s)}$();async function W(e){if(e.preventDefault(),e.target.nodeName!=="BUTTON")return;const t=e.target,{name:s}=t.dataset;await C({category:s})}function G(e,t){const s=[];for(;s.length<t;){const o=Math.floor(Math.random()*e.length);s.includes(o)||s.push(o)}return s.map(o=>e[o])}function V(e){const t=document.createDocumentFragment();return e.forEach(({list_name:s,books:o})=>{const n=document.createElement("li");n.className="sellers-category",n.innerHTML=`
      <h2 class="sellers-category-title">${s}</h2>
      <ul class="sellers-category-list">
        ${Z(o)}
      </ul>
      <button class="sellers-button" type="button" data-name="${s}">See more</button>
    `,t.appendChild(n)}),t}function Z(e){let t="";const s=K(),o=s==="desktop"?5:s==="tablet"?3:1;for(let n=0;n<o&&n<e.length;n++){const{book_image:c,title:a,author:i,_id:d}=e[n];t+=`
      <li class="sellers-item" data-id="${d}">
        <div class="book-image-wrapper">
          <img class="book-image"
          src="${c}"
          alt="${a}"
          >
        </div>
        <h3 class="book-title">${a}</h3>
        <p class="book-author">${i}</p>
      </li>
    `}return t}function K(){const e=window.innerWidth;return e<768?"mobile":e<1440?"tablet":"desktop"}r.categoryListElem.addEventListener("click",Q);function Q(e){if(e.target.nodeName!=="BUTTON"||e.target.classList.contains("active"))return;r.categoryListElem.querySelector(".active").classList.remove("active");const t=e.target;t.classList.add("active"),t.textContent==="ALL CATEGORIES"?$():C({category:t.textContent})}function X({list_name:e,classButton:t=""}){return`<li class="category-list">
      <button class="category-button ${t}" type="button">${e}</button>
    </li>`}const Y=async()=>{const e=await p("category-list");e.unshift({list_name:"ALL CATEGORIES",classButton:"active"}),r.categoryListElem.insertAdjacentHTML("beforeend",y(X,e))};Y();const ee=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"stc",srcset:"stc@2x.png 2x"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"hope",srcset:"hope@2x.png 2x"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"u24",srcset:"u24@2x.png 2x"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"imc",srcset:"imc@2x.png 2x"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"msf",srcset:"msf@2x.png 2x"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"razom",srcset:"razom@2x.png 2x"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"aah",srcset:"aah@2x.png 2x"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"wv",srcset:"wv@2x.png 2x"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"prytula",srcset:"prytula@2x.png 2x"}];te(ee);function te(e){const t=e.map(se);r.supportList.append(...t)}function se(e,t){const{title:s,url:o,img:n,srcset:c}=e,a=document.createElement("li");a.classList.add("swiper-slide");const i=document.createElement("a");i.classList.add("support-link"),i.target="_blank",i.rel="noopener noreferrer",i.ariaLabel=s,i.href=o;const d=document.createElement("span");d.classList.add("support-count"),d.textContent=`0${t+1}`;const u=document.createElement("img");return u.classList.add("support-img"),u.src=`./support/${n}.png`,u.srcset=`./support/${c}`,u.alt=s,i.append(d,u),a.append(i),a}const f=document.querySelector(".next-btn"),b=document.querySelector(".prev-btn");new B(".support-swiper",{direction:"vertical",slidesPerView:6,slidesPerGroup:6,allowTouchMove:!0,spaceBetween:"20px",modules:[I],navigation:{nextEl:".next-btn",prevEl:".prev-btn",disabledClass:"none"},on:{slideChange:function(){this.activeIndex===0?(b.classList.add("swiper-button-hidden"),f.classList.remove("swiper-button-hidden")):(b.classList.remove("swiper-button-hidden"),f.classList.add("swiper-button-hidden"))}}});const h=document.querySelector(".checkbox-input"),k=document.body;h.addEventListener("change",function(){h.checked?(k.classList.add("dark-theme"),localStorage.setItem("theme","dark-theme")):(k.classList.remove("dark-theme"),localStorage.setItem("theme",""))});const w=document.getElementById("checkbox"),L=document.querySelector(".owl-icon"),v=document.querySelector(".owl-light-icon");w.addEventListener("change",function(){w.checked?(L.style.display="block",v.style.display="none"):(L.style.display="none",v.style.display="block")});window.onload=oe;function oe(){let e=localStorage.getItem("theme");e==="dark-theme"&&(document.body.classList.add(e),h.checked=!0);const t=document.querySelector(".header-nav").getElementsByTagName("a");for(let s=0;s<t.length;s++)document.location.href.indexOf(t[s].href)>=0&&(t[s].classList.add("active"),console.log(document.location.href))}const ne=document.querySelector(".header-burger"),ae=document.querySelector(".mobile-menu-container");ne.addEventListener("click",function(){ae.classList.toggle("open-menu")});
//# sourceMappingURL=commonHelpers.js.map
