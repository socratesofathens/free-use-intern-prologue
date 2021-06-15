import Interaction from './index'

import kitchenTrue from './kitchenTrue'
import kitchenFalse from './kitchenFalse'

class KitchenetteDoor1 extends Interaction {
  constructor ({ scene }) {
    super({ scene, name: 'kitchenette-door-1' })

    this.points = [
      { scene: 'kitchenette' }
    ]
  }

  select (state) {
    const { 'coffee-machine': coffeeMachine } = state

    if (coffeeMachine) {
      return kitchenTrue
    }

    return kitchenFalse
  }
}

export default KitchenetteDoor1
