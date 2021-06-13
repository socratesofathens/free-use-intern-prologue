import Interaction from '../index'

import jsons from './*.json'

class Bossemma extends Interaction {
  constructor ({ scene }) {
    super({ scene, name: 'bossemma' })

    this.points = jsons
  }

  select (state) {
    const {
      'boss-chat': bossChat,
      'boss-mood': bossMood,
      'boss-selfie': bossSelfie,
      selected
    } = state

    const selfie = parseInt(bossSelfie)

    switch (selected) {
      case 'camera': {
        return this.points.camera
      }
      case 'selfie': {
        if (selfie === 0) {
          return this.points.selfie0
        }

        return this.points.selfie1
      }
    }

    const chat = parseInt(bossChat)
    const mood = parseInt(bossMood)

    if (chat === 0) {
      return this.points.bossChat0
    } else {
      if (mood <= 4) {
        return this.points.bossMood0
      } else {
        return this.points.bossMood5
      }
    }
  }
}

export default Bossemma
