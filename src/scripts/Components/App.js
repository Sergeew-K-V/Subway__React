import Component from './Component'
import data from '../../../data.json'
// import data from '../../../dataForGit.json'
import Menu from './Menu'
import EventEmitter from '../EventEmitter'
import Modal from './Modal/Modal'
import Basket from './Basket'
import Main from './Main'
const emitter = new EventEmitter()

export default class App extends Component {
  constructor(emitter) {
    super()
    this.emitter = emitter
    this.id = 'app'
    this.renderComp(this.getContent, document.getElementById('modal-root'))
    this.emitter.subscribe('btnModalOpen', () => {
      const btnCustom = document.getElementById('btn-custom')
      let idChanged = false
      btnCustom.addEventListener('click', () => {
        /////////////// 1 ///////////////
        const dataForModal = {
          sizes: data.sizes,
          breads: data.breads,
          vegetables: data.vegetables,
          sauces: data.sauces,
          fillings: data.fillings,
        }
        //Changing ID for correct seacrh of curr Element
        if (!idChanged) {
          for (let key in dataForModal) {
            for (let secKey in dataForModal[key]) {
              dataForModal[key][secKey].id = 'modal-' + dataForModal[key][secKey].id
              dataForModal[key][secKey].selected = false
            }
            idChanged = true
          }
        }
        const modal = new Modal(dataForModal, emitter)
      })
    })
  }
  get getContent() {
    return (this.content = ``)
  }
}

const app = new App(emitter)
const main = new Main({ data, emitter })
const menu = new Menu({ emitter, category: main.category })
const basket = new Basket({ emitter })
