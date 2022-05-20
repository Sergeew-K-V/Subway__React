import React from 'react'
import BtnTemplate from './BtnTemplate'

function Custom({ setModalCustomActive }) {
  return (
    <BtnTemplate
      styles={'navbar__btn-custom'}
      funcForClick={setModalCustomActive}
      id={'btn-custom'}
      text={'Собрать свой'}
    ></BtnTemplate>
  )
}
export default Custom
