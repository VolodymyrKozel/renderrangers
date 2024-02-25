import{r as a,a as g}from"./assets/renderMarkup-15bca558.js";import{a as k}from"./assets/vendor-0cb09735.js";const y="https://books-backend.p.goit.global/books/";async function i(t,e){try{return(await k.get(y+t,{params:e})).data}catch(o){console.error(o)}}console.log("category-card");const f=async t=>{a.categoryCardElem.innerHTML="";try{const e=await i("category",t),o=e[0].list_name;a.categoryCardElem.insertAdjacentHTML("beforebegin",b(o)),g(w,a.categoryCardElem,e)}catch(e){console.error("Error fetching category books:",e)}};function b(t){return`
      <h2 class="category-card-title">${t}</h2>
    `}function w({book_image:t,title:e,author:o,_id:r}){return`
      <li class="card-book-item" data-id="${r}">
        <img class="card-book-image"
        src="${t}"
        alt="${e}"
        width="335"
        height="485">
        <h3 class="card-book-title">${e}</h3>
        <p class="card-book-author">${o}</p>
      </li>
    `}const u=document.getElementById("books-list"),m=async()=>{try{const t=await i("top-books"),e=L(t,4);v(e)}catch(t){console.error(t)}finally{}};m();function L(t,e){const o=[];for(;o.length<e;){const r=Math.floor(Math.random()*t.length);o.includes(r)||o.push(r)}return o.map(r=>t[r])}function v(t){const e=E(t);u.innerHTML="",u.appendChild(e)}function E(t){const e=document.createDocumentFragment();return t.forEach(({list_name:o,books:r})=>{const s=document.createElement("li");s.className="sellers-category",s.innerHTML=`
      <h2 class="sellers-category-title">${o}</h2>
      <ul class="sellers-category-list">
        ${T(r)}
      </ul>
      <button class="sellers-button" type="button">see more</button>
    `,e.appendChild(s)}),e}function T(t){let e="";const o=$(),r=o==="desktop"?5:o==="tablet"?3:1;for(let s=0;s<r&&s<t.length;s++){const{book_image:d,title:l,author:p,_id:h}=t[s];e+=`
      <li class="sellers-item" data-id="${h}">
        <div class="book-image-wrapper">
          <img class="book-image"
          src="${d}"
          alt="${l}"
          >
        </div>
        <h3 class="book-title">${l}</h3>
        <p class="book-author">${p}</p>
      </li>
    `}return e}function $(){const t=window.innerWidth;return t<768?"mobile":t<1200?"tablet":"desktop"}a.categoryListElem.addEventListener("click",C);function C(t){if(t.target.nodeName!=="BUTTON"||t.target.classList.contains("active"))return;a.categoryListElem.querySelector(".active").classList.remove("active");const e=t.target;e.classList.add("active"),e.textContent==="ALL CATEGORIES"?m():f({category:e.textContent})}function B({list_name:t,classButton:e=""}){return`<li class="category-list">
      <button class="category-button ${e}" type="button">${t}</button>
    </li>`}function S(t){return t.map(B).join("")}function I(t){const e=S(t);a.categoryListElem.insertAdjacentHTML("beforeend",e)}const M=async()=>{const t=await i("category-list");t.unshift({list_name:"ALL CATEGORIES",classButton:"active"}),I(t)};M();const x=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"stc"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"hope"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"u24"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"imc"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"msf"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"razom"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"aah"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"wv"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"prytula"}];function A(t,e,o){t.classList.toggle(o),t.classList.contains(o)?e.scrollTop=e.scrollHeight:e.scrollTop=0}a.scrollBtn.addEventListener("click",()=>A(a.scrollBtn,a.supportList,"isDown"));g(H,a.supportList,x);function H(t){const{title:e,url:o,img:r}=t;return`
    <li class="support-item">
      <a
        class="support-link"
        target="_blank"
        rel="noopener noreferrer"
        arial-label="${e}"
        href="${o}"
      >
        <img class="support-img" src="./img/support/${r}.png" alt="${e}" />
      </a>
    </li>`}console.log("pop up");const n=document.querySelector(".checkbox-input"),c=document.body;n.addEventListener("change",function(){n.checked?(c.classList.add("dark-theme"),localStorage.setItem("theme","dark-theme")):(c.classList.remove("dark-theme"),localStorage.setItem("theme",""))});window.onload=N;function N(){let t=localStorage.getItem("theme");t==="dark-theme"&&(c.classList.add(t),n.checked=!0);const e=document.querySelector(".header-nav").getElementsByTagName("a");for(let o=0;o<e.length;o++)document.location.href.indexOf(e[o].href)>=0&&(e[o].classList.add("active"),console.log(document.location.href))}
//# sourceMappingURL=commonHelpers.js.map
