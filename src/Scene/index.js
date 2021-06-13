import Phaser from 'phaser'

import isthisa from 'isthisa'

import ORIGIN from '../lib/origin'
import { upY, GAME_SIZE } from '../lib/game'

import Image from '../Figure/Image'
import Zone from '../Figure/Zone'
import Interaction from '../Interaction'

class Scene extends Phaser.Scene {
  constructor (name, color = '#FFFFFF') {
    super(name)

    this.auto = false
    this.debug = true
    this.assets = []
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
      open: false,
      emma: 0,
      intercom: 0,
      steve: 0
    }
    this.images = {}
    this.selecting = false
    this.sprites = []
  }

  addItem = (options) => {
    const already = this
      .game
      .state
      .items
      .find(item => item.name === options.name)

    if (already) {
      return already
    } else {
      const item = this.renderItem(
        options, this.game.state.items.length
      )
      this.game.state.items.push(options)

      return item
    }
  }

  advance () {
    if (this.selecting) {
      return this.selecting
    }

    const { point } = this.game.state
    this.game.state.point = point + 1

    if (this.fullscreen) {
      this.reset()
    }

    this.read()
  }

  animate = (animation) => {
    this
      .game
      .state
      .animations
      .push(animation)

    const {
      key, duration, keys
    } = animation

    const frames = keys
      .map(key => ({ key, duration }))

    this.anims.create({
      key,
      frames,
      repeat: -1
    })

    const name = keys[0]
    const { x, y } = ORIGIN

    const sprite = this
      .add
      .sprite(x, y, name)
    sprite.setOrigin(x, y)
    sprite.play(key)
    this.sprites.push(sprite)

    if (animation.fullscreen) {
      this.fullscreen = sprite
      sprite.setDisplaySize(GAME_SIZE.width, GAME_SIZE.height)
      sprite.setDepth(2)
    }
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

  extract (difference = 0, override) {
    const { state } = this.game
    const { point } = state || 0
    state.point = point

    const sum = override ?? state.point + difference

    const copy = { ...state, point: sum }

    if (this.interaction) {
      return this
        .interaction
        .read(copy)
    }

    if (!difference) {
      // console.log('extract this.saves test:', this.saves)
    }

    const save = this.saves[copy.point]

    return save
  }

  init (data) {
    const names = Object
      .getOwnPropertyNames(data)

    const empty = names.length === 0

    if (!empty) {
      for (const name in this.images) {
        const image = this.images[name]

        image.destroy()

        delete this.images[name]
      }

      this.save = data
      this
        .game
        .state
        .point = this.save.point

      this.game.state.intercom = this.save.intercom
      this.game.state.taken = this.save.taken
      this.game.state.steve = this.save.steve
      this.game.state.loaded = this.save.loaded
    } else {
      this.save = null
    }
  }

  interact ({
    points,
    interaction,
    point,
    dry
  }) {
    this.selecting = false

    if (points) {
      this.interaction = new Interaction({
        scene: this, points
      })
    }

    if (interaction) {
      this.interaction = interaction

      if (!dry) {
        this.interacting = true
      }
    }

    if (!dry) {
      this
        .game
        .state
        .interaction = this.interaction.name
      this.game.state.point = point || -1
    } else {
      return 'interact'
    }
  }

  loadState () {
    this
      .game
      .state
      .items
      .forEach(this.renderItem)
  }

  loadPngs (pngs) {
    const assets = pngs.map(png => {
      return { name: png, type: 'png' }
    })

    this.assets = this.assets.concat(assets)
  }

  preload () {
    this
      .assets
      .forEach(asset => {
        const { name, type } = asset

        const path = `${name}.${type}`

        return this.load.image(name, path)
      })
  }

  read () {
    this.save = this.extract()

    if (!this.save) return this.save

    this.render()

    if (
      this.save && this.save.interaction === 0
    ) {
      this.reload()
    }
  }

  render () {
    this.reset()

    const {
      add,
      background,
      images,
      fullscreen,
      scene,
      item,
      items,
      state,
      animations,
      last
    } = this.save

    if (scene) {
      this.save = null

      const lower = scene.toLowerCase()

      this.game.state.images = []
      this.images = {}

      this.scene.start(lower)
    }

    if (fullscreen) {
      this.fullscreen = this.see({
        ...fullscreen,
        size: { width: 1, height: 1 },
        origin: ORIGIN,
        depth: 5
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
      items.forEach(this.addItem)
    }

    if (images) {
      images.forEach(image => {
        image.title ??= image.name

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

    if (animations) {
      animations.forEach(this.animate)
    }

    if (state) {
      const isFunction = isthisa.function(state)

      if (isFunction) {
        this.game.state = state(this.game.state)
      } else {
        const newState = {
          ...this.game.state,
          ...state
        }

        this.game.state = newState
      }
    }

    if (add) {
      const newState = { ...this.game.state }

      const keys = Object.keys(add)
      keys.forEach(key => {
        const value = newState[key]
        const integer = parseInt(value)

        const newValue = add[key]
        const parsed = parseInt(newValue)
        const sum = integer + parsed

        newState[key] = sum
      })

      this.game.state = newState
    }

    if (last) {
      this.reload()
    }

    const next = this.extract(1)
    if (!next) {
      this.reload()
    }
  }

  renderItem = (options, index) => {
    const { name, hover } = options

    const image = `item-${name}`

    const WIDTH = 0.05300664792
    const HEIGHT = 0.09423136364
    const HALF_WIDTH = WIDTH / 2
    const HALF_HEIGHT = HEIGHT / 2

    const LEFT = 0.8623385323 + HALF_WIDTH
    const RIGHT = 0.928615955 + HALF_WIDTH

    const TOP = upY(0.8201995455) - HALF_HEIGHT
    const MIDDLE = upY(0.6668290909) - HALF_HEIGHT
    const BOTTOM = upY(0.5135040909) - HALF_HEIGHT

    const positions = [
      { x: LEFT, y: TOP },
      { x: RIGHT, y: TOP },
      { x: LEFT, y: MIDDLE },
      { x: RIGHT, y: MIDDLE },
      { x: LEFT, y: BOTTOM },
      { x: RIGHT, y: BOTTOM }
    ]

    const position = positions[index]

    const item = this
      .see({ name: image, position, hover })

    return item
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

      this.images[this.fullscreen.name] = null
    }
  }

  see = (options) => {
    options.title ??= options.name

    if (options.remove) {
      const image = this
        .images[options.title]

      const { images } = this.game.state
      const removed = images
        .filter(image => {
          const match = image.title !== options.title

          return match
        })

      this.game.state.images = removed

      if (image) {
        image.destroy()
      }

      delete this.images[options.title]

      return image
    }

    const seen = {
      ...options, scene: this
    }

    const exists = this.images[seen.title]
    if (exists) {
      console
        .warn('Image already exists:', exists)

      return exists
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
    this.game.state.images = []

    if (this.save) {
      this.render()
    } else {
      const { state } = this.game
      state.point = 0

      this.loadState()

      this.read()
    }
  }

  spot (options) {
    const spotted = { ...options, scene: this }

    const zone = new Zone(spotted)

    return zone
  }

  update () {
    this
      .figures
      .forEach(figure => figure.update())

    const pageUp = this.input.keyboard.addKey('PAGE_UP')
    if (pageUp.isDown) {
      this.auto = !this.auto
    }

    const pageDown = this
      .input
      .keyboard
      .addKey('PAGE_DOWN')

    if (pageDown.isDown || this.auto) {
      this.advance()
    }
  }

  use (/* name */) {}
}

export default Scene
