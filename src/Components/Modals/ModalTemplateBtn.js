import react, { useEffect, useState } from 'react'
import '../../css/modal-fillings.css'
import { useHttp } from '../../hooks/http.hook'

function ModalTemplateBtn({
  setModalActive,
  posted = undefined,
  setPosted = undefined,
  typeOfGood,
}) {
  const formData = new FormData()
  const [form, setForm] = useState({
    name: '',
    price: 0,
    description: undefined,
    type: '',
    imageFile: {},
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
    setForm((form.name = ''), (form.price = 0), (form.description = undefined), (form.type = ''))
  }
  //   const clearForm = () => {
  //     if (posted !== undefined) {
  //       setForm(
  //         (form.name = null),
  //         (form.price = null),
  //         (form.description = null),
  //         (form.type = '')
  //       )
  //     } else {
  //       setForm((form.name = null), (form.price = null), (form.type = ''))
  //     }
  //   }

  function convertToFormData(obj) {
    for (const key in obj) {
      formData.set(key, obj[key])
    }
  }

  const postHandler = async () => {
    try {
      convertToFormData(form)
      const data = request(`/${typeOfGood}`, 'POST', formData)
      data.then((value) => {
        alert(value.message)
        clearForm()
        setModalActive(false)
        if (typeOfGood === 'product') {
          setPosted(!posted)
        }
      })
    } catch (e) {
      throw new Error()
    }
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
              setModalActive(false)
            }}
          >
            <span></span>
          </div>
          <p className='modal-fillings__item'>????????????????</p>
          <input
            type='text'
            placeholder='?????????????? ????????????????'
            className='modal-fillings__input modal-fillings__item'
            name='name'
            value={form.name}
            onChange={changeHandler}
          />
          <p className='modal-fillings__item'>????????</p>
          <input
            type='number'
            placeholder='?????????????? ????????'
            className='modal-fillings__input modal-fillings__item'
            name='price'
            value={form.price}
            onChange={changeHandler}
          />

          {form.description === undefined ? (
            <>
              <p className='modal-fillings__item'>?????? ??????????????</p>
              <select
                className='modal-fillings__item modal-fillings__select'
                name='fillingsType'
                value={form.type}
                onChange={changeHandler}
              >
                <option value='size' key='sizes'>
                  ????????????
                </option>
                <option value='bread' key='breads'>
                  ????????
                </option>
                <option value='vegetables' key='vegentables'>
                  ??????????
                </option>
                <option value='sauces' key='sauces'>
                  ????????
                </option>
                <option value='fillings' key='fillings'>
                  ??????????????
                </option>
              </select>
            </>
          ) : (
            <>
              <p className='modal-fillings__item'>????????????????</p>
              <input
                type='text'
                placeholder='?????????????? ???????????????? ????????????'
                className='modal-fillings__input modal-fillings__item'
                name='description'
                value={form.description}
                onChange={changeHandler}
              />

              <p className='modal-fillings__item'>?????? ????????????????</p>
              <select
                className='modal-fillings__item modal-fillings__select'
                name='productsType'
                value={form.type}
                onChange={changeHandler}
              >
                <option value='pizza' key='pizza'>
                  ??????????
                </option>
                <option value='burger' key='burger'>
                  ????????????
                </option>
                <option value='sandwich' key='sandwich'>
                  ??????????????
                </option>
                <option value='drinks' key='drinks'>
                  ??????????????
                </option>
                <option value='salads' key='salads'>
                  ??????????
                </option>
                <option value='shaurma' key='shaurma'>
                  ????????????
                </option>
                <option value='chicken' key='chicken'>
                  ????????????
                </option>
              </select>
            </>
          )}

          <p className='modal-fillings__item'>????????????????</p>
          <input
            type='file'
            placeholder='?????????????? ????????????????'
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
            ????????????????
          </button>
        </div>
      </form>
    </div>
  )
}

export default ModalTemplateBtn
