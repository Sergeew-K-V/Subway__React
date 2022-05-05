import React from 'react'

function ModalCustomCard() {
  return (
    <div
      className="modal__content-card 
  {
            this.selected === true ? 'select' : ''
          }"
      //   id='${this.id}'
    >
      <div className='content-card__block'>
        <div className='content-card__img'>
          {/* <img src='/src/img${this.image}' alt='el-15cm' /> */}
        </div>
        {/* <div className='content-card__text'>${this.name}</div> */}
        {/* <div className='content-card__price'>Цена: ${this.price} руб.</div> */}
      </div>
    </div>
  )
}

export default ModalCustomCard
