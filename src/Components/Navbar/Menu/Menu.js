import React from 'react'
import { arrayOfCategory } from './staticOfMenu'

function Menu({ category, setCategory }) {
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
