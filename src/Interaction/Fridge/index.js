import Interaction from '../index'

import jsons from './*.json'

export default class Fridge extends Interaction {
  constructor ({ scene }) {
    super({ scene, name: 'fridge' })

    this.points = jsons
  }

  select (state) {
    const {
      selected
    } = state

    switch (selected) {
      case 'camera': {
        return this.points.camera
      }
      case 'selfie': {
        return this.points.selfie
      }
      case 'emma': {
        return this.points.emma
      }
      case 'fucking': {
        return this.points.bossemma
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
        return this.points.mug
      }
      case 'teabag': {
        return this.points.teabag
      }
      case 'panties': {
        return this.points.panties
      }
    }

    return this.points.index
  }
}
