import React from 'react'
import plus from '../../../img/plus-solid.svg'
import minus from '../../../img/minus-solid.svg'

function ModalCustomTotal() {
  return (
    <div className='modal__content-total' id='modal-summary'>
      <div className='content-total__block'>
        <div className='block__left'>
          <div className='content-total__img '>
            {/* <img src='/src/img/icons/result_sandwich.jpg' alt='el-15cm' /> */}
          </div>
        </div>
        <div className='block__right'>
          <div className='right__top'>
            <h2>Ваш сенвич готов!</h2>
          </div>
          <div className='right__middle'>
            <div className='middle__size middle__item'>
              {/* <span>Размер: ${this.customSubway.size}</span> */}
            </div>
            <div className='middle__bread middle__item'>
              {/* <span>Хлеб: ${this.customSubway.bread}</span> */}
            </div>
            <div className='middle__vegentables middle__item'>
              {/* <span>Овощи: ${this.customSubway.vegetables}</span> */}
            </div>
            <div className='middle__sauces middle__item'>
              {/* <span>Соусы: ${this.customSubway.sauces}</span> */}
            </div>
            <div className='middle__fillings middle__item'>
              {/* <span>Начинка: ${this.customSubway.fillings}</span> */}
            </div>
          </div>
          <div className='right__bottom'>
            <div className='bottom__name'>{/* <span>${this.customSubway.name}</span> */}</div>
          </div>
        </div>
      </div>
      <div className='modal__footer' id='modal-total-bottom-root'>
        <div className='modal__btn-block'>
          <div className='modal-block__text'>Количество</div>
          <div className='modal-block__btns-list'>
            <button className='btns-modal__btn'>
              <img src={minus} className='fa-solid fa-minus'></img>
            </button>
            <input
              type='number'
              className='btns-modal__btn modal-input'
              //   value='${this.dataModal.quantity}'
            />
            <button className='btns-modal__btn'>
              <img src={plus} className='fa-solid fa-plus'></img>
            </button>
          </div>
        </div>
        <div className='modal__total-price'>
          {/* <span>Цена: ${this.dataModal.price} руб.</span> */}
          <div className='modal__btn-to-basket'>
            <button className='btn-to-basket__btn'>В корзину</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalCustomTotal
