import './css/app.css'

function App() {
  return (
    <div className='App'>
      <header class='header'>
        <div class='container-middle'>
          <div class='header__block'>
            <div class='header__title'>
              <h1>Сделайте заказ напрямую из ресторана</h1>
            </div>
          </div>
        </div>
      </header>
      <main class='main'>
        <div class='container-big'>
          <div class='main__block' id='root-main-right'>
            <div class='navbar__block'>
              <div class='navbar__top'>
                <div class='navbar__menu-block' id='menu__root'></div>
              </div>
              <div class='navbar__middle'>
                <div class='navbar__btn-custom'>
                  <button id='btn-custom'>
                    <span>Собрать свой</span>
                  </button>
                </div>
              </div>
              <div class='navbar__bottom' id='basket-root'>
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
