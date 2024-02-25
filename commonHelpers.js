import{g as a,r as n,a as g}from"./assets/renderMarkup-6b6f4730.js";import"./assets/vendor-0cb09735.js";const m=async()=>{const t=await a("category-list");t.unshift({list_name:"ALL CATEGORIES"}),console.log(t)};m();console.log("category-list");const l=document.getElementById("books-list"),h=async()=>{try{const t=await a("top-books"),e=d(t,4);w(e)}catch(t){console.error(t)}finally{}};h();function d(t,e){const o=[];for(;o.length<e;){const r=Math.floor(Math.random()*t.length);o.includes(r)||o.push(r)}return o.map(r=>t[r])}function w(t){const e=k(t);l.innerHTML="",l.appendChild(e)}function k(t){const e=document.createDocumentFragment();return t.forEach(({list_name:o,books:r})=>{const s=document.createElement("li");s.className="sellers-category",s.innerHTML=`
      <h2 class="sellers-category-title">${o}</h2>
      <ul class="sellers-category-list">
        ${f(r)}
      </ul>
      <button class="sellers-button" type="button">see more</button>
    `,e.appendChild(s)}),e}function f(t){let e="";const o=y(),r=o==="desktop"?5:o==="tablet"?3:1;for(let s=0;s<r&&s<t.length;s++){const{book_image:c,title:i,author:u,_id:p}=t[s];e+=`
      <li class="sellers-item" data-id="${p}">
        <div class="book-image-wrapper">
          <img class="book-image"
          src="${c}"
          alt="${i}"
          >
        </div>
        <h3 class="book-title">${i}</h3>
        <p class="book-author">${u}</p>
      </li>
    `}return e}function y(){const t=window.innerWidth;return t<768?"mobile":t<1200?"tablet":"desktop"}const b=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"stc"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"hope"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"u24"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"imc"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"msf"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"razom"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"aah"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"wv"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"prytula"}];function L(t,e,o){t.classList.toggle(o),t.classList.contains(o)?e.scrollTop=e.scrollHeight:e.scrollTop=0}n.scrollBtn.addEventListener("click",()=>L(n.scrollBtn,n.supportList,"isDown"));g($,n.supportList,b);function $(t){const{title:e,url:o,img:r}=t;return`
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
    </li>`}console.log("pop up");console.log("category-card");
//# sourceMappingURL=commonHelpers.js.map
