import React from 'react'
import plus from '../../../img/layout/plus-solid.svg'
import minus from '../../../img/layout/minus-solid.svg'

function ModalCustomTotal() {
  return (
    <div class='modal__content-total' id='modal-summary'>
      <div class='content-total__block'>
        <div class='block__left'>
          <div class='content-total__img '>
            {/* <img src='/src/img/icons/result_sandwich.jpg' alt='el-15cm' /> */}
          </div>
        </div>
        <div class='block__right'>
          <div class='right__top'>
            <h2>Ваш сенвич готов!</h2>
          </div>
          <div class='right__middle'>
            <div class='middle__size middle__item'>
              {/* <span>Размер: ${this.customSubway.size}</span> */}
            </div>
            <div class='middle__bread middle__item'>
              {/* <span>Хлеб: ${this.customSubway.bread}</span> */}
            </div>
            <div class='middle__vegentables middle__item'>
              {/* <span>Овощи: ${this.customSubway.vegetables}</span> */}
            </div>
            <div class='middle__sauces middle__item'>
              {/* <span>Соусы: ${this.customSubway.sauces}</span> */}
            </div>
            <div class='middle__fillings middle__item'>
              {/* <span>Начинка: ${this.customSubway.fillings}</span> */}
            </div>
          </div>
          <div class='right__bottom'>
            <div class='bottom__name'>{/* <span>${this.customSubway.name}</span> */}</div>
          </div>
        </div>
      </div>
      <div class='modal__footer' id='modal-total-bottom-root'>
        <div class='modal__btn-block'>
          <div class='modal-block__text'>Количество</div>
          <div class='modal-block__btns-list'>
            <button class='btns-modal__btn'>
              <img src={minus} class='fa-solid fa-minus'></img>
            </button>
            <input
              type='number'
              class='btns-modal__btn modal-input'
              //   value='${this.dataModal.quantity}'
            />
            <button class='btns-modal__btn'>
              <img src={plus} class='fa-solid fa-plus'></img>
            </button>
          </div>
        </div>
        <div class='modal__total-price'>
          {/* <span>Цена: ${this.dataModal.price} руб.</span> */}
          <div class='modal__btn-to-basket'>
            <button class='btn-to-basket__btn'>В корзину</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalCustomTotal
