import React from 'react'
import faTrash from '../../../img/trash-solid.svg'

function basketProduct({ product }) {
  return (
    <div className='body__item' id={product._id}>
      <span className='body__item_left'>{product.name}</span>
      <span className='body__item_right'>
        {product.quantity} <img src={faTrash} alt='fa-trash' className={'fa-solid fa-trash-can'} />
      </span>
    </div>
  )
}

export default basketProduct
