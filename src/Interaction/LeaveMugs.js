import Interaction from './index'

class LeaveMugs extends Interaction {
  constructor ({ scene }) {
    super({ scene, name: 'leave-mugs' })

    this.points = [
      { scene: 'kitchenette' }
    ]
  }

  select (state) {
    return this.points
  }
}

export default LeaveMugs
