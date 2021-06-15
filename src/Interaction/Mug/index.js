import Interaction from '../index'

import jsons from './*.json'

export default class Mug extends Interaction {
  constructor ({ scene, number }) {
    const name = `mug-${number}`
    super({ scene, name })

    this.points = jsons
    this.number = number
  }

  select (state) {
    const {
      selected,
      'mug-full': mugFull,
      'mug-goal': mugGoal,
      'mug-repaired': mugRepaired,
      mug: mugString
    } = state

    const goal = parseInt(mugGoal)
    const mug = parseInt(mugString)

    switch (selected) {
      case 'selfie': {
        return this.points.selfie
      }
      case 'emma': {
        return this.points.emma
      }
      case 'fucking': {
        return this.points.bossemma
      }
      case 'upskirt': {
        return this.points.upskirt
      }
      case 'email': {
        return this.points.email
      }
      case 'web': {
        return this.points.web
      }
      case 'teabag': {
        return this.points.teabag
      }
      case 'panties': {
        return this.points.panties
      }
    }

    if (mugFull === 'EMPTY') {
      if (mugRepaired) {
        return this.points.repaired
      } else {
        const points = mug
          ? this.points.emptyfalse1
          : this.points.emptyfalse0

        const descriptions = [
          null,
          'It has a drawing of what looks like two lions fighting over a shield.',
          'It looks like it has that guy from The Hangover on it. Not that guy, the other one. No, the other other one.',
          'It has a piece of art on it: it looks like someone tried to draw a dog’s face but got lost along the way.',
          'It has a dude on it. Looks like a grizzled French war veteran.',
          'It has blue cotton candy on it. Weird.',
          'It looks like it has some kind of robot donut on it. Electro-yum.',
          'It’s got a kid on it.',
          'It has a flea on it, for some reason.',
          'It looks like it’s gone through the dishwasher too many times and the smiley face on it melted.',
          'It has a logo on it, looks like it’s from a kid’s film.',
          'It looks like a promotional mug from a tropical resort.'
        ]

        const description = descriptions[this.number]

        const replaced = points.map(point => {
          const dialogue = point
            .dialogue
            .replaceAll('[description]', description)

          return {
            ...point, dialogue
          }
        })

        const point = replaced[replaced.length - 1]
        const correct = this.number === goal
        point.state = {
          mug: this.number,
          'correct-mug': correct
        }
        const remove = {
          name: `empty-mug-${mug}`,
          remove: true
        }
        const add = {
          name: `empty-mug-${this.number}`,
          hover: 'Use mug'
        }
        point.items = [
          remove,
          add
        ]

        return replaced
      }
    } else {
      return this.points.full
    }
  }
}
