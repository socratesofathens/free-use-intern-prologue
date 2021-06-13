import Interaction from './index'

class OfficeDoor extends Interaction {
  constructor ({ scene }) {
    super({ scene, name: 'office-door' })

    this.points = [
      { scene: 'office' }
    ]
  }

  select (state) {
    return this.points
  }
}

export default OfficeDoor
