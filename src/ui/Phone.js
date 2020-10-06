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
    this.MIDDLE = upY(1467.024)
    this.BOTTOM = upY(1129.709)

    this.tools = []

    this.power = new Icon({
      name: 'power',
      position: {
        x: this.LEFT, y: this.TOP
      },
      phone: this
    })

    this.phone = new Icon({
      name: 'phone',
      position: {
        x: this.RIGHT, y: this.TOP
      },
      phone: this
    })

    this.email = new Icon({
      name: 'email',
      position: {
        x: this.LEFT, y: this.MIDDLE
      },
      phone: this
    })

    this.web = new Icon({
      name: 'web',
      position: {
        x: this.RIGHT, y: this.MIDDLE
      },
      phone: this
    })

    this.camera = new Icon({
      name: 'camera',
      position: {
        x: this.LEFT, y: this.BOTTOM
      },
      phone: this
    })

    this.photos = new Icon({
      name: 'photos',
      position: {
        x: this.RIGHT, y: this.BOTTOM
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

    this.reset()
  }

  reset () {
    this
      .tools
      .forEach(icon => icon.deselect())
  }

  see (image) {
    const seen = this.scene.see(image)

    this.group.add(seen.element)

    return seen
  }
}
