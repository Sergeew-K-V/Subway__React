import react, { useEffect, useState } from 'react'
import '../../css/modal-fillings.css'
import { useHttp } from '../../hooks/http.hook'

function ModalFillings({ setModalProductsActive }) {
  const [form, setForm] = useState({
    name: null,
    price: null,
    description: null,
    quantity: 0,
    productsType: 'Pizza',
  })
  const { request } = useHttp()

  //   const [name, setName] = useState('')
  //   const [price, setPrice] = useState(0)

  const changeHandler = (event) => {
    if (event.target.name === 'price') {
      setForm({ ...form, [event.target.name]: Number(event.target.value) })
    } else {
      setForm({ ...form, [event.target.name]: event.target.value })
    }
  }
  const clearForm = () => {
    setForm((form.name = null), (form.price = null))
  }
  // const getterHandler = async () => {
  //   try {
  //     const data = request('/products',undefined,undefined)
  //   } catch (e) {}
  // }

  const postHandler = async () => {
    try {
      const data = request('/products', 'POST', { ...form })
      debugger
      data.then((value) => {
        alert(value.message)
        clearForm()
        setModalProductsActive(false)
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
              setModalProductsActive(false)
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
          <p className='modal-fillings__item'>Описание</p>
          <input
            type='text'
            placeholder='Введите описание товара'
            className='modal-fillings__input modal-fillings__item'
            name='description'
            onChange={changeHandler}
          />
          <p className='modal-fillings__item'>Тип продукта</p>
          <select
            className='modal-fillings__item modal-fillings__select'
            name='productsType'
            onChange={changeHandler}
          >
            <option value='Pizza' key='pizza'>
              Пицца
            </option>
            <option value='Burger' key='burger'>
              Бургер
            </option>
            <option value='Sandwich' key='sandwich'>
              Сендвич
            </option>
            <option value='Drinks' key='drinks'>
              Напитки
            </option>
            <option value='Salads' key='salads'>
              Салат
            </option>
            <option value='Shaurma' key='shaurma'>
              Шаурма
            </option>
            <option value='Chiken' key='chiken'>
              Курица
            </option>
          </select>
          <button
            className='modal-fillings__btn modal-fillings__item modal__btn'
            onClick={() => {
              postHandler()
            }}
          >
            Добавить
          </button>
        </div>
      </form>
    </div>
  )
}

export default ModalFillings
