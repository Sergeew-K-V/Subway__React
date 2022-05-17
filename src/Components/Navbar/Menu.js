import React from 'react'

function Menu({ category, setCategory }) {
  const arrayOfCategory = [
    { cat: 'sandwich', name: 'Сендвичи' },
    { cat: 'pizza', name: 'Пицца' },
    { cat: 'shaurma', name: 'Шаурма' },
    { cat: 'burger', name: 'Бургеры' },
    { cat: 'chicken', name: 'Курица & Картофель' },
    { cat: 'salads', name: 'Тортилья & Салаты' },
    { cat: 'drinks', name: 'Напитки & Десерты' },
  ]
  return (
    <ul className='navbar__menu' id='menu__subRoot'>
      {arrayOfCategory.map((el) => {
        return (
          <li
            key={el.cat}
            onClick={() => setCategory(el.cat)}
            className={category === el.cat ? 'menu__item selected' : 'menu__item'}
          >
            {el.name}
          </li>
        )
      })}
    </ul>
  )
}

export default Menu
