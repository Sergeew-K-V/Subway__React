import React from 'react'
import minus from '../img/layout/minus-solid.svg'
import plus from '../img/layout/plus-solid.svg'

function Product() {
  return (
    <div className='subway__flex'>
      <div className='flex__top'>
        <div className='subway__logo'>{/* <img src={LOGO} alt='' /> */}</div>
        <div className='subway__img-logo'>{/* <img src={image} alt='' /> */}</div>
        {/* <div className='subway__title'>NAME</div> */}
      </div>
      <div className='flex__middle'>
        <div className='subway__link'>{/* <a href='#'>DESCRIPTION</a> */}</div>
      </div>
      <div className='flex__bottom'>
        {/* <div className='subway__price'>Цена: PRICE руб.</div> */}
        <div className='subway__btn-block'>
          <div className='btn-block__text'>Количество</div>
          <div className='btn-block__btns-list'>
            <button className='btns-list__btn'>
              <img src={minus} className='fa-solid fa-minus'></img>
            </button>
            <input
              type='number'
              className='btns-list__btn subway-input'
              // value={value}
            />
            <button className='btns-list__btn'>
              <img src={plus} className='fa-solid fa-plus'></img>
            </button>
          </div>
        </div>
        <div className='subway__btn-to-basket'>
          <button className='btn-to-basket__btn'>В корзину</button>
        </div>
      </div>
    </div>
  )
}
export default Product
