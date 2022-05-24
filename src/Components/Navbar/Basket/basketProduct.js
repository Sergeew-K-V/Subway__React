import React from 'react'
import faTrash from '../../../img/trash-solid.svg'
import { useDispatch } from 'react-redux'
import { deleteProductFromBasket } from '../../../redux/basketState'

function BasketProduct({ product }) {
  const dispatch = useDispatch()

  return (
    <div className='body__item' id={product._id}>
      <span className='body__item_left'>{product.name}</span>
      <span className='body__item_right'>
        {product.quantity}{' '}
        <img
          src={faTrash}
          alt='fa-trash'
          className={'fa-solid fa-trash-can'}
          onClick={() => {
            dispatch(deleteProductFromBasket(product._id))
          }}
        />
      </span>
    </div>
  )
}

export default BasketProduct
