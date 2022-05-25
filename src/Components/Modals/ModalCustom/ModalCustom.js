import React, { useEffect, useState } from 'react'
import { useHttp } from '../../../hooks/http.hook'
import { mapping, navbarItems } from './staticOfModalCustom'
import NavbarItem from './items/NavbarItem'
import ModalLoader from './items/ModalLoader'
import ModalCustomCard from './items/ModalCustomCard'
import ModalCustomTotal from './items/ModalCustomTotal'
import ModalCustomFooterDefault from './items/ModalCustomFooterDefault'
import ModalCustomFooterTotal from './items/ModalCustomFooterTotal'

import { useSelector, useDispatch } from 'react-redux'
import {
  incrementCurrentPage,
  decrementCurrentPage,
  initCards,
} from '../../../redux/modalCustomState'

import chevronLeft from '../../../img/chevron-left-solid.svg'
import chevronRight from '../../../img/chevron-right-solid.svg'
import '../../../css/modal.css'

function ModalCustom({ setModalCustomActive }) {
  const currentPage = useSelector((state) => {
    return state.modalCustomEntity.currentPage
  })
  const customProduct = useSelector((state) => {
    return state.modalCustomEntity.customProduct
  })

  const arrayOfCards = useSelector((state) => {
    return state.modalCustomEntity.arrayOfCards
  })
  const { request } = useHttp()
  const dispath = useDispatch()

  // const [arrayOfCards, setArrayOfCards] = useState([])
  const [categoryFillings, setCategoryFillings] = useState('size')
  const [loading, setLoading] = useState(false)

  /**
   * @enum
   * @readonly
   */

  const compareCatAndCP = () => {
    setCategoryFillings(mapping[currentPage])
  }

  useEffect(() => {
    compareCatAndCP()
  }, [currentPage])

  useEffect(() => {
    if (currentPage !== 5) {
      setLoading(true)
      setTimeout(() => {
        getCards()
        setLoading(false)
      }, 500)
    }
  }, [categoryFillings])

  const getCards = async () => {
    try {
      const data = await request(`/fillings?category=${categoryFillings}`, 'GET')
      if (data !== undefined && data !== null) {
        // setArrayOfCards(data.fillings)
        dispath(initCards(data.fillings))
      }
    } catch (error) {}
  }

  return (
    <div className='modal-overlay' id='modal-overlay'>
      <div className='modal'>
        <div className='container-modal'>
          <div className='modal__block' id='modal-block'>
            <div className='modal__header'>
              <span>Выберите размер сендвича</span>
              <div className='modal__close' onClick={() => setModalCustomActive(false)}>
                <span></span>
              </div>
            </div>
            <div className='modal__body' id='place-for-modal-content'>
              <div className='body__navbar'>
                <ul className='body__navbar-section'>
                  {navbarItems.map((el) => (
                    <NavbarItem
                      key={el.counter}
                      text={el.text}
                      counter={el.counter}
                      currentPage={currentPage}
                    ></NavbarItem>
                  ))}
                </ul>
              </div>
              <div
                className={
                  currentPage === 0
                    ? 'modal__btn-list hiddenBack'
                    : 'modal__btn-list' && currentPage === 5
                    ? 'modal__btn-list hiddenNext'
                    : 'modal__btn-list'
                }
              >
                <button
                  className={currentPage === 0 ? 'modal__btn hidden' : 'modal__btn '}
                  onClick={(e) => {
                    dispath(decrementCurrentPage())
                  }}
                  id='btn-back'
                >
                  <img
                    src={chevronLeft}
                    alt={'chevronLeft'}
                    className='fa-arrow fa-chevron-left'
                  ></img>
                  <span>Назад</span>
                </button>
                <button
                  className={currentPage === 5 ? 'modal__btn hidden' : 'modal__btn '}
                  onClick={(e) => {
                    dispath(incrementCurrentPage())
                  }}
                  id='btn-next'
                >
                  <span>Вперед</span>
                  <img
                    src={chevronRight}
                    alt={'chevronRight'}
                    className='fa-arrow fa-angle-right'
                  ></img>
                </button>
              </div>
              <div className='modal__content' id='content-card-root'>
                {currentPage === 5 ? (
                  loading ? (
                    <ModalLoader></ModalLoader>
                  ) : (
                    <ModalCustomTotal customProduct={customProduct}></ModalCustomTotal>
                  )
                ) : loading ? (
                  <ModalLoader></ModalLoader>
                ) : arrayOfCards.length !== 0 ? (
                  arrayOfCards
                    .filter((el) => el.fillingsType === categoryFillings)
                    .map((el) => (
                      <ModalCustomCard
                        key={el._id}
                        id={el._id}
                        name={el.name}
                        price={el.price}
                        imageFile={el.imageFile}
                      ></ModalCustomCard>
                    ))
                ) : (
                  <div>
                    <span>
                      <strong>There are no fillings!</strong>
                    </span>
                  </div>
                )}
              </div>
            </div>

            {currentPage !== 5 ? (
              <ModalCustomFooterDefault customProduct={customProduct}></ModalCustomFooterDefault>
            ) : (
              <ModalCustomFooterTotal
                customProduct={customProduct}
                // setQuantity={setQuantity}
              ></ModalCustomFooterTotal>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalCustom
