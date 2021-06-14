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
      'pic-fucking',
      'icon-fucking',
      'icon-fucking-selected',
      'item-panties'
    ])

    this.assets.push({ name: 'office', type: 'jpg' })
  }

  setup = () => {
    this.bossemma = new Bossemma({
      scene: this
    })

    this.cradle = new Cradle({ scene: this })

    this.leaveOffice = new LeaveOffice({ scene: this })

    this.zones = [
      {
        name: 'bossemma',
        left: {
          x: '735',
          y: '342'
        },
        right: {
          x: 2691,
          y: 1885
        },
        hover: 'Talk to Boss'
      },
      {
        name: 'cradle',
        left: {
          x: 1113,
          y: 1008
        },
        right: {
          x: 1404,
          y: 1269
        },
        hover: 'Bump cradle'
      },
      {
        name: 'leave-office',
        left: {
          x: 2895,
          y: 1430
        },
        right: {
          x: 3175,
          y: 1700
        },
        hover: 'Leave office'
      }
    ]

    this.saves = points

    super.setup()
  }
}

export default Office
