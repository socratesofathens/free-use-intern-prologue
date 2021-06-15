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
      salesman,
      'coffee-got': coffeeGot
    } = state

    const sales = parseInt(salesman)
    const got = parseInt(coffeeGot)

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
      case 'fucking': {
        if (sales === 0) {
          return this.points.bossemma0
        } else if (sales <= 3) {
          return this.points.bossemma1
        } else {
          return this.points.bossemma4
        }
      }
      case 'upskirt': {
        if (sales === 0) {
          return this.points.upskirt0
        }
        if (sales <= 3) {
          return this.points.upskirt1
        }
        if (sales === 4) {
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
      if (got) {
        return this.points.salesman4
      } else {
        return this.points.salesman5
      }
    }

    return this.points.salesman0
  }
}
