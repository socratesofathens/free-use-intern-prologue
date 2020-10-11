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

    this.initial = [
      { x: this.LEFT, y: this.TOP },
      { x: this.RIGHT, y: this.TOP },
      { x: this.LEFT, y: this.MIDDLE },
      { x: this.RIGHT, y: this.MIDDLE },
      { x: this.LEFT, y: this.BOTTOM },
      { x: this.RIGHT, y: this.BOTTOM }
    ]
    this.positions = [...this.initial]

    this.tools = []

    this.icons = this
      .names
      .map(this.addIcon)

    this.icons.forEach(icon => {
      const { lower } = icon

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

      icon.icon.element.setVisible(false)

      position.icon = icon

      return icon
    }

    console.warn(
      'No empty position left!',
      this.positions
    )
  }

  close () {
    this.group.setVisible(false)
  }

  destroy () {
    this
      .positions
      .forEach(position => position
        .icon
        ?.destroy()
      )
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
