import LeaveSupplyCloset from '../Interaction/LeaveSupplyCloset'
import Salesman from '../Interaction/Salesman'

import Room from './Room'

export default class SupplyCloset extends Room {
  constructor () {
    super('supply-closet', 0x000000)

    this.loadPngs([
      'supplycloset',
      'salesman',
      'supplycloset-arrow',
      'item-teabag'
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
      ],
      zones: [
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
        }
      ]
    }]

    super.setup()
  }
}
