import Interaction from './index'

class LeaveKitchenette extends Interaction {
  constructor ({ scene }) {
    super({ scene, name: 'leave-kitchenette' })

    this.points = [
      { scene: 'hallway' }
    ]
  }

  select (state) {
    return this.points
  }
}

export default LeaveKitchenette
