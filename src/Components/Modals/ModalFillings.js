import react from 'react'
import '../../css/modalFillings.css'

function ModalFillings() {
  return (
    <div className='modalFillings'>
      <form className='modalFillings__form'>
        <div className='modalFillings__content'>
          <p className='modalFillings__item'>Название</p>
          <input type='text' className='modalFillings__input modalFillings__item' />
          <p className='modalFillings__item'>Цена</p>
          <input type='number' className='modalFillings__input modalFillings__item' />
          <p className='modalFillings__item'>Тип начинки</p>
          <select className='modalFillings__item modalFillings__select'>
            <option value='sizes' key='sizes'>
              Размер
            </option>
            <option value='breads' key='breads'>
              Хлеб
            </option>
            <option value='vegentables' key='vegentables'>
              Овощи
            </option>
            <option value='sauces' key='sauces'>
              Соус
            </option>
            <option value='fillings' key='fillings'>
              Начинка
            </option>
          </select>
          <button className='modalFillings__btn modalFillings__item modal__btn'>Добавить</button>
        </div>
      </form>
    </div>
  )
}

export default ModalFillings
