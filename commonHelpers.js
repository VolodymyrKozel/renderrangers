import{r as h,a}from"./assets/renderMarkup-f50bf5a7.js";import{a as C,S as T,N as B}from"./assets/vendor-dcaf4cbb.js";const M="https://books-backend.p.goit.global/books/";async function m(e,t){try{return(await C.get(M+e,{params:t})).data}catch(s){console.error(s)}}function I(e){e.forEach(t=>{t.classList.add("animation-items")}),setTimeout(()=>{e.forEach(t=>{t.classList.remove("animation-items")})},500)}function N({_id:e,book_image:t,title:s,author:n,description:o,buy_links:i}){return`
  <section class="modalmenu">
      <button type="button" id="modal-close-id" class="close-button modal-close-button" width="28" height="28">
      <svg class="close-icon" width="24" height="24">
        <use src="./img/icons/icons.svg#icon-x-close"></use>
      </svg>
    </button>
  <div class="modal-container">
  <img src="${t}" class="modal-image">
    <div class="modal-wrap">
      <h2 class="modal-title">${s}</h2>
      <p class="modal-author">${n}</p>
      <p class="description">${o}</p>
        <ul class="buy-links-list">
      ${h(q,i.slice(0,2))}
        </ul>       
    </div>
  </div>
   <button class="modal-list-button" type="button" id="modal-list-button-id" data-role="add" data-id="${e}">
      Add this book to shopping list
    </button>
    </section>
`}function q({name:e,url:t}){return`
    <li class="buy-links-item">
    <a target="_blank" rel="noopener noreferrer" aria-label="${e}" href=${t}>
      <img src="./img/${e.split(" ")[0].toLowerCase()}-1x.png"  srcset="./img/${e.split(" ")[0].toLowerCase()}-2x.png 2x" alt="${e}" class="platform-image">
</a>
</li>
`}const v=document.querySelector("body"),u=document.querySelector(".backdrop");u.addEventListener("click",U);async function O(e){const t=await m(e);A(t),document.addEventListener("keydown",x)}function A(e){u.style.display="flex",v.style.overflow="hidden",u.innerHTML="",u.insertAdjacentHTML("afterbegin",N(e)),H(e._id,"cart")}function H(e,t){let s=JSON.parse(localStorage.getItem(t));s!=null&&s.find(n=>n.id==e)&&console.log("show delete button")}function j(e,t){let s=JSON.parse(localStorage.getItem(t));s==null&&(s=[]),s.push(e),localStorage.setItem(t,JSON.stringify(s))}function D(e,t){const n=JSON.parse(localStorage.getItem(t)).filter(o=>o.id!==e);localStorage.setItem(t,JSON.stringify(n))}function U(e){e.target.id==="modal-list-button-id"&&(e.target.dataset.role==="add"?(console.log(data),j(e.target.dataset.id,"cart")):D(e.target.dataset.id,"cart")),e.target.tagName==="svg"&&p(),e.target.id==="mBackdrop"&&p(),e.target.nodeName}function x(e){e.key==="Escape"&&(p(),document.removeEventListener("keydown",x))}function p(){u.style.display="none",v.style.overflow="auto"}console.log("category-card");a.mainContainer.addEventListener("click",_);const E=async e=>{a.mainContainer.innerHTML="";try{const t=await m("category",e),s=t[0].list_name;a.mainContainer.insertAdjacentHTML("afterbegin",z(s,t));const n=document.querySelectorAll(".sellers-item");I(n)}catch(t){console.error("Error fetching category books:",t)}};function _(e){const t=e.target.closest(".sellers-item").dataset.id;O(t)}function z(e,t){const s=e.split(" "),n=s.pop();return s.push(`<span class="accent">${n}</span>`),`
    <section class="seller-section">
      <h1 class="section-title category-card-title">${s.join(" ")}</h1>
      <ul class="sellers-category-list sellers-exclude flex-wrap">${h(J,t)}</ul>
    </section>
  `}function J({book_image:e,title:t,author:s,_id:n}){return`
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
  `}function P(e="show"){const t=document.querySelector(".loader");e==="show"?t.style.display="inline-block":t.style.display="none"}const S=async()=>{a.mainContainer.innerHTML=`
    <section class="seller-section">
      <h1 class="section-title">
        Best Sellers <span class="accent">Books</span>
      </h1>
    </section>`;const e=document.createElement("ul");e.classList.add("sellers-list"),e.innerHTML='<span class="loader"></span>',a.mainContainer.appendChild(e),a.mainContainer.querySelector(".loader"),P();try{const t=await m("top-books"),s=W(t,4);F(e,s);const n=document.querySelectorAll(".sellers-item");n.forEach(i=>{i.classList.add("animation-items")});const o=setTimeout(()=>{n.forEach(i=>{i.classList.remove("animation-items")})},500);e.addEventListener("click",R)}catch(t){console.error(t)}};function F(e,t){const s=G(t);e.innerHTML="",e.appendChild(s)}S();async function R(e){if(e.preventDefault(),e.target.nodeName!=="BUTTON")return;const t=e.target,{name:s}=t.dataset;await E({category:s})}function W(e,t){const s=[];for(;s.length<t;){const n=Math.floor(Math.random()*e.length);s.includes(n)||s.push(n)}return s.map(n=>e[n])}function G(e){const t=document.createDocumentFragment();return e.forEach(({list_name:s,books:n})=>{const o=document.createElement("li");o.className="sellers-category",o.innerHTML=`
      <h2 class="sellers-category-title">${s}</h2>
      <ul class="sellers-category-list">
        ${V(n)}
      </ul>
      <button class="sellers-button" type="button" data-name="${s}">See more</button>
    `,t.appendChild(o)}),t}function V(e){let t="";const s=Z(),n=s==="desktop"?5:s==="tablet"?3:1;for(let o=0;o<n&&o<e.length;o++){const{book_image:i,title:c,author:r,_id:l}=e[o];t+=`
      <li class="sellers-item" data-id="${l}">
        <div class="book-image-wrapper">
          <img class="book-image"
          src="${i}"
          alt="${c}"
          >
        </div>
        <h3 class="book-title">${c}</h3>
        <p class="book-author">${r}</p>
      </li>
    `}return t}function Z(){const e=window.innerWidth;return e<768?"mobile":e<1440?"tablet":"desktop"}a.categoryListElem.addEventListener("click",K);function K(e){if(e.target.nodeName!=="BUTTON"||e.target.classList.contains("active"))return;a.categoryListElem.querySelector(".active").classList.remove("active");const t=e.target;t.classList.add("active"),t.textContent==="ALL CATEGORIES"?S():E({category:t.textContent})}function Q({list_name:e,classButton:t=""}){return`<li class="category-list">
      <button class="category-button ${t}" type="button">${e}</button>
    </li>`}const X=async()=>{const e=await m("category-list");e.unshift({list_name:"ALL CATEGORIES",classButton:"active"}),a.categoryListElem.insertAdjacentHTML("beforeend",h(Q,e))};X();const Y=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"stc",srcset:"stc@2x.png 2x"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"hope",srcset:"hope@2x.png 2x"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"u24",srcset:"u24@2x.png 2x"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"imc",srcset:"imc@2x.png 2x"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"msf",srcset:"msf@2x.png 2x"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"razom",srcset:"razom@2x.png 2x"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"aah",srcset:"aah@2x.png 2x"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"wv",srcset:"wv@2x.png 2x"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"prytula",srcset:"prytula@2x.png 2x"}];ee(Y);function ee(e){const t=e.map(te);a.supportList.append(...t)}function te(e,t){const{title:s,url:n,img:o,srcset:i}=e,c=document.createElement("li");c.classList.add("swiper-slide");const r=document.createElement("a");r.classList.add("support-link"),r.target="_blank",r.rel="noopener noreferrer",r.ariaLabel=s,r.href=n;const l=document.createElement("span");l.classList.add("support-count"),l.textContent=`0${t+1}`;const d=document.createElement("img");return d.classList.add("support-img"),d.src=`./img/support/${o}.png`,d.srcset=`./img/support/${i}`,d.alt=s,r.append(l,d),c.append(r),c}const y=document.querySelector(".next-btn"),f=document.querySelector(".prev-btn");new T(".support-swiper",{direction:"vertical",slidesPerView:6,slidesPerGroup:6,allowTouchMove:!0,spaceBetween:"20px",modules:[B],navigation:{nextEl:".next-btn",prevEl:".prev-btn",disabledClass:"none"},on:{slideChange:function(){this.activeIndex===0?(f.classList.add("swiper-button-hidden"),y.classList.remove("swiper-button-hidden")):(f.classList.remove("swiper-button-hidden"),y.classList.add("swiper-button-hidden"))}}});const g=document.querySelector(".checkbox-input"),b=document.body;g.addEventListener("change",function(){g.checked?(b.classList.add("dark-theme"),localStorage.setItem("theme","dark-theme")):(b.classList.remove("dark-theme"),localStorage.setItem("theme",""))});const k=document.getElementById("checkbox"),w=document.querySelector(".owl-icon"),L=document.querySelector(".owl-light-icon");k.addEventListener("change",function(){k.checked?(w.style.display="block",L.style.display="none"):(w.style.display="none",L.style.display="block")});window.onload=se;function se(){let e=localStorage.getItem("theme");e==="dark-theme"&&(document.body.classList.add(e),g.checked=!0);const t=document.querySelector(".header-nav").getElementsByTagName("a");for(let s=0;s<t.length;s++)document.location.href.indexOf(t[s].href)>=0&&(t[s].classList.add("active"),console.log(document.location.href))}const ne=document.querySelector(".burger-menu-btn"),$=document.querySelector(".mobile-menu-container"),oe=document.querySelector(".mob-menu-close-btn");ne.addEventListener("click",()=>{$.classList.add("open-menu")});oe.addEventListener("click",()=>{$.classList.remove("open-menu")});
//# sourceMappingURL=commonHelpers.js.map
