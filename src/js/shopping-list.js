import './header';
import './pagination';
import LocalStorage from './helpers/localStorageHelper';
import renderMarkup from './helpers/renderMarkup';
import shoppingListTemplate from './template/shoppingListTemplate';
import { refs } from './refs';
import { createPagination } from './pagination';
const storeName = 'cart';

function renderItem() {
  refs.shoppingListMain.innerHTML = '';
  const data = LocalStorage.get(storeName);
  const isStorageEmpty = !data || !data.length;
  if (isStorageEmpty) {
    refs.shoppingEmpty.classList.remove('hidden');
  } else {
    refs.shoppingText.style.marginBottom = '40px';
    refs.shoppingEmpty.classList.add('hidden');
    createPagination(refs.shoppingListMain, data);
    /*     const books = renderMarkup(shoppingListTemplate, data);
    refs.shoppingListMain.innerHTML = books; */
    const listOfBook = document.querySelector('.js-shopping-main');
    listOfBook.addEventListener('click', handleDeleteClick);
  }
}

function handleDeleteClick(e) {
  if (
    e.target.tagName === 'BUTTON' ||
    e.target.tagName === 'svg' ||
    e.target.tagName === 'use'
  ) {
    const item = e.target.closest('.shopping-item');
    const booksInCart = LocalStorage.get(storeName);
    const filteredBooks = booksInCart.filter(
      ({ _id }) => _id !== item.dataset.id
    );
    localStorage.setItem(storeName, JSON.stringify(filteredBooks));
    createPagination(refs.shoppingListMain, filteredBooks, 'uptate');
    item.remove();
  }
}
renderItem();
//hide aside
if (window.innerWidth < 1440) {
  console.log('1440');
  document.querySelector('.aside').style.display = 'none';
}

/* function removeItem(itemId) {
  let data = LocalStorage.get('cart');
  const itemIndex = data.findIndex(item => item._id === itemId);
  if (itemIndex !== -1) {
      data.splice(itemIndex, 1);
      LocalStorage.set('cart', data);
      renderItem();
  }
}

function isDeleteBtnClick(e) {
  const isDeleteBtn = e.target.classList.contains('delete-shopping-item-btn') ||
    e.target.closest('.trash-btn-icon');
  if (isDeleteBtn) {
      const itemId = e.target.closest('.shopping-item').id;
      removeItem(itemId);
  }
} */
