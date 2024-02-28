console.log('category-card');
import { getDataBooks } from './Api/uBooksApi';
import animatedCardsFunction from './helpers/animatedCard';
import renderMarkup from './helpers/renderMarkup';
import { getBookById } from './modal';
import { refs } from './refs';

refs.mainContainer.addEventListener('click', handleMain);

// Функція для отримання та відображення книг категорій
export const getCategoryBooks = async params => {
  // Очистіть контейнер перед вставкою нових даних категорій
  refs.mainContainer.innerHTML = '';

  // Вставте завантажувач
  const loaderHTML = '<div class="loader"></div>';
  refs.mainContainer.insertAdjacentHTML('afterbegin', loaderHTML);

  try {
    // Отримайте дані книг категорій з сервера
    const categoryBooks = await getDataBooks('category', params);

    // Видаліть завантажувач
    const loader = document.querySelector('.loader');
    if (loader) {
      loader.remove();
    }

    // Вставте назву категорії на сторінку
    const categoryName = categoryBooks[0].list_name;
    refs.mainContainer.insertAdjacentHTML(
      'afterbegin',
      booksCategoryTemplate(categoryName, categoryBooks)
    );

    // Застосуйте анімацію до карток
    const animatedCards = document.querySelectorAll('.sellers-item');
    animatedCardsFunction(animatedCards);
  } catch (error) {
    console.error('Помилка при отриманні книг категорій:', error);
  }
};

function handleMain(e) {
  const id = e.target.closest('.sellers-item').dataset.id;
  getBookById(id);
}

// Функція для створення розмітки для назви категорії
function booksCategoryTemplate(categoryName, categoryBooks) {
  const words = categoryName.split(' ');
  const lastWord = words.pop();
  words.push(`<span class="accent">${lastWord}</span>`);

  return `
    <section class="seller-section">
      <h1 class="section-title category-card-title">${words.join(' ')}</h1>
      <ul class="sellers-exclude flex-wrap">${renderMarkup(
        booksTemplate,
        categoryBooks
      )}</ul>
    </section>
  `;
}

// Функція для створення розмітки для окремої книги
function booksTemplate({ book_image, title, author, _id }) {
  return `
    <li class="sellers-item" data-id="${_id}">
      <div class="book-image-wrapper">
        <img class="book-image"
        src="${book_image}"
        alt="${title}"
        >
      </div>
      <h3 class="book-title">${title}</h3>
      <p class="book-author">${author}</p>
    </li>
  `;
}
