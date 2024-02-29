import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import '../css/pagination.css';
import renderMarkup from './helpers/renderMarkup';
import shoppingListTemplate from './template/shoppingListTemplate';
import LocalStorage from './helpers/localStorageHelper';

const storeName = 'cart';

export function createPagination(containerCart, currentBooks, page = 1) {
  // контейнер для пагінації
  const pagContainer = document.querySelector('#tui-pagination-container');

  // значення для різної ширини екрану
  let visiblePages = 2;
  let itemsPerPage = 4;
  if (window.innerWidth >= 768) {
    visiblePages = 3;
    itemsPerPage = 3;
  }
  // налаштування для ширини екрану
  const options = {
    totalItems: currentBooks.length,
    itemsPerPage,
    visiblePages,
    centerAlign: true,
  };
  if (currentBooks.length / itemsPerPage <= 1) {
    pagContainer.style.display = 'none';
  }
  // створення пагінації
  const pagination = new Pagination(pagContainer, options);

  // слухач переходу по сторінках
  pagination.on('beforeMove', event => {
    const currentPage = event.page;
    const booksOnPage = currentBooks.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
    const books = renderMarkup(shoppingListTemplate, booksOnPage);
    containerCart.innerHTML = books;
  });
  pagination.movePageTo(page);
  return pagination;
}

// тест
/* createPagination(20); */
