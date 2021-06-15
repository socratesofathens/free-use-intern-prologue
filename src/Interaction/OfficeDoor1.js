import Interaction from './index'

import json from './office.json'

class OfficeDoor1 extends Interaction {
  constructor ({ scene }) {
    super({ scene, name: 'office-door-1' })

    this.points = json
  }

  select (state) {
    return this.points
  }
}

export default OfficeDoor1
