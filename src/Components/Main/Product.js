import React, { useEffect, useState } from 'react'
import minus from '../../img/minus-solid.svg'
import plus from '../../img/plus-solid.svg'
import LOGO from '../../img/markets/subway_logo.png'
import '../../css/subway.css'
import config from '../../config.json'
import { addProductToBasket } from '../../redux/basketState'
import { useDispatch, useSelector } from 'react-redux'
import {
  incrementQuantity,
  decrementQuantity,
  changeQuantityByInput,
} from '../../redux/productState'

function Product({ product }) {
  const serverUrl = config.serverUrl
  const dispath = useDispatch()
  const [quantity, setQuantity] = useState(product.quantity)

  // const [productObj, setProductObj] = useState({
  //   id: product._id,
  //   name: product.name,
  //   price: product.price,
  //   quantity: product.quantity,
  // })

  return (
    <div className='subway__block' id={product._id}>
      <div className='subway__flex'>
        <div className='flex__top'>
          <div className='subway__logo'>
            <img src={LOGO} alt='Logo market' />
          </div>
          <div className='subway__img-logo'>
            <img src={serverUrl + product.imageFile} alt='Image of product' />
          </div>
          <div className='subway__title'>{product.name}</div>
        </div>
        <div className='flex__middle'>
          <div className='subway__link'>
            <a href='#'>{product.description}</a>
          </div>
        </div>
        <div className='flex__bottom'>
          <div className='subway__price'>Цена: {product.price} руб.</div>
          <div className='subway__btn-block'>
            <div className='btn-block__text'>Количество</div>
            <div className='btn-block__btns-list'>
              <button
                className='btns-list__btn'
                onClick={() => {
                  if (product.quantity > 0) dispath(decrementQuantity({ id: product._id }))
                }}
              >
                <img src={minus} alt='minus' className='fa-solid fa-minus'></img>
              </button>
              <input
                type='number'
                className='btns-list__btn subway-input'
                value={product.quantity}
                onChange={(e) => {
                  dispath(changeQuantityByInput({ value: Number(e.target.value), id: product._id }))
                }}
                min={0}
              />
              <button
                className='btns-list__btn'
                onClick={() => {
                  dispath(incrementQuantity({ id: product._id }))
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
                if (product.quantity !== 0) {
                  setQuantity(product.quantity)
                  dispath(addProductToBasket(product))
                  alert(`Product was added to basket!`)
                }
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
