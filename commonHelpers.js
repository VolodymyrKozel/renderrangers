import{r as n,a as d}from"./assets/renderMarkup-15bca558.js";import{a as h}from"./assets/vendor-0cb09735.js";const k="https://books-backend.p.goit.global/books/";async function u(t,e){try{return(await h.get(k+t,{params:e})).data}catch(o){console.error(o)}}const f=async()=>{const t=await u("category-list");t.unshift({list_name:"ALL CATEGORIES"}),console.log(t)};f();console.log("category-list");const c=document.getElementById("books-list"),w=async()=>{try{const t=await u("top-books"),e=y(t,4);b(e)}catch(t){console.error(t)}finally{}};w();function y(t,e){const o=[];for(;o.length<e;){const r=Math.floor(Math.random()*t.length);o.includes(r)||o.push(r)}return o.map(r=>t[r])}function b(t){const e=L(t);c.innerHTML="",c.appendChild(e)}function L(t){const e=document.createDocumentFragment();return t.forEach(({list_name:o,books:r})=>{const s=document.createElement("li");s.className="sellers-category",s.innerHTML=`
      <h2 class="sellers-category-title">${o}</h2>
      <ul class="sellers-category-list">
        ${v(r)}
      </ul>
      <button class="sellers-button" type="button">see more</button>
    `,e.appendChild(s)}),e}function v(t){let e="";const o=I(),r=o==="desktop"?5:o==="tablet"?3:1;for(let s=0;s<r&&s<t.length;s++){const{book_image:m,title:l,author:g,_id:p}=t[s];e+=`
      <li class="sellers-item" data-id="${p}">
        <div class="book-image-wrapper">
          <img class="book-image"
          src="${m}"
          alt="${l}"
          >
        </div>
        <h3 class="book-title">${l}</h3>
        <p class="book-author">${g}</p>
      </li>
    `}return e}function I(){const t=window.innerWidth;return t<768?"mobile":t<1200?"tablet":"desktop"}const S=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"stc"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"hope"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"u24"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"imc"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"msf"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"razom"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"aah"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"wv"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"prytula"}];function $(t,e,o){t.classList.toggle(o),t.classList.contains(o)?e.scrollTop=e.scrollHeight:e.scrollTop=0}n.scrollBtn.addEventListener("click",()=>$(n.scrollBtn,n.supportList,"isDown"));d(B,n.supportList,S);function B(t){const{title:e,url:o,img:r}=t;return`
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
    </li>`}console.log("pop up");console.log("category-card");const a=document.querySelector(".checkbox-input"),i=document.body;a.addEventListener("change",function(){a.checked?(i.classList.add("dark-theme"),localStorage.setItem("theme","dark-theme")):(i.classList.remove("dark-theme"),localStorage.setItem("theme",""))});window.onload=E;function E(){let t=localStorage.getItem("theme");t==="dark-theme"&&(i.classList.add(t),a.checked=!0);const e=document.querySelector(".header-nav").getElementsByTagName("a");for(let o=0;o<e.length;o++)document.location.href.indexOf(e[o].href)>=0&&(e[o].classList.add("active"),console.log(document.location.href))}
//# sourceMappingURL=commonHelpers.js.map
