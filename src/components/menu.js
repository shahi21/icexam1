import React from 'react';

const Menu = () => {
  const menuItems = [
    {
      name: 'Cheeseburger',
      price: '$9.99',
    },
    {
      name: 'Margherita Pizza',
      price: '$12.99',
    },
    {
      name: 'Grilled Chicken Salad',
      price: '$8.99',
    },
    {
      name: 'Pasta Carbonara',
      price: '$11.99',
    },
    {
      name: 'Fish and Chips',
      price: '$10.99',
    },
    {
      name: 'Vegetable Stir-Fry',
      price: '$9.49',
    },
  ];

  return (
    <div>
      <h2>Menu</h2>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>
            <span>{item.name}</span>
            <span>{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
