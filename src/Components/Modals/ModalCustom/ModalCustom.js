import React, { useState } from 'react'
import chevronLeft from '../../../img/chevron-left-solid.svg'
import chevronRight from '../../../img/chevron-right-solid.svg'
import '../../../css/modal.css'
import NavbarItem from './items/NavbarItem'

function ModalCustom({ setModalCustomActive }) {
  const navbarItems = [
    { text: 'Размер', counter: 0 },
    { text: 'Хлеб', counter: 1 },
    { text: 'Овощи', counter: 2 },
    { text: 'Соусы', counter: 3 },
    { text: 'Начинка', counter: 4 },
    { text: 'Готово!', counter: 5 },
  ]

  const [price, setPrice] = useState(0)
  const [quantity, setQuantity] = useState(0)
  const id = Date.now().toString().slice(7, 14)
  const [name, setName] = useState(`Custom-product-${id}`)
  const [customProduct, setCustomProduct] = useState({ id, name, price, quantity })
  const [currentPage, setCurrentPage] = useState(0)

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
                      setCurrentPage={setCurrentPage}
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
                    setCurrentPage(currentPage - 1)
                  }}
                  id='btn-back'
                >
                  <img src={chevronLeft} className='fa-arrow fa-chevron-left'></img>
                  <span>Назад</span>
                </button>
                <button
                  className={currentPage === 5 ? 'modal__btn hidden' : 'modal__btn '}
                  onClick={(e) => {
                    setCurrentPage(currentPage + 1)
                  }}
                  id='btn-next'
                >
                  <span>Вперед</span>
                  <img src={chevronRight} className='fa-arrow fa-angle-right'></img>
                </button>
              </div>
              <div className='modal__content' id='content-card-root'>
                {/* ModalCustomCard */}
                {/* ${this.currentArrayOfData !== undefined ? this.currentArrayOfData : ''} */}
                <div className='modal__footer' id='modal-total-bottom-root'>
                  <div className='modal__total-price'>
                    {/* <span>Итого: ${this.dataModal.price} руб.</span> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalCustom
