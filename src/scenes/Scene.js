import Phaser from 'phaser'

import ORIGIN from '../lib/origin'

class Scene extends Phaser.Scene {
  constructor (key, color = '#FFFFFF') {
    super(key)

    this.color = color
    this.image = null
  }

  see ({
    name,
    origin = ORIGIN,
    position,
    size
  }) {
    const { x, y } = position

    const image = this.add.image(x, y, name)

    if (origin) {
      const { x, y } = origin

      image.setOrigin(x, y)
    }

    if (size) {
      const { width, height } = size

      image.setDisplaySize(width, height)
    }

    return image
  }

  create = () => {
    this.setBackground({ color: this.color })

    const space = this
      .input
      .keyboard
      .addKey('SPACE')
    space.on('down', this.advance)

    this.setup()
  }

  setBackground = ({ color, image }) => {
    const { main } = this.cameras

    main.setBackgroundColor(color)

    if (image) {
      this.image = this.add.image(image)
    }
  }

  advance () {}

  setup () {}
}

export default Scene
