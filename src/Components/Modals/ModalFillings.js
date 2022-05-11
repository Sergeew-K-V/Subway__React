import react, { useEffect, useState } from 'react'
import '../../css/modal-fillings.css'
import { useHttp } from '../../hooks/http.hook'

function ModalFillings({ setModalFillingsActive }) {
  const [form, setForm] = useState({ name: null, price: null, fillingsType: 'Size' })
  const { request } = useHttp()

  const changeHandler = (event) => {
    if (event.target.name === 'price') {
      setForm({ ...form, [event.target.name]: Number(event.target.value) })
    } else {
      setForm({ ...form, [event.target.name]: event.target.value })
    }
  }
  // const getterHandler = async () => {
  //   try {
  //     const data = request('/fillings',undefined,undefined)
  //   } catch (e) {}
  // }

  const postHandler = async () => {
    try {
      const data = request('/fillings', 'POST', { ...form })
      data.then((value) => {
        alert(value.message)
      })
    } catch (e) {}
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
            onChange={changeHandler}
          />
          <p className='modal-fillings__item'>Цена</p>
          <input
            type='number'
            placeholder='Введите цену'
            className='modal-fillings__input modal-fillings__item'
            name='price'
            onChange={changeHandler}
          />
          <p className='modal-fillings__item'>Тип начинки</p>
          <select
            className='modal-fillings__item modal-fillings__select'
            name='fillingsType'
            onChange={changeHandler}
          >
            <option value='Size' key='sizes'>
              Размер
            </option>
            <option value='Bread' key='breads'>
              Хлеб
            </option>
            <option value='Vegetables' key='vegentables'>
              Овощи
            </option>
            <option value='Sauce' key='sauces'>
              Соус
            </option>
            <option value='Fillings' key='fillings'>
              Начинка
            </option>
          </select>
          <button
            className='modal-fillings__btn modal-fillings__item modal__btn'
            onClick={postHandler}
          >
            Добавить
          </button>
        </div>
      </form>
    </div>
  )
}

export default ModalFillings
