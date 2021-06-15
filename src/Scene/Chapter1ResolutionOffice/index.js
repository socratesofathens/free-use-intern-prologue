import Room from '../Room'

import json from './index.json'

class Chapter1ResolutionOffice extends Room {
  constructor () {
    super('chapter-1-resolution-office', 0x000000)

    this.loadPngs([
      'mug-1',
      'mug-2',
      'mug-3',
      'mug-4',
      'mug-5',
      'mug-6',
      'mug-7',
      'mug-8',
      'mug-9',
      'mug-10',
      'mug-11'
    ])
  }

  setup = () => {
    const { mug } = this.game.state
    const name = `mug-${mug}`
    json[0].images.push({ name })

    this.saves = json

    super.setup()
  }
}

export default Chapter1ResolutionOffice
