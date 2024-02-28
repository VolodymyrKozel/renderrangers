export default function templateList({
  _id,
  list_name,
  author,
  title,
  book_image,
  description,
  buy_links,
}) {
  return `<li class="shopping-item" data-id="${_id}">
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
