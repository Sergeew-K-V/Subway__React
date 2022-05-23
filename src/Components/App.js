import { useState } from 'react'
import Header from './Header'
import Main from './Main/Main'
import Navbar from './Navbar/Navbar'
import ModalCustom from './Modals/ModalCustom/ModalCustom'
import ModalFillings from './Modals/ModalFillings'
import ModalProducts from './Modals/ModalProducts'

import '../css/app.css'

function App() {
  const [modalFillingsActive, setModalFillingsActive] = useState(false)
  const [modalProductsActive, setModalProductsActive] = useState(false)
  const [modalCustomActive, setModalCustomActive] = useState(false)

  const [category, setCategory] = useState('pizza')
  const [posted, setPosted] = useState(false)

  return (
    <div className='app'>
      {modalCustomActive && <ModalCustom setModalCustomActive={setModalCustomActive}></ModalCustom>}
      {modalFillingsActive && (
        <ModalFillings setModalFillingsActive={setModalFillingsActive}></ModalFillings>
      )}
      {modalProductsActive && (
        <ModalProducts
          setPosted={setPosted}
          posted={posted}
          setModalProductsActive={setModalProductsActive}
        ></ModalProducts>
      )}
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
    </div>
  )
}

export default App
