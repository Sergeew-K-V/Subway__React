import '../css/app.css'
import ModalFillings from './Modals/ModalFillings'
import Navbar from './Navbar/Navbar'
function App() {
  return (
    <div className='app'>
      <ModalFillings></ModalFillings>
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
            <Navbar></Navbar>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
