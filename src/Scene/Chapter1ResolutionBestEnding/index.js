import Room from '../Room'

import json from './index'

class Chapter1ResolutionBestEnding extends Room {
  constructor () {
    super('chapter-1-resolution-best-ending', 0x000000)

    this.loadPngs([
      'salesman-resolution-3',
      'salesman-resolution-4'
    ])
  }

  setup = () => {
    this.saves = json

    super.setup()
  }
}

export default Chapter1ResolutionBestEnding
