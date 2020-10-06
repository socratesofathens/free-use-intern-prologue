export default class Icon {
  constructor ({
    name, position, phone
  }) {
    this.name = name
    this.position = position
    this.phone = phone
    this.phone.tools.push(this)
    this.scene = this.phone.scene

    this.LENGTH = 207.309

    this.image = `icon-${this.name}`

    this.icon = this.see(this.image)

    this.selectedImage = `${this.image}-selected`

    this.selected = this
      .see(this.selectedImage, false)

    this.HALF_LENGTH = this.LENGTH / 2
    const { x, y } = this.position
    this.CENTER = x + this.HALF_LENGTH
    this.BASELINE = y + 27

    this.label = this
      .scene
      .addText({
        position: {
          x: this.CENTER, y: this.BASELINE
        },
        content: this.name,
        options: {
          fontSize: '30pt'
        },
        origin: { x: 0.5, y: 0 },
        depth: 4
      })

    this.phone.group.add(this.label)
  }

  deselect () {
    this.selected.hide()
  }

  select = () => {
    this.phone.reset()

    this.selected.show()
  }

  see (name, visible = true) {
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
