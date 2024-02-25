import{r as a,a as b}from"./assets/renderMarkup-01ae4972.js";import{a as k,S as w,N as L}from"./assets/vendor-dcaf4cbb.js";const x="https://books-backend.p.goit.global/books/";async function g(e,t){try{return(await k.get(x+e,{params:t})).data}catch(o){console.error(o)}}console.log("category-card");const v=async e=>{a.categoryCardElem.innerHTML="",a.topSellerSection.innerHTML="";try{const t=await g("category",e),o=a.categoryCardElem.querySelector(".category-card-title");o&&o.remove();const r=t[0].list_name;document.querySelectorAll(".category-card-title").forEach(s=>{s.remove()}),a.categoryCardElem.insertAdjacentHTML("beforebegin",E(r)),b(S,a.categoryCardElem,t)}catch(t){console.error("Error fetching category books:",t)}};function E(e){return`
      <h2 class="category-card-title">${e}</h2>
    `}function S({book_image:e,title:t,author:o,_id:r}){return`
      <li class="card-book-item" data-id="${r}">
        <img class="card-book-image"
        src="${e}"
        alt="${t}"
        width="335"
        height="485">
        <h3 class="card-book-title">${t}</h3>
        <p class="card-book-author">${o}</p>
      </li>
    `}const p=document.getElementById("books-list"),f=async()=>{try{const e=await g("top-books"),t=C(e,4);T(t)}catch(e){console.error(e)}finally{}};f();function C(e,t){const o=[];for(;o.length<t;){const r=Math.floor(Math.random()*e.length);o.includes(r)||o.push(r)}return o.map(r=>e[r])}function T(e){const t=$(e);p.innerHTML="",p.appendChild(t)}function $(e){const t=document.createDocumentFragment();return e.forEach(({list_name:o,books:r})=>{const s=document.createElement("li");s.className="sellers-category",s.innerHTML=`
      <h2 class="sellers-category-title">${o}</h2>
      <ul class="sellers-category-list">
        ${I(r)}
      </ul>
      <button class="sellers-button" type="button">see more</button>
    `,t.appendChild(s)}),t}function I(e){let t="";const o=B(),r=o==="desktop"?5:o==="tablet"?3:1;for(let s=0;s<r&&s<e.length;s++){const{book_image:d,title:c,author:n,_id:i}=e[s];t+=`
      <li class="sellers-item" data-id="${i}">
        <div class="book-image-wrapper">
          <img class="book-image"
          src="${d}"
          alt="${c}"
          >
        </div>
        <h3 class="book-title">${c}</h3>
        <p class="book-author">${n}</p>
      </li>
    `}return t}function B(){const e=window.innerWidth;return e<768?"mobile":e<1200?"tablet":"desktop"}a.categoryListElem.addEventListener("click",M);function M(e){if(e.target.nodeName!=="BUTTON"||e.target.classList.contains("active"))return;a.categoryListElem.querySelector(".active").classList.remove("active");const t=e.target;t.classList.add("active"),t.textContent==="ALL CATEGORIES"?f():v({category:t.textContent})}function A({list_name:e,classButton:t=""}){return`<li class="category-list">
      <button class="category-button ${t}" type="button">${e}</button>
    </li>`}function N(e){return e.map(A).join("")}function q(e){const t=N(e);a.categoryListElem.insertAdjacentHTML("beforeend",t)}const H=async()=>{const e=await g("category-list");e.unshift({list_name:"ALL CATEGORIES",classButton:"active"}),q(e)};H();const O=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"stc",srcset:"stc@2x.png 2x"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"hope",srcset:"hope@2x.png 2x"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"u24",srcset:"u24@2x.png 2x"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"imc",srcset:"imc@2x.png 2x"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"msf",srcset:"msf@2x.png 2x"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"razom",srcset:"razom@2x.png 2x"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"aah",srcset:"aah@2x.png 2x"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"wv",srcset:"wv@2x.png 2x"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"prytula",srcset:"prytula@2x.png 2x"}];j(O);function j(e){const t=e.map(z);a.supportList.append(...t)}function z(e,t){const{title:o,url:r,img:s,srcset:d}=e,c=document.createElement("li");c.classList.add("swiper-slide");const n=document.createElement("a");n.classList.add("support-link"),n.target="_blank",n.rel="noopener noreferrer",n.ariaLabel=o,n.href=r;const i=document.createElement("span");i.classList.add("support-count"),i.textContent=`0${t+1}`;const l=document.createElement("img");return l.classList.add("support-img"),l.src=`./img/support/${s}.png`,l.srcset=`./img/support/${d}`,l.alt=o,n.append(i,l),c.append(n),c}const h=document.querySelector(".next-btn"),y=document.querySelector(".prev-btn");new w(".support-swiper",{direction:"vertical",slidesPerView:6,slidesPerGroup:6,allowTouchMove:!0,spaceBetween:"20px",modules:[L],navigation:{nextEl:".next-btn",prevEl:".prev-btn",disabledClass:"none"},on:{slideChange:function(){this.activeIndex===0?(y.classList.add("swiper-button-hidden"),h.classList.remove("swiper-button-hidden")):(y.classList.remove("swiper-button-hidden"),h.classList.add("swiper-button-hidden"))}}});console.log("pop up");const u=document.querySelector(".checkbox-input"),m=document.body;u.addEventListener("change",function(){u.checked?(m.classList.add("dark-theme"),localStorage.setItem("theme","dark-theme")):(m.classList.remove("dark-theme"),localStorage.setItem("theme",""))});window.onload=D;function D(){let e=localStorage.getItem("theme");e==="dark-theme"&&(m.classList.add(e),u.checked=!0);const t=document.querySelector(".header-nav").getElementsByTagName("a");for(let o=0;o<t.length;o++)document.location.href.indexOf(t[o].href)>=0&&(t[o].classList.add("active"),console.log(document.location.href))}
//# sourceMappingURL=commonHelpers.js.map
