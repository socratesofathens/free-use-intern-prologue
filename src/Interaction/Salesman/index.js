import Interaction from '../index'

import jsons from './*.json'

export default class Salesman extends Interaction {
  constructor ({ scene }) {
    super({ scene, name: 'salesman' })

    this.points = jsons
  }

  select (state) {
    const {
      selected,
      salesman
    } = state

    const sales = parseInt(salesman)

    switch (selected) {
      case 'camera': {
        return this.points.camera
      }
      case 'selfie': {
        return this.points.selfie
      }
      case 'emma': {
        if (sales === 0) {
          return this.points.emma0
        } else if (sales <= 3) {
          return this.points.emma1
        } else {
          return this.points.emma4
        }
      }
      case 'bossemma': {
        if (sales === 0) {
          return this.points.bossemma0
        } else if (sales <= 3) {
          return this.points.bossemma1
        } else {
          return this.points.bossemma4
        }
      }
      case 'upskirt': {
        if (sales <= 4) {
          return this.points.upskirt4
        } else {
          return this.points.upskirt5
        }
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

    if (sales === 1) {
      return this.points.salesman1
    }

    if (sales === 2) {
      return this.points.salesman2
    }

    if (sales === 3) {
      return this.points.salesman3
    }

    if (sales === 4) {
      return this.points.salesman4
    }

    if (sales === 5) {
      return this.points.salesman5
    }

    return this.points.salesman0
  }
}
