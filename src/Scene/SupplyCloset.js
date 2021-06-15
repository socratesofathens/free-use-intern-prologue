import LeaveSupplyCloset from '../Interaction/LeaveSupplyCloset'
import Salesman from '../Interaction/Salesman'
import Coffee from '../Interaction/Coffee'

import Room from './Room'

export default class SupplyCloset extends Room {
  constructor () {
    super('supply-closet', 0x000000)

    this.loadPngs([
      'supplycloset',
      'salesman',
      'supplycloset-arrow',
      'item-teabag',
      'item-coffee'
    ])

    this.contrast = true
  }

  setup = () => {
    this.leaveSupplyCloset = new LeaveSupplyCloset({
      scene: this
    })
    this.salesman = new Salesman({
      scene: this
    })
    this.coffee = new Coffee({ scene: this })

    this.zones = [
      {
        name: 'leave-supply-closet',
        left: { x: 2844, y: 1527 },
        right: { x: 3174, y: 1729 },
        hover: 'Return to Hallway'
      },
      {
        name: 'salesman',
        left: { x: 1500, y: 0 },
        right: { x: 2500, y: 2000 },
        hover: 'Talk to Salesman'
      },
      {
        name: 'coffee',
        left: { x: 875, y: 172 },
        right: { x: 1256, y: 541 },
        hover: 'Take coffee'
      }
    ]

    this.saves = [{
      images: [
        { name: 'supplycloset' },
        {
          name: 'salesman',
          position: {
            x: 0.52363,
            y: 0.53709
          }
        },
        { name: 'supplycloset-arrow' }
      ]
    }]

    super.setup()
  }
}
