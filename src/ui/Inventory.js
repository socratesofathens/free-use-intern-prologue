import Toolkit from './Toolkit'

class Inventory extends Toolkit {
  constructor (scene) {
    super(scene)

    this.scene.sidebar.inventory = this
  }

  addItems = () => {
    const { left } = this.addRow(this.TOP)

    this.phone = left
    this.phone.setToggler('P')

    this.addRow(this.MIDDLE)

    this.addRow(this.BOTTOM)

    const items = this
      .scene
      .registry
      .get('items')

    if (items) items.forEach(this.setItem)
  }

  next = () => {
    return this
      .tools
      .find(tool => !tool.letter)
  }

  setItem = (item) => {
    const slot = this.next()

    slot.setItem(item)
  }
}

export default Inventory
