import Interaction from './index'

export default class Coffee extends Interaction {
  constructor ({ scene }) {
    super({ scene, name: 'leave-supply-closet' })

    this.points = [
      { dialogue: 'The coffee is too high for me to reach. Maybe this guy can help me get it.' }
    ]
  }

  select (state) {
    return this.points
  }
}
