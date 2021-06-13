import Phaser from 'phaser'

import parse from '../lib/parse'

import Figure from './index'

export default class Zone extends Figure {
  constructor ({
    scene,
    action,
    hover,
    left,
    name,
    right
  }) {
    left = parse(left)
    right = parse(right)

    const width = right.x - left.x
    const height = right.y - left.y

    const halfWidth = width / 2
    const halfHeight = height / 2

    const x = left.x + halfWidth
    const y = left.y + halfHeight

    const zone = scene
      .add
      .zone(x, y, width, height)

    zone.setName(name)

    super({
      scene,
      action,
      element: zone,
      name,
      hover
    })

    this.left = left
    this.right = right

    if (scene.debug) {
      const color = new Phaser.Display.Color().random()

      this.rectangle = this.scene.add.rectangle(
        x, y, width, height, color.color
      )
    }
  }
}
