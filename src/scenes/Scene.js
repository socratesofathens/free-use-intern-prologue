import Phaser, { Renderer } from 'phaser'

import { GAME_SIZE } from '../lib/game'
import ORIGIN from '../lib/origin'

import Image from '../Figure/Image'
import Interaction from '../Interaction'

class Scene extends Phaser.Scene {
  constructor (name, color = '#FFFFFF') {
    super(name)

    this.name = name
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
      photos: [],
      items: [],
      images: [],
      animations: [],
      open: false
    }
    this.images = {}
    this.selecting = false
    this.sprites = []
  }

  addItem = (options) => {
    const { name, position } = options
    const image = `item-${name}`

    const item = this
      .see({ name: image, position })

    console.log('item test:', item)

    this.game.state.items.push(options)

    return item
  }

  advance () {
    console
      .log('advance test:')
    if (this.selecting) {
      return this.selecting
    }

    const { point } = this.game.state
    console.log('advance point test:', point)
    this.game.state.point = point + 1

    this.read()
  }

  animate = (animation) => {
    this
      .game
      .state
      .animations
      .push(animation)

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

    const sprite = this
      .add
      .sprite(x, y, name)
    sprite.play(key)
    this.sprites.push(sprite)
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
        'pointerdown', this.advance, this
      )
    this.setup()
  }

  extract (difference = 0) {
    console.log('difference test:', difference)
    const { state } = this.game
    console.log('extract state test:', state)
    const { point } = state || 0
    state.point = point

    const sum = state.point + difference

    const copy = { ...state, point: sum }
    console.log('copy test:', copy)

    if (this.interaction) {
      return this
        .interaction
        .read(copy)
    }

    return this.saves[copy.point]
  }

  init (data) {
    console.log('data test:', data)
    const names = Object
      .getOwnPropertyNames(data)

    const empty = names.length === 0

    if (!empty) {
      this.save = data
      this
        .game
        .state
        .point = this.save.point

      this.game.state.intercom = this.save.intercom
      this.game.state.taken = this.save.emma
      this.game.state.steve = this.save.steve
    }
  }

  interact ({
    points,
    interaction,
    point
  }) {
    this.selecting = false

    if (points) {
      this.interaction = new Interaction({
        scene: this, points
      })
    }

    if (interaction) {
      this.interaction = interaction
    }

    this
      .game
      .state
      .interaction = this.interaction.name
    this.game.state.point = point || -1
  }

  loadState () {
    this
      .game
      .state
      .items
      .forEach(this.addItem)
  }

  read () {
    this.save = this.extract()

    if (!this.save) return this.save

    this.render()
  }

  render () {
    this.reset()

    const {
      background,
      images,
      fullscreen,
      scene,
      item,
      items,
      state,
      animations
    } = this.save

    console.log('render this.save test:', this.save)

    if (scene) {
      this.save = null

      this.scene.start(scene)
    }

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

      this
        .game
        .state
        .background = background
    }

    if (item) {
      this.addItem(item)
    }

    if (items) {
      console.log('items test:', items)
      items.forEach(this.addItem)
    }

    if (animations) {
      animations.forEach(this.animate)
    }

    if (images) {
      images.forEach(image => {
        const seen = this.see(image)

        if (!image.remove) {
          const copy = { ...image }

          if (copy.to) {
            copy.position = copy.to

            copy.to = null
            copy.time = null
          }

          copy.figure = seen

          this
            .game
            .state
            .images
            .push(copy)
        }
      })
    }

    if (state) {
      const newState = {
        ...this.game.state,
        ...state
      }

      this.game.state = newState
    }

    const next = this.extract(1)
    if (!next) {
      this.reload()
    }
  }

  reload () {
    const { state } = this.game

    state.selected = null

    this.interaction = null
    state.interaction = null

    state.point = this.saves.length
  }

  reset () {
    this.timer = this.timer?.remove()

    if (this.fullscreen) {
      this.fullscreen.destroy()
    }
  }

  see = (options) => {
    const {
      title, name, remove
    } = options

    options.title = title || name

    if (remove) {
      const image = this
        .images[options.title]

      const { images } = this.game.state
      const removed = images
        .filter(image => {
          const match = image.title !== options.title

          return match
        })

      console.log('removed test:', removed)
      this.game.state.images = removed

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
      .state ??= { ...this.initial }

    if (this.save) {
      this.render()
    } else {
      const { state } = this.game
      state.point = 0

      this.loadState()

      this.read()
    }
  }

  update () {
    this
      .figures
      .forEach(figure => figure.update())
  }

  use (name) {}
}

export default Scene
