import { refs } from './refs';
import { getDataBooks } from './Api/uBooksApi';
import { getCategoryBooks } from './category-card';
import renderMarkup from './helpers/renderMarkup';
import { getTopBooksData } from './top-sellers';

refs.categoryListElem.addEventListener('click', selectedCategory);
function selectedCategory(e) {
  if (e.target.nodeName !== 'BUTTON' || e.target.classList.contains('active')) {
    return; // користувач клікнув між кнопками
  }
  refs.categoryListElem.querySelector('.active').classList.remove('active');
  const categoryName = e.target;
  categoryName.classList.add('active');
  if (categoryName.textContent === 'ALL CATEGORIES') {
    getTopBooksData();
  } else {
    getCategoryBooks({ category: categoryName.textContent });
  }
}
function categoryTemplate({ list_name, classButton = '' }) {
  return `<li class="category-list">
      <button class="category-button ${classButton}" type="button">${list_name}</button>
    </li>`;
}
//aсинхронна функція чекає на відповідь з сервера
const getData = async () => {
  //run loading написати загрузку
  try {
    // чекаємо на дані
    const cat = await getDataBooks('category-list');
    cat.unshift({ list_name: 'ALL CATEGORIES', classButton: 'active' });
    // малюємо дані на сторінці
    refs.categoryListElem.insertAdjacentHTML(
      'beforeend',
      renderMarkup(categoryTemplate, cat)
    );
  } catch (err) {
    console.error(err);
  }
};
getData();
