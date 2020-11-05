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

    this.WIDTH = 0.05300664792
    this.HEIGHT = 0.09423136364

    this.image = `icon-${this.lower}`

    this.icon = this.see(this.image)

    this.selectedImage = `${this.image}-selected`

    this.selected = this
      .see(this.selectedImage)

    this.addLabel()
    this.deselect()
  }

  addLabel () {
    this.HALF_WIDTH = this.WIDTH / 2
    const { x, y } = this.position
    this.CENTER = x + this.HALF_WIDTH
    this.BASELINE = y + 0.01227272727

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
      width: this.WIDTH,
      height: this.HEIGHT
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
