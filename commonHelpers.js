import{r as a,a as v}from"./assets/renderMarkup-ecb567fe.js";import{a as x,S,N as E}from"./assets/vendor-dcaf4cbb.js";const C="https://books-backend.p.goit.global/books/";async function u(e,t){try{return(await x.get(C+e,{params:t})).data}catch(o){console.error(o)}}document.querySelector("body");document.querySelector(".modalmenu");document.querySelector(".backdrop");document.querySelector(".modal-close-button");document.querySelector(".modal-list-button");async function T(e){const t=await u(e);console.log(t)}console.log("category-card");a.mainContainer.addEventListener("click",I);const B=async e=>{a.mainContainer.innerHTML="";try{const t=await u("category",e),o=t[0].list_name;a.mainContainer.insertAdjacentHTML("afterbegin",$(o,t))}catch(t){console.error("Error fetching category books:",t)}};function I(e){const t=e.target.closest(".sellers-item").dataset.id;T(t)}function $(e,t){return console.log(t),`
  <section class="seller-section">
    <h1 class="section-title">${e}</h1>
    <ul class="sellers-category-list flex-wrap">${v(M,null,t)}</ul>
</section>
    `}function M({book_image:e,title:t,author:o,_id:s}){return`
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
    `}function q(e="show"){const t=document.querySelector(".loader");e==="show"?t.style.display="inline-block":t.style.display="none"}const w=document.querySelector(".seller-section"),d=document.createElement("ul");d.classList.add("sellers-list");d.innerHTML='<span class="loader"></span>';w.innerHTML=`
  <h1 class="section-title">
    Best Sellers <span class="accent">Books</span>
  </h1>`;w.appendChild(d);const L=async()=>{q();try{const e=await u("top-books"),t=A(e,4);N(t);const o=document.querySelectorAll(".sellers-item");o.forEach(n=>{n.classList.add("animation-items")});const s=setTimeout(()=>{o.forEach(n=>{n.classList.remove("animation-items")})},500)}catch(e){console.error(e)}};L();function A(e,t){const o=[];for(;o.length<t;){const s=Math.floor(Math.random()*e.length);o.includes(s)||o.push(s)}return o.map(s=>e[s])}function N(e){const t=H(e);d.innerHTML="",d.appendChild(t)}function H(e){const t=document.createDocumentFragment();return e.forEach(({list_name:o,books:s})=>{const n=document.createElement("li");n.className="sellers-category",n.innerHTML=`
      <h2 class="sellers-category-title">${o}</h2>
      <ul class="sellers-category-list">
        ${O(s)}
      </ul>
      <button class="sellers-button" type="button">See more</button>
    `,t.appendChild(n)}),t}function O(e){let t="";const o=j(),s=o==="desktop"?5:o==="tablet"?3:1;for(let n=0;n<s&&n<e.length;n++){const{book_image:m,title:c,author:r,_id:i}=e[n];t+=`
      <li class="sellers-item" data-id="${i}">
        <div class="book-image-wrapper">
          <img class="book-image"
          src="${m}"
          alt="${c}"
          >
        </div>
        <h3 class="book-title">${c}</h3>
        <p class="book-author">${r}</p>
      </li>
    `}return t}function j(){const e=window.innerWidth;return e<768?"mobile":e<1200?"tablet":"desktop"}a.categoryListElem.addEventListener("click",z);function z(e){if(e.target.nodeName!=="BUTTON"||e.target.classList.contains("active"))return;a.categoryListElem.querySelector(".active").classList.remove("active");const t=e.target;t.classList.add("active"),t.textContent==="ALL CATEGORIES"?L():B({category:t.textContent})}function D({list_name:e,classButton:t=""}){return`<li class="category-list">
      <button class="category-button ${t}" type="button">${e}</button>
    </li>`}function P(e){return e.map(D).join("")}function _(e){const t=P(e);a.categoryListElem.insertAdjacentHTML("beforeend",t)}const R=async()=>{const e=await u("category-list");e.unshift({list_name:"ALL CATEGORIES",classButton:"active"}),_(e)};R();const U=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"stc",srcset:"stc@2x.png 2x"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"hope",srcset:"hope@2x.png 2x"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"u24",srcset:"u24@2x.png 2x"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"imc",srcset:"imc@2x.png 2x"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"msf",srcset:"msf@2x.png 2x"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"razom",srcset:"razom@2x.png 2x"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"aah",srcset:"aah@2x.png 2x"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"wv",srcset:"wv@2x.png 2x"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"prytula",srcset:"prytula@2x.png 2x"}];F(U);function F(e){const t=e.map(G);a.supportList.append(...t)}function G(e,t){const{title:o,url:s,img:n,srcset:m}=e,c=document.createElement("li");c.classList.add("swiper-slide");const r=document.createElement("a");r.classList.add("support-link"),r.target="_blank",r.rel="noopener noreferrer",r.ariaLabel=o,r.href=s;const i=document.createElement("span");i.classList.add("support-count"),i.textContent=`0${t+1}`;const l=document.createElement("img");return l.classList.add("support-img"),l.src=`./img/support/${n}.png`,l.srcset=`./img/support/${m}`,l.alt=o,r.append(i,l),c.append(r),c}const g=document.querySelector(".next-btn"),h=document.querySelector(".prev-btn");new S(".support-swiper",{direction:"vertical",slidesPerView:6,slidesPerGroup:6,allowTouchMove:!0,spaceBetween:"20px",modules:[E],navigation:{nextEl:".next-btn",prevEl:".prev-btn",disabledClass:"none"},on:{slideChange:function(){this.activeIndex===0?(h.classList.add("swiper-button-hidden"),g.classList.remove("swiper-button-hidden")):(h.classList.remove("swiper-button-hidden"),g.classList.add("swiper-button-hidden"))}}});const p=document.querySelector(".checkbox-input"),y=document.body;p.addEventListener("change",function(){p.checked?(y.classList.add("dark-theme"),localStorage.setItem("theme","dark-theme")):(y.classList.remove("dark-theme"),localStorage.setItem("theme",""))});const b=document.getElementById("checkbox"),f=document.querySelector(".owl-icon"),k=document.querySelector(".owl-light-icon");b.addEventListener("change",function(){b.checked?(f.style.display="block",k.style.display="none"):(f.style.display="none",k.style.display="block")});window.onload=W;function W(){let e=localStorage.getItem("theme");e==="dark-theme"&&(document.body.classList.add(e),p.checked=!0);const t=document.querySelector(".header-nav").getElementsByTagName("a");for(let o=0;o<t.length;o++)document.location.href.indexOf(t[o].href)>=0&&(t[o].classList.add("active"),console.log(document.location.href))}const V=document.querySelector(".burger-menu-btn"),Z=document.querySelector(".mobile-menu-container");V.addEventListener("click",function(){Z.classList.add("open-menu")});
//# sourceMappingURL=commonHelpers.js.map
