import { getDataBooks } from './Api/uBooksApi';
import LS from './helpers/localStorageHelper';
import modalTemplate from './template/modalTemplate';

const body = document.querySelector('body');
const modalBackdrop = document.querySelector('.backdrop');
modalBackdrop.addEventListener('click', handleClickModal);
/* const closeModalButton = document.querySelector('.modal-close-button'); */
/* const listButton = document.querySelector('.modal-list-button'); */

// Open modalmenu
export async function getBookById(id) {
  const data = await getDataBooks(id);
  console.log(data);
  createModal(data);
  document.addEventListener('keydown', escapeCloseModal);
  /*   listButton.addEventListener('click', function () {
    toggleShoppingList(id);
    listButton.blur();
  }); */
}
function createModal(book) {
  modalBackdrop.style.display = 'flex';
  body.style.overflow = 'hidden';
  modalBackdrop.innerHTML = '';
  modalBackdrop.insertAdjacentHTML('afterbegin', modalTemplate(book));
  checkLS(book._id, 'cart');
  console.log(book._id);
}
function checkLS(id, storeName) {
  let existingEntries = JSON.parse(localStorage.getItem(storeName));
  if (!existingEntries == null) return;
  if (existingEntries.find(item => item.id == id)) {
    console.log('show delete button');
  }
}
function addEntry(id, storeName) {
  // Parse any JSON previously stored in allEntries
  let existingEntries = JSON.parse(localStorage.getItem(storeName));
  if (existingEntries == null) {
    existingEntries = [];
  }
  console.log('filter');
  console.log(existingEntries.filter(item => item.id !== id));
  console.log('find');
  console.log(existingEntries.find(item => item.id == id));
  var entry = {
    id: id,
  };
  existingEntries.push(entry);
  localStorage.setItem(storeName, JSON.stringify(existingEntries));
}
function handleClickModal(e) {
  console.log(e.target);
  if (e.target.id === 'modal-list-button-id') {
    addEntry(e.target.dataset.id, 'cart');
  }
  //use localstorage for saving active item
  // виводимо лоадер

  if (e.target.tagName === 'svg') {
    closeModal();
    console.log('x');
    //use localstorage for saving active item
    // виводимо лоадер
  }
  if (e.target.id === 'mBackdrop') {
    console.log('x');
    modalBackdrop.style.display = 'none';
    body.style.overflow = 'auto';
    closeModal();
  }
  if (e.target.nodeName !== 'BUTTON') {
    return; // користувач клікнув між кнопками
  }
}

//Shopping list
function toggleShoppingList(id) {
  const buttonText = listButton.textContent.trim();
  const storedData = localStorage.getItem('shoppingList');
  const shoppingList = JSON.parse(storedData) || {};

  if (buttonText === 'Add this book to shopping list') {
    shoppingList[id] = true;
    listButton.textContent = 'Remove this book from the shopping list';
  } else {
    if (shoppingList[id]) {
      delete shoppingList[id];
    }
    listButton.textContent = 'Add this book to shopping list';
  }
  localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
}

/* closeModalButton.addEventListener('click', function () {
  closeModal();
}); */
/* modalBackdrop.addEventListener('click', function (event) {
  if (event.target === modalBackdrop) {
    closeModal();
  }
}); */
function escapeCloseModal(event) {
  if (event.key === 'Escape') {
    closeModal();
    document.removeEventListener('keydown', escapeCloseModal);
  }
}

function closeModal() {
  modalBackdrop.style.display = 'none';
  body.style.overflow = 'auto';
}
