import LocalStorage from "./helpers/localStorageHelper";
import renderMarkup from "./helpers/renderMarkup";
import { refs } from "./refs";

function templateList({
  _id,
  list_name,
  author,
  title,
  book_image,
  description,
  buy_links,
}) {
  return `<li class="shopping-item" id="${_id}">
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
                  data-id="${_id}"
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
          </ul>`
}

function renderItem() {
  refs.shoppingListMain.innerHTML = '';
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