import React, { useState } from 'react'

function ModalCustomCard({ id, name, price, imageFile }) {
  const [selected, setSelected] = useState(false)
  const serverUrl = 'http://localhost:2323/'

  return (
    <div
      className={selected ? 'modal__content-card select' : 'modal__content-card'}
      onClick={() => setSelected(!selected)}
      id={id}
    >
      <div className='content-card__block'>
        <div className='content-card__img'>
          <img src={serverUrl + imageFile} alt='filling-iamge' />
        </div>
        <div className='content-card__text'>{name}</div>
        <div className='content-card__price'>Цена: {price} руб.</div>
      </div>
    </div>
  )
}

export default ModalCustomCard
