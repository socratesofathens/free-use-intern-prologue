import {
  upY, GAME_WIDTH
} from '../lib/game'

export default class Icon {
  constructor ({
    name, position, phone
  }) {
    this.name = name
    this.position = position
    this.phone = phone
    this.phone.icons.push(this)

    this.scene = this.phone.scene

    this.image = `icon-${this.name}`

    this.icon = this.see(this.image)

    this.selectedImage = `${this.image}-selected`

    this.selected = this
      .see(this.selectedImage, false)
  }

  deselect () {
    this.selected.hide()
  }

  select = () => {
    this.selected.show()
  }

  see (name, visible = true) {
    this.LENGTH = 207.309
    this.SIZE = {
      width: this.LENGTH,
      height: this.LENGTH
    }

    const seen = this.phone.see({
      name,
      size: this.SIZE,
      origin: { x: 0, y: 1 },
      position: this.position,
      depth: 1.1,
      action: this.select
    })

    seen.element.visible = visible

    return seen
  }
}
