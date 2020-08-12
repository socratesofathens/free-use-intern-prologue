import Figure from './index'

class Rectangle extends Figure {
  constructor ({
    scene,
    position,
    size,
    color = 0xFF0000
  }) {
    const { x, y } = position
    const { width, height } = size
    const element = scene.add.rectangle(
      x, y, width, height, color
    )

    super({
      scene, position, size, color, element
    })
  }
}

export default Rectangle
