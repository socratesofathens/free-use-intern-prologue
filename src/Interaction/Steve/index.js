import Interaction from '../index'
import naturalCompare from 'natural-compare-lite'

import jsons from './*.json'

class Steve extends Interaction {
  constructor ({ scene }) {
    super({ scene, name: 'steve' })

    const keys = Object.keys(jsons)
    const sorted = keys.sort(naturalCompare)
    const values = sorted.map(key => jsons[key])

    this.points = values.map(this.setup)
  }

  read (state) {
    const { steve, point } = state

    const index = steve || 0
    console.log('index test:', index)
    console.log('this.points test:', this.points)
    const integer = parseInt(index)
    const indexed = this.points[integer]
    console.log('indexed test:', indexed)
    const last = [
      {
        dialogue: 'It rings out. Huh. For some reason, Steve isn\'t answering. I should try him again later.'
      },
      {
        dialogue: ' '
      }
    ]
    const points = indexed || last

    const introduction = {
      dialogue: 'I only have one number in here, my friend Steve. I should call him.'
    }

    const introduced = [
      introduction, ...points
    ]

    return introduced[point]
  }
}

export default Steve
