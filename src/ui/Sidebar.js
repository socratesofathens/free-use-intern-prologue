import { upY } from '../lib/game'

export default class Sidebar {
  constructor (scene) {
    this.scene = scene
    this.scene.sidebar = this

    this.X = 0.8437739709
    this.MARGIN = 0.01022756328
    this.LEFT = this.X + this.MARGIN
    this.RIGHT = 1.0 - this.MARGIN
    this.WIDTH = 1.0 - this.X
    this.HALF_WIDTH = this.WIDTH / 2
    this.CENTER = this.X + this.HALF_WIDTH

    this.background = this
      .scene
      .addRectangle({
        position: { x: this.X, y: 0 },
        size: {
          width: 0.1562260291, height: 1
        },
        color: 0xffffff
      })

    this.addLogo()
    this.addMenu()
  }

  addButton (options) {
    const { action } = options
    options.action = null

    const button = this.scene.addText(options)

    const use = (pointer, x, y, event) => {
      button.setColor('red')

      this
        .scene
        .time
        .delayedCall(
          100,
          () => {
            button.setColor('black')
          },
          null,
          this
        )

      action(pointer, x, y, event)
    }

    button.setInteractive()
    button.on('pointerdown', use, this)

    return button
  }

  addLogo () {
    const y = upY(0.1375568182)

    const options = {
      name: 'interface-logo',
      position: { x: this.LEFT, y },
      size: {
        width: 0.1116080286, height: 0.2541027273
      },
      origin: { x: 0, y: 1 }
    }

    return this.scene.see(options)
  }

  addMenu () {
    const y = upY(0.1144540909)

    this.addButton({
      content: 'Save',
      position: { x: this.LEFT, y },
      origin: { x: 0, y: 0 },
      action: (pointer, x, y, event) => {
        event.stopPropagation()

        const { state } = this.scene.game

        const copy = { ...state }
        copy.images = copy
          .images
          .map(image => ({
            ...image,
            figure: null,
            photo: null
          }))
        copy.items = copy
          .items
          .map(item => ({
            ...item,
            item: null
          }))

        console.log('copy test:', copy)

        const json = JSON.stringify(copy)

        this
          .scene
          .registry
          .set('state', json)
      }
    })

    const loader = this.addButton({
      content: 'Load',
      position: { x: this.RIGHT, y },
      origin: { x: 1, y: 0 },
      action: (pointer, x, y, event) => {
        event.stopPropagation()

        const json = this
          .scene
          .registry
          .get('state')

        if (!json) return json

        const state = JSON.parse(json)
        state.loaded = true

        this.scene.phone.photos.destroy()
        this
          .scene
          .game
          .state
          .images
          .forEach(image => {
            image.figure.destroy()
          })
        this
          .scene
          .sprites
          .forEach(sprite => sprite
            .destroy()
          )

        const { scene } = state
        state.scene = null

        this
          .scene
          .game
          .state = JSON.parse(JSON.stringify({ ...this.initial }))

        this.scene.interaction = null

        this.scene.scene.start(
          scene, state
        )
      }
    })

    if (this.scene.game.state.loaded) {
      this.flash(loader)
    }

    this.panther = this.addPanther()
  }

  addPanther () {
    const y = upY(0.05721772727)

    return this.addButton({
      content: 'Panther VN',
      position: { x: this.CENTER, y },
      origin: { x: 0.5, y: 0 },
      action: () => window
        .open('https://www.patreon.com/pan', '_blank')
    })
  }

  flash (button) {
    button.setColor('red')

    this
      .scene
      .time
      .delayedCall(
        100,
        () => {
          button.setColor('black')
        },
        null,
        this
      )
  }
}
