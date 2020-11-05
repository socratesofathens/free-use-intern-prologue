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

    this.LEFT = 0.8623385323
    this.RIGHT = 0.928615955

    this.TOP = upY(0.8201995455)
    this.MIDDLE = upY(0.6668290909)
    this.BOTTOM = upY(0.5135040909)

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

  addIcon = ({ name, hover }) => {
    const position = this
      .positions
      .find(position => !position.icon)

    if (position) {
      const icon = new Icon({
        name,
        position: position,
        icons: this,
        hover
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
