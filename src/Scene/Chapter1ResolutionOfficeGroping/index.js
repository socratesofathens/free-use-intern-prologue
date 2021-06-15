import Room from '../Room'

import json from './index.json'

class Chapter1ResolutionOfficeGroping extends Room {
  constructor () {
    super('chapter-1-resolution-office-groping', 0x000000)

    this.contrast = true

    this.loadPngs([
      'bossgroping1',
      'bossgroping2',
      'resolution-mug-1',
      'resolution-mug-2',
      'resolution-mug-3',
      'resolution-mug-4',
      'resolution-mug-5',
      'resolution-mug-6',
      'resolution-mug-7',
      'resolution-mug-8',
      'resolution-mug-9',
      'resolution-mug-10',
      'resolution-mug-11'
    ])
  }

  setup = () => {
    const { mug } = this.game.state
    const name = `resolution-mug-${mug}`
    json[0].images.push({ name })

    this.saves = json

    super.setup()
  }
}

export default Chapter1ResolutionOfficeGroping
