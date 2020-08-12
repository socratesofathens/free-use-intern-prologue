export default class Figure {
  constructor ({
    scene, position, element
  }) {
    this.scene = scene
    this.position = position

    this.element = element
    this.element.setInteractive()
    this.element.on(
      'pointerdown', this.onClick
    )
  }

  do ({ text }) {
    if (text) this.scene.setText(text)
  }

  onClick = () => {
    if (this.scene.tool) {
      this.reset()

      this.use({
        key: 'A', text: 'Adulterer!'
      })
      this.use({
        key: 'F', text: 'Failure!'
      })
      this.use({
        key: 'E',
        text: "I'm so jealous of your email!",
        color: 0x00FF00
      })
    } else {
      this.scene.setText(
        'Give me some inspiration.'
      )
    }
  }

  reset () {}

  use ({ key, text, color }) {
    const { tool } = this.scene
    const match = tool.key === key

    if (match) this.do({ text, color })
  }
}
