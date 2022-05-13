import React, { useState } from 'react'
import minus from '../../img/minus-solid.svg'
import plus from '../../img/plus-solid.svg'
import LOGO from '../../img/markets/subway_logo.png'

function Product({ id, name, price, description, imageFile }) {
  const serverUrl = 'http://localhost:2323/'
  const [quantity, setQuantity] = useState(0)
  return (
    <div className='subway__flex' id={id}>
      <div className='flex__top'>
        <div className='subway__logo'>
          <img src={LOGO} alt='Logo market' />
        </div>
        <div className='subway__img-logo'>
          <img src={serverUrl + imageFile} alt='Image of product' />
        </div>
        <div className='subway__title'>{name}</div>
      </div>
      <div className='flex__middle'>
        <div className='subway__link'>
          <a href='#'>{description}</a>
        </div>
      </div>
      <div className='flex__bottom'>
        <div className='subway__price'>Цена: {price} руб.</div>
        <div className='subway__btn-block'>
          <div className='btn-block__text'>Количество</div>
          <div className='btn-block__btns-list'>
            <button className='btns-list__btn'>
              <img src={minus} className='fa-solid fa-minus'></img>
            </button>
            <input
              type='number'
              className='btns-list__btn subway-input'
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
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
