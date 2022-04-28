import React from 'react'
import Basket from './Basket'
import Menu from './Menu'
import Custom from './Buttons/Custom'
import Fillings from './Buttons/Fillings'
import ProductBtn from './Buttons/ProductBtn'

function Navbar() {
  return (
    <div className='navbar__block'>
      <div className='navbar__top'>
        <div className='navbar__menu-block' id='menu__root'>
          <Menu></Menu>
        </div>
      </div>
      <div className='navbar__middle'>
        <Fillings></Fillings>
        <ProductBtn></ProductBtn>
        <Custom></Custom>
      </div>
      <div className='navbar__bottom' id='basket-root'>
        {/* <!-- Here is a basket --> */}
        <Basket></Basket>
      </div>
    </div>
  )
}
export default Navbar
