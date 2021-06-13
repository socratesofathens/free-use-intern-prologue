import Bossemma from '../../Interaction/Bossemma'
import Cradle from '../../Interaction/Cradle'
import LeaveOffice from '../../Interaction/LeaveOffice'

import Room from '../Room'

import points from './points'

class Office extends Room {
  constructor () {
    super('office', 0x000000)

    this.loadPngs([
      'bosssex1',
      'bosssex2',
      'office-arrow',
      'pic-fucking'
    ])

    this.assets.push({ name: 'office', type: 'jpg' })
  }

  setup = () => {
    this.bossemma = new Bossemma({
      scene: this
    })

    this.cradle = new Cradle({ scene: this })

    this.leaveOffice = new LeaveOffice({ scene: this })

    this.saves = points

    super.setup()
  }
}

export default Office
