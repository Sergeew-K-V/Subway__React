import React from 'react'
import chevronLeft from '../../../img/layout/chevron-left-solid.svg'
import chevronRight from '../../../img/layout/chevron-right-solid.svg'

function ModalCustom() {
  return (
    <div class='modal-overlay' id='modal-overlay'>
      <div class='modal'>
        <div class='container-modal'>
          <div class='modal__block' id='modal-block'>
            <div class='modal__header'>
              <span>Выберите размер сендвича</span>
              <div class='modal__close'>
                <span></span>
              </div>
            </div>
            <div class='modal__body' id='place-for-modal-content'>
              <div class='body__navbar'>
                {/* <ul class='body__navbar-section'>
                  <li
                    class="navbar__item ${
                      this.dataModal.currentPage === 0 ? 'selected' : ''
                    }"
                    id='navbar-item-0'
                  >
                    Размер
                  </li>
                  <li
                    class="navbar__item ${
                      this.dataModal.currentPage === 1 ? 'selected' : ''
                    }"
                    id='navbar-item-1'
                  >
                    Хлеб
                  </li>
                  <li
                    class="navbar__item ${
                      this.dataModal.currentPage === 2 ? 'selected' : ''
                    }"
                    id='navbar-item-2'
                  >
                    Овощи
                  </li>
                  <li
                    class="navbar__item ${
                      this.dataModal.currentPage === 3 ? 'selected' : ''
                    }"
                    id='navbar-item-3'
                  >
                    Соусы
                  </li>
                  <li
                    class="navbar__item ${
                      this.dataModal.currentPage === 4 ? 'selected' : ''
                    }"
                    id='navbar-item-4'
                  >
                    Начинка
                  </li>
                  <li
                    class="navbar__item ${
                      this.dataModal.currentPage === 5 ? 'selected' : ''
                    }"
                    id='navbar-item-5'
                  >
                    Готово!
                  </li>
                </ul> */}
              </div>
              {/* <div
                class="modal__btn-list ${this.dataModal.currentPage === 0 ? 'hiddenBack' : ''} ${
          this.dataModal.currentPage === 5 ? 'hiddenNext' : ''
        }"
              >
                <button
                  class="modal__btn ${
                    this.dataModal.currentPage === 0 ? 'hidden' : ''
                  }"
                  id='btn-back'
                >
                  <img src={chevronLeft} class='fa-solid fa-chevron-left'></img>
                  <span>Назад</span>
                </button>
                <button
                  class="modal__btn ${
                    this.dataModal.currentPage === 5 ? 'hidden' : ''
                  }"
                  id='btn-next'
                >
                  <span>Вперед</span>
                  <img src={chevronRight} class='fa-solid fa-angle-right'></img>
                </button>
              </div> */}
              <div class='modal__content' id='content-card-root'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalCustom
