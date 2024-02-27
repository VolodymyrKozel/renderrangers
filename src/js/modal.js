import { getDataBooks } from './Api/uBooksApi';
import LS from './helpers/localStorageHelper';
import modalTemplate from './template/modalTemplate';

const body = document.querySelector('body');
const modalBackdrop = document.querySelector('.backdrop');
modalBackdrop.addEventListener('click', handleClickModal);
const currentBook = [];
let isAdded = true;

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
  localStorage.setItem('currentBook', JSON.stringify(book));
  currentBook.push(book)
  modalBackdrop.style.display = 'flex';
  body.style.overflow = 'hidden';
  modalBackdrop.innerHTML = '';
  modalBackdrop.insertAdjacentHTML('afterbegin', modalTemplate(isAdded, book));
  //chack if exist then delete
  console.log(checkLS('cart'));

}
function checkLS(storeName) {
  let existingEntries = JSON.parse(localStorage.getItem(storeName));
  if (existingEntries == null) return false;
  if (currentBook.find(item => item.id === JSON.parse(localStorage.getItem('cart')).id) === true) {return true;}else {return false}

}
function addEntry(storeName) {
  // Parse any JSON previously stored in allEntries
  let existingEntries = JSON.parse(localStorage.getItem(storeName));
  if (existingEntries == null) {
    existingEntries = [];
  }
  existingEntries.push(currentBook);
  localStorage.setItem(storeName, JSON.stringify(existingEntries));
}
function deleteEntry(id , storeName) {
  let existingEntries = JSON.parse(localStorage.getItem(storeName));
  const newEntries = existingEntries.filter(item => item.id !== id);
  localStorage.setItem(storeName, JSON.stringify(newEntries));
}
function handleClickModal(e) {
  if (e.target.id === 'modal-list-button-id') {
    if (isAdded) {
      addEntry('cart');
      //set to store
      e.target.textContent = "add to shopping list"
      isAdded = false
    } if (isAdded === false) {
      deleteEntry(e.target.dataset.id, 'cart')
      //del from store
      isAdded = true;
        e.target.textContent = "remove from the shopping list"
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
