const checkboxInput = document.querySelector('.checkbox-input');
const body = document.body;

checkboxInput.addEventListener('change', function () {
  if (checkboxInput.checked) {
    body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark-theme');
  } else {
    body.classList.remove('dark-theme');
    localStorage.setItem('theme', '');
  }
});
window.onload = setActive;
function setActive() {
  let theme = localStorage.getItem('theme');
  if (theme === 'dark-theme') {
    body.classList.add(theme);
    checkboxInput.checked = true;
  }
  const aObj = document.querySelector('.header-nav').getElementsByTagName('a');
  for (let i = 0; i < aObj.length; i++) {
    if (document.location.href.indexOf(aObj[i].href) >= 0) {
      aObj[i].classList.add('active');
      console.log(document.location.href);
    }
  }
}

const burgerMenuBtn = document.querySelector('.burger-menu-btn');
const mobilMenu = document.querySelector('.mobile-menu-container');
burgerMenuBtn.addEventListener('click', function () {
mobilMenu.classList.add('open-menu');
});