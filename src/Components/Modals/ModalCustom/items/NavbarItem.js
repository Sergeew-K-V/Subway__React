import React from 'react'
import ClassNames from 'classnames'
import { useSelector, useDispatch } from 'react-redux'
import {
  incrementCurrentPage,
  decrementCurrentPage,
  changeCurrentPageByAmount,
} from '../../../../redux/currentPageState'

export default function NavbarItem({ text, counter }) {
  const currentPage = useSelector((state) => {
    return state.currentPageEntity.value
  })
  const dispath = useDispatch()

  const styles = ClassNames({
    navbar__item: true,
    selected: currentPage === counter,
  })

  return (
    <li
      // className={currentPage === counter ? 'navbar__item selected' : 'navbar__item'}
      className={styles}
      onClick={(e) => {
        // setCurrentPage(Number(e.target.id.slice(-1)))
        dispath(changeCurrentPageByAmount(Number(e.target.id.slice(-1))))
      }}
      id={'navbar-item-' + counter}
    >
      {text}
    </li>
  )
}
