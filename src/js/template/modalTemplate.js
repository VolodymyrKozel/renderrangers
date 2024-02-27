import renderMarkup from '../helpers/renderMarkup';
export default function modalTemplate(isAdded,{
  _id,
  book_image,
  title,
  author,
  description,
  buy_links,
}) {
  return `
  <section class="modalmenu">
      <button type="button" id="modal-close-id" class="close-button modal-close-button" width="28" height="28">
      <svg class="close-icon" width="24" height="24">
        <use src="./img/icons/icons.svg#icon-x-close"></use>
      </svg>
    </button>
  <div class="modal-container">
  <img src="${book_image}" class="modal-image">
    <div class="modal-wrap">
      <h2 class="modal-title">${title}</h2>
      <p class="modal-author">${author}</p>
      <p class="description">${description}</p>
        <ul class="buy-links-list">
      ${renderMarkup(buyLinksTemplate, buy_links.slice(0, 2))}
        </ul>       
    </div>
  </div>
   <button class="modal-list-button" type="button" id="modal-list-button-id" data-role="add" data-id="${_id}">
      add to shopping list'
    </button>
    </section>
`;
}

function buyLinksTemplate({ name, url }) {
  return `
    <li class="buy-links-item">
    <a target="_blank" rel="noopener noreferrer" aria-label="${name}" href=${url}>
      <img src="./img/${name
        .split(' ')[0]
        .toLowerCase()}-1x.png"  srcset="./img/${name
    .split(' ')[0]
    .toLowerCase()}-2x.png 2x" alt="${name}" class="platform-image">
</a>
</li>
`;
}
