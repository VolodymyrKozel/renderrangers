import { refs } from './refs';
import { getDataBooks } from './Api/uBooksApi';
/*
refs.categoryListElem.addEventListener('click', selectedCategory);

function selectedCategory(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return; // користувач клікнув між кнопками
  }
  const categoryName = e.target;
  categoryName.classList.add('active');
  if (
    categoryName.textContent === 'ALL CATEGORIES' &&
    !categoryName.classList.contains('active')
  ) {
    // create function where using method foreach remove active
    //then add class active for button
    //use localstorage for saving active item
    getData();
  }
}

function categoryTemplate({ list_name }) {
  return `<li class="category-list">
      <button class="category-button" type="button">${list_name}</button>
    </li>`;
}
function categoriesTemplate(categoryList) {
  return categoryList.map(categoryTemplate).join('');
}
function renderCategories(categoryList) {
  const markup = categoriesTemplate(categoryList);

  refs.categoryListElem.insertAdjacentHTML('beforeend', markup);
}
*/
//aсинхронна функція чекає на відповідь з сервера
const getData = async () => {
  //run loading написати загрузку

  // чекаємо на дані
  const cat = await getDataBooks('category-list');
  cat.unshift({ list_name: 'ALL CATEGORIES' });
  // малюємо дані на сторінці
  /* renderCategories(cat); */
  console.log(cat);
};
getData();
console.log('category-list');