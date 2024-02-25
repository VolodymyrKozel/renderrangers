import{r as a,a as b}from"./assets/renderMarkup-5f260c33.js";import{a as w,S as L,N as v}from"./assets/vendor-dcaf4cbb.js";const x="https://books-backend.p.goit.global/books/";async function g(e,t){try{return(await w.get(x+e,{params:t})).data}catch(o){console.error(o)}}console.log("category-card");const E=async e=>{a.categoryCardElem.innerHTML="",a.topSellerSection.innerHTML="";try{const t=await g("category",e),o=a.categoryCardElem.querySelector(".category-card-title");o&&o.remove();const r=t[0].list_name;document.querySelectorAll(".category-card-title").forEach(s=>{s.remove()}),a.categoryCardElem.insertAdjacentHTML("beforebegin",S(r)),b(C,a.categoryCardElem,t)}catch(t){console.error("Error fetching category books:",t)}};function S(e){return`
      <h2 class="category-card-title">${e}</h2>
    `}function C({book_image:e,title:t,author:o,_id:r}){return`
      <li class="card-book-item" data-id="${r}">
        <img class="card-book-image"
        src="${e}"
        alt="${t}"
        width="335"
        height="485">
        <h3 class="card-book-title">${t}</h3>
        <p class="card-book-author">${o}</p>
      </li>
    `}function T(e="show"){const t=document.querySelector(".loader");e==="show"?t.style.display="inline-block":t.style.display="none"}const f=document.querySelector(".seller-section"),d=document.createElement("ul");d.classList.add("sellers-list");d.innerHTML='<span class="loader"></span>';f.innerHTML=`
  <h1 class="section-title">
    Best Sellers <span class="accent">Books</span>
  </h1>`;f.appendChild(d);const k=async()=>{T();try{const e=await g("top-books"),t=$(e,4);B(t);const o=document.querySelectorAll(".sellers-item");o.forEach(s=>{s.classList.add("animation-items")});const r=setTimeout(()=>{o.forEach(s=>{s.classList.remove("animation-items")})},500)}catch(e){console.error(e)}};k();function $(e,t){const o=[];for(;o.length<t;){const r=Math.floor(Math.random()*e.length);o.includes(r)||o.push(r)}return o.map(r=>e[r])}function B(e){const t=M(e);d.innerHTML="",d.appendChild(t)}function M(e){const t=document.createDocumentFragment();return e.forEach(({list_name:o,books:r})=>{const s=document.createElement("li");s.className="sellers-category",s.innerHTML=`
      <h2 class="sellers-category-title">${o}</h2>
      <ul class="sellers-category-list">
        ${I(r)}
      </ul>
      <button class="sellers-button" type="button">See more</button>
    `,t.appendChild(s)}),t}function I(e){let t="";const o=A(),r=o==="desktop"?5:o==="tablet"?3:1;for(let s=0;s<r&&s<e.length;s++){const{book_image:u,title:c,author:n,_id:i}=e[s];t+=`
      <li class="sellers-item" data-id="${i}">
        <div class="book-image-wrapper">
          <img class="book-image"
          src="${u}"
          alt="${c}"
          >
        </div>
        <h3 class="book-title">${c}</h3>
        <p class="book-author">${n}</p>
      </li>
    `}return t}function A(){const e=window.innerWidth;return e<768?"mobile":e<1200?"tablet":"desktop"}a.categoryListElem.addEventListener("click",q);function q(e){if(e.target.nodeName!=="BUTTON"||e.target.classList.contains("active"))return;a.categoryListElem.querySelector(".active").classList.remove("active");const t=e.target;t.classList.add("active"),t.textContent==="ALL CATEGORIES"?k():E({category:t.textContent})}function H({list_name:e,classButton:t=""}){return`<li class="category-list">
      <button class="category-button ${t}" type="button">${e}</button>
    </li>`}function N(e){return e.map(H).join("")}function O(e){const t=N(e);a.categoryListElem.insertAdjacentHTML("beforeend",t)}const j=async()=>{const e=await g("category-list");e.unshift({list_name:"ALL CATEGORIES",classButton:"active"}),O(e)};j();const z=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"stc",srcset:"stc@2x.png 2x"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"hope",srcset:"hope@2x.png 2x"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"u24",srcset:"u24@2x.png 2x"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"imc",srcset:"imc@2x.png 2x"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"msf",srcset:"msf@2x.png 2x"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"razom",srcset:"razom@2x.png 2x"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"aah",srcset:"aah@2x.png 2x"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"wv",srcset:"wv@2x.png 2x"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"prytula",srcset:"prytula@2x.png 2x"}];D(z);function D(e){const t=e.map(P);a.supportList.append(...t)}function P(e,t){const{title:o,url:r,img:s,srcset:u}=e,c=document.createElement("li");c.classList.add("swiper-slide");const n=document.createElement("a");n.classList.add("support-link"),n.target="_blank",n.rel="noopener noreferrer",n.ariaLabel=o,n.href=r;const i=document.createElement("span");i.classList.add("support-count"),i.textContent=`0${t+1}`;const l=document.createElement("img");return l.classList.add("support-img"),l.src=`./img/support/${s}.png`,l.srcset=`./img/support/${u}`,l.alt=o,n.append(i,l),c.append(n),c}const h=document.querySelector(".next-btn"),y=document.querySelector(".prev-btn");new L(".support-swiper",{direction:"vertical",slidesPerView:6,slidesPerGroup:6,allowTouchMove:!0,spaceBetween:"20px",modules:[v],navigation:{nextEl:".next-btn",prevEl:".prev-btn",disabledClass:"none"},on:{slideChange:function(){this.activeIndex===0?(y.classList.add("swiper-button-hidden"),h.classList.remove("swiper-button-hidden")):(y.classList.remove("swiper-button-hidden"),h.classList.add("swiper-button-hidden"))}}});console.log("pop up");const m=document.querySelector(".checkbox-input"),p=document.body;m.addEventListener("change",function(){m.checked?(p.classList.add("dark-theme"),localStorage.setItem("theme","dark-theme")):(p.classList.remove("dark-theme"),localStorage.setItem("theme",""))});window.onload=_;function _(){let e=localStorage.getItem("theme");e==="dark-theme"&&(p.classList.add(e),m.checked=!0);const t=document.querySelector(".header-nav").getElementsByTagName("a");for(let o=0;o<t.length;o++)document.location.href.indexOf(t[o].href)>=0&&(t[o].classList.add("active"),console.log(document.location.href))}
//# sourceMappingURL=commonHelpers.js.map
