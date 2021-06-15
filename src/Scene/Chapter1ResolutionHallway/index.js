import OfficeDoor1 from '../../Interaction/OfficeDoor1'
import KitchenetteDoor1 from '../../Interaction/KitchenetteDoor1'
import SupplyClosetDoor1 from '../../Interaction/SupplyClosetDoor1'

import Room from '../Room'

import json from './index.json'

class Chapter1ResolutionHallway extends Room {
  constructor () {
    super('chapter-1-resolution-hallway', 0x000000)

    this.loadPngs([
      'it-resolution-1',
      'it-resolution-2',
      'salesman-resolution-1',
      'salesman-resolution-2'
    ])

    this.contrast = true
  }

  setup = () => {
    this.officeDoor1 = new OfficeDoor1({ scene: this })
    this.kitchenetteDoor1 = new KitchenetteDoor1({
      scene: this
    })
    this.supplyClosetDoor1 = new SupplyClosetDoor1({
      scene: this
    })

    this.saves = json

    this.zones = [
      {
        name: 'office-door-1',
        left: { x: 1792, y: 699 },
        right: { x: 2065, y: 1069 },
        hover: 'The Boss'
      },
      {
        name: 'kitchenette-door-1',
        left: { x: 0, y: 0 },
        right: { x: 922, y: 1850 },
        hover: 'The IT Guy'
      },
      {
        name: 'supply-closet-door-1',
        left: { x: 2219, y: 86 },
        right: { x: 2410, y: 1499 },
        hover: 'The Salesman'
      }
    ]

    super.setup()
  }
}

export default Chapter1ResolutionHallway
