import Phaser from 'phaser'

import { GAME_SIZE } from '../lib/game'
import ORIGIN from '../lib/origin'

import Image from '../Figure/Image'

class Scene extends Phaser.Scene {
  constructor (key, color = '#FFFFFF') {
    super(key)

    this.color = color
    this.image = null
    this.figures = []
    this.point = 0
    this.save = null
    this.saves = []
    this.timer = null
    this.fullscreen = null
  }

  advance () {
    this.point = this.point + 1

    this.read()
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
    space.on('down', this.advance, this)

    this.setup()
  }

  setBackground = ({ color, image }) => {
    const { main } = this.cameras

    main.setBackgroundColor(color)

    if (image) {
      this.image = this.add.image(image)
    }
  }

  read () {
    this.point = this.point || 0
    this.save = this.saves[this.point]

    if (!this.save) return this.save

    if (this.fullscreen) {
      this.fullscreen.destroy()

      this.input.off(
        'pointerup', this.advance
      )

      this.timer = this.timer?.remove()
    }

    const {
      images, fullscreen
    } = this.save

    if (fullscreen) {
      this.fullscreen = this.see({
        ...fullscreen,
        size: GAME_SIZE,
        origin: ORIGIN,
        depth: 2
      })

      this.input.on(
        'pointerup', this.advance
      )

      if (fullscreen.time) {
        this.timer = this
          .time
          .delayedCall(
            fullscreen.time,
            this.advance,
            null,
            this
          )
      }
    }

    return images?.map(this.see)
  }

  setup () {
    this.read()
  }

  update () {
    this
      .figures
      .forEach(figure => figure.update())
  }
}

export default Scene
