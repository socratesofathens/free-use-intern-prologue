import Interaction from '../index'

import jsons from './*.json'

class CoffeeMachine extends Interaction {
  constructor ({ scene }) {
    super({ scene, name: 'coffee-machine' })

    this.points = jsons
  }

  select (state) {
    const {
      selected,
      'coffee-machine': coffeeMachine,
      'mug-full': mugFull
    } = state

    console.log('state test:', state)

    switch (selected) {
      case 'mug': {
        if (coffeeMachine) {
          if (mugFull === 'EMPTY') {
            return this.points.mugTrueEmpty
          }

          if (mugFull === 'BEANS') {
            return this.points.mugTrueBeans
          }

          if (mugFull === 'COFFEE') {
            return this.points.mugTrueCoffee
          }
        } else {
          switch (mugFull) {
            case 'EMPTY': {
              return this.points.mugFalseEmpty
            }
            case 'TEABAG': {
              return this.points.mugFalseTeabag
            }
            case 'TEA': {
              return this.points.mugFalseTea
            }
          }
        }
      }
    }

    if (coffeeMachine) {
      return this.points.coffeeMachineTrue
    } else {
      return this.points.coffeeMachineFalse
    }
  }
}

export default CoffeeMachine
