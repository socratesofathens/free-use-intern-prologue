import Room from '../Room'

import points from './points'

class One extends Room {
  constructor () {
    super('one', 0x000000)

    this.loadPngs([
      'chapter1'
    ])

    this
      .sprites
      .forEach(sprite => sprite
        .destroy()
      )

    this.interaction = null
  }

  setup = () => {
    this.game.state.loaded = true
    this
      .game
      .state
      .images
      .forEach(image => {
        image.figure.destroy()
      })
    this.game.state.scene = null
    this
      .game
      .state = JSON.parse(
        JSON.stringify({ ...this.initial })
      )

    const random = Math.random()
    const mugGoal = Math.ceil(random * 9)

    this.game.state['mug-goal'] = mugGoal

    this.saves = points

    super.setup()
  }
}

export default One
