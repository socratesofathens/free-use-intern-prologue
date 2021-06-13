import Interaction from '../index'

import json from './index.json'

class LeaveOffice extends Interaction {
  constructor ({ scene }) {
    super({ scene, name: 'leave-office' })

    this.points = json
  }

  select (state) {
    return this.points
  }
}

export default LeaveOffice
