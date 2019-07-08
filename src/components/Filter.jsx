/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prop-types */
import React from 'react';
import { Menu, Input } from 'semantic-ui-react';

const Filter = ({
  setFilterAction, setQueryAction, filterBy, searchQuery,
}) => {
  const handleChange = (e) => {
    setQueryAction(e.target.value);
  };
  return (
    <Menu secondary>
      <Menu.Item
        active={filterBy === 'all'}
        onClick={setFilterAction.bind(this, 'all')}
      >
        Все
      </Menu.Item>
      <Menu.Item
        active={filterBy === 'price_high'}
        onClick={setFilterAction.bind(this, 'price_high')}
      >
        Дорогие
      </Menu.Item>
      <Menu.Item
        active={filterBy === 'price_low'}
        onClick={setFilterAction.bind(this, 'price_low')}
      >
        Дешевые
      </Menu.Item>
      <Menu.Item
        active={filterBy === 'author'}
        onClick={setFilterAction.bind(this, 'author')}
      >
        Автор
      </Menu.Item>
      <Menu.Item>
        <Input
          icon="search"
          value={searchQuery}
          placeholder="Поиск..."
          onChange={handleChange}
        />
      </Menu.Item>
    </Menu>
  );
};

export default Filter;
