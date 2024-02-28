import{r as a,g as f,a as u,b as g}from"./assets/header-9857fc04.js";import{S as w,N as L}from"./assets/vendor-94a85c0e.js";function k(e){e.forEach(t=>{t.classList.add("animation-items")}),setTimeout(()=>{e.forEach(t=>{t.classList.remove("animation-items")})},500)}console.log("category-card");a.mainContainer.addEventListener("click",b);const h=async e=>{a.mainContainer.innerHTML="";const t='<div class="loader"></div>';a.mainContainer.insertAdjacentHTML("afterbegin",t);try{const s=await u("category",e),n=document.querySelector(".loader");n&&n.remove();const o=s[0].list_name;a.mainContainer.insertAdjacentHTML("afterbegin",v(o,s));const c=document.querySelectorAll(".sellers-item");k(c)}catch(s){console.error("Помилка при отриманні книг категорій:",s)}};function b(e){const t=e.target.closest(".sellers-item").dataset.id;f(t)}function v(e,t){const s=e.split(" "),n=s.pop();return s.push(`<span class="accent">${n}</span>`),`
    <section class="seller-section">
      <h1 class="section-title category-card-title">${s.join(" ")}</h1>
      <ul class="sellers-category-list sellers-exclude flex-wrap">${g(x,t)}</ul>
    </section>
  `}function x({book_image:e,title:t,author:s,_id:n}){return`
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
  `}function C(e="show"){const t=document.querySelector(".loader");e==="show"?t.style.display="inline-block":t.style.display="none"}const y=async()=>{a.mainContainer.innerHTML=`
    <section class="seller-section">
      <h1 class="section-title">
        Best Sellers <span class="accent">Books</span>
      </h1>
    </section>`;const e=document.createElement("ul");e.classList.add("sellers-list"),e.innerHTML='<span class="loader"></span>',a.mainContainer.querySelector(".seller-section").appendChild(e),a.mainContainer.querySelector(".loader"),C();try{const s=await u("top-books"),n=T(s,4);E(e,n);const o=document.querySelectorAll(".sellers-item");o.forEach(r=>{r.classList.add("animation-items")});const c=setTimeout(()=>{o.forEach(r=>{r.classList.remove("animation-items")})},500);e.addEventListener("click",S)}catch(s){console.error(s)}};function E(e,t){const s=$(t);e.innerHTML="",e.appendChild(s)}y();async function S(e){if(e.preventDefault(),e.target.nodeName!=="BUTTON")return;const t=e.target,{name:s}=t.dataset;await h({category:s})}function T(e,t){const s=[];for(;s.length<t;){const n=Math.floor(Math.random()*e.length);s.includes(n)||s.push(n)}return s.map(n=>e[n])}function $(e){const t=document.createDocumentFragment();return e.forEach(({list_name:s,books:n})=>{const o=document.createElement("li");o.className="sellers-category",o.innerHTML=`
      <h2 class="sellers-category-title">${s}</h2>
      <ul class="sellers-category-list">
        ${B(n)}
      </ul>
      <button class="sellers-button" type="button" data-name="${s}">See more</button>
    `,t.appendChild(o)}),t}function B(e){let t="";const s=M(),n=s==="desktop"?5:s==="tablet"?3:1;for(let o=0;o<n&&o<e.length;o++){const{book_image:c,title:r,author:i,_id:l}=e[o];t+=`
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
    `}return t}function M(){const e=window.innerWidth;return e<768?"mobile":e<1440?"tablet":"desktop"}a.categoryListElem.addEventListener("click",I);function I(e){if(e.target.nodeName!=="BUTTON"||e.target.classList.contains("active"))return;a.categoryListElem.querySelector(".active").classList.remove("active");const t=e.target;t.classList.add("active"),t.textContent==="ALL CATEGORIES"?y():h({category:t.textContent})}function A({list_name:e,classButton:t=""}){return`<li class="category-list">
      <button class="category-button ${t}" type="button">${e}</button>
    </li>`}const N=async()=>{try{const e=await u("category-list");e.unshift({list_name:"ALL CATEGORIES",classButton:"active"}),a.categoryListElem.insertAdjacentHTML("beforeend",g(A,e))}catch(e){console.error(e)}};N();const H=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"stc",srcset:"stc@2x.png 2x"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"hope",srcset:"hope@2x.png 2x"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"u24",srcset:"u24@2x.png 2x"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"imc",srcset:"imc@2x.png 2x"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"msf",srcset:"msf@2x.png 2x"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"razom",srcset:"razom@2x.png 2x"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"aah",srcset:"aah@2x.png 2x"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"wv",srcset:"wv@2x.png 2x"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"prytula",srcset:"prytula@2x.png 2x"}];q(H);function q(e){const t=e.map(j);a.supportList.append(...t)}function j(e,t){const{title:s,url:n,img:o,srcset:c}=e,r=document.createElement("li");r.classList.add("swiper-slide");const i=document.createElement("a");i.classList.add("support-link"),i.target="_blank",i.rel="noopener noreferrer",i.ariaLabel=s,i.href=n;const l=document.createElement("span");l.classList.add("support-count"),l.textContent=`0${t+1}`;const d=document.createElement("img");return d.classList.add("support-img"),d.src=`./img/support/${o}.png`,d.srcset=`./img/support/${c}`,d.alt=s,i.append(l,d),r.append(i),r}const m=document.querySelector(".next-btn"),p=document.querySelector(".prev-btn");new w(".support-swiper",{direction:"vertical",slidesPerView:6,slidesPerGroup:6,allowTouchMove:!0,spaceBetween:"20px",modules:[L],navigation:{nextEl:".next-btn",prevEl:".prev-btn",disabledClass:"none"},on:{slideChange:function(){this.activeIndex===0?(p.classList.add("swiper-button-hidden"),m.classList.remove("swiper-button-hidden")):(p.classList.remove("swiper-button-hidden"),m.classList.add("swiper-button-hidden"))}}});
//# sourceMappingURL=commonHelpers.js.map
