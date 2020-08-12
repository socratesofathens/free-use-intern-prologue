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
        fontFamily: 'futura'
      }
    })
    this.room.setOrigin(0.5, 1)
    this.elements.push(this.room)

    this.addItems()
  }

  addItems = () => {
    const {
      left: phone, right
    } = this.addRow(this.TOP)

    this.phone = phone
    this.phone.setToggler('P')

    right.setTool('F')

    const { left } = this.addRow(this.MIDDLE)
    left.setTool('A')

    this.addRow(this.BOTTOM)
  }
}

export default Inventory
