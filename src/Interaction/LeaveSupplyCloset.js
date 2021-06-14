import Interaction from './index'

class LeaveSupplyCloset extends Interaction {
  constructor ({ scene }) {
    super({ scene, name: 'leave-supply-closet' })

    this.points = [
      { scene: 'hallway' }
    ]
  }

  select (state) {
    return this.points
  }
}

export default LeaveSupplyCloset
