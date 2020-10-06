import {
  upY, GAME_WIDTH
} from '../lib/game'

import Icon from './Icon'

export default class Phone {
  constructor (scene) {
    this.scene = scene

    this.group = this.scene.addGroup()

    this.background = this.see({
      name: 'phone',
      size: { height: 1300, width: 611 },
      origin: { x: 1, y: 0 },
      position: { x: GAME_WIDTH, y: 0 },
      depth: 1.1
    })

    this.LEFT = 3372.606
    this.RIGHT = 3631.817
    this.TOP = upY(1804.439)

    this.icons = []

    this.power = new Icon({
      name: 'power',
      position: {
        x: this.LEFT, y: this.TOP
      },
      phone: this
    })

    this.camera = new Icon({
      name: 'camera',
      position: {
        x: this.RIGHT, y: this.TOP
      },
      phone: this
    })

    this.close()
  }

  close () {
    this.group.setVisible(false)
  }

  open () {
    this.group.setVisible(true)

    this
      .icons
      .forEach(icon => icon.deselect())
  }

  see (image) {
    const seen = this.scene.see(image)

    this.group.add(seen.element)

    return seen
  }
}
