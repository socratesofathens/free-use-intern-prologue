import Phaser from 'phaser'

import { GAME_SIZE } from '../lib/game'
import ORIGIN from '../lib/origin'

import Image from '../Figure/Image'
import Interaction from '../Interaction'

class Scene extends Phaser.Scene {
  constructor (key, color = '#FFFFFF') {
    super(key)

    this.color = color
    this.image = null
    this.figures = []
    this.save = null
    this.saves = []
    this.timer = null
    this.fullscreen = null
    this.background = null
    this.initial = { point: 0 }
  }

  advance () {
    const { point } = this.game.state
    this.game.state.point = point + 1

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

  extract (difference = 0) {
    const { state } = this.game
    const { point } = state || 0
    state.point = point

    const sum = state.point + difference

    const copy = { ...state, point: sum }

    if (this.interaction) {
      return this
        .interaction
        .read(copy)
    }

    return this.saves[copy.point]
  }

  interact ({ points, interaction }) {
    if (points) {
      this.interaction = new Interaction({
        scene: this, points
      })
    }

    if (interaction) {
      this.interaction = interaction
    }

    this.game.state.point = -1
  }

  read () {
    this.save = this.extract()

    if (!this.save) return this.save

    this.reset()

    const {
      background,
      images,
      fullscreen,
      scene,
      item
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

  setBackground = ({ color, image }) => {
    const { main } = this.cameras

    main.setBackgroundColor(color)

    if (image) {
      this.image = this.add.image(image)
    }
  }

  setup () {
    const { state } = this.game
    this
      .game
      .state = state || this.initial

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
