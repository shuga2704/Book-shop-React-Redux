import React from 'react';
import { Menu } from 'semantic-ui-react';

const MenuBlock = () => (
  <Menu>
    <Menu.Item
      name="editorials"
    >
      Магазин книг
    </Menu.Item>
    <Menu.Menu position="right">
      <Menu.Item name="reviews">
        Итого: 0 руб.
      </Menu.Item>
      <Menu.Item name="reviews">
        Корзина: 0
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

export default MenuBlock;
