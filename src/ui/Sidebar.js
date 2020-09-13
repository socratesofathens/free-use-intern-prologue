import { upY, GAME_WIDTH } from '../lib/game'

import Inventory from './Inventory'
import Phone from './Phone'

export default class Sidebar {
  constructor (scene) {
    this.scene = scene
    this.scene.sidebar = this

    this.X = 3300
    this.MARGIN = 40
    this.LEFT = this.X + this.MARGIN
    this.RIGHT = GAME_WIDTH - this.MARGIN
    this.WIDTH = GAME_WIDTH - this.X
    this.HALF_WIDTH = this.WIDTH / 2
    this.CENTER = this.X + this.HALF_WIDTH

    this.background = this
      .scene
      .addRectangle({
        position: { x: this.X, y: 0 },
        size: { width: 611, height: 2200 },
        color: 0xffffff
      })

    this.addLogo()
    this.addMenu()

    this.inventory = new Inventory(
      this.scene, this
    )
    this.toolkit = this.inventory

    this.phone = new Phone(this.scene)
  }

  addLogo () {
    const y = upY(302.625)

    this.scene.see({
      name: 'interface-logo',
      position: { x: this.LEFT, y },
      size: {
        width: 436.499, height: 559.026
      },
      origin: { x: 0, y: 1 }
    })
  }

  addMenu () {
    const y = upY(251.799)

    this.scene.addText({
      content: 'Save',
      position: { x: this.LEFT, y },
      origin: { x: 0, y: 0 }
    })

    this.scene.addText({
      content: 'Load',
      position: { x: this.RIGHT, y },
      origin: { x: 1, y: 0 }
    })

    this.addPanther()
  }

  addPanther () {
    const y = upY(125.879)

    this.scene.addText({
      content: 'Panther VN',
      position: { x: this.CENTER, y },
      origin: { x: 0.5, y: 0 }
    })
  }

  reset = () => {
    this.phone.reset()

    this.inventory.reset()
  }

  toggle = () => {
    this.reset()

    if (
      this.toolkit === this.inventory
    ) {
      this.toolkit = this.phone
    } else {
      this.toolkit = this.inventory
    }

    this.inventory.toggle()

    this.phone.toggle()
  }
}
