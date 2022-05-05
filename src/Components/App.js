import { useState } from 'react'
import '../css/app.css'
import Main from './Main/Main'
import { Route, Router, BrowserRouter } from 'react-router-dom'
import ModalFillings from './Modals/ModalFillings'
import Navbar from './Navbar/Navbar'
function App() {
  const [modalFillingsActive, setModalFillingsActive] = useState(false)
  return (
    <BrowserRouter>
      <div className='app'>
        {modalFillingsActive && (
          // Route here need use
          <ModalFillings setModalFillingsActive={setModalFillingsActive}></ModalFillings>
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
              <Navbar setModalFillingsActive={setModalFillingsActive}></Navbar>
              <Main></Main>
            </div>
          </div>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
