import { useState } from 'react'
import Header from './Header'
import Main from './Main/Main'
import Navbar from './Navbar/Navbar'
import ModalCustom from './Modals/ModalCustom/ModalCustom'

import '../css/app.css'
import ModalTemplateBtn from './Modals/ModalTemplateBtn'

function App() {
  const [modalFillingsActive, setModalFillingsActive] = useState(false)
  const [modalProductsActive, setModalProductsActive] = useState(false)
  const [modalCustomActive, setModalCustomActive] = useState(false)

  const [category, setCategory] = useState('pizza')
  const [posted, setPosted] = useState(false)

  return (
    <div className='app'>
      <Header></Header>
      <main className='main'>
        <div className='container-big'>
          <div className='main__block' id='root-main-right'>
            <Navbar
              category={category}
              setCategory={setCategory}
              setModalCustomActive={setModalCustomActive}
              setModalFillingsActive={setModalFillingsActive}
              setModalProductsActive={setModalProductsActive}
            ></Navbar>
            <Main category={category} posted={posted}></Main>
          </div>
        </div>
      </main>
      {modalCustomActive && <ModalCustom setModalCustomActive={setModalCustomActive}></ModalCustom>}
      {modalFillingsActive && (
        <ModalTemplateBtn
          setModalActive={setModalFillingsActive}
          typeOfGood={'fillings'}
        ></ModalTemplateBtn>
      )}
      {modalProductsActive && (
        <ModalTemplateBtn
          setPosted={setPosted}
          posted={posted}
          setModalActive={setModalProductsActive}
          typeOfGood={'product'}
        ></ModalTemplateBtn>
      )}
    </div>
  )
}

export default App
