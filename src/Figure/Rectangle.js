import Figure from './index'

class Rectangle extends Figure {
  constructor ({
    scene,
    position,
    size,
    color = 0xFF0000,
    uses
  }) {
    const { x, y } = position
    const { width, height } = size
    const element = scene.add.rectangle(
      x, y, width, height, color
    )

    super({
      scene, position, element, uses
    })

    this.color = color
  }

  do ({ text, color, callback }) {
    console.log('color 1 test:', color)
    if (color) {
      console.log('color test:', color)
      this.element.setFillStyle(color)

      this.colorful = true
    }

    super.do({ text, color, callback })
  }

  reset () {
    this.element.setFillStyle(this.color)

    super.reset()
  }
}

export default Rectangle
