import Rectangle from '../Figure/Rectangle'
import Phrase from '../Figure/Phrase'

import Room from './Room'

class Cyan extends Room {
  constructor () {
    super('cyan', 0x12ffff)

    this.name = 'Cyan Room'
  }

  setup = () => {
    const r = this.registry.get('color')

    const color = r === 'blue'
      ? 0x0000FF
      : r === 'green'
        ? 0x00FF00
        : r === 'orange'
          ? 0xFF8C00
          : 0xFF0000

    this.red = new Rectangle({
      scene: this,
      position: { x: 500, y: 400 },
      size: { width: 200, height: 200 },
      color,
      uses: [
        {
          key: ' ',
          text: 'Give me some inspiration'
        },
        {
          key: 'A', text: 'Adulterer!'
        },
        {
          key: 'F', text: 'Failure!'
        },
        {
          key: 'E',
          text: "I'm so jealous of your email!",
          color: 0x00FF00,
          callback: () => {
            this.registry.set('color', 'green')
          }
        },
        {
          key: 'W',
          text: "You probably don't even know what type of wrench that is!"
        },
        {
          key: 'B',
          color: 0x0000FF,
          callback: (scene, element) => {
            this.registry.set('color', 'blue')
          }
        },
        {
          key: 'Y',
          callback: (scene, element) => {
            const before = this.registry.get('color')
            if (before === 'blue') {
              this.registry.set('color', 'green')
            }

            if (before === 'red') {
              this.registry.set('color', 'orange')
              this.red.element.setFillStyle(
                0xFF8C00
              )
            }

            const color = this.registry.get('color')

            if (color === 'green') {
              this.red.element.setFillStyle(
                0x00FF00
              )

              this.setText('You win!')
            }
          }
        }
      ]
    })
    this.red.cn = 'red'

    this.figure({
      Figure: Phrase,
      position: { x: 1000, y: 500 },
      text: 'Wrench',
      label: 'Some type of wrench.'
    })

    this.figure({
      Figure: Phrase,
      position: { x: 700, y: 200 },
      text: 'Bucket of blue paint',
      label: 'A bucket of blue paint.'
    })

    this.door = new Phrase({
      scene: this,
      position: { x: 50, y: 200 },
      text: 'Door',
      options: { fontSize: '40px' },
      uses: [{
        callback: () => {
          this.scene.start('pink')
        }
      }]
    })
  }
}

export default Cyan
