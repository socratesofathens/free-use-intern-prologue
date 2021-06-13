import Interaction from './index'

class KitchenetteDoor extends Interaction {
  constructor ({ scene }) {
    super({ scene, name: 'kitchenette-door' })

    this.points = [
      { scene: 'kitchenette' }
    ]
  }

  select (state) {
    return this.points
  }
}

export default KitchenetteDoor
