import Figure from './index'

import { realPosition } from '../lib/game'

class Rectangle extends Figure {
  constructor ({
    scene,
    position,
    size,
    color = 0xFF0000,
    uses,
    name
  }) {
    const { x, y } = realPosition(position)
    const { width, height } = size
    const element = scene.add.rectangle(
      x, y, width, height, color
    )

    super({
      scene,
      position,
      element,
      uses,
      name
    })

    this.color = color
  }

  do ({ text, color, callback }) {
    if (color) {
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
