import { upY } from '../lib/game'

import Icon from './Icon'

export default class Icons {
  constructor (phone) {
    this.phone = phone
    this.scene = this.phone.scene

    this.group = this.scene.addGroup()

    this.LEFT = 3372.606
    this.RIGHT = 3631.817

    this.TOP = upY(1804.439)
    this.MIDDLE = upY(1467.024)
    this.BOTTOM = upY(1129.709)

    this.tools = []

    this.icons = {}
    this.icons.power = new Icon({
      name: 'power',
      position: {
        x: this.LEFT, y: this.TOP
      },
      icons: this
    })

    this.icons.phone = new Icon({
      name: 'phone',
      position: {
        x: this.RIGHT, y: this.TOP
      },
      icons: this
    })

    this.icons.email = new Icon({
      name: 'email',
      position: {
        x: this.LEFT, y: this.MIDDLE
      },
      icons: this
    })

    this.icons.web = new Icon({
      name: 'web',
      position: {
        x: this.RIGHT, y: this.MIDDLE
      },
      icons: this
    })

    this.icons.camera = new Icon({
      name: 'camera',
      position: {
        x: this.LEFT, y: this.BOTTOM
      },
      icons: this
    })

    this.icons.photos = new Icon({
      name: 'photos',
      position: {
        x: this.RIGHT, y: this.BOTTOM
      },
      icons: this
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
    const seen = this.phone.see(image)

    this.group.add(seen.element)

    return seen
  }
}
