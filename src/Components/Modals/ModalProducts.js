import react, { useEffect, useState } from 'react'
import ModalTemplateBtn from './ModalTemplateBtn'
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
      (form.name = ''),
      (form.price = ''),
      (form.description = ''),
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
    <ModalTemplateBtn
      changeHandler={changeHandler}
      postHandler={postHandler}
      setModalClose={setModalProductsActive}
      name={form.name}
      price={form.price}
      description={form.description}
      type={form.productsType}
    ></ModalTemplateBtn>
  )
}

export default ModalProducts
