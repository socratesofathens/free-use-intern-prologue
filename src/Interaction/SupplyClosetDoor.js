import Interaction from './index'

class SupplyClosetDoor extends Interaction {
  constructor ({ scene }) {
    super({ scene, name: 'supply-closet' })

    this.points = [
      { scene: 'supply-closet' }
    ]
  }

  select (state) {
    return this.points
  }
}

export default SupplyClosetDoor
