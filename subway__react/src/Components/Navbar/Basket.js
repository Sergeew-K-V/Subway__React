import React from 'react'

function Basket() {
  return (
    <div class='navbar__basket-block' id='basket-subRoot'>
      <div class='basket__flex'>
        <div class='basket__header'>
          <div class='basket__icon'>
            <span class='icon-shadow'></span>
            <i class='fa-solid fa-basket-shopping'></i>
          </div>
          <div class='basket__title'>
            <span>Название</span>
          </div>
        </div>
        <div class='basket__body' id='place-for-body-item'>
          <div class='body__top'>
            <div class='body__name'>
              <span>Название</span>
            </div>
            <div class='body__quantity'>
              <span>Количество</span>
            </div>
          </div>
          <div class='body__bottom' id='array__wrapper'></div>
          {/* <!-- Тут будут появляться добавленнные товары --> */}
        </div>
        <div class='basket__footer' id='place-price'>
          <div class='basket__total'>
            <span>Итого: руб.</span>
          </div>
        </div>
        <div class='basket__btn'>
          <button>
            <span>Оформить заказ</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Basket
