import React from 'react'
import minus from '../img/layout/minus-solid.svg'
import plus from '../img/layout/plus-solid.svg'

function Product() {
  return (
    <div class='subway__flex' id='content-${this.id}'>
      <div class='flex__top'>
        <div class='subway__logo'>{/* <img src={LOGO} alt='' /> */}</div>
        <div class='subway__img-logo'>{/* <img src={image} alt='' /> */}</div>
        {/* <div class='subway__title'>NAME</div> */}
      </div>
      <div class='flex__middle'>
        <div class='subway__link'>{/* <a href='#'>DESCRIPTION</a> */}</div>
      </div>
      <div class='flex__bottom'>
        {/* <div class='subway__price'>Цена: PRICE руб.</div> */}
        <div class='subway__btn-block'>
          <div class='btn-block__text'>Количество</div>
          <div class='btn-block__btns-list'>
            <button class='btns-list__btn'>
              <img src={minus} class='fa-solid fa-minus'></img>
            </button>
            <input
              type='number'
              class='btns-list__btn subway-input'
              // value={value}
            />
            <button class='btns-list__btn'>
              <img src={plus} class='fa-solid fa-plus'></img>
            </button>
          </div>
        </div>
        <div class='subway__btn-to-basket'>
          <button class='btn-to-basket__btn'>В корзину</button>
        </div>
      </div>
    </div>
  )
}
export default Product
