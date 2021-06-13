import Interaction from '../index'

import json from './index.json'

class Cradle extends Interaction {
  constructor ({ scene }) {
    super({ scene, name: 'cradle' })

    this.points = json
  }

  select (state) {
    return this.points
  }
}

export default Cradle
