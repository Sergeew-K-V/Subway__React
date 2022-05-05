import react, { useState } from 'react'
import '../../css/modal-fillings.css'

function ModalFillings({ setModalFillingsActive }) {
  const [form, setForm] = useState({ name: '', price: 0, type: '' })

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  return (
    <div className='modal-fillings'>
      <form
        className='modal-fillings__form'
        onSubmit={(e) => {
          e.preventDefault()
        }}
      >
        <div className='modal-fillings__content'>
          <div
            className='modal-fillings__close'
            onClick={() => {
              setModalFillingsActive(false)
            }}
          >
            <span></span>
          </div>
          <p className='modal-fillings__item'>Название</p>
          <input
            type='text'
            placeholder='Введите название'
            className='modal-fillings__input modal-fillings__item'
            name='name'
          />
          <p className='modal-fillings__item'>Цена</p>
          <input
            type='number'
            placeholder='Введите цену'
            className='modal-fillings__input modal-fillings__item'
            name='price'
          />
          <p className='modal-fillings__item'>Тип начинки</p>
          <select className='modal-fillings__item modal-fillings__select' name='type'>
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
