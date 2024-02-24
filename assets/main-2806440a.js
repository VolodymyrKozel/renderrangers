import{a as d}from"./vendor-0cb09735.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();const i={categoryListElem:document.querySelector(".js-category-list"),categoryCardElem:document.querySelector(".js-category-card"),categoryCardSection:document.querySelector(".js-category"),topSellerSection:document.querySelector(".seller-section"),supportList:document.querySelector(".js-support-list"),scrollBtn:document.querySelector(".js-support-btn"),scrollToTopBtn:document.querySelector(".js-scrollToTopBtn")},f="https://books-backend.p.goit.global/books/";async function c(t,e){try{return(await d.get(f+t,{params:e})).data}catch(r){console.error(r)}}function h(t,e){return e.map(t).join("")}function u(t,e,r){const s=h(t,r);if(e===null)return s;e.innerHTML="",e.insertAdjacentHTML("beforeend",s)}console.log("category-card");const y=async t=>{const e=await c("category",t);console.log(e)},a=document.getElementById("books-list"),p=async()=>{try{const t=await c("top-books"),e=w(t,4);L(e)}catch(t){console.error(t)}finally{}};p();function w(t,e){const r=[];for(;r.length<e;){const s=Math.floor(Math.random()*t.length);r.includes(s)||r.push(s)}return r.map(s=>t[s])}function L(t){const e=k(t);a.innerHTML="",a.appendChild(e)}function k(t){const e=document.createDocumentFragment();return t.forEach(({list_name:r,books:s})=>{const o=document.createElement("li");o.className="sellers-category",o.innerHTML=`
      <h2 class="sellers-category-title">${r}</h2>
      <ul class="sellers-category-list">
        ${b(s)}
      </ul>
      <button class="sellers-button" type="button">see more</button>
    `,e.appendChild(o)}),e}function b(t){let e="";const r=E(),s=r==="desktop"?5:r==="tablet"?3:1;for(let o=0;o<s&&o<t.length;o++){const{book_image:n,title:l,author:m,_id:g}=t[o];e+=`
      <li class="sellers-item" data-id="${g}">
        <div class="book-image-wrapper">
          <img class="book-image"
          src="${n}"
          alt="${l}"
          >
        </div>
        <h3 class="book-title">${l}</h3>
        <p class="book-author">${m}</p>
      </li>
    `}return e}function E(){const t=window.innerWidth;return t<768?"mobile":t<1200?"tablet":"desktop"}i.categoryListElem.addEventListener("click",T);function T(t){if(t.target.nodeName!=="BUTTON"||t.target.classList.contains("active"))return;const e=t.target.parentElement;for(const r of i.categoryListElem.children)r.firstElementChild.classList.remove("active");console.log("active"),e.firstElementChild.classList.add("active"),e.firstElementChild.textContent==="ALL CATEGORIES"?p():y({category:e.firstElementChild.textContent})}const v=async()=>{const t=await c("category-list");t.unshift({list_name:"ALL CATEGORIES",classActive:"active"}),u(S,i.categoryListElem,t)};v();function S({list_name:t,classActive:e=""}){return`<li class="category-item">
  
      <button class="category-button ${e}" type="button">${t}</button>
    </li>`}const C=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"stc"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"hope"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"u24"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"imc"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"msf"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"razom"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"aah"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"wv"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"prytula"}];function B(t,e,r){t.classList.toggle(r),t.classList.contains(r)?e.scrollTop=e.scrollHeight:e.scrollTop=0}i.scrollBtn.addEventListener("click",()=>B(i.scrollBtn,i.supportList,"isDown"));u($,i.supportList,C);function $(t){const{title:e,url:r,img:s}=t;return`
    <li class="support-item">
      <a
        class="support-link"
        target="_blank"
        rel="noopener noreferrer"
        arial-label="${e}"
        href="${r}"
      >
        <img class="support-img" src="./img/support/${s}.png" alt="${e}" />
      </a>
    </li>`}console.log("pop up");
//# sourceMappingURL=main-2806440a.js.map
