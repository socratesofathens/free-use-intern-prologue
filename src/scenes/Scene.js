import Phaser from 'phaser'

class Scene extends Phaser.Scene {
  constructor (key, color = '#FFFFFF') {
    super(key)

    this.color = color
    this.image = null
    this.animations = []
  }

  see = ({
    name,
    origin = { x: 0.5, y: 0.5 },
    position,
    to,
    time,
    size
  }) => {
    const { x, y } = position

    const image = this
      .physics
      .add
      .image(x, y, name)

    if (origin) {
      const { x, y } = origin

      image.setOrigin(x, y)
    }

    if (size) {
      const { width, height } = size

      image.setDisplaySize(width, height)
    }

    if (to) {
      const { x, y } = to

      this.physics.moveTo(
        image, x, y, 0, time
      )

      this.animations.push({ image, to })
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

  stopImage = ({ image, to }) => {
    if (image.body.speed > 0) {
      const { x, y } = to

      const distance = Phaser
        .Math
        .Distance
        .Between(
          image.x, image.y, x, y
        )

      if (distance < 5) {
        image.body.reset(x, y)
      }
    }
  }

  setup () {}

  update () {
    this.animations.forEach(this.stopImage)
  }
}

export default Scene
