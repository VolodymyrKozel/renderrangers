
import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.css';

const pagContainer = document.querySelector('#pagination');
const options = {
  itemsPerPage: 4,
  visiblePages: 2,
  page: 1,
  centerAlign: true,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-button">{{page}}</a>',
    currentPage:
      '<strong class="tui-page-button tui-is-selected">{{page}}</strong>',
    moreButton:
      '<a href="#" class="tui-page-button tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};

export const pagination = new Pagination(pagContainer, options);
