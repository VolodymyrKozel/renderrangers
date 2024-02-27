import{r as g,a as r}from"./assets/renderMarkup-485a04b6.js";import{a as $,S as T,N as C}from"./assets/vendor-dcaf4cbb.js";const M="https://books-backend.p.goit.global/books/";async function m(e,t){try{return(await $.get(M+e,{params:t})).data}catch(o){console.error(o)}}function B(e){e.forEach(t=>{t.classList.add("animation-items")}),setTimeout(()=>{e.forEach(t=>{t.classList.remove("animation-items")})},500)}const v=document.querySelector("body"),u=document.querySelector(".backdrop");u.addEventListener("click",A);async function I(e){const t=await m(e);console.log(t),q(t),document.addEventListener("keydown",L)}function q(e){u.style.display="flex",v.style.overflow="hidden",u.innerHTML="",u.insertAdjacentHTML("afterbegin",O(e))}function N(e,t){var o=JSON.parse(localStorage.getItem(t));if(o==null)o=[];else if(o.find(n=>n.id==e)){const n=o.filter(a=>a.id!==e);localStorage.setItem(t,JSON.stringify(n))}else{var s={id:e};o.push(s),localStorage.setItem(t,JSON.stringify(o))}}function A(e){if(e.target.nodeName!=="BUTTON"){console.log(e.target);return}console.log(e.target),e.target.id==="modal-list-button-id"&&N(e.target.dataset.id,"cart"),e.target.id=="modal-close-id"&&(x(),console.log("x"))}function L(e){e.key==="Escape"&&(x(),document.removeEventListener("keydown",L))}function x(){u.style.display="none",v.style.overflow="auto"}function O({_id:e,book_image:t,title:o,author:s,description:n,buy_links:a}){return`
  <section class="modalmenu">
      <button type="button" id="modal-close-id" class="close-button modal-close-button">
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
      ${g(H,a.slice(0,2))}
        </ul>       
    </div>
  </div>
   <button type="button" id="modal-list-button-id" data-id="${e}">
      Add this book to shopping list
    </button>
    </section>
`}function H({name:e,url:t}){return`
    <li class="buy-links-item">
    <a target="_blank" rel="noopener noreferrer" aria-label="${e}" href=${t}>
      <img src="./img/${e.split(" ")[0]}-1x.jpg"  srcset="./img/${e.split(" ")[0]}-2x.png 2x" alt="${e}" class="platform-image">
</a>
</li>
`}console.log("category-card");r.mainContainer.addEventListener("click",j);const E=async e=>{r.mainContainer.innerHTML="";try{const t=await m("category",e),o=t[0].list_name;r.mainContainer.insertAdjacentHTML("afterbegin",D(o,t));const s=document.querySelectorAll(".sellers-item");B(s)}catch(t){console.error("Error fetching category books:",t)}};function j(e){const t=e.target.closest(".sellers-item").dataset.id;I(t)}function D(e,t){const o=e.split(" "),s=o.pop();return o.push(`<span class="accent">${s}</span>`),`
    <section class="seller-section">
      <h1 class="section-title category-card-title">${o.join(" ")}</h1>
      <ul class="sellers-category-list sellers-exclude flex-wrap">${g(U,t)}</ul>
    </section>
  `}function U({book_image:e,title:t,author:o,_id:s}){return`
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
  `}function z(e="show"){const t=document.querySelector(".loader");e==="show"?t.style.display="inline-block":t.style.display="none"}const S=async()=>{r.mainContainer.innerHTML=`
    <section class="seller-section">
      <h1 class="section-title">
        Best Sellers <span class="accent">Books</span>
      </h1>
    </section>`;const e=document.createElement("ul");e.classList.add("sellers-list"),e.innerHTML='<span class="loader"></span>',r.mainContainer.appendChild(e),r.mainContainer.querySelector(".loader"),z();try{const t=await m("top-books"),o=F(t,4);P(e,o);const s=document.querySelectorAll(".sellers-item");s.forEach(a=>{a.classList.add("animation-items")});const n=setTimeout(()=>{s.forEach(a=>{a.classList.remove("animation-items")})},500);e.addEventListener("click",_)}catch(t){console.error(t)}};function P(e,t){const o=R(t);e.innerHTML="",e.appendChild(o)}S();async function _(e){if(e.preventDefault(),e.target.nodeName!=="BUTTON")return;const t=e.target,{name:o}=t.dataset;await E({category:o})}function F(e,t){const o=[];for(;o.length<t;){const s=Math.floor(Math.random()*e.length);o.includes(s)||o.push(s)}return o.map(s=>e[s])}function R(e){const t=document.createDocumentFragment();return e.forEach(({list_name:o,books:s})=>{const n=document.createElement("li");n.className="sellers-category",n.innerHTML=`
      <h2 class="sellers-category-title">${o}</h2>
      <ul class="sellers-category-list">
        ${W(s)}
      </ul>
      <button class="sellers-button" type="button" data-name="${o}">See more</button>
    `,t.appendChild(n)}),t}function W(e){let t="";const o=G(),s=o==="desktop"?5:o==="tablet"?3:1;for(let n=0;n<s&&n<e.length;n++){const{book_image:a,title:c,author:i,_id:l}=e[n];t+=`
      <li class="sellers-item" data-id="${l}">
        <div class="book-image-wrapper">
          <img class="book-image"
          src="${a}"
          alt="${c}"
          >
        </div>
        <h3 class="book-title">${c}</h3>
        <p class="book-author">${i}</p>
      </li>
    `}return t}function G(){const e=window.innerWidth;return e<768?"mobile":e<1440?"tablet":"desktop"}r.categoryListElem.addEventListener("click",J);function J(e){if(e.target.nodeName!=="BUTTON"||e.target.classList.contains("active"))return;r.categoryListElem.querySelector(".active").classList.remove("active");const t=e.target;t.classList.add("active"),t.textContent==="ALL CATEGORIES"?S():E({category:t.textContent})}function V({list_name:e,classButton:t=""}){return`<li class="category-list">
      <button class="category-button ${t}" type="button">${e}</button>
    </li>`}const Z=async()=>{const e=await m("category-list");e.unshift({list_name:"ALL CATEGORIES",classButton:"active"}),r.categoryListElem.insertAdjacentHTML("beforeend",g(V,e))};Z();const K=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"stc",srcset:"stc@2x.png 2x"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"hope",srcset:"hope@2x.png 2x"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"u24",srcset:"u24@2x.png 2x"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"imc",srcset:"imc@2x.png 2x"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"msf",srcset:"msf@2x.png 2x"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"razom",srcset:"razom@2x.png 2x"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"aah",srcset:"aah@2x.png 2x"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"wv",srcset:"wv@2x.png 2x"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"prytula",srcset:"prytula@2x.png 2x"}];Q(K);function Q(e){const t=e.map(X);r.supportList.append(...t)}function X(e,t){const{title:o,url:s,img:n,srcset:a}=e,c=document.createElement("li");c.classList.add("swiper-slide");const i=document.createElement("a");i.classList.add("support-link"),i.target="_blank",i.rel="noopener noreferrer",i.ariaLabel=o,i.href=s;const l=document.createElement("span");l.classList.add("support-count"),l.textContent=`0${t+1}`;const d=document.createElement("img");return d.classList.add("support-img"),d.src=`./img/support/${n}.png`,d.srcset=`./img/support/${a}`,d.alt=o,i.append(l,d),c.append(i),c}const h=document.querySelector(".next-btn"),y=document.querySelector(".prev-btn");new T(".support-swiper",{direction:"vertical",slidesPerView:6,slidesPerGroup:6,allowTouchMove:!0,spaceBetween:"20px",modules:[C],navigation:{nextEl:".next-btn",prevEl:".prev-btn",disabledClass:"none"},on:{slideChange:function(){this.activeIndex===0?(y.classList.add("swiper-button-hidden"),h.classList.remove("swiper-button-hidden")):(y.classList.remove("swiper-button-hidden"),h.classList.add("swiper-button-hidden"))}}});const p=document.querySelector(".checkbox-input"),f=document.body;p.addEventListener("change",function(){p.checked?(f.classList.add("dark-theme"),localStorage.setItem("theme","dark-theme")):(f.classList.remove("dark-theme"),localStorage.setItem("theme",""))});const b=document.getElementById("checkbox"),k=document.querySelector(".owl-icon"),w=document.querySelector(".owl-light-icon");b.addEventListener("change",function(){b.checked?(k.style.display="block",w.style.display="none"):(k.style.display="none",w.style.display="block")});window.onload=Y;function Y(){let e=localStorage.getItem("theme");e==="dark-theme"&&(document.body.classList.add(e),p.checked=!0);const t=document.querySelector(".header-nav").getElementsByTagName("a");for(let o=0;o<t.length;o++)document.location.href.indexOf(t[o].href)>=0&&(t[o].classList.add("active"),console.log(document.location.href))}const ee=document.querySelector(".burger-menu-btn"),te=document.querySelector(".mobile-menu-container");ee.addEventListener("click",function(){te.classList.add("open-menu")});
//# sourceMappingURL=commonHelpers.js.map
