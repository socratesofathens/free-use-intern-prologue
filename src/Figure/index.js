export default class Figure {
  constructor ({
    scene, position, element, uses = []
  }) {
    this.scene = scene
    this.position = position

    this.element = element
    this.element.setInteractive()
    this.element.on(
      'pointerdown', this.onClick
    )

    this.uses = uses
  }

  do ({ text, callback }) {
    if (text) this.scene.setText(text)

    if (callback) callback()
  }

  onClick = () => {
    this.reset()

    this.scene.setText(
      'Give me some inspiration.'
    )

    this.uses.forEach(this.use, this)
  }

  reset () {}

  use ({ key, text, color, callback }) {
    const { tool } = this.scene
    const match = key
      ? tool && tool.key === key
      : true

    if (match) {
      this.do({ text, color, callback })
    }
  }
}
