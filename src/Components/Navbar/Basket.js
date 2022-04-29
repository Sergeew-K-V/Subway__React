import React from 'react'
import basket from '../../img/layout/basket-shopping-solid.svg'

function Basket() {
  return (
    <div className='navbar__basket-block' id='basket-subRoot'>
      <div className='basket__flex'>
        <div className='basket__header'>
          <div className='basket__icon'>
            <span className='icon-shadow'></span>
            <img className='basket__bas-icon-svg' src={basket} alt='basket' />

            {/* <i className='fa-solid fa-basket-shopping'></i> */}
          </div>
          <div className='basket__title'>
            <span>Название</span>
          </div>
        </div>
        <div className='basket__body' id='place-for-body-item'>
          <div className='body__top'>
            <div className='body__name'>
              <span>Название</span>
            </div>
            <div className='body__quantity'>
              <span>Количество</span>
            </div>
          </div>
          <div className='body__bottom' id='array__wrapper'></div>
          {/* <!-- Тут будут появляться добавленнные товары --> */}
        </div>
        <div className='basket__footer' id='place-price'>
          <div className='basket__total'>
            <span>Итого: руб.</span>
          </div>
        </div>
        <div className='basket__btn'>
          <button>
            <span>Оформить заказ</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Basket
