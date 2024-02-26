import{r as c,a as v}from"./assets/renderMarkup-ecb567fe.js";import{a as x,S,N as E}from"./assets/vendor-dcaf4cbb.js";const T="https://books-backend.p.goit.global/books/";async function p(e,t){try{return(await x.get(T+e,{params:t})).data}catch(s){console.error(s)}}console.log("category-card");const C=async e=>{c.mainContainer.innerHTML="";try{const t=await p("category",e),s=t[0].list_name;c.mainContainer.insertAdjacentHTML("afterbegin",$(s,t))}catch(t){console.error("Error fetching category books:",t)}};function $(e,t){return console.log(t),`
  <section class="seller-section">
    <h1 class="section-title">${e}</h1>
    <ul class="sellers-category-list flex-wrap">${v(I,null,t)}</ul>
</section>
    `}function I({book_image:e,title:t,author:s,_id:n}){return`
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
    `}function B(e="show"){const t=document.querySelector(".loader");e==="show"?t.style.display="inline-block":t.style.display="none"}const w=document.querySelector(".seller-section"),u=document.createElement("ul");u.classList.add("sellers-list");u.innerHTML='<span class="loader"></span>';w.innerHTML=`
  <h1 class="section-title">
    Best Sellers <span class="accent">Books</span>
  </h1>`;w.appendChild(u);const L=async()=>{B();try{const e=await p("top-books"),t=M(e,4);q(t);const s=document.querySelectorAll(".sellers-item");s.forEach(o=>{o.classList.add("animation-items")});const n=setTimeout(()=>{s.forEach(o=>{o.classList.remove("animation-items")})},500)}catch(e){console.error(e)}};L();function M(e,t){const s=[];for(;s.length<t;){const n=Math.floor(Math.random()*e.length);s.includes(n)||s.push(n)}return s.map(n=>e[n])}function q(e){const t=A(e);u.innerHTML="",u.appendChild(t)}function A(e){const t=document.createDocumentFragment();return e.forEach(({list_name:s,books:n})=>{const o=document.createElement("li");o.className="sellers-category",o.innerHTML=`
      <h2 class="sellers-category-title">${s}</h2>
      <ul class="sellers-category-list">
        ${N(n)}
      </ul>
      <button class="sellers-button" type="button">See more</button>
    `,t.appendChild(o)}),t}function N(e){let t="";const s=H(),n=s==="desktop"?5:s==="tablet"?3:1;for(let o=0;o<n&&o<e.length;o++){const{book_image:d,title:a,author:r,_id:i}=e[o];t+=`
      <li class="sellers-item" data-id="${i}">
        <div class="book-image-wrapper">
          <img class="book-image"
          src="${d}"
          alt="${a}"
          >
        </div>
        <h3 class="book-title">${a}</h3>
        <p class="book-author">${r}</p>
      </li>
    `}return t}function H(){const e=window.innerWidth;return e<768?"mobile":e<1200?"tablet":"desktop"}c.categoryListElem.addEventListener("click",O);function O(e){if(e.target.nodeName!=="BUTTON"||e.target.classList.contains("active"))return;c.categoryListElem.querySelector(".active").classList.remove("active");const t=e.target;t.classList.add("active"),t.textContent==="ALL CATEGORIES"?L():C({category:t.textContent})}function j({list_name:e,classButton:t=""}){return`<li class="category-list">
      <button class="category-button ${t}" type="button">${e}</button>
    </li>`}function z(e){return e.map(j).join("")}function D(e){const t=z(e);c.categoryListElem.insertAdjacentHTML("beforeend",t)}const P=async()=>{const e=await p("category-list");e.unshift({list_name:"ALL CATEGORIES",classButton:"active"}),D(e)};P();const _=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"stc",srcset:"stc@2x.png 2x"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"hope",srcset:"hope@2x.png 2x"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"u24",srcset:"u24@2x.png 2x"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"imc",srcset:"imc@2x.png 2x"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"msf",srcset:"msf@2x.png 2x"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"razom",srcset:"razom@2x.png 2x"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"aah",srcset:"aah@2x.png 2x"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"wv",srcset:"wv@2x.png 2x"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"prytula",srcset:"prytula@2x.png 2x"}];R(_);function R(e){const t=e.map(U);c.supportList.append(...t)}function U(e,t){const{title:s,url:n,img:o,srcset:d}=e,a=document.createElement("li");a.classList.add("swiper-slide");const r=document.createElement("a");r.classList.add("support-link"),r.target="_blank",r.rel="noopener noreferrer",r.ariaLabel=s,r.href=n;const i=document.createElement("span");i.classList.add("support-count"),i.textContent=`0${t+1}`;const l=document.createElement("img");return l.classList.add("support-img"),l.src=`./img/support/${o}.png`,l.srcset=`./img/support/${d}`,l.alt=s,r.append(i,l),a.append(r),a}const g=document.querySelector(".next-btn"),h=document.querySelector(".prev-btn");new S(".support-swiper",{direction:"vertical",slidesPerView:6,slidesPerGroup:6,allowTouchMove:!0,spaceBetween:"20px",modules:[E],navigation:{nextEl:".next-btn",prevEl:".prev-btn",disabledClass:"none"},on:{slideChange:function(){this.activeIndex===0?(h.classList.add("swiper-button-hidden"),g.classList.remove("swiper-button-hidden")):(h.classList.remove("swiper-button-hidden"),g.classList.add("swiper-button-hidden"))}}});console.log("pop up");const m=document.querySelector(".checkbox-input"),y=document.body;m.addEventListener("change",function(){m.checked?(y.classList.add("dark-theme"),localStorage.setItem("theme","dark-theme")):(y.classList.remove("dark-theme"),localStorage.setItem("theme",""))});const f=document.getElementById("checkbox"),b=document.querySelector(".owl-icon"),k=document.querySelector(".owl-light-icon");f.addEventListener("change",function(){f.checked?(b.style.display="block",k.style.display="none"):(b.style.display="none",k.style.display="block")});window.onload=F;function F(){let e=localStorage.getItem("theme");e==="dark-theme"&&(document.body.classList.add(e),m.checked=!0);const t=document.querySelector(".header-nav").getElementsByTagName("a");for(let s=0;s<t.length;s++)document.location.href.indexOf(t[s].href)>=0&&(t[s].classList.add("active"),console.log(document.location.href))}const G=document.querySelector(".burger-menu-btn"),W=document.querySelector(".mobile-menu-container");G.addEventListener("click",function(){W.classList.add("open-menu")});
//# sourceMappingURL=commonHelpers.js.map
