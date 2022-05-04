import { useState } from 'react'
import '../css/app.css'
import Main from './Main/Main'
import ModalFillings from './Modals/ModalFillings'
import Navbar from './Navbar/Navbar'
function App() {
  const [modalFillingsActive, setModalFillingsActive] = useState(false)
  return (
    <div className='app'>
      {modalFillingsActive && <ModalFillings setActive={setModalFillingsActive}></ModalFillings>}
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
            <Navbar modalControls={setModalFillingsActive}></Navbar>
            <Main></Main>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
