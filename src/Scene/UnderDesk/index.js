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
      'pic-upskirt'
    ])
  }

  setup = () => {
    this.upskirt = new Upskirt({
      scene: this
    })

    this.cradleUnder = new CradleUnder({ scene: this })

    this.saves = json

    super.setup()
  }
}

export default UnderDesk
