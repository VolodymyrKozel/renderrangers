import{r as a,a as v}from"./assets/renderMarkup-c61de964.js";import{a as x,S,N as E}from"./assets/vendor-dcaf4cbb.js";const C="https://books-backend.p.goit.global/books/";async function g(e,t){try{return(await x.get(C+e,{params:t})).data}catch(o){console.error(o)}}console.log("category-card");const T=async e=>{a.categoryCardElem.innerHTML="",a.topSellerSection.innerHTML="";try{const t=await g("category",e),o=a.categoryCardElem.querySelector(".category-card-title");o&&o.remove();const s=t[0].list_name;document.querySelectorAll(".category-card-title").forEach(n=>{n.remove()}),a.categoryCardElem.insertAdjacentHTML("afterbegin",B(s)),v(I,a.categoryCardElem,t)}catch(t){console.error("Error fetching category books:",t)}};function B(e){return`
      <h2 class="category-card-title">${e}</h2>
    `}function I({book_image:e,title:t,author:o,_id:s}){return`
      <li class="card-book-item" data-id="${s}">
        <img class="card-book-image"
        src="${e}"
        alt="${t}"
        >
        <h3 class="card-book-title">${t}</h3>
        <p class="card-book-author">${o}</p>
      </li>
    `}function M(e="show"){const t=document.querySelector(".loader");e==="show"?t.style.display="inline-block":t.style.display="none"}const w=document.querySelector(".seller-section"),d=document.createElement("ul");d.classList.add("sellers-list");d.innerHTML='<span class="loader"></span>';w.innerHTML=`
  <h1 class="section-title">
    Best Sellers <span class="accent">Books</span>
  </h1>`;w.appendChild(d);const L=async()=>{M();try{const e=await g("top-books"),t=$(e,4);q(t);const o=document.querySelectorAll(".sellers-item");o.forEach(n=>{n.classList.add("animation-items")});const s=setTimeout(()=>{o.forEach(n=>{n.classList.remove("animation-items")})},500)}catch(e){console.error(e)}};L();function $(e,t){const o=[];for(;o.length<t;){const s=Math.floor(Math.random()*e.length);o.includes(s)||o.push(s)}return o.map(s=>e[s])}function q(e){const t=A(e);d.innerHTML="",d.appendChild(t)}function A(e){const t=document.createDocumentFragment();return e.forEach(({list_name:o,books:s})=>{const n=document.createElement("li");n.className="sellers-category",n.innerHTML=`
      <h2 class="sellers-category-title">${o}</h2>
      <ul class="sellers-category-list">
        ${H(s)}
      </ul>
      <button class="sellers-button" type="button">See more</button>
    `,t.appendChild(n)}),t}function H(e){let t="";const o=N(),s=o==="desktop"?5:o==="tablet"?3:1;for(let n=0;n<s&&n<e.length;n++){const{book_image:u,title:c,author:r,_id:i}=e[n];t+=`
      <li class="sellers-item" data-id="${i}">
        <div class="book-image-wrapper">
          <img class="book-image"
          src="${u}"
          alt="${c}"
          >
        </div>
        <h3 class="book-title">${c}</h3>
        <p class="book-author">${r}</p>
      </li>
    `}return t}function N(){const e=window.innerWidth;return e<768?"mobile":e<1200?"tablet":"desktop"}a.categoryListElem.addEventListener("click",O);function O(e){if(e.target.nodeName!=="BUTTON"||e.target.classList.contains("active"))return;a.categoryListElem.querySelector(".active").classList.remove("active");const t=e.target;t.classList.add("active"),t.textContent==="ALL CATEGORIES"?L():T({category:t.textContent})}function j({list_name:e,classButton:t=""}){return`<li class="category-list">
      <button class="category-button ${t}" type="button">${e}</button>
    </li>`}function z(e){return e.map(j).join("")}function D(e){const t=z(e);a.categoryListElem.insertAdjacentHTML("beforeend",t)}const P=async()=>{const e=await g("category-list");e.unshift({list_name:"ALL CATEGORIES",classButton:"active"}),D(e)};P();const _=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"stc",srcset:"stc@2x.png 2x"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"hope",srcset:"hope@2x.png 2x"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"u24",srcset:"u24@2x.png 2x"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"imc",srcset:"imc@2x.png 2x"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"msf",srcset:"msf@2x.png 2x"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"razom",srcset:"razom@2x.png 2x"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"aah",srcset:"aah@2x.png 2x"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"wv",srcset:"wv@2x.png 2x"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"prytula",srcset:"prytula@2x.png 2x"}];R(_);function R(e){const t=e.map(U);a.supportList.append(...t)}function U(e,t){const{title:o,url:s,img:n,srcset:u}=e,c=document.createElement("li");c.classList.add("swiper-slide");const r=document.createElement("a");r.classList.add("support-link"),r.target="_blank",r.rel="noopener noreferrer",r.ariaLabel=o,r.href=s;const i=document.createElement("span");i.classList.add("support-count"),i.textContent=`0${t+1}`;const l=document.createElement("img");return l.classList.add("support-img"),l.src=`./img/support/${n}.png`,l.srcset=`./img/support/${u}`,l.alt=o,r.append(i,l),c.append(r),c}const h=document.querySelector(".next-btn"),y=document.querySelector(".prev-btn");new S(".support-swiper",{direction:"vertical",slidesPerView:6,slidesPerGroup:6,allowTouchMove:!0,spaceBetween:"20px",modules:[E],navigation:{nextEl:".next-btn",prevEl:".prev-btn",disabledClass:"none"},on:{slideChange:function(){this.activeIndex===0?(y.classList.add("swiper-button-hidden"),h.classList.remove("swiper-button-hidden")):(y.classList.remove("swiper-button-hidden"),h.classList.add("swiper-button-hidden"))}}});console.log("pop up");const m=document.querySelector(".checkbox-input"),p=document.body;m.addEventListener("change",function(){m.checked?(p.classList.add("dark-theme"),localStorage.setItem("theme","dark-theme")):(p.classList.remove("dark-theme"),localStorage.setItem("theme",""))});const f=document.getElementById("checkbox"),b=document.querySelector(".owl-icon"),k=document.querySelector(".owl-light-icon");f.addEventListener("change",function(){f.checked?(b.style.display="block",k.style.display="none"):(b.style.display="none",k.style.display="block")});window.onload=F;function F(){let e=localStorage.getItem("theme");e==="dark-theme"&&(p.classList.add(e),m.checked=!0);const t=document.querySelector(".header-nav").getElementsByTagName("a");for(let o=0;o<t.length;o++)document.location.href.indexOf(t[o].href)>=0&&(t[o].classList.add("active"),console.log(document.location.href))}const G=document.querySelector(".burger-menu-btn"),W=document.querySelector(".mobile-menu-container");G.addEventListener("click",function(){W.classList.add("open-menu")});
//# sourceMappingURL=commonHelpers.js.map
