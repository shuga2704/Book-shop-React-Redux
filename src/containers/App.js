/* eslint-disable implicit-arrow-linebreak */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import orderBy from 'lodash/orderBy';
import * as setBooksAction from '../actions/books';
import App from '../components/App';

const sortBy = (books, filterBy, searchQuery) => {
  const booksAfterSearch = books.filter(obj =>
    obj.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
    || obj.author.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0);
  switch (filterBy) {
    case 'all':
      return booksAfterSearch;
    case 'price_high':
      return orderBy(booksAfterSearch, 'price', 'desc');
    case 'price_low':
      return orderBy(booksAfterSearch, 'price', 'asc');
    case 'author':
      return orderBy(booksAfterSearch, 'author', 'asc');
    default:
      return booksAfterSearch;
  }
};

const mapStateToProps = ({ books, filter }) => ({
  booksList: books.items && sortBy(books.items, filter.filterBy, filter.searchQuery),
  isReady: books.isReady,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(setBooksAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
