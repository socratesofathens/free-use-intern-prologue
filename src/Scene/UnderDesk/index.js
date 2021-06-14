import Upskirt from '../../Interaction/Upskirt'
import CradleUnder from '../../Interaction/CradleUnder'

import Room from '../Room'

import json from './index.json'

class UnderDesk extends Room {
  constructor () {
    super('under-desk', 0x000000)

    this.loadPngs([
      'under-desk',
      'upskirt1',
      'upskirt2',
      'pic-upskirt',
      'icon-upskirt',
      'icon-upskirt-selected'
    ])
  }

  setup = () => {
    this.upskirt = new Upskirt({
      scene: this
    })

    this.cradleUnder = new CradleUnder({ scene: this })

    this.saves = json

    this.zones = [
      {
        name: 'upskirt',
        left: {
          x: 843,
          y: 52
        },
        right: {
          x: 2758,
          y: 1680
        },
        hover: 'Look up skirt'
      },
      {
        name: 'cradle-under',
        left: {
          x: 0,
          y: 0
        },
        right: {
          x: 200,
          y: 200
        },
        hover: 'Grab cradle'
      }
    ]

    super.setup()
  }
}

export default UnderDesk
