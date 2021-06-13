import Interaction from './index'

class Picture extends Interaction {
  constructor ({ scene }) {
    super({ scene, name: 'picture' })

    const goal = this.scene.game.state['mug-goal']

    const mug = `youngmug-${goal}`

    this.points = [
      {
        images: [
          { name: 'youngboss' },
          { name: mug }
        ],
        dialogue: 'Looks like a picture of when the boss first started working at Acuity.'
      },
      {
        dialogue: 'I wonder if he knew back then how many hot interns his future would hold.'
      },
      {
        dialogue: '...',
        images: [
          {
            title: 'youngboss',
            remove: true
          },
          {
            title: mug,
            remove: true
          }
        ]
      }
    ]
  }

  select (state) {
    return this.points
  }
}

export default Picture
