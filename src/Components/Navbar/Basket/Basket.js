import React from 'react'
import basket from '../../../img/basket-shopping-solid.svg'
import basketProduct from './basketProduct'
import { useDispatch, useSelector } from 'react-redux'

function Basket() {
  const basketState = useSelector((state) => {
    return state.basketEntity.productsOfBasket
  })

  return (
    <div className='navbar__basket-block' id='basket-subRoot'>
      <div className='basket__flex'>
        <div className='basket__header'>
          <div className='basket__icon'>
            <span className='icon-shadow'></span>
            <img className='basket__bas-icon-svg' src={basket} alt='basket' />
          </div>
          <div className='basket__title'>
            <span>Название</span>
          </div>
        </div>
        <div className='basket__body' id='place-for-body-item'>
          <div className='body__top'>
            <div className='body__name'>
              <span>Название</span>
            </div>
            <div className='body__quantity'>
              <span>Количество</span>
            </div>
          </div>
          <div className='body__bottom' id='array__wrapper'></div>
          {/* <!-- Тут будут появляться добавленнные товары --> */}
          {basketState !== 0 ? (
            basketState.map((el) => <basketProduct product={el} key={el._id}></basketProduct>)
          ) : (
            <div>
              <span>
                <strong>There are no products!</strong>
              </span>
            </div>
          )}
        </div>
        <div className='basket__footer' id='place-price'>
          <div className='basket__total'>
            <span>Итого: руб.</span>
          </div>
        </div>
        <div className='basket__btn'>
          <button>
            <span>Оформить заказ</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Basket