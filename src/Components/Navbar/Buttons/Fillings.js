import React from 'react'

function Fillings({ setModalFillingsActive }) {
  return (
    <div
      className='navbar__btn-custom'
      onClick={() => {
        setModalFillingsActive(true)
      }}
    >
      <button id='btn-fillings'>
        <span>Добавить начинку</span>
      </button>
    </div>
  )
}

export default Fillings
