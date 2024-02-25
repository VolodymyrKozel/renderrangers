import{r as n,a as h}from"./assets/renderMarkup-15bca558.js";import{a as f}from"./assets/vendor-0cb09735.js";const k="https://books-backend.p.goit.global/books/";async function c(t,e){try{return(await f.get(k+t,{params:e})).data}catch(o){console.error(o)}}console.log("category-card");const y=async t=>{const e=await c("category",t);console.log(e)},u=document.getElementById("books-list"),g=async()=>{try{const t=await c("top-books"),e=w(t,4);b(e)}catch(t){console.error(t)}finally{}};g();function w(t,e){const o=[];for(;o.length<e;){const r=Math.floor(Math.random()*t.length);o.includes(r)||o.push(r)}return o.map(r=>t[r])}function b(t){const e=L(t);u.innerHTML="",u.appendChild(e)}function L(t){const e=document.createDocumentFragment();return t.forEach(({list_name:o,books:r})=>{const s=document.createElement("li");s.className="sellers-category",s.innerHTML=`
      <h2 class="sellers-category-title">${o}</h2>
      <ul class="sellers-category-list">
        ${v(r)}
      </ul>
      <button class="sellers-button" type="button">see more</button>
    `,e.appendChild(s)}),e}function v(t){let e="";const o=E(),r=o==="desktop"?5:o==="tablet"?3:1;for(let s=0;s<r&&s<t.length;s++){const{book_image:m,title:l,author:d,_id:p}=t[s];e+=`
      <li class="sellers-item" data-id="${p}">
        <div class="book-image-wrapper">
          <img class="book-image"
          src="${m}"
          alt="${l}"
          >
        </div>
        <h3 class="book-title">${l}</h3>
        <p class="book-author">${d}</p>
      </li>
    `}return e}function E(){const t=window.innerWidth;return t<768?"mobile":t<1200?"tablet":"desktop"}n.categoryListElem.addEventListener("click",T);function T(t){if(t.target.nodeName!=="BUTTON"||t.target.classList.contains("active"))return;n.categoryListElem.querySelector(".active").classList.remove("active");const e=t.target;e.classList.add("active"),e.textContent==="ALL CATEGORIES"?g():y({category:e.textContent})}function B({list_name:t,classButton:e=""}){return`<li class="category-list">
      <button class="category-button ${e}" type="button">${t}</button>
    </li>`}function S(t){return t.map(B).join("")}function I(t){const e=S(t);n.categoryListElem.insertAdjacentHTML("beforeend",e)}const $=async()=>{const t=await c("category-list");t.unshift({list_name:"ALL CATEGORIES",classButton:"active"}),I(t)};$();const C=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"stc"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"hope"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"u24"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"imc"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"msf"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"razom"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"aah"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"wv"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"prytula"}];function M(t,e,o){t.classList.toggle(o),t.classList.contains(o)?e.scrollTop=e.scrollHeight:e.scrollTop=0}n.scrollBtn.addEventListener("click",()=>M(n.scrollBtn,n.supportList,"isDown"));h(x,n.supportList,C);function x(t){const{title:e,url:o,img:r}=t;return`
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
    </li>`}console.log("pop up");const a=document.querySelector(".checkbox-input"),i=document.body;a.addEventListener("change",function(){a.checked?(i.classList.add("dark-theme"),localStorage.setItem("theme","dark-theme")):(i.classList.remove("dark-theme"),localStorage.setItem("theme",""))});window.onload=A;function A(){let t=localStorage.getItem("theme");t==="dark-theme"&&(i.classList.add(t),a.checked=!0);const e=document.querySelector(".header-nav").getElementsByTagName("a");for(let o=0;o<e.length;o++)document.location.href.indexOf(e[o].href)>=0&&(e[o].classList.add("active"),console.log(document.location.href))}
//# sourceMappingURL=commonHelpers.js.map
