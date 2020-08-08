import Item from './Item'

export default class Inventory {
  constructor (scene) {
    this.scene = scene

    this.TOP = 161.591
    this.MIDDLE = 299.591
    this.BOTTOM = 437.491

    this.LEFT = 1379.344
    this.RIGHT = 1485.344

    const room = this.scene.addText(
      { x: 1475, y: 51.146 },
      'Cyan Room',
      { fontSize: '30px', fontFamily: 'futura' }
    )
    room.setOrigin(0.5, 1)

    const { left, right } = this.addRow(this.TOP)

    left.square.setFillStyle(0xFF0000)
    right.square.setFillStyle(0xFFFF00)

    this.addRow(this.MIDDLE)
    this.addRow(this.BOTTOM)
  }

  addRow = y => {
    const left = new Item(
      this.scene, { x: this.LEFT, y }
    )

    const right = new Item(
      this.scene, { x: this.RIGHT, y }
    )

    return { left, right }
  }
}
