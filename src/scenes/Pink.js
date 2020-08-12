import Rectangle from '../Figure/Rectangle'
import Phrase from '../Figure/Phrase'

import Room from './Room'

class Interface extends Room {
  constructor () {
    super('interface', 0x12ffff)
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

    this.wrench = new Phrase({
      scene: this,
      position: { x: 1000, y: 500 },
      text: 'Wrench',
      options: { fontSize: '40px' },
      uses: [{
        text: 'You picked up some type of wrench.',
        callback: () => {
          const slot = this
            .sidebar
            .inventory
            .next()

          slot.setTool({
            key: 'W',
            label: 'Some type of wrench.'
          })

          this.wrench.element.destroy()
        }
      }]
    })

    this.blue = new Phrase({
      scene: this,
      position: { x: 700, y: 200 },
      text: 'Bucket of blue paint',
      options: { fontSize: '40px' },
      uses: [{
        text: 'You picked up a bucket of blue paint.',
        callback: () => {
          const slot = this
            .sidebar
            .inventory
            .next()

          slot.setTool({
            key: 'B',
            label: 'A bucket of of blue paint.'
          })

          this.blue.element.destroy()
        }
      }]
    })

    this.door = new Phrase({
      scene: this,
      position: { x: 50, y: 200 },
      text: 'Door',
      options: { fontSize: '40px' },
      uses: [{
        callback: () => {
          console.log('door')
        }
      }]
    })
  }
}

export default Interface
