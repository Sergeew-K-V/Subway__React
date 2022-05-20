import React from 'react'
import BtnTemplate from './BtnTemplate'

function Fillings({ setModalFillingsActive }) {
  return (
    <BtnTemplate
      styles={'navbar__btn-custom'}
      funcForClick={setModalFillingsActive}
      id={'btn-fillings'}
      text={'Добавить начинку'}
    ></BtnTemplate>
  )
}

export default Fillings
