import React from 'react'
import ClassNames from 'classnames'
// classNames
export default function NavbarItem({ text, counter, currentPage, setCurrentPage }) {
  // npm -D i? npm i ?
  // {
  //   navbar__item: true,
  //   selected: currentPage === counter
  // }
  const styles = ClassNames({
    navbar__item: true,
    selected: currentPage === counter,
  })

  return (
    <li
      // className={currentPage === counter ? 'navbar__item selected' : 'navbar__item'}
      className={styles}
      onClick={(e) => {
        setCurrentPage(Number(e.target.id.slice(-1)))
      }}
      id={'navbar-item-' + counter}
    >
      {text}
    </li>
  )
}
