import './css/app.css'
import Menu from './Menu'

function App() {
  return (
    <div className='app'>
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
            <div className='navbar__block'>
              <div className='navbar__top'>
                <div className='navbar__menu-block' id='menu__root'>
                  <Menu></Menu>
                </div>
              </div>
              <div className='navbar__middle'>
                <div className='navbar__btn-custom'>
                  <button id='btn-custom'>
                    <span>Собрать свой</span>
                  </button>
                </div>
              </div>
              <div className='navbar__bottom' id='basket-root'>
                {/* <!-- Here is a basket --> */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
