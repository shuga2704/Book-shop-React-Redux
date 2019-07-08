/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const BookCard = ({ title, author, price, image }) => (
  <Card>
    <Image src={image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{title}</Card.Header>
      <Card.Meta>
        <span className="date">{author}</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      {price}
      руб.
    </Card.Content>
  </Card>
);

export default BookCard;
