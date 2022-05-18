import React from 'react'

function Custom({ setModalCustomActive }) {
  return (
    <div
      className='navbar__btn-custom'
      onClick={() => {
        setModalCustomActive(true)
      }}
    >
      <button id='btn-custom'>
        <span>Собрать свой</span>
      </button>
    </div>
  )
}
export default Custom
