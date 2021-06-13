import Interaction from '../index'

import jsons from './*.json'

export default class Sugar extends Interaction {
  constructor ({ scene }) {
    super({ scene, name: 'sugar' })

    this.points = jsons
  }

  select (state) {
    const {
      selected,
      'sugar-mug': sugarMug
    } = state

    switch (selected) {
      case 'mug': {
        if (sugarMug) {
          return this.points.mugTrue
        } else {
          return this.points.mugFalse
        }
      }
    }

    return this.points.index
  }
}
