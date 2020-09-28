import { upY } from '../lib/game'

import Toolkit from './Toolkit'

class Inventory extends Toolkit {
  constructor (scene) {
    super(scene)

    this.scene.sidebar.inventory = this

    this.addBackground()
  }

  addBackground () {
    const y = upY(900)

    this.background = this
      .scene
      .addRectangle({
        size: { width: 611, height: 1300 },
        position: { x: 3300, y },
        origin: { x: 0, y: 1 },
        color: 0x666666
      })

    this.elements.push(this.background)
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
