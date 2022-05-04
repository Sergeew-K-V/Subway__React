import React from 'react'

function ModalCustomCard() {
  return (
    <div
      class="modal__content-card 
  {
            this.selected === true ? 'select' : ''
          }"
      //   id='${this.id}'
    >
      <div class='content-card__block'>
        <div class='content-card__img'>
          {/* <img src='/src/img${this.image}' alt='el-15cm' /> */}
        </div>
        {/* <div class='content-card__text'>${this.name}</div> */}
        {/* <div class='content-card__price'>Цена: ${this.price} руб.</div> */}
      </div>
    </div>
  )
}

export default ModalCustomCard
