import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import '../css/pagination.css';


const pagContainer = document.querySelector('#tui-pagination-container');

let visiblePages = 2;
let itemsPerPage = 4;
if (window.innerWidth >= 768) {
  visiblePages = 3;
  itemsPerPage = 3;
}

const shoppingList = localStorage.getItem('cart');
console.log(shoppingList);
const shoppingListArr = JSON.parse(shoppingList);

// const shoppingListArr = Object.keys(listObj);
console.log(shoppingListArr);

const options = {
  totalItems: shoppingListArr.length,
  itemsPerPage,
  visiblePages,
};

export const pagination = new Pagination(pagContainer, options);

// pagination.on('beforeMove', event => {
//   if (shoppingListArr.length / itemsPerPage <= 1) {
//     return;
//   }

//   const currentPage = event.page;

//   renderItem(
//     shoppingListArr.slice(
//       (currentPage - 1) * itemsPerPage,
//       currentPage * itemsPerPage
//     )
//   );
// });

pagination.on('afterMove', event => {
  const currentPage = event.page;
  console.log(currentPage);
});

pagination.movePageTo(1);
