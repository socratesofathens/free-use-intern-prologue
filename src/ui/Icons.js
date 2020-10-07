import { upY } from '../lib/game'

import Icon from './Icon'

export default class Icons {
  constructor ({
    names,
    phone
  }) {
    this.phone = phone
    this.names = names

    this.scene = this.phone.scene

    this.group = this.scene.addGroup()

    this.LEFT = 3372.606
    this.RIGHT = 3631.817

    this.TOP = upY(1804.439)
    this.MIDDLE = upY(1467.024)
    this.BOTTOM = upY(1129.709)

    this.positions = [
      { x: this.LEFT, y: this.TOP },
      { x: this.RIGHT, y: this.TOP },
      { x: this.LEFT, y: this.MIDDLE },
      { x: this.RIGHT, y: this.MIDDLE },
      { x: this.LEFT, y: this.BOTTOM },
      { x: this.RIGHT, y: this.BOTTOM }
    ]

    this.tools = []

    this.lowers = this
      .names
      .map(this.addIcon)

    this.lowers.forEach(lower => {
      const { icon } = this
        .positions
        .find(position => position
          .icon
          .lower === lower
        )

      this[lower] = icon
    })

    this.close()
  }

  addIcon = (name) => {
    const position = this
      .positions
      .find(position => !position.icon)

    if (position) {
      const icon = new Icon({
        name,
        position: position,
        icons: this
      })

      position.icon = icon

      return icon.lower
    }

    console.warn('No empty position left!', this.positions)
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
