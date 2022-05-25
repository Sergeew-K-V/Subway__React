import React from 'react'
import resultProduct from '../../../../img/result_sandwich.jpg'

function ModalCustomTotal({ customProduct }) {
  return (
    <div className='modal__content-total' id='modal-summary'>
      <div className='content-total__block'>
        <div className='block__left'>
          <div className='content-total__img '>
            <img src={resultProduct} alt='result-sandwich' />
          </div>
        </div>
        <div className='block__right'>
          <div className='right__top'>
            <h2>Ваш сенвич готов!</h2>
          </div>
          <div className='right__middle'>
            <div className='middle__size middle__item'>
              <span>
                <strong>Размер:</strong>{' '}
                {customProduct.size === '' ? (
                  ' Размер не был выбран!'
                ) : (
                  <span> {customProduct.size}</span>
                )}
              </span>
            </div>
            <div className='middle__bread middle__item'>
              <span>
                <strong>Хлеб:</strong>
                {customProduct.bread === '' ? (
                  ' Хлеб не был выбран!'
                ) : (
                  <span> {customProduct.bread}</span>
                )}
              </span>
            </div>
            <div className='middle__vegentables middle__item'>
              <span>
                <strong>Овощи:</strong>
                {customProduct.vegetables.length === 0
                  ? ' Без овощей!'
                  : customProduct.vegetables.map((el) => <span key={el._id}> {el.name}</span>)}
              </span>
            </div>
            <div className='middle__sauces middle__item'>
              <span>
                <strong>Соусы:</strong>
                {customProduct.sauces.length === 0
                  ? ' Без соусов!'
                  : customProduct.sauces.map((el) => <span key={el._id}> {el.name}</span>)}
              </span>
            </div>
            <div className='middle__fillings middle__item'>
              <span>
                <strong>Начинка:</strong>
                {customProduct.fillings.length === 0
                  ? ' Без начинки!'
                  : customProduct.fillings.map((el) => <span key={el._id}> {el.name}</span>)}
              </span>
            </div>
          </div>
          <div className='right__bottom'>
            <div className='bottom__name'>
              <span>{customProduct.name}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalCustomTotal
