import React from 'react'

function ProductBtn({ setModalProductsActive }) {
  return (
    <div className='navbar__btn-custom' onClick={() => setModalProductsActive(true)}>
      <button id='btn-productBtn'>
        <span>Добавить продукт</span>
      </button>
    </div>
  )
}

export default ProductBtn
