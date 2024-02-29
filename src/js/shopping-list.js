import './header';
import './pagination';
import './support-section';
import LocalStorage from './helpers/localStorageHelper';
import renderMarkup from './helpers/renderMarkup';
import shoppingListTemplate from './template/shoppingListTemplate';
import { refs } from './refs';
import { createPagination } from './pagination';
const storeName = 'cart';
const data = LocalStorage.get(storeName);
let pag;

function renderItem() {
  refs.shoppingListMain.innerHTML = '';
  const data = LocalStorage.get(storeName);
  const isStorageEmpty = !data || !data.length;
  if (isStorageEmpty) {
    refs.shoppingEmpty.classList.remove('hidden');
  } else {
    refs.shoppingText.style.marginBottom = '40px';
    refs.shoppingEmpty.classList.add('hidden');
    pag = createPagination(refs.shoppingListMain, data);
    pag.movePageTo(pag.getCurrentPage());
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
    /*    let currentPage = pag.getCurrentPage();
    pag.on(filteredBooks.length);

    pag.movePageTo(currentPage); */
    if (filteredBooks.length / pag._options.itemsPerPage <= 1) {
      pag._view._containerElement.style.display = 'none';
      let currentPage = pag.getCurrentPage();
      pag.reset(filteredBooks.length);
      pag.movePageTo(currentPage);
    }
    item.remove();
  }
}
renderItem();
//hide aside
if (window.innerWidth < 1440) {
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
