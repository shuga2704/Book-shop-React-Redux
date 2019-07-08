/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Container, Card } from 'semantic-ui-react';
import Menu from './Menu';
import BookCard from './BookCard';
import Filter from '../containers/Filter';

class App extends Component {
  componentWillMount() {
    const { setBooksAction } = this.props;
    axios.get('/books.json').then((response) => {
      setBooksAction(response.data);
    });
  }

  render() {
    const { booksList, isReady } = this.props;
    return (
      <Fragment>
        <Menu />
        <Container>
          <Filter />
          <Card.Group itemsPerRow={4}>
            {!isReady ? 'Загрузка...' : booksList.map(book => (
              <BookCard key={book.id} {...book} />
            ))}
          </Card.Group>
        </Container>
      </Fragment>
    );
  }
}

export default App;
