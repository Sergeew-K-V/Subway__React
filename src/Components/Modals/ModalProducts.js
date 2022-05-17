import react, { useEffect, useState } from 'react'
import '../../css/modal-fillings.css'
import { useHttp } from '../../hooks/http.hook'

function ModalProducts({ setModalProductsActive, setPosted, posted }) {
  const formData = new FormData()
  const [form, setForm] = useState({
    name: '',
    imageFile: {},
    price: 0,
    description: '',
    productsType: 'pizza',
  })
  const { request } = useHttp()

  //   const [name, setName] = useState('')
  //   const [price, setPrice] = useState(0)

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
    setForm(
      (form.name = null),
      (form.price = null),
      (form.description = null),
      (form.productsType = 'pizza')
    )
  }

  function convertToFormData(obj) {
    for (const key in obj) {
      formData.set(key, obj[key])
    }
  }

  const postHandler = async () => {
    try {
      convertToFormData(form)
      // for (let [name, value] of formData) {
      //   alert(`${name} = ${value}`) // key1=value1, потом key2=value2
      // }
      // console.log(...formData)
      const data = request('/products', 'POST', formData)
      data.then((value) => {
        alert(value.message)
        clearForm()
        setModalProductsActive(false)
        setPosted(!posted)
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
            value={form.name}
            onChange={changeHandler}
          />
          <p className='modal-fillings__item'>Цена</p>
          <input
            type='number'
            placeholder='Введите цену'
            className='modal-fillings__input modal-fillings__item'
            name='price'
            value={form.price}
            onChange={changeHandler}
          />
          <p className='modal-fillings__item'>Описание</p>
          <input
            type='text'
            placeholder='Введите описание товара'
            className='modal-fillings__input modal-fillings__item'
            name='description'
            value={form.description}
            onChange={changeHandler}
          />
          <p className='modal-fillings__item'>Тип продукта</p>
          <select
            className='modal-fillings__item modal-fillings__select'
            name='productsType'
            value={form.productsType}
            onChange={changeHandler}
          >
            <option value='pizza' key='pizza'>
              Пицца
            </option>
            <option value='burger' key='burger'>
              Бургер
            </option>
            <option value='sandwich' key='sandwich'>
              Сендвич
            </option>
            <option value='drinks' key='drinks'>
              Напитки
            </option>
            <option value='salads' key='salads'>
              Салат
            </option>
            <option value='shaurma' key='shaurma'>
              Шаурма
            </option>
            <option value='chicken' key='chicken'>
              Курица
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

export default ModalProducts
