import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import config from '../../../../config.json'
import { selectCard } from '../../../../redux/modalCustomState'

function ModalCustomCard({ card, customProduct }) {
  // const [selected, setSelected] = useState(false)
  const dispatch = useDispatch()

  return (
    <div
      className={card.selected ? 'modal__content-card select' : 'modal__content-card'}
      onClick={() => {
        // setSelected(!selected)
        dispatch(selectCard(card))
      }}
      id={card.id}
    >
      <div className='content-card__block'>
        <div className='content-card__img'>
          <img src={config.serverUrl + card.imageFile} alt='filling-iamge' />
        </div>
        <div className='content-card__text'>{card.name}</div>
        <div className='content-card__price'>Цена: {card.price} руб.</div>
      </div>
    </div>
  )
}

export default ModalCustomCard
