import{r as y,a}from"./assets/renderMarkup-d1b0c9bc.js";import{a as T,S as B,N as I}from"./assets/vendor-dcaf4cbb.js";const M="https://books-backend.p.goit.global/books/";async function p(e,t){try{return(await T.get(M+e,{params:t})).data}catch(o){console.error(o)}}function N(e){e.forEach(t=>{t.classList.add("animation-items")}),setTimeout(()=>{e.forEach(t=>{t.classList.remove("animation-items")})},500)}function q({_id:e,book_image:t,title:o,author:s,description:n,buy_links:c}){return`
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
      ${y(O,c.slice(0,2))}
        </ul>       
    </div>
  </div>
   <button class="modal-list-button" type="button" id="modal-list-button-id" data-role="add" data-id="${e}">
      add to shopping list'
    </button>
    </section>
`}function O({name:e,url:t}){return`
    <li class="buy-links-item">
    <a target="_blank" rel="noopener noreferrer" aria-label="${e}" href=${t}>
      <img src="./img/${e.split(" ")[0].toLowerCase()}-1x.png"  srcset="./img/${e.split(" ")[0].toLowerCase()}-2x.png 2x" alt="${e}" class="platform-image">
</a>
</li>
`}const S=document.querySelector("body"),m=document.querySelector(".backdrop");m.addEventListener("click",D);const x=[];let u=!0;async function A(e){const t=await p(e);H(t),document.addEventListener("keydown",E)}function H(e){localStorage.setItem("currentBook",JSON.stringify(e)),x.push(e),m.style.display="flex",S.style.overflow="hidden",m.innerHTML="",m.insertAdjacentHTML("afterbegin",q(e)),console.log(j(e._id,"cart"))}function j(e,t){let o=JSON.parse(localStorage.getItem(t));o===null&&(o=[],localStorage.setItem(t,JSON.stringify(o))),o.find(s=>s._id===e)&&(document.querySelector(".modal-list-button").textContent="remove from the shopping list",u=!1,console.log("same adres"))}function _(e){let t=JSON.parse(localStorage.getItem(e));localStorage.setItem(e,JSON.stringify(x,...t))}function J(e,t){const s=JSON.parse(localStorage.getItem(t)).filter(n=>n._id!==e);localStorage.setItem(t,JSON.stringify(s))}function D(e){e.target.id==="modal-list-button-id"&&(u&&(_("cart"),e.target.textContent="add to shopping list",u=!1),u||(J(e.target.dataset.id,"cart"),u=!0,e.target.textContent="remove from the shopping list")),e.target.tagName==="svg"&&g(),e.target.id==="mBackdrop"&&g(),e.target.nodeName}function E(e){e.key==="Escape"&&(g(),document.removeEventListener("keydown",E))}function g(){m.style.display="none",S.style.overflow="auto"}console.log("category-card");a.mainContainer.addEventListener("click",U);const C=async e=>{a.mainContainer.innerHTML="";const t='<div class="loader"></div>';a.mainContainer.insertAdjacentHTML("afterbegin",t);try{const o=await p("category",e),s=document.querySelector(".loader");s&&s.remove();const n=o[0].list_name;a.mainContainer.insertAdjacentHTML("afterbegin",z(n,o));const c=document.querySelectorAll(".sellers-item");N(c)}catch(o){console.error("Помилка при отриманні книг категорій:",o)}};function U(e){const t=e.target.closest(".sellers-item").dataset.id;A(t)}function z(e,t){const o=e.split(" "),s=o.pop();return o.push(`<span class="accent">${s}</span>`),`
    <section class="seller-section">
      <h1 class="section-title category-card-title">${o.join(" ")}</h1>
      <ul class="sellers-category-list sellers-exclude flex-wrap">${y(P,t)}</ul>
    </section>
  `}function P({book_image:e,title:t,author:o,_id:s}){return`
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
  `}function F(e="show"){const t=document.querySelector(".loader");e==="show"?t.style.display="inline-block":t.style.display="none"}const $=async()=>{a.mainContainer.innerHTML=`
    <section class="seller-section">
      <h1 class="section-title">
        Best Sellers <span class="accent">Books</span>
      </h1>
    </section>`;const e=document.createElement("ul");e.classList.add("sellers-list"),e.innerHTML='<span class="loader"></span>',a.mainContainer.querySelector(".seller-section").appendChild(e),a.mainContainer.querySelector(".loader"),F();try{const o=await p("top-books"),s=G(o,4);R(e,s);const n=document.querySelectorAll(".sellers-item");n.forEach(r=>{r.classList.add("animation-items")});const c=setTimeout(()=>{n.forEach(r=>{r.classList.remove("animation-items")})},500);e.addEventListener("click",W)}catch(o){console.error(o)}};function R(e,t){const o=V(t);e.innerHTML="",e.appendChild(o)}$();async function W(e){if(e.preventDefault(),e.target.nodeName!=="BUTTON")return;const t=e.target,{name:o}=t.dataset;await C({category:o})}function G(e,t){const o=[];for(;o.length<t;){const s=Math.floor(Math.random()*e.length);o.includes(s)||o.push(s)}return o.map(s=>e[s])}function V(e){const t=document.createDocumentFragment();return e.forEach(({list_name:o,books:s})=>{const n=document.createElement("li");n.className="sellers-category",n.innerHTML=`
      <h2 class="sellers-category-title">${o}</h2>
      <ul class="sellers-category-list">
        ${Z(s)}
      </ul>
      <button class="sellers-button" type="button" data-name="${o}">See more</button>
    `,t.appendChild(n)}),t}function Z(e){let t="";const o=K(),s=o==="desktop"?5:o==="tablet"?3:1;for(let n=0;n<s&&n<e.length;n++){const{book_image:c,title:r,author:i,_id:l}=e[n];t+=`
      <li class="sellers-item" data-id="${l}">
        <div class="book-image-wrapper">
          <img class="book-image"
          src="${c}"
          alt="${r}"
          >
        </div>
        <h3 class="book-title">${r}</h3>
        <p class="book-author">${i}</p>
      </li>
    `}return t}function K(){const e=window.innerWidth;return e<768?"mobile":e<1440?"tablet":"desktop"}a.categoryListElem.addEventListener("click",Q);function Q(e){if(e.target.nodeName!=="BUTTON"||e.target.classList.contains("active"))return;a.categoryListElem.querySelector(".active").classList.remove("active");const t=e.target;t.classList.add("active"),t.textContent==="ALL CATEGORIES"?$():C({category:t.textContent})}function X({list_name:e,classButton:t=""}){return`<li class="category-list">
      <button class="category-button ${t}" type="button">${e}</button>
    </li>`}const Y=async()=>{const e=await p("category-list");e.unshift({list_name:"ALL CATEGORIES",classButton:"active"}),a.categoryListElem.insertAdjacentHTML("beforeend",y(X,e))};Y();const ee=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"stc",srcset:"stc@2x.png 2x"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"hope",srcset:"hope@2x.png 2x"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"u24",srcset:"u24@2x.png 2x"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"imc",srcset:"imc@2x.png 2x"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"msf",srcset:"msf@2x.png 2x"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"razom",srcset:"razom@2x.png 2x"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"aah",srcset:"aah@2x.png 2x"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"wv",srcset:"wv@2x.png 2x"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"prytula",srcset:"prytula@2x.png 2x"}];te(ee);function te(e){const t=e.map(oe);a.supportList.append(...t)}function oe(e,t){const{title:o,url:s,img:n,srcset:c}=e,r=document.createElement("li");r.classList.add("swiper-slide");const i=document.createElement("a");i.classList.add("support-link"),i.target="_blank",i.rel="noopener noreferrer",i.ariaLabel=o,i.href=s;const l=document.createElement("span");l.classList.add("support-count"),l.textContent=`0${t+1}`;const d=document.createElement("img");return d.classList.add("support-img"),d.src=`./support/${n}.png`,d.srcset=`./support/${c}`,d.alt=o,i.append(l,d),r.append(i),r}const f=document.querySelector(".next-btn"),b=document.querySelector(".prev-btn");new B(".support-swiper",{direction:"vertical",slidesPerView:6,slidesPerGroup:6,allowTouchMove:!0,spaceBetween:"20px",modules:[I],navigation:{nextEl:".next-btn",prevEl:".prev-btn",disabledClass:"none"},on:{slideChange:function(){this.activeIndex===0?(b.classList.add("swiper-button-hidden"),f.classList.remove("swiper-button-hidden")):(b.classList.remove("swiper-button-hidden"),f.classList.add("swiper-button-hidden"))}}});const h=document.querySelector(".checkbox-input"),k=document.body;h.addEventListener("change",function(){h.checked?(k.classList.add("dark-theme"),localStorage.setItem("theme","dark-theme")):(k.classList.remove("dark-theme"),localStorage.setItem("theme",""))});const w=document.getElementById("checkbox"),L=document.querySelector(".owl-icon"),v=document.querySelector(".owl-light-icon");w.addEventListener("change",function(){w.checked?(L.style.display="block",v.style.display="none"):(L.style.display="none",v.style.display="block")});window.onload=se;function se(){let e=localStorage.getItem("theme");e==="dark-theme"&&(document.body.classList.add(e),h.checked=!0);const t=document.querySelector(".header-nav").getElementsByTagName("a");for(let o=0;o<t.length;o++)document.location.href.indexOf(t[o].href)>=0&&(t[o].classList.add("active"),console.log(document.location.href))}const ne=document.querySelector(".header-burger"),ae=document.querySelector(".mobile-menu-container");ne.addEventListener("click",function(){ae.classList.toggle("open-menu")});
//# sourceMappingURL=commonHelpers.js.map
