import React, { useEffect, useState } from 'react'
import config from '../../config.json'
import { useDispatch, useSelector } from 'react-redux'
import {
  incrementQuantity,
  decrementQuantity,
  changeQuantityByInput,
} from '../../redux/productState'

import minus from '../../img/minus-solid.svg'
import plus from '../../img/plus-solid.svg'
import LOGO from '../../img/markets/subway_logo.png'
import '../../css/subway.css'

function Product({ id, name, price, description, imageFile }) {
  const serverUrl = config.serverUrl

  const quantity = useSelector((state) => {
    return state.productEntity.products
  })
  const dispath = useDispatch()
  // const [quantity, setQuantity] = useState(quantityState)
  const [productObj, setProductObj] = useState({ id, name, price, quantity })
  // console.log(`quantity of ${name}`, productObj.quantity)

  useEffect(() => {
    setProductObj({ ...productObj, quantity })
  }, [quantity])

  return (
    <div className='subway__block' id={id}>
      <div className='subway__flex'>
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
              <button
                className='btns-list__btn'
                onClick={() => {
                  // if (quantity !== 0) setQuantity(quantity - 1)
                  if (quantity !== 0) dispath(decrementQuantity(id))
                }}
              >
                <img src={minus} alt='minus' className='fa-solid fa-minus'></img>
              </button>
              <input
                type='number'
                className='btns-list__btn subway-input'
                value={productObj.quantity}
                onChange={(e) => {
                  // setQuantity(Number(e.target.value  ))
                  dispath(changeQuantityByInput({ value: Number(e.target.value), id }))
                }}
                min={0}
              />
              <button
                className='btns-list__btn'
                onClick={() => {
                  // setQuantity(quantity + 1)
                  dispath(incrementQuantity(id))
                }}
              >
                <img src={plus} alt='plus' className='fa-solid fa-plus'></img>
              </button>
            </div>
          </div>
          <div className='subway__btn-to-basket'>
            <button
              className='btn-to-basket__btn'
              onClick={() => {
                alert(`productObj`)
                return productObj
              }}
            >
              В корзину
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Product
