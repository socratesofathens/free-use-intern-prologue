import Mug from '../../Interaction/Mug'
import LeaveMugs from '../../Interaction/LeaveMugs'

import Room from '../Room'

export default class Mugs extends Room {
  constructor () {
    super('mugs', 0x000000)

    this.loadPngs([
      'mugs',
      'item-mug-1',
      'item-mug-2',
      'item-mug-3',
      'item-mug-4',
      'item-mug-5',
      'item-mug-6',
      'item-mug-7',
      'item-mug-8',
      'item-mug-9',
      'item-mug-10',
      'item-mug-11'
    ])
  }

  setup = () => {
    this.leaveMugs = new LeaveMugs({
      scene: this
    })

    this.zones = [{
      name: 'leave-mugs',
      left: { x: 0, y: 0 },
      right: {
        x: 3300, y: 1900
      },
      hover: 'Return to Kitchenette'
    }]

    const point = {
      images: [{ name: 'mugs' }]
    }

    const bits = [
      {
        number: 1,
        left: { x: 500, y: 1265 },
        right: { x: 1050, y: 1840 }
      },
      {
        number: 2,
        left: { x: 925, y: 400 },
        right: { x: 1278, y: 684 }
      },
      {
        number: 3,
        left: { x: 690, y: 927 },
        right: { x: 864, y: 1175 }
      },
      {
        number: 4,
        left: { x: 1208, y: 1162 },
        right: { x: 2011, y: 1851 }
      },
      {
        number: 5,
        left: { x: 1690, y: 458 },
        right: { x: 1991, y: 695 }
      },
      {
        number: 6,
        left: { x: 1326, y: 385 },
        right: { x: 1656, y: 618 }
      },
      {
        number: 7,
        left: { x: 2011, y: 1175 },
        right: { x: 2805, y: 1861 }
      },
      {
        number: 8,
        left: { x: 1208, y: 175 },
        right: { x: 1419, y: 406 }
      },
      {
        number: 9,
        left: { x: 1049, y: 726 },
        right: { x: 1356, y: 1133 }
      },
      {
        number: 10,
        left: { x: 1970, y: 785 },
        right: { x: 2333, y: 1080 }
      },
      {
        number: 11,
        left: { x: 1468, y: 675 },
        right: { x: 1917, y: 1045 }
      }
    ]
    this.mugs = {}
    bits.forEach(bit => {
      const name = `mug-${bit.number}`

      point.zones.push({
        name,
        left: bit.left,
        right: bit.right,
        hover: 'Take mug'
      })

      this.mugs[name] = new Mug({
        scene: this, number: bit.number
      })
    })

    this.saves = [point]

    super.setup()
  }
}
