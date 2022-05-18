import React from 'react'

export default function NavbarItem({ text, counter, currentPage, setCurrentPage }) {
  return (
    <li
      className={currentPage === counter ? 'navbar__item selected' : 'navbar__item'}
      onClick={(e) => {
        setCurrentPage(Number(e.target.id.slice(-1)))
      }}
      id={'navbar-item-' + counter}
    >
      {text}
    </li>
  )
}
