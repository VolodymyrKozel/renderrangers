import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import '../css/pagination.css';

export function createPagination(totalItems) {
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
    totalItems,
    itemsPerPage,
    visiblePages,
    centerAlign: true,
  };

  // створення пагінації
  const pagination = new Pagination(pagContainer, options);

  // слухач переходу по сторінках
  pagination.on('afterMove', event => {
    const currentPage = event.page;
    onPageChange(currentPage);
  });

  return pagination;
}

// функція для рендеру і переходу по сторінках
function onPageChange(totalItems) {
  //  renderItem(totalItems);
}

// тест
createPagination(20);
