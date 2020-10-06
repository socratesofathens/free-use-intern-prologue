import { upY } from '../lib/game'

import Icon from './Icon'

export default class Icons {
  constructor (names, phone) {
    this.phone = phone
    this.names = names

    this.scene = this.phone.scene

    this.group = this.scene.addGroup()

    this.LEFT = 3372.606
    this.RIGHT = 3631.817

    this.TOP = upY(1804.439)
    this.MIDDLE = upY(1467.024)
    this.BOTTOM = upY(1129.709)

    this.tools = []

    this.icons = this.addIcons()

    this.close()
  }

  addIcons (names) {
    const positions = [
      { x: this.LEFT, y: this.TOP },
      { x: this.RIGHT, y: this.TOP },
      { x: this.LEFT, y: this.MIDDLE },
      { x: this.RIGHT, y: this.MIDDLE },
      { x: this.LEFT, y: this.BOTTOM },
      { x: this.RIGHT, y: this.BOTTOM }
    ]

    return this.names
      .map((icon, index) => {
        const position = positions[index]

        return new Icon({
          name: icon,
          position: position,
          icons: this
        })
      })
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
