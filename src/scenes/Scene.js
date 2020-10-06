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
    this.background = null
  }

  advance () {
    this.point = this.point + 1

    this.read()
  }

  create = () => {
    this.setBackground({
      color: this.color
    })

    const space = this
      .input
      .keyboard
      .addKey('SPACE')
    space.on('down', this.advance, this)

    this
      .input
      .on(
        'pointerup', this.advance, this
      )

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

    this.reset()

    const {
      background,
      images,
      fullscreen,
      scene,
      item,
      interactions
    } = this.save

    if (scene) this.scene.start(scene)

    if (fullscreen) {
      this.fullscreen = this.see({
        ...fullscreen,
        size: GAME_SIZE,
        origin: ORIGIN,
        depth: 2
      })

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

    if (background) {
      console.log('background test:', background)
      this.background = this
        .background
        ?.destroy()

      this.background = this.see({
        name: background,
        origin: ORIGIN
      })
    }

    if (item) {
      const { name, position } = item
      const image = `item-${name}`

      this.see({ name: image, position })
    }

    return images?.map(this.see)
  }

  reset () {
    this.timer = this.timer?.remove()

    if (this.fullscreen) {
      this.fullscreen.destroy()
    }
  }

  see = (options) => {
    const seen = {
      ...options, scene: this
    }

    const image = new Image(seen)

    return image
  }

  setup () {
    this.read()
  }

  update () {
    this
      .figures
      .forEach(figure => figure.update())
  }

  use (name) {
    console.log('used test:', name)
  }
}

export default Scene
