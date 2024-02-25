import{g as u,r,a as g}from"./assets/renderMarkup-e7327bcc.js";import"./assets/vendor-0cb09735.js";const h=async()=>{const t=await u("category-list");t.unshift({list_name:"ALL CATEGORIES"}),console.log(t)};h();console.log("category-list");const l=document.getElementById("books-list"),k=async()=>{try{const t=await u("top-books"),e=f(t,4);w(e)}catch(t){console.error(t)}finally{}};k();function f(t,e){const o=[];for(;o.length<e;){const n=Math.floor(Math.random()*t.length);o.includes(n)||o.push(n)}return o.map(n=>t[n])}function w(t){const e=y(t);l.innerHTML="",l.appendChild(e)}function y(t){const e=document.createDocumentFragment();return t.forEach(({list_name:o,books:n})=>{const s=document.createElement("li");s.className="sellers-category",s.innerHTML=`
      <h2 class="sellers-category-title">${o}</h2>
      <ul class="sellers-category-list">
        ${L(n)}
      </ul>
      <button class="sellers-button" type="button">see more</button>
    `,e.appendChild(s)}),e}function L(t){let e="";const o=b(),n=o==="desktop"?5:o==="tablet"?3:1;for(let s=0;s<n&&s<t.length;s++){const{book_image:d,title:i,author:m,_id:p}=t[s];e+=`
      <li class="sellers-item" data-id="${p}">
        <div class="book-image-wrapper">
          <img class="book-image"
          src="${d}"
          alt="${i}"
          >
        </div>
        <h3 class="book-title">${i}</h3>
        <p class="book-author">${m}</p>
      </li>
    `}return e}function b(){const t=window.innerWidth;return t<768?"mobile":t<1200?"tablet":"desktop"}const v=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"stc"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"hope"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"u24"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"imc"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"msf"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"razom"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"aah"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"wv"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"prytula"}];function E(t,e,o){t.classList.toggle(o),t.classList.contains(o)?e.scrollTop=e.scrollHeight:e.scrollTop=0}r.scrollBtn.addEventListener("click",()=>E(r.scrollBtn,r.supportList,"isDown"));g(M,r.supportList,v);function M(t){const{title:e,url:o,img:n}=t;return`
    <li class="support-item">
      <a
        class="support-link"
        target="_blank"
        rel="noopener noreferrer"
        arial-label="${e}"
        href="${o}"
      >
        <img class="support-img" src="./img/support/${n}.png" alt="${e}" />
      </a>
    </li>`}console.log("pop up");console.log("category-card");const a=document.querySelector(".checkbox-input"),c=document.body;a.addEventListener("change",function(){a.checked?c.classList.add("dark-theme"):c.classList.remove("dark-theme")});document.addEventListener("DOMContentLoaded",function(){const t=document.querySelector(".burger-menu-btn"),e=document.querySelector(".close-menu-btn"),o=document.querySelector(".header-nav");t.addEventListener("click",function(){t.classList.add("is-hidden"),e.classList.remove("is-hidden"),o.style.display="flex"}),e.addEventListener("click",function(){t.classList.remove("is-hidden"),e.classList.add("is-hidden"),o.style.display="none"})});
//# sourceMappingURL=commonHelpers.js.map
