import React, { useEffect } from 'react'

export default function ModalCustomFooterDefault({ customProduct }) {
  // useEffect(()=>{},[customProduct.price])
  return (
    <div className='modal__footer' id='modal-total-bottom-root'>
      <div className='modal__total-price'>
        <span>Итого: {customProduct.price} руб.</span>
      </div>
    </div>
  )
}
