import LeaveKitchenette from '../../Interaction/LeaveKitchenette'
import ItGuy from '../../Interaction/ItGuy'
import CoffeeMachine from '../../Interaction/CoffeeMachine'
import Sugar from '../../Interaction/Sugar'
import Mugs from '../../Interaction/Mugs'
import Fridge from '../../Interaction/Fridge'

import Room from '../Room'

export default class Kitchenette extends Room {
  constructor () {
    super('kitchenette', 0x000000)

    this.loadPngs([
      'kitchenette',
      'kitchenettesmoke',
      'itguy',
      'kitchenette-arrow',
      'item-coffee-mug-1',
      'item-coffee-mug-2',
      'item-coffee-mug-3',
      'item-coffee-mug-4',
      'item-coffee-mug-5',
      'item-coffee-mug-6',
      'item-coffee-mug-7',
      'item-coffee-mug-8',
      'item-coffee-mug-9',
      'item-coffee-mug-10',
      'item-coffee-mug-11',
      'item-tea-mug-1',
      'item-tea-mug-2',
      'item-tea-mug-3',
      'item-tea-mug-4',
      'item-tea-mug-5',
      'item-tea-mug-6',
      'item-tea-mug-7',
      'item-tea-mug-8',
      'item-tea-mug-9',
      'item-tea-mug-10',
      'item-tea-mug-11'
    ])

    this.contrast = true
  }

  setup = () => {
    this.leaveKitchenette = new LeaveKitchenette({
      scene: this
    })
    this.itGuy = new ItGuy({ scene: this })
    this.coffeeMachine = new CoffeeMachine({
      scene: this
    })
    this.sugar = new Sugar({ scene: this })
    this.mugs = new Mugs({ scene: this })
    this.fridge = new Fridge({ scene: this })
    this.zones = [
      {
        name: 'leave-kitchenette',
        left: { x: 2895, y: 1430 },
        right: { x: 3175, y: 1700 },
        hover: 'Return to Hallway'
      },
      {
        name: 'it-guy',
        left: { x: 1000, y: 100 },
        right: { x: 2000, y: 2000 },
        hover: 'Talk to IT Guy'
      },
      {
        name: 'coffee-machine',
        left: { x: 2963, y: 652 },
        right: { x: 3289, y: 1235 },
        hover: 'Use coffee machine'
      },
      {
        name: 'sugar',
        left: { x: 387, y: 692 },
        right: { x: 627, y: 1052 },
        hover: 'Use sugar'
      },
      {
        name: 'mugs',
        left: { x: 0, y: 0 },
        right: { x: 378, y: 500 },
        hover: 'Look at mugs'
      },
      {
        name: 'fridge',
        left: { x: 2386, y: 51 },
        right: { x: 2618, y: 1803 },
        hover: 'Open fridge'
      }
    ]

    const point = {
      images: [
        { name: 'kitchenette' },
        { name: 'itguy' },
        { name: 'kitchenette-arrow' }
      ]
    }

    if (!this.game.state['coffee-machine']) {
      point.images.push({ name: 'kitchenettesmoke' })
    }

    this.saves = [point]

    super.setup()
  }
}
