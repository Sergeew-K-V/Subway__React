import react, { useEffect, useState } from 'react'
import '../../css/modal-fillings.css'
import { useHttp } from '../../hooks/http.hook'
import ModalTemplateBtn from './ModalTemplateBtn'

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
    <ModalTemplateBtn
      changeHandler={changeHandler}
      postHandler={postHandler}
      setModalClose={setModalFillingsActive}
      name={form.name}
      price={form.price}
      type={form.fillingsType}
    ></ModalTemplateBtn>
  )
}

export default ModalFillings
