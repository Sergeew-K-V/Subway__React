import React, { useEffect } from 'react'
import plus from '../../../../img/plus-solid.svg'
import minus from '../../../../img/minus-solid.svg'
import { useDispatch } from 'react-redux'
import {
  incrementQuantity,
  decrementQuantity,
  changeQuantityByAmount,
  getTotalPriceOnChangeQuantity,
} from '../../../../redux/modalCustomState'

export default function ModalCustomFooterTotal({ customProduct }) {
  const dispatch = useDispatch()
  return (
    <div className='modal__footer' id='modal-total-bottom-root'>
      <div className='modal__btn-block'>
        <div className='modal-block__text'>Количество</div>
        <div className='modal-block__btns-list'>
          <button
            className='btns-modal__btn'
            onClick={(e) =>
              // customProduct.quantity !== 0 && setQuantity(customProduct.quantity - 1)
              customProduct.quantity !== 0 && dispatch(decrementQuantity())
            }
          >
            <img src={minus} alt={'minus'} className='fa-solid fa-minus'></img>
          </button>
          <input
            min={0}
            type='number'
            className='btns-modal__btn modal-input'
            value={customProduct.quantity}
            onChange={(e) => {
              // if (e.target.value >= 0) setQuantity(e.target.value)
              if (e.target.value >= 0) dispatch(changeQuantityByAmount(e.target.value))
            }}
          />
          <button
            className='btns-modal__btn'
            onClick={(e) => {
              // setQuantity(customProduct.quantity + 1)
              dispatch(incrementQuantity())
            }}
          >
            <img src={plus} alt={'plus'} className='fa-solid fa-plus'></img>
          </button>
        </div>
      </div>
      <div className='modal__total-price'>
        <span>Итого: {customProduct.price} руб.</span>
        <div className='modal__btn-to-basket'>
          <button
            className='btn-to-basket__btn'
            onClick={() => {
              dispatch(getTotalPriceOnChangeQuantity())
            }}
          >
            В корзину
          </button>
        </div>
      </div>
    </div>
  )
}
