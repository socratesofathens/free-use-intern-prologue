import Rectangle from '../Figure/Rectangle'
import Phrase from '../Figure/Phrase'

import Room from './Room'

class Cyan extends Room {
  constructor () {
    super('cyan', 0x12ffff)
  }

  setup = () => {
    this.red = new Rectangle({
      scene: this,
      position: { x: 500, y: 400 },
      size: { width: 200, height: 200 },
      color: 0xFF0000,
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
          color: 0x00FF00
        },
        {
          key: 'W',
          text: "You probably don't even know what type of wrench that is!"
        },
        {
          key: 'B',
          color: 0x0000FF
        }
      ]
    })

    const wrench = this.registry.get('wrench')
    if (!wrench) {
      this.wrench = new Phrase({
        scene: this,
        position: { x: 1000, y: 500 },
        text: 'Wrench',
        options: { fontSize: '40px' },
        uses: [{
          text: 'You picked up some type of wrench.',
          callback: () => {
            this.registry.set('wrench', true)

            this
              .sidebar
              .inventory
              .setItem({
                key: 'W',
                label: 'Some type of wrench.'
              })

            this.wrench.element.destroy()
          }
        }]
      })
    }

    const blue = this.registry.get('blue')
    if (!blue) {
      this.blue = new Phrase({
        scene: this,
        position: { x: 700, y: 200 },
        text: 'Bucket of blue paint',
        options: { fontSize: '40px' },
        uses: [{
          text: 'You picked up a bucket of blue paint.',
          callback: () => {
            this.registry.set('blue', true)

            this
              .sidebar
              .inventory
              .setItem({
                key: 'B',
                label: 'A bucket of of blue paint.'
              })

            this.blue.element.destroy()
          }
        }]
      })
    }

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
