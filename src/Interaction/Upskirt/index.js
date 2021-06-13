import Interaction from '../index'

import jsons from './*.json'

class Upskirt extends Interaction {
  constructor ({ scene }) {
    super({ scene, name: 'upskirt' })

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
    }

    return this.points.index
  }
}

export default Upskirt
