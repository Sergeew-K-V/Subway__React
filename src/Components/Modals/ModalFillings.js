import react, { useEffect, useState } from 'react'
import '../../css/modal-fillings.css'
import { useHttp } from '../../hooks/http.hook'

function ModalFillings({ setModalFillingsActive }) {
  const formData = new FormData()
  const [form, setForm] = useState({
    name: '',
    price: '',
    imageFile: {},
    fillingsType: 'size',
  })
  const { request } = useHttp()

  const changeHandler = (event) => {
    if (event.target.name === 'price') {
      setForm({ ...form, [event.target.name]: Number(event.target.value) })
    }
    if (event.target.files) {
      setForm({ ...form, [event.target.name]: event.target.files[0] })
    } else {
      setForm({ ...form, [event.target.name]: event.target.value })
    }
  }
  const clearForm = () => {
    setForm((form.name = ''), (form.price = ''), (form.fillingsType = 'size'))
  }
  function convertToFormData(obj) {
    for (const key in obj) {
      formData.set(key, obj[key])
    }
  }
  const postHandler = async () => {
    try {
      convertToFormData(form)
      const data = request('/fillings', 'POST', formData)
      data.then((value) => {
        alert(value.message)
        clearForm()
        setModalFillingsActive(false)
      })
    } catch (e) {}
  }
  return (
    <div className='modal-fillings'>
      <form
        encType='multipart/form-data'
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
            value={form.name}
            placeholder='Введите название'
            className='modal-fillings__input modal-fillings__item'
            name='name'
            onChange={changeHandler}
          />
          <p className='modal-fillings__item'>Цена</p>
          <input
            type='number'
            value={form.price}
            placeholder='Введите цену'
            className='modal-fillings__input modal-fillings__item'
            name='price'
            onChange={changeHandler}
          />
          <p className='modal-fillings__item'>Тип начинки</p>
          <select
            className='modal-fillings__item modal-fillings__select'
            name='fillingsType'
            value={form.fillingsType}
            onChange={changeHandler}
          >
            <option value='size' key='sizes'>
              Размер
            </option>
            <option value='bread' key='breads'>
              Хлеб
            </option>
            <option value='vegetables' key='vegentables'>
              Овощи
            </option>
            <option value='sauce' key='sauces'>
              Соус
            </option>
            <option value='fillings' key='fillings'>
              Начинка
            </option>
          </select>
          <p className='modal-fillings__item'>Картинка</p>
          <input
            type='file'
            placeholder='Добавте картинку'
            className='modal-fillings__input modal-fillings__item'
            name='imageFile'
            onChange={changeHandler}
          />
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
