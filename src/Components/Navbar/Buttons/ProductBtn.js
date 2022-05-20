import React from 'react'
import BtnTemplate from './BtnTemplate'

function ProductBtn({ setModalProductsActive }) {
  return (
    <BtnTemplate
      styles={'navbar__btn-custom'}
      funcForClick={setModalProductsActive}
      id={'btn-productBtn'}
      text={'Добавить продукт'}
    ></BtnTemplate>
  )
}

export default ProductBtn
