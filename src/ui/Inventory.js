import Toolkit from './Toolkit'

class Inventory extends Toolkit {
  constructor (scene) {
    super(scene)

    this.scene.sidebar.inventory = this

    this.background = this
      .scene
      .add
      .rectangle(
        1600, 0, 250, 531.595, 0x666666
      )
    this.background.setOrigin(1, 0)
    this.elements.push(this.background)

    this.room = this.scene.addText({
      position: { x: 1475, y: 51.146 },
      content: 'Cyan Room',
      options: {
        fontSize: '30px',
        fontFamily: 'futura',
        color: 'white'
      },
      origin: { x: 0.5, y: 1 }
    })
    this.elements.push(this.room)

    this.addItems()
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
    items.forEach(this.setItem)
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
