import Item from './Item'

import toggle from '../lib/toggle'

export default class Toolkit {
  constructor (scene) {
    this.scene = scene

    this.TOP = 161.591
    this.MIDDLE = 299.591
    this.BOTTOM = 437.491

    this.LEFT = 1379.344
    this.RIGHT = 1485.344

    this.tools = []
    this.elements = []
  }

  addRow = y => {
    const left = new Item({
      scene: this.scene,
      position: { x: this.LEFT, y },
      toolkit: this
    })

    const right = new Item({
      scene: this.scene,
      position: { x: this.RIGHT, y },
      toolkit: this
    })

    return { left, right }
  }

  reset = () => {
    this.tools.forEach(tool => tool.reset())
  }

  toggle = () => {
    this.tools.forEach(tool => tool.toggle())

    this.elements.forEach(
      element => toggle(element)
    )
  }
}
