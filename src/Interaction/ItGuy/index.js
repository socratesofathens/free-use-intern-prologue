import Interaction from '../index'

import jsons from './*.json'

class ItGuy extends Interaction {
  constructor ({ scene }) {
    super({ scene, name: 'it-guy' })

    this.points = jsons
  }

  select (state) {
    const {
      selected,
      'it-guy': itGuy,
      'mug-repair': mugRepair
    } = state

    const it = parseInt(itGuy)

    switch (selected) {
      case 'camera': {
        return this.points.camera
      }
      case 'selfie': {
        return this.points.selfie
      }
      case 'emma': {
        if (it) {
          return this.points.emma1
        }

        return this.points.emma0
      }
      case 'fucking': {
        if (it <= 3) {
          return this.points.bossemma0
        }

        return this.points.bossemma4
      }
      case 'upskirt': {
        return this.points.upskirt
      }
      case 'email': {
        return this.points.email
      }
      case 'web': {
        return this.points.web
      }
      case 'mug': {
        if (it <= 3) {
          return this.points.mug0
        } else {
          if (mugRepair) {
            return this.points.mugTrue
          }

          return this.points.mugFalse
        }
      }
      case 'teabag': {
        return this.points.teabag
      }
      case 'panties': {
        if (it <= 3) {
          return this.points.panties0
        }

        return this.points.panties4
      }
    }

    const indexes = [
      this.points.itGuy0,
      this.points.itGuy1,
      this.points.itGuy2,
      this.points.itGuy3,
      this.points.itGuy4,
      this.points.itGuy5
    ]
    const index = indexes[it]

    return index
  }
}

export default ItGuy
