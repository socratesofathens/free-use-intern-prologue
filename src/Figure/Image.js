import Phaser from 'phaser'

import ORIGIN from '../lib/origin'

import Figure from './index'

export default class Image extends Figure {
  constructor ({
    scene,
    name,
    origin,
    position = ORIGIN,
    size,
    to,
    time,
    uses,
    depth,
    action
  }) {
    const { x, y } = position

    const image = scene
      .physics
      .add
      .image(x, y, name)

    super({
      scene,
      position,
      element: image,
      uses,
      action
    })

    this.to = to
    this.time = time
    this.name = name
    this.size = size
    this.origin = origin
    this.depth = depth

    if (this.origin) {
      const { x, y } = this.origin

      this.element.setOrigin(x, y)
    }

    if (this.size) {
      const { width, height } = this.size

      this.element.setDisplaySize(
        width, height
      )
    }

    if (this.to) {
      const { x, y } = this.to

      this.scene.physics.moveTo(
        this.element, x, y, 0, time
      )
    }

    if (this.depth) {
      this.element.setDepth(this.depth)
    }
  }

  destroy () {
    super.destroy()
  }

  update () {
    if (this.element.body) {
      const { speed } = this.element.body
      if (speed <= 0) return speed

      const towards = !this.to || !this.to.x || !this.to.y
      if (towards) return this.to

      const { x, y } = this.to

      const distance = Phaser
        .Math
        .Distance
        .Between(
          this.element.x, this.element.y, x, y
        )

      if (distance > 5) return distance

      this.element.body.reset(x, y)
    }
  }
}
