export default class Icon {
  constructor ({
    name, position, icons, hover
  }) {
    this.name = name
    this.position = position
    this.icons = icons
    this.hover = hover

    this.lower = this.name.toLowerCase()

    this.icons.tools.push(this)
    this.scene = this.icons.scene

    this.LENGTH = 207.309

    this.image = `icon-${this.lower}`

    this.icon = this.see(this.image)

    this.selectedImage = `${this.image}-selected`

    this.selected = this
      .see(this.selectedImage)

    this.addLabel()
    this.deselect()
  }

  addLabel () {
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
          fontSize: '30pt',
          color: 'white'
        },
        origin: { x: 0.5, y: 0 },
        depth: 4
      })
    this.label.setVisible(false)

    this.icons.group.add(this.label)
    this
      .icons
      .phone
      .group
      .add(this.label)
  }

  deselect () {
    this.selected.hide()
  }

  destroy () {
    console.log('this.lower test:', this.lower)
    this.icon.destroy()

    this.selected.destroy()

    this.label.destroy()
  }

  select = () => {
    this.icons.reset()

    this.selected.show()

    const { state } = this.scene.game
    state.selected = this.lower
    this.scene.selecting = true
  }

  see (name) {
    this.SIZE = {
      width: this.LENGTH,
      height: this.LENGTH
    }

    const seen = this.icons.see({
      name,
      size: this.SIZE,
      origin: { x: 0, y: 1 },
      position: this.position,
      depth: 1.1,
      hover: this.hover
    })

    return seen
  }
}
