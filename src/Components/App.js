import { useEffect, useState } from 'react'
import '../css/app.css'
import Main from './Main/Main'
import ModalCustom from './Modals/ModalCustom/ModalCustom'
import ModalFillings from './Modals/ModalFillings'
import ModalProducts from './Modals/ModalProducts'
import Navbar from './Navbar/Navbar'

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
        // Route here need use
        <ModalFillings setModalFillingsActive={setModalFillingsActive}></ModalFillings>
      )}
      {modalProductsActive && (
        // Route here need use
        <ModalProducts
          setPosted={setPosted}
          posted={posted}
          setModalProductsActive={setModalProductsActive}
        ></ModalProducts>
      )}
      <header className='header'>
        <div className='container-middle'>
          <div className='header__block'>
            <div className='header__title'>
              <h1>Сделайте заказ напрямую из ресторана</h1>
            </div>
          </div>
        </div>
      </header>
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
