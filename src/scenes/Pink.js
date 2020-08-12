import Phrase from '../Figure/Phrase'

import Room from './Room'

class Pink extends Room {
  constructor () {
    super('pink', 0xfff3ff)
  }

  setup = () => {
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
  }
}

export default Pink
