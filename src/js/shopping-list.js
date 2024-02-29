import './header';
import './pagination';
import './support-section';
import LocalStorage from './helpers/localStorageHelper';
import renderMarkup from './helpers/renderMarkup';
import shoppingListTemplate from './template/shoppingListTemplate';
import { refs } from './refs';
import { createPagination } from './pagination';
const listOfBook = document.querySelector('.js-shopping-main');
const storeName = 'cart';
let pag;

function renderItem() {
  refs.shoppingListMain.innerHTML = '';
  const data = LocalStorage.get(storeName);
  const isStorageEmpty = !data || !data.length;
  if (isStorageEmpty) {
    refs.shoppingEmpty.classList.remove('hidden');
    listOfBook.style.display = 'none';
  } else {
    refs.shoppingText.style.marginBottom = '40px';
    refs.shoppingEmpty.classList.add('hidden');
    pag = createPagination(refs.shoppingListMain, data);
    listOfBook.addEventListener('click', handleDeleteClick);
  }
}
function handleDeleteClick(e) {
  if (
    e.target.tagName === 'BUTTON' ||
    e.target.tagName === 'svg' ||
    e.target.tagName === 'use'
  ) {
    const booksInCart = LocalStorage.get(storeName);

    const item = e.target.closest('.shopping-item');
    const filteredBooks = booksInCart.filter(
      ({ _id }) => _id !== item.dataset.id
    );
    localStorage.setItem(storeName, JSON.stringify(filteredBooks));
    item.remove();
    const isStorageEmpty = !filteredBooks || !filteredBooks.length;
    if (isStorageEmpty) {
      refs.shoppingEmpty.classList.remove('hidden');
      listOfBook.style.display = 'none';
    }
    let currentPage = pag.getCurrentPage();
    createPagination(refs.shoppingListMain, filteredBooks, currentPage);
  }
}
renderItem();
