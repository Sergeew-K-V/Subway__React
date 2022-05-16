import React from 'react'
import chevronLeft from '../../../img/chevron-left-solid.svg'
import chevronRight from '../../../img/chevron-right-solid.svg'
import '../../../css/modal.css'

function ModalCustom() {
  return (
    <div className='modal-overlay' id='modal-overlay'>
      <div className='modal'>
        <div className='container-modal'>
          <div className='modal__block' id='modal-block'>
            <div className='modal__header'>
              <span>Выберите размер сендвича</span>
              <div className='modal__close'>
                <span></span>
              </div>
            </div>
            <div className='modal__body' id='place-for-modal-content'>
              <div className='body__navbar'>
                {/* <ul className='body__navbar-section'>
                  <li
                    className="navbar__item ${
                      this.dataModal.currentPage === 0 ? 'selected' : ''
                    }"
                    id='navbar-item-0'
                  >
                    Размер
                  </li>
                  <li
                    className="navbar__item ${
                      this.dataModal.currentPage === 1 ? 'selected' : ''
                    }"
                    id='navbar-item-1'
                  >
                    Хлеб
                  </li>
                  <li
                    className="navbar__item ${
                      this.dataModal.currentPage === 2 ? 'selected' : ''
                    }"
                    id='navbar-item-2'
                  >
                    Овощи
                  </li>
                  <li
                    className="navbar__item ${
                      this.dataModal.currentPage === 3 ? 'selected' : ''
                    }"
                    id='navbar-item-3'
                  >
                    Соусы
                  </li>
                  <li
                    className="navbar__item ${
                      this.dataModal.currentPage === 4 ? 'selected' : ''
                    }"
                    id='navbar-item-4'
                  >
                    Начинка
                  </li>
                  <li
                    className="navbar__item ${
                      this.dataModal.currentPage === 5 ? 'selected' : ''
                    }"
                    id='navbar-item-5'
                  >
                    Готово!
                  </li>
                </ul> */}
              </div>
              {/* <div
                className="modal__btn-list ${this.dataModal.currentPage === 0 ? 'hiddenBack' : ''} ${
          this.dataModal.currentPage === 5 ? 'hiddenNext' : ''
        }"
              >
                <button
                  className="modal__btn ${
                    this.dataModal.currentPage === 0 ? 'hidden' : ''
                  }"
                  id='btn-back'
                >
                  <img src={chevronLeft} className='fa-solid fa-chevron-left'></img>
                  <span>Назад</span>
                </button>
                <button
                  className="modal__btn ${
                    this.dataModal.currentPage === 5 ? 'hidden' : ''
                  }"
                  id='btn-next'
                >
                  <span>Вперед</span>
                  <img src={chevronRight} className='fa-solid fa-angle-right'></img>
                </button>
              </div> */}
              <div className='modal__content' id='content-card-root'>
                {/* ModalCustomCard */}
                {/* ${this.currentArrayOfData !== undefined ? this.currentArrayOfData : ''} */}
                <div className='modal__footer' id='modal-total-bottom-root'>
                  <div className='modal__total-price'>
                    <span>Итого: ${this.dataModal.price} руб.</span>
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
