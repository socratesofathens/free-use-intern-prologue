import Room from '../Room'

import points from './points'

class One extends Room {
  constructor () {
    super('one', 0x000000)

    this.loadPngs([
      'chapter1'
    ])
  }

  setup = () => {
    this.saves = points

    super.setup()
  }
}

export default One
