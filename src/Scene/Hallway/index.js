import OfficeDoor from '../../Interaction/OfficeDoor'
import KitchenetteDoor from '../../Interaction/KitchenetteDoor'
import SupplyClosetDoor from '../../Interaction/SupplyClosetDoor'
import Picture from '../../Interaction/Picture'

import Room from '../Room'

class Hallway extends Room {
  constructor () {
    super('hallway', 0x000000)

    this.loadPngs([
      'hallway',
      'hallwaysmoke',
      'youngboss',
      'youngmug-1',
      'youngmug-2',
      'youngmug-3',
      'youngmug-4',
      'youngmug-5',
      'youngmug-6',
      'youngmug-7',
      'youngmug-8',
      'youngmug-9'
    ])
  }

  setup = () => {
    this.officeDoor = new OfficeDoor({
      scene: this
    })

    this.kitchenetteDoor = new KitchenetteDoor({
      scene: this
    })

    this.supplyClosetDoor = new SupplyClosetDoor({
      scene: this
    })

    this.picture = new Picture({ scene: this })

    const point = {
      images: [{ name: 'hallway' }],
      zones: [
        {
          name: 'office-door',
          left: { x: 1792, y: 699 },
          right: { x: 2065, y: 1069 },
          hover: "Go to Boss's offie"
        },
        {
          name: 'kitchenette-door',
          left: { x: 0, y: 0 },
          right: { x: 922, y: 1850 },
          hover: 'Go to kitchenette'
        },
        {
          name: 'supply-closet-doot',
          left: { x: 2219, y: 86 },
          right: { x: 2410, y: 1499 },
          hover: 'Go to supply closet'
        },
        {
          name: 'picture',
          left: { x: 1324, y: 366 },
          right: { x: 1489, y: 761 },
          hover: 'Look at photo'
        }
      ]
    }

    if (!this.game.state['coffee-machine']) {
      point.images.push({ name: 'hallwaysmoke' })
    }

    this.saves = [point]

    super.setup()
  }
}

export default Hallway
