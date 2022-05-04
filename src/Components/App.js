import { useState } from 'react'
import '../css/app.css'
import Main from './Main/Main'
import ModalFillings from './Modals/ModalFillings'
import Navbar from './Navbar/Navbar'
function App() {
  const [modalActive, setModalActive] = useState(false)
  return (
    <div className='app'>
      {modalActive && <ModalFillings setActive={setModalActive}></ModalFillings>}
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
            <Navbar modalControls={setModalActive}></Navbar>
            <Main></Main>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
