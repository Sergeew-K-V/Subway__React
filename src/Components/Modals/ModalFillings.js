import react from 'react'
import '../../css/modal-fillings.css'

function ModalFillings({ active, setActive }) {
  return (
    <div className='modal-fillings'>
      <form className='modal-fillings__form'>
        <div className='modal-fillings__content'>
          <div
            className='modal-fillings__close'
            onClick={() => {
              setActive(false)
            }}
          >
            <span></span>
          </div>
          <p className='modal-fillings__item'>Название</p>
          <input type='text' className='modal-fillings__input modal-fillings__item' />
          <p className='modal-fillings__item'>Цена</p>
          <input type='number' className='modal-fillings__input modal-fillings__item' />
          <p className='modal-fillings__item'>Тип начинки</p>
          <select className='modal-fillings__item modal-fillings__select'>
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
          <button className='modal-fillings__btn modal-fillings__item modal__btn'>Добавить</button>
        </div>
      </form>
    </div>
  )
}

export default ModalFillings
