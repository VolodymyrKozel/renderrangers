import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import '../css/pagination.css';

import { renderItem } from './shopping-list'

export function createPagination(totalItems) {
  const pagContainer = document.querySelector('#tui-pagination-container');
  let visiblePages = 2;
  let itemsPerPage = 4;
  if (window.innerWidth >= 768) {
    visiblePages = 3;
    itemsPerPage = 3;
  }

  const options = {
    totalItems,
    itemsPerPage,
    visiblePages,
    centerAlign: true,
  };
  const pagination = new Pagination(pagContainer, options);

  pagination.on('afterMove', event => {
    const currentPage = event.page;
    onPageChange(currentPage);
  });

  return pagination;
}

function onPageChange(totalItems) {
 renderItem(totalItems);
}

// const shoppingList = localStorage.getItem('shoppingList');
// console.log(shoppingList);
// const listObj = JSON.parse(shoppingList);

// const shoppingListArr = Object.keys(listObj);
// console.log(shoppingListArr);

// pagination.on('beforeMove', event => {
//   if (shoppingListArr.length / itemsPerPage <= 1) {
//     return;
//   }

//   const currentPage = event.page;

//   getBookById(
//     shoppingListArr.slice(
//       (currentPage - 1) * itemsPerPage,
//       currentPage * itemsPerPage
//     )
//   );
// });

// pagination.movePageTo(1);
