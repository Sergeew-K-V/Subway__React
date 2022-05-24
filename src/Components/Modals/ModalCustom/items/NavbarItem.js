import React from 'react'
import ClassNames from 'classnames'
import { useSelector, useDispatch } from 'react-redux'
import { changeCurrentPageByAmount } from '../../../../redux/modalCustomState'

export default function NavbarItem({ text, counter }) {
  const currentPage = useSelector((state) => {
    return state.modalCustomEntity.currentPage
  })
  const dispath = useDispatch()

  const styles = ClassNames({
    navbar__item: true,
    selected: currentPage === counter,
  })

  return (
    <li
      className={styles}
      onClick={(e) => {
        dispath(changeCurrentPageByAmount(Number(e.target.id.slice(-1))))
      }}
      id={'navbar-item-' + counter}
    >
      {text}
    </li>
  )
}
