import{r as n,a as h}from"./assets/renderMarkup-15bca558.js";import{a as k}from"./assets/vendor-0cb09735.js";const f="https://books-backend.p.goit.global/books/";async function u(t,e){try{return(await k.get(f+t,{params:e})).data}catch(o){console.error(o)}}n.categoryListElem.addEventListener("click",w);function w(t){if(t.target.nodeName!=="BUTTON")return;const e=t.target;e.classList.add("active"),e.textContent==="ALL CATEGORIES"&&!e.classList.contains("active")&&m()}const m=async()=>{const t=await u("category-list");t.unshift({list_name:"ALL CATEGORIES"}),console.log(t)};m();console.log("category-list");const c=document.getElementById("books-list"),y=async()=>{try{const t=await u("top-books"),e=b(t,4);L(e)}catch(t){console.error(t)}finally{}};y();function b(t,e){const o=[];for(;o.length<e;){const s=Math.floor(Math.random()*t.length);o.includes(s)||o.push(s)}return o.map(s=>t[s])}function L(t){const e=v(t);c.innerHTML="",c.appendChild(e)}function v(t){const e=document.createDocumentFragment();return t.forEach(({list_name:o,books:s})=>{const r=document.createElement("li");r.className="sellers-category",r.innerHTML=`
      <h2 class="sellers-category-title">${o}</h2>
      <ul class="sellers-category-list">
        ${E(s)}
      </ul>
      <button class="sellers-button" type="button">see more</button>
    `,e.appendChild(r)}),e}function E(t){let e="";const o=I(),s=o==="desktop"?5:o==="tablet"?3:1;for(let r=0;r<s&&r<t.length;r++){const{book_image:g,title:l,author:d,_id:p}=t[r];e+=`
      <li class="sellers-item" data-id="${p}">
        <div class="book-image-wrapper">
          <img class="book-image"
          src="${g}"
          alt="${l}"
          >
        </div>
        <h3 class="book-title">${l}</h3>
        <p class="book-author">${d}</p>
      </li>
    `}return e}function I(){const t=window.innerWidth;return t<768?"mobile":t<1200?"tablet":"desktop"}const S=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"stc"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"hope"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"u24"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"imc"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"msf"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"razom"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"aah"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"wv"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"prytula"}];function T(t,e,o){t.classList.toggle(o),t.classList.contains(o)?e.scrollTop=e.scrollHeight:e.scrollTop=0}n.scrollBtn.addEventListener("click",()=>T(n.scrollBtn,n.supportList,"isDown"));h(B,n.supportList,S);function B(t){const{title:e,url:o,img:s}=t;return`
    <li class="support-item">
      <a
        class="support-link"
        target="_blank"
        rel="noopener noreferrer"
        arial-label="${e}"
        href="${o}"
      >
        <img class="support-img" src="./img/support/${s}.png" alt="${e}" />
      </a>
    </li>`}console.log("pop up");console.log("category-card");const a=document.querySelector(".checkbox-input"),i=document.body;a.addEventListener("change",function(){a.checked?(i.classList.add("dark-theme"),localStorage.setItem("theme","dark-theme")):(i.classList.remove("dark-theme"),localStorage.setItem("theme",""))});window.onload=$;function $(){let t=localStorage.getItem("theme");t==="dark-theme"&&(i.classList.add(t),a.checked=!0);const e=document.querySelector(".header-nav").getElementsByTagName("a");for(let o=0;o<e.length;o++)document.location.href.indexOf(e[o].href)>=0&&(e[o].classList.add("active"),console.log(document.location.href))}
//# sourceMappingURL=commonHelpers.js.map
