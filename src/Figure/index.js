export default class Figure {
  constructor ({
    scene, position, size, color, element
  }) {
    this.element = element
    this.element.setInteractive()
    this.element.on(
      'pointerdown', this.onClick
    )

    this.scene = scene
    this.positoin = position
    this.size = size
    this.color = color
    this.colorful = false
  }

  onClick = () => {
    if (this.scene.tool) {
      if (this.colorful) {
        this.element.setFillStyle(this.color)

        this.colorful = false
      }

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

  use ({ key, text, color }) {
    if (this.scene.tool.key === key) {
      if (text) this.scene.setText(text)

      if (color) {
        this.element.setFillStyle(color)

        this.colorful = true
      }
    }
  }
}