import { getDataBooks } from './Api/uBooksApi';
import LS from './helpers/localStorageHelper';
import modalTemplate from './template/modalTemplate';

const body = document.querySelector('body');
const modalBackdrop = document.querySelector('.backdrop');
modalBackdrop.addEventListener('click', handleClickModal);

// Open modalmenu
export async function getBookById(id) {
  const data = await getDataBooks(id);
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
}
function checkLS(id, storeName) {
  let existingEntries = JSON.parse(localStorage.getItem(storeName));
  if (existingEntries == null) return;
  if (existingEntries.find(item => item.id == id)) {
    console.log('show delete button');
  }
}
function addEntry(book, storeName) {
  // Parse any JSON previously stored in allEntries
  let existingEntries = JSON.parse(localStorage.getItem(storeName));
  if (existingEntries == null) {
    existingEntries = [];
  }
  /*   console.log('filter');
  console.log(existingEntries.filter(item => item.id !== id));
  console.log('find');
  console.log(existingEntries.find(item => item.id == id)); */
  /*   var entry = {
    id: id,
  }; */
  existingEntries.push(book);
  localStorage.setItem(storeName, JSON.stringify(existingEntries));
}
function deleteEntry(id, storeName) {
  let existingEntries = JSON.parse(localStorage.getItem(storeName));
  const newEntries = existingEntries.filter(item => item.id !== id);
  localStorage.setItem(storeName, JSON.stringify(newEntries));
}
function handleClickModal(e) {
  if (e.target.id === 'modal-list-button-id') {
    if (e.target.dataset.role === 'add') {
      console.log(data);
      addEntry(e.target.dataset.id, 'cart');
    } else {
      deleteEntry(e.target.dataset.id, 'cart');
    }
  }

  if (e.target.tagName === 'svg') {
    closeModal();
  }
  if (e.target.id === 'mBackdrop') {
    closeModal();
  }
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
}

//Shopping list
function toggleShoppingList(id, storeName) {
  const listButton = document.querySelector('.modal-list-button');
  const buttonText = listButton.textContent.trim();
  const storedData = localStorage.getItem(storeName);
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
  localStorage.setItem(storeName, JSON.stringify(shoppingList));
}

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
