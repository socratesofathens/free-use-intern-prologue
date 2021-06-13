import Interaction from '../index'

import jsons from './*.json'

class Bossemma extends Interaction {
  constructor ({ scene }) {
    super({ scene, name: 'bossemma' })

    this.points = jsons
  }

  select (state) {
    const {
      'boss-chat': bossChat
    } = state

    const chat = parseInt(bossChat)

    if (chat === 0) {
      return this.points.bossChat0
    }
  }
}

export default Bossemma
