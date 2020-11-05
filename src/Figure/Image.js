import Phaser from 'phaser'

import { realPosition, realSize } from '../lib/game'
import ORIGIN from '../lib/origin'

import Figure from './index'

export default class Image extends Figure {
  constructor ({
    scene,
    name,
    origin,
    position,
    size,
    to,
    time,
    uses,
    depth,
    action,
    title,
    hover
  }) {
    if (!position) {
      position = ORIGIN
      origin = ORIGIN
    }

    const realized = realPosition(position)
    const { x, y } = realized

    const image = scene
      .physics
      .add
      .image(x, y, name)

    super({
      scene,
      position,
      element: image,
      uses,
      action,
      name,
      title,
      hover
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
      this.realSize = realSize(this.size)
      const { width, height } = this.realSize

      this.element.setDisplaySize(
        width, height
      )
    }

    if (this.to) {
      this.realTo = realPosition(this.to)
      const { x, y } = realPosition(this.to)

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

  hide () {
    this.element.visible = false
  }

  show () {
    this.element.visible = true
  }

  update () {
    if (this.element.body) {
      const { speed } = this.element.body
      if (speed <= 0) return speed

      const towards = !this.to || !this.to.x || !this.to.y
      if (towards) return this.to

      const { x, y } = this.realTo

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
