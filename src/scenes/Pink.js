import Phrase from '../Figure/Phrase'

import Room from './Room'

class Pink extends Room {
  constructor () {
    super('pink', 0xfff3ff)

    this.name = 'Pink Room'
  }

  setup = () => {
    this.setText('I need your semen for a science experiment. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem ')
    this.door = new Phrase({
      scene: this,
      position: { x: 50, y: 200 },
      text: 'Door',
      options: { fontSize: '40px' },
      uses: [{
        callback: () => {
          this.scene.start('cyan')
        }
      }]
    })

    this.figure({
      Figure: Phrase,
      position: { x: 800, y: 450 },
      text: 'Yellow note',
      label: 'A note from your boss on a little yellow non-branded adhesive note. It says "Somehow this makes stuff kinda yellow, but I want it on something green. Get it done!'
    })
  }
}

export default Pink
