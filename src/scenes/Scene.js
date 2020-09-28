import Phaser from 'phaser'

import Image from '../Figure/Image'

class Scene extends Phaser.Scene {
  constructor (key, color = '#FFFFFF') {
    super(key)

    this.color = color
    this.image = null
    this.figures = []
  }

  see = (options) => {
    const seen = { ...options, scene: this }

    const image = new Image(seen)

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

  update () {
    this
      .figures
      .forEach(figure => figure.update())
  }
}

export default Scene
