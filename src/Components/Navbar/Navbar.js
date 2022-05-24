import React from 'react'
import Basket from './Basket/Basket'
import Menu from './Menu/Menu'
import Custom from './Buttons/Custom'
import Fillings from './Buttons/Fillings'
import ProductBtn from './Buttons/ProductBtn'
import '../../css/navbar.css'

function Navbar({
  setModalFillingsActive,
  setModalProductsActive,
  setModalCustomActive,
  category,
  setCategory,
}) {
  return (
    <div className='navbar__block'>
      <div className='navbar__top'>
        <div className='navbar__menu-block' id='menu__root'>
          <Menu category={category} setCategory={setCategory}></Menu>
        </div>
      </div>
      <div className='navbar__middle'>
        <Fillings setModalFillingsActive={setModalFillingsActive}></Fillings>
        <ProductBtn setModalProductsActive={setModalProductsActive}></ProductBtn>
        <Custom setModalCustomActive={setModalCustomActive}></Custom>
      </div>
      <div className='navbar__bottom' id='basket-root'>
        {/* <!-- Here is a basket --> */}
        <Basket></Basket>
      </div>
    </div>
  )
}
export default Navbar
