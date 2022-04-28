import render from '../render'
export default class Component {
  constructor() {
    this.content = null
    if (this.content != null) {
      renderComp(this.content)
    }
  }
  //content - контент, который будет рендериться, root - корень, где будет отрисован элемент
  renderComp(content, root) {
    render(content, root)
  }
  destroy(root) {
    document.getElementById(root).remove()
  }
}
// https://medium.com/@an_parubets/pattern-event-emitter-js-9378aa082e86
