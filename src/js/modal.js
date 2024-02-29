import { getDataBooks } from './Api/uBooksApi';
import modalTemplate from './template/modalTemplate';

const body = document.querySelector('body');
const modalBackdrop = document.querySelector('.backdrop');
const storeName = 'cart';

// Open modalmenu
export async function getBookById(id) {
  const data = await getDataBooks(id);
  createModal(data);
  document.addEventListener('keydown', escapeCloseModal);
  modalBackdrop.addEventListener('click', handleClickModal);
}
function createModal(book) {
  modalBackdrop.style.display = 'flex';
  body.style.overflow = 'hidden';
  modalBackdrop.innerHTML = '';
  modalBackdrop.insertAdjacentHTML('afterbegin', modalTemplate(book));
  const btn = document.querySelector('.modal-list-button');
  const btnInfo = document.querySelector('.cart-info');
  btn.addEventListener('click', () => {
    const booksInCart = JSON.parse(localStorage.getItem(storeName)) || [];

    if (booksInCart.find(({ _id }) => _id === book._id)) {
      const updatedBooks = booksInCart.filter(({ _id }) => _id !== book._id);
      localStorage.setItem(storeName, JSON.stringify(updatedBooks));
      btn.textContent = 'Add to shopping list';
      btnInfo.classList.add('visually-hidden');
      btnInfo.textContent = '';
    } else {
      booksInCart.push(book);
      localStorage.setItem(storeName, JSON.stringify(booksInCart));
      btn.textContent = 'Remove from the shopping list';
      btnInfo.classList.remove('visually-hidden');
      btnInfo.textContent =
        'Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".';
    }
  });

  const booksInCart = JSON.parse(localStorage.getItem(storeName)) || [];
  booksInCart.find(({ _id }) => _id === book._id)
    ? (btn.textContent = 'Remove from the shopping list')
    : (btn.textContent = 'Add to shopping list');
}

function handleClickModal(e) {
  if (e.target.tagName === 'svg' || e.target.tagName === 'use') {
    closeModal();
  }
  if (e.target.id === 'mBackdrop') {
    closeModal();
  }
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
}

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
