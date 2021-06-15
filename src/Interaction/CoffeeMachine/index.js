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
      'mug-full': mugFull,
      mug: mugString
    } = state

    const mug = parseInt(mugString)

    switch (selected) {
      case 'mug': {
        if (coffeeMachine) {
          if (mugFull === 'EMPTY') {
            return this.points.mugTrueEmpty
          }
          if (mugFull === 'COFFEE') {
            return this.points.mugTrueCoffee
          }
        } else {
          switch (mugFull) {
            case 'EMPTY': {
              return this.points.mugFalseEmpty
            }
            case 'TEA': {
              return this.points.mugFalseTea
            }
          }
        }
        break
      }
      case 'coffee': {
        if (coffeeMachine) {
          if (mug) {
            console.log('true test:')
            const empty = `empty-mug-${mug}`
            const add = `coffee-mug-${mug}`

            const last = this.points.coffeeTrueElse.length - 1
            const point = this.points.coffeeTrueElse[last]
            point.items = [
              { name: 'coffee', remove: true },
              { name: empty, remove: true },
              { name: add, hover: 'Use mug of coffee' }
            ]

            return this.points.coffeeTrueElse
          } else {
            return this.points.coffeeTrue0
          }
        } else {
          if (mug) {
            if (mugFull === 'EMPTY') {
              return this.points.coffeeFalseEmpty
            }
            if (mugFull === 'TEA') {
              return this.points.coffeeFalseTea
            }
          } else {
            return this.points.coffeeTrue0
          }
        }
        break
      }
      case 'teabag': {
        if (mug) {
          const empty = `empty-mug-${mug}`
          const add = `tea-mug-${mug}`
          console.log('add test:', add)

          const last = this.points.teaMugElse.length - 1
          const point = this.points.teaMugElse[last]
          point.items ??= []
          point.items = [
            { name: 'teabag', remove: true },
            { name: empty, remove: true },
            { name: add, hover: 'Use mug of tea' }
          ]
          console.log('point items test:', point.items)

          console.log(
            'this.points.teaMugElse test:',
            this.points.teaMugElse
          )

          return this.points.teaMugElse
        } else {
          return this.points.teaMug0
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
