<<<<<<< shopping-list-2
import LocalStorage from "./helpers/localStorageHelper";
import renderMarkup from "./helpers/renderMarkup";
import { refs } from "./refs";
=======
import './header';
import './pagination';
import { getDataBooks } from './Api/uBooksApi';
import LocalStorage from './helpers/localStorageHelper';
import renderMarkup from './helpers/renderMarkup';
import { refs } from './refs';
const storeName = 'cart';
// async function getBookById(id) {
//   const data = await getDataBooks(id);
//   const books = [];
//   LocalStorage.has('cart') ? books.push(LocalStorage.get('cart')) : LocalStorage.set('cart', books);
//   books.push(data);
//   LocalStorage.set('cart', books);
// }

// getBookById('643282b1e85766588626a0dc');
// getBookById('643282b1e85766588626a0ae');
>>>>>>> main

function templateList({
  _id,
  list_name,
  author,
  title,
  book_image,
  description,
  buy_links,
}) {
<<<<<<< shopping-list-2
  return `<li class="shopping-item" id="${_id}">
=======
  return `<li class="shopping-item" data-id="${_id}">
>>>>>>> main
            <img
              class="shopping-img"
              src="${book_image}"
              alt="${title}"
            />
            <div class="shopping-wrap">
              <div class="heading-info">
                <div class="title-container">
                  <h2 class="title-book">
                    ${title}
                  </h2>
                  <p class="category-book">${list_name}</p>
                </div>
                <button
                  class="delete-shopping-item-btn"
                  
                >
                  <svg class="trash-btn-icon" height="16" width="16">
                    <use href="../img/icons/icons.svg#icon-trash"></use>
                  </svg>
                </button>
              </div>
              <p class="descr-shopping">${description}</p>
              <div class="author-info-container">
                <p class="author-info">${author}</p>
                ${murkupLinks(buy_links)}
              </div>
            </div>
          </li>`;
}

function murkupLinks(buy_links) {
  const amazon = buy_links.find(elem => elem.name === 'Amazon').url;
  const appleBook = buy_links.find(elem => elem.name === 'Apple Books').url;
  return `<ul class="shop-link-list">
              <li class=""shop-link-item>
                <a class="shop-link-amazon" href="${amazon}" target="_blank">
                   <img src="../img/amazon-1x.png" srcset="../img/amazon-2x.png 2x" alt="Amazon" class="amazon-image">
                </a>
              </li>
              <li class=""shop-link-item>
                <a class="shop-link-amazon" href="${appleBook}" target="_blank">
                    <img src="../img/apple-1x.png" srcset="../img/apple-2x.png 2x" alt="Apple-books" class="apple-books-image">
                </a>
              </li>
          </ul>`;
}

function renderItem() {
  refs.shoppingListMain.innerHTML = '';
<<<<<<< shopping-list-2
  let data = LocalStorage.get('cart');
  const isStorageEmpty = !data || !data.length;
  if (isStorageEmpty) {
      refs.shoppingEmpty.classList.remove('hidden');
  } else {
      refs.shoppingText.style.marginBottom = '40px';
      refs.shoppingEmpty.classList.add('hidden');
      const books = renderMarkup(templateList, data);
      refs.shoppingListMain.innerHTML = books;
  }
}
 
renderItem();

function removeItem(itemId) {
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
}

refs.shoppingListMain.addEventListener('click', isDeleteBtnClick);
=======
  let data = LocalStorage.get(storeName);

  const isStorageEmpty = !data || !data.length;
  if (isStorageEmpty) return;

  refs.shoppingText.style.marginBottom = '40px';
  refs.shoppingEmpty.classList.add('hidden');
  const books = renderMarkup(templateList, data);
  refs.shoppingListMain.innerHTML = books;
  const listOfBook = document.querySelector('.js-shopping-main');
  console.log(listOfBook);
  listOfBook.addEventListener('click', handleDeleteClick);
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
    item.remove();
  }
}

renderItem();

//hide aside
if (window.innerWidth < 1440) {
  console.log('1440');
  document.querySelector('.aside').style.display = 'none';
}
>>>>>>> main
