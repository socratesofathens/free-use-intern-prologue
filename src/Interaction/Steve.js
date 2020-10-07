import Interaction from './index'

class Steve extends Interaction {
  constructor (scene) {
    const points = [
      {
        dialogue: 'I only have one number in here, my friend Steve. I should call him.'
      },
      {
        characterName: 'Quinn',
        dialogue: 'Hey Steve! It’s Quinn.'
      },
      {
        characterName: 'Steve',
        dialogue: 'Uh, hey dude. What’s up?'
      },
      {
        characterName: 'Quinn',
        dialogue: 'Just calling to say hi!'
      },
      {
        characterName: 'Steve',
        dialogue: 'Yeah, hi. I’m at work at the moment, so...let’s talk later?'
      },
      {
        characterName: 'Quinn',
        dialogue: 'Sure thing! I’ll call you again later.'
      },
      {
        characterName: 'Steve',
        dialogue: 'No, I didn’t mean…'
      },
      {
        dialogue: 'I hang up on Steve. What a great guy.'
      }
    ]

    super({ scene, points })
  }

  read (state) {
    return this.points[state.point]
  }
}

export default Steve
