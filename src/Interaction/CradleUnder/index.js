import Interaction from '../index'

import json from './index.json'

class CradleUnder extends Interaction {
  constructor ({ scene }) {
    super({ scene, name: 'cradle-under' })

    this.points = json
  }

  select (state) {
    return this.points
  }
}

export default CradleUnder
