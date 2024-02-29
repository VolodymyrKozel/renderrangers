const modal = document.querySelector('.modal-login-form');
const overlayLoginForm = document.querySelector('.overlayLoginForm');
const btnAuth = document.querySelector('.user-btn');
const btnAuthMom = document.querySelector('.mobile-menu-authorisation-btn');
const closeBtn = document.querySelector('.modal-login-form-close-btn');
const signUp = document.querySelector('.signUp');
const signIn = document.querySelector('.signIn');
const formIn = document.querySelector('.modal-login-in');
const formUp = document.querySelector('.modal-login-up');

function showModal() {
  modal.style.display = 'block';
  overlayLoginForm.style.display = 'block';
}

function hideModal() {
  modal.style.display = 'none';
  overlayLoginForm.style.display = 'none';
}

function addClickListener(element, callback) {
  if (element) {
    element.addEventListener('click', callback);
  }
}

addClickListener(btnAuth, showModal);
addClickListener(btnAuthMom, showModal);
addClickListener(closeBtn, hideModal);
addClickListener(overlayLoginForm, hideModal);
addClickListener(signUp, onSignUpClick);
addClickListener(signIn, onSignInClick);

window.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    hideModal();
  }
});

function onSignInClick() {
  signIn.classList.add('underline');
  signUp.classList.remove('underline');
  formIn.classList.remove('is-hidden');
  formUp.classList.add('is-hidden');
}

function onSignUpClick() {
  signUp.classList.add('underline');
  signIn.classList.remove('underline');
  formIn.classList.add('is-hidden');
  formUp.classList.remove('is-hidden');
}



