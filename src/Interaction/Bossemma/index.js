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
      'boss-teabag': bossTeabag,
      'mug-full': mugFull,
      'correct-mug': correctMug,
      'boss-mug': bossMug,
      mug,
      selected
    } = state

    const selfie = parseInt(bossSelfie)
    const teabag = parseInt(bossTeabag)

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
      case 'emma': {
        return this.points.emma
      }
      case 'fucking': {
        return this.points.fucking
      }
      case 'upskirt': {
        return this.points.upskirt
      }
      case 'web': {
        return this.points.web
      }
      case 'mug': {
        if (mugFull === 'EMPTY') {
          if (correctMug) {
            if (bossMug) {
              return this.points.whatNow
            }

            return this.points.whatOnEarth
          } else {
            return this.points.whatIsIt
          }
        } else {
          const last = this.points.end.json.length - 1
          const point = this.points.end.json[last]

          const name = `mug-${mugFull}-${mug}`
          point.items = [
            ...point.items,
            { name, remove: true }
          ]

          return this.points.end.json
        }
      }
      case 'teabag': {
        if (teabag) {
          return this.points.teabag1
        }

        return this.points.teabag0
      }
      case 'panties': {
        return this.points.panties
      }
      case 'email': {
        return this.points.email
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
