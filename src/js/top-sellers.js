import { getDataBooks } from './Api/uBooksApi';
import { getLoader } from './helpers/loader';
import { refs } from './refs';
import { selectedCategory } from './category-list';

export const getTopBooksData = async () => {
  // розмітка секції
  refs.mainContainer.innerHTML = `
    <section class="seller-section">
      <h1 class="section-title">
        Best Sellers <span class="accent">Books</span>
      </h1>
    </section>`;

  //  створення контейнеру для даних з серверу
  const booksList = document.createElement('ul');
  booksList.classList.add('sellers-list');
  booksList.innerHTML = `<span class="loader"></span>`;
  const sellerSection = refs.mainContainer.querySelector('.seller-section');
  sellerSection.appendChild(booksList);
  // виводимо лоадер
  const loader = refs.mainContainer.querySelector('.loader');
  getLoader();

  try {
    const topBooks = await getDataBooks('top-books'); // запит на сервер
    const randomBooks = getRandomBooks(topBooks, 4); // вибираємо 4 випадкові книги
    renderTopBooks(booksList, randomBooks); // рендер розмітки

    // анімація завантаження на сторінку
    const animatedCards = document.querySelectorAll('.sellers-item');
    animatedCards.forEach(card => {
      card.classList.add('animation-items');
    });
    const disappearance = setTimeout(() => {
      animatedCards.forEach(card => {
        card.classList.remove('animation-items');
      });
    }, 500);

    // додаємо слухач
    booksList.addEventListener('click', selectedCategory);
  } catch (err) {
    console.error(err);
  }
};

// рендер сторінки
function renderTopBooks(booksList, topBooks) {
  const fragment = createMarkUp(topBooks);
  booksList.innerHTML = ''; // очищення вмісту перед додаванням нового
  booksList.appendChild(fragment); // додавання фрагменту до DOM
}

// дефолтне завантаження сторінки
getTopBooksData();

//  функція для рандомного вибору 4 категорій з масиву книг
function getRandomBooks(books, count) {
  const randomIndexes = [];

  while (randomIndexes.length < count) {
    const randomIndex = Math.floor(Math.random() * books.length);
    if (!randomIndexes.includes(randomIndex)) {
      randomIndexes.push(randomIndex);
    }
  }

  return randomIndexes.map(index => books[index]);
}

// створення розмітки категорій книг
function createMarkUp(results) {
  const fragment = document.createDocumentFragment();

  results.forEach(({ list_name, books }) => {
    const li = document.createElement('li');
    li.className = 'sellers-category';
    li.innerHTML = `
      <h2 class="sellers-category-title">${list_name}</h2>
      <ul class="sellers-category-list">
        ${generateListItems(books)}
      </ul>
      <button class="sellers-button" type="button" data-name="${list_name}">See more</button>
    `;

    fragment.appendChild(li);
  });

  return fragment;
}

// створення розмітки однієї книги
function generateListItems(books) {
  let items = '';
  const screenSize = getScreenSize(); // визначення розміру екрану
  const maxItems =
    screenSize === 'desktop' ? 5 : screenSize === 'tablet' ? 3 : 1; // визначення кількості айтемів

  for (let i = 0; i < maxItems && i < books.length; i++) {
    const { book_image, title, author, _id } = books[i];
    items += `
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

  return items;
}

// визначення розмірів екрану
function getScreenSize() {
  const screenWidth = window.innerWidth;
  if (screenWidth < 768) {
    return 'mobile';
  } else if (screenWidth < 1440) {
    return 'tablet';
  } else {
    return 'desktop';
  }
}

// визначення кількості елементів залежно від розміру екрану
function getBooksCountByScreenSize(screenSize) {
  switch (screenSize) {
    case 'mobile':
      return 1; // один елемент на мобільному
    case 'tablet':
      return 3; // три елементи на планшеті
    case 'desktop':
    default:
      return 5; // п'ять елементів на десктопі
  }
}
