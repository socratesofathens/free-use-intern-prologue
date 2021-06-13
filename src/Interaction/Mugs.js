import Interaction from './index'

class Mugs extends Interaction {
  constructor ({ scene }) {
    super({ scene, name: 'picture' })

    this.points = [
      { scene: 'mugs' }
    ]
  }

  select (state) {
    return this.points
  }
}

export default Mugs
