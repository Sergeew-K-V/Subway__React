import React from 'react'

function Fillings({ modalControls }) {
  return (
    <div
      className='navbar__btn-custom'
      onClick={() => {
        modalControls(true)
      }}
    >
      <button id='btn-fillings'>
        <span>Добавить начинку</span>
      </button>
    </div>
  )
}

export default Fillings
