import{r as a,a as v}from"./assets/renderMarkup-ecb567fe.js";import{a as x,S,N as E}from"./assets/vendor-dcaf4cbb.js";const C="https://books-backend.p.goit.global/books/";async function p(e,t){try{return(await x.get(C+e,{params:t})).data}catch(o){console.error(o)}}console.log("category-card");const T=async e=>{a.mainContainer.innerHTML="";try{const t=await p("category",e),o=a.categoryCardElem.querySelector(".category-card-title");o&&o.remove();const n=t[0].list_name;document.querySelectorAll(".category-card-title").forEach(s=>{s.remove()}),a.mainContainer.insertAdjacentHTML("afterbegin",$(n,t))}catch(t){console.error("Error fetching category books:",t)}};function $(e,t){return console.log(t),`
  <section class="seller-section">
    <h2 class="section-title">${e}</h2>
    <ul class="sellers-category-list flex-wrap">${v(I,null,t)}</ul>
</section>
      
    `}function I({book_image:e,title:t,author:o,_id:n}){return`
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
    `}function B(e="show"){const t=document.querySelector(".loader");e==="show"?t.style.display="inline-block":t.style.display="none"}const w=document.querySelector(".seller-section"),u=document.createElement("ul");u.classList.add("sellers-list");u.innerHTML='<span class="loader"></span>';w.innerHTML=`
  <h1 class="section-title">
    Best Sellers <span class="accent">Books</span>
  </h1>`;w.appendChild(u);const L=async()=>{B();try{const e=await p("top-books"),t=M(e,4);q(t);const o=document.querySelectorAll(".sellers-item");o.forEach(s=>{s.classList.add("animation-items")});const n=setTimeout(()=>{o.forEach(s=>{s.classList.remove("animation-items")})},500)}catch(e){console.error(e)}};L();function M(e,t){const o=[];for(;o.length<t;){const n=Math.floor(Math.random()*e.length);o.includes(n)||o.push(n)}return o.map(n=>e[n])}function q(e){const t=A(e);u.innerHTML="",u.appendChild(t)}function A(e){const t=document.createDocumentFragment();return e.forEach(({list_name:o,books:n})=>{const s=document.createElement("li");s.className="sellers-category",s.innerHTML=`
      <h2 class="sellers-category-title">${o}</h2>
      <ul class="sellers-category-list">
        ${N(n)}
      </ul>
      <button class="sellers-button" type="button">See more</button>
    `,t.appendChild(s)}),t}function N(e){let t="";const o=H(),n=o==="desktop"?5:o==="tablet"?3:1;for(let s=0;s<n&&s<e.length;s++){const{book_image:d,title:c,author:r,_id:i}=e[s];t+=`
      <li class="sellers-item" data-id="${i}">
        <div class="book-image-wrapper">
          <img class="book-image"
          src="${d}"
          alt="${c}"
          >
        </div>
        <h3 class="book-title">${c}</h3>
        <p class="book-author">${r}</p>
      </li>
    `}return t}function H(){const e=window.innerWidth;return e<768?"mobile":e<1200?"tablet":"desktop"}a.categoryListElem.addEventListener("click",O);function O(e){if(e.target.nodeName!=="BUTTON"||e.target.classList.contains("active"))return;a.categoryListElem.querySelector(".active").classList.remove("active");const t=e.target;t.classList.add("active"),t.textContent==="ALL CATEGORIES"?L():T({category:t.textContent})}function j({list_name:e,classButton:t=""}){return`<li class="category-list">
      <button class="category-button ${t}" type="button">${e}</button>
    </li>`}function z(e){return e.map(j).join("")}function D(e){const t=z(e);a.categoryListElem.insertAdjacentHTML("beforeend",t)}const P=async()=>{const e=await p("category-list");e.unshift({list_name:"ALL CATEGORIES",classButton:"active"}),D(e)};P();const _=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"stc",srcset:"stc@2x.png 2x"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"hope",srcset:"hope@2x.png 2x"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"u24",srcset:"u24@2x.png 2x"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"imc",srcset:"imc@2x.png 2x"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"msf",srcset:"msf@2x.png 2x"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"razom",srcset:"razom@2x.png 2x"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"aah",srcset:"aah@2x.png 2x"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"wv",srcset:"wv@2x.png 2x"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"prytula",srcset:"prytula@2x.png 2x"}];R(_);function R(e){const t=e.map(U);a.supportList.append(...t)}function U(e,t){const{title:o,url:n,img:s,srcset:d}=e,c=document.createElement("li");c.classList.add("swiper-slide");const r=document.createElement("a");r.classList.add("support-link"),r.target="_blank",r.rel="noopener noreferrer",r.ariaLabel=o,r.href=n;const i=document.createElement("span");i.classList.add("support-count"),i.textContent=`0${t+1}`;const l=document.createElement("img");return l.classList.add("support-img"),l.src=`./img/support/${s}.png`,l.srcset=`./img/support/${d}`,l.alt=o,r.append(i,l),c.append(r),c}const g=document.querySelector(".next-btn"),h=document.querySelector(".prev-btn");new S(".support-swiper",{direction:"vertical",slidesPerView:6,slidesPerGroup:6,allowTouchMove:!0,spaceBetween:"20px",modules:[E],navigation:{nextEl:".next-btn",prevEl:".prev-btn",disabledClass:"none"},on:{slideChange:function(){this.activeIndex===0?(h.classList.add("swiper-button-hidden"),g.classList.remove("swiper-button-hidden")):(h.classList.remove("swiper-button-hidden"),g.classList.add("swiper-button-hidden"))}}});console.log("pop up");const m=document.querySelector(".checkbox-input"),y=document.body;m.addEventListener("change",function(){m.checked?(y.classList.add("dark-theme"),localStorage.setItem("theme","dark-theme")):(y.classList.remove("dark-theme"),localStorage.setItem("theme",""))});const f=document.getElementById("checkbox"),b=document.querySelector(".owl-icon"),k=document.querySelector(".owl-light-icon");f.addEventListener("change",function(){f.checked?(b.style.display="block",k.style.display="none"):(b.style.display="none",k.style.display="block")});window.onload=F;function F(){let e=localStorage.getItem("theme");e==="dark-theme"&&(document.body.classList.add(e),m.checked=!0);const t=document.querySelector(".header-nav").getElementsByTagName("a");for(let o=0;o<t.length;o++)document.location.href.indexOf(t[o].href)>=0&&(t[o].classList.add("active"),console.log(document.location.href))}const G=document.querySelector(".burger-menu-btn"),W=document.querySelector(".mobile-menu-container");G.addEventListener("click",function(){W.classList.add("open-menu")});
//# sourceMappingURL=commonHelpers.js.map
