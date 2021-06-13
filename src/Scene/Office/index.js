import Room from '../Room'

import points from './points'

class Office extends Room {
  constructor () {
    super('office', 0x000000)

    this.loadPngs([
      'bosssex1',
      'bosssex2',
      'office-arrow'
    ])

    this.assets.push({ name: 'office', type: 'jpg' })
  }

  setup = () => {
    // this.emma = new Emma({
    //   scene: this
    // })

    this.saves = points

    super.setup()
  }
}

export default Office
