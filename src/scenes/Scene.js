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
    this.initial = {
      point: 0,
      photos: ['selfie'],
      items: []
    }
    this.images = {}
  }

  addItem = ({ name, position }) => {
    const image = `item-${name}`

    return this
      .see({ name: image, position })
  }

  advance () {
    console.log('advance test:')
    const { point } = this.game.state
    this.game.state.point = point + 1

    this.read()
  }

  animate = (animation) => {
    const {
      key, duration, keys, position
    } = animation

    const frames = keys
      .map(key => ({ key, duration }))

    this.anims.create({
      key,
      frames,
      repeat: -1
    })

    const { x, y } = position
    const name = keys[0]

    this.add.sprite(x, y, name).play(key)
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
    console.log('read test:')
    this.save = this.extract()

    if (!this.save) return this.save

    console
      .log('this.save test:', this.save)

    this.reset()

    const {
      background,
      images,
      fullscreen,
      scene,
      item,
      state,
      photo,
      animations
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
      this.game.state.items.push(item)

      this.addItem(item)
    }

    if (state) {
      const newState = {
        ...this.game.state,
        ...state
      }

      this.game.state = newState
    }

    if (photo) {
      console.log('photo test:', photo)
      const { photos } = this.phone

      const icon = photos.addIcon(photo)
      photos[icon.lower] = icon
    }

    const next = this.extract(1)
    console.log('next test:', next)
    if (!next) {
      this.reload()
    }

    if (animations) {
      animations
        .forEach(this.animate)
    }

    return images?.map(this.see)
  }

  reload () {
    console.log('reload test')
    const { state } = this.game

    state.selected = null

    this.interaction = null

    state.point = this.saves.length
  }

  reset () {
    this.timer = this.timer?.remove()

    if (this.fullscreen) {
      this.fullscreen.destroy()
    }
  }

  see = (options) => {
    const { title, name } = options

    options.title = title || name

    if (options.remove) {
      const image = this
        .images[options.title]

      return image.destroy()
    }

    const seen = {
      ...options, scene: this
    }

    const image = new Image(seen)

    this.images[seen.title] = image

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
    this
      .game
      .state = this
        .game
        .state || this.initial

    const { state } = this.game
    state.point = 0
    state.items.forEach(this.addItem)

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
