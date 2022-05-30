import React from 'react'

function ModalTemplateBtn({
  changeHandler,
  postHandler,
  setModalClose,
  name,
  price,
  description = undefined,
  type,
}) {
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
              setModalClose(false)
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
            value={name}
            onChange={changeHandler}
          />
          <p className='modal-fillings__item'>Цена</p>
          <input
            type='number'
            placeholder='Введите цену'
            className='modal-fillings__input modal-fillings__item'
            name='price'
            value={price}
            onChange={changeHandler}
          />

          {description === undefined ? (
            <>
              <p className='modal-fillings__item'>Тип начинки</p>
              <select
                className='modal-fillings__item modal-fillings__select'
                name='fillingsType'
                value={type}
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
                <option value='sauces' key='sauces'>
                  Соус
                </option>
                <option value='fillings' key='fillings'>
                  Начинка
                </option>
              </select>
            </>
          ) : (
            <>
              <p className='modal-fillings__item'>Описание</p>
              <input
                type='text'
                placeholder='Введите описание товара'
                className='modal-fillings__input modal-fillings__item'
                name='description'
                value={description}
                onChange={changeHandler}
              />

              <p className='modal-fillings__item'>Тип продукта</p>
              <select
                className='modal-fillings__item modal-fillings__select'
                name='productsType'
                value={type}
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
            </>
          )}

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

export default ModalTemplateBtn
