import { getDataBooks } from './Api/uBooksApi';
import renderMarkup from './helpers/renderMarkup';
import LS from './helpers/localStorageHelper';

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
}
function addEntry(id, storeName) {
  // Parse any JSON previously stored in allEntries
  var existingEntries = JSON.parse(localStorage.getItem(storeName));
  if (existingEntries == null) {
    existingEntries = [];
  } else if (existingEntries.find(item => item.id == id)) {
    const del = existingEntries.filter(item => item.id !== id);
    localStorage.setItem(storeName, JSON.stringify(del));
  } else {
    var entry = {
      id: id,
    };
    /*   if (existingEntries !== []) */
    /* localStorage.setItem(storeName, JSON.stringify(entry)); */
    // Save allEntries back to local storage
    existingEntries.push(entry);
    localStorage.setItem(storeName, JSON.stringify(existingEntries));
  }
}
function handleClickModal(e) {
  if (e.target.nodeName !== 'BUTTON') {
    console.log(e.target);
    return; // користувач клікнув між кнопками
  }
  console.log(e.target);
  if (e.target.id === 'modal-list-button-id') {
    addEntry(e.target.dataset.id, 'cart');
  }
  //use localstorage for saving active item
  // виводимо лоадер

  if (e.target.id == 'modal-close-id') {
    closeModal();
    console.log('x');
    //use localstorage for saving active item
    // виводимо лоадер
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

//////

//Close modalmenu
/* document.addEventListener('DOMContentLoaded', function () {
  closeModalButton.addEventListener('click', function () {
    closeModal();
  });

  modalBackdrop.addEventListener('click', function (event) {
    if (event.target === modalBackdrop) {
      closeModal();
    }
  });
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

//template

function modalTemplate({
  _id,
  book_image,
  title,
  author,
  description,
  buy_links,
}) {
  return `
  <section class="modalmenu">
      <button type="button" id="modal-close-id" class="close-button modal-close-button">
      <svg class="close-icon" width="24" height="24">
        <use src="./img/icons/icons.svg#icon-x-close"></use>
      </svg>
    </button>
  <div class="modal-container">
  <img src="${book_image}" class="modal-image">
    <div class="modal-wrap">
      <h2 class="modal-title">${title}</h2>
      <p class="modal-author">${author}</p>
      <p class="description">${description}</p>
        <ul class="buy-links-list">
      ${renderMarkup(buyLinksTemplate, buy_links.slice(0, 2))}
        </ul>       
    </div>
  </div>
   <button type="button" id="modal-list-button-id" data-id="${_id}">
      Add this book to shopping list
    </button>
    </section>
`;
}
function buyLinksTemplate({ name, url }) {
  return `
    <li class="buy-links-item">
    <a target="_blank" rel="noopener noreferrer" aria-label="${name}" href=${url}>
      <img src="./img/${name.split(' ')[0]}-1x.jpg"  srcset="./img/${
    name.split(' ')[0]
  }-2x.png 2x" alt="${name}" class="platform-image">
</a>
</li>
`;
}
