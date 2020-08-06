import Phaser from 'phaser'

export default class Interface extends Phaser.Scene {
  constructor () {
    super('interface')
  }

  preload = () => {}

  create = () => {
    this
      .add
      .text(
        0,
        0,
        'I need your semen for a science experiment',
        { fontFamily: 'futura', fontSize: '50px' }
      )

    const size = {
      width: 1350,
      height: 190
    }

    function halfEntry (entry) {
      const [key, value] = entry

      return [key, value / 2]
    }

    function half (entity) {
      const entries = Object.entries(entity)
      const halved = entries.map(halfEntry)

      return Object.fromEntries(halved)
    }

    const halved = half(size)

    const paper = this
      .add
      .rectangle(0, 900, 1350, 190, 0x2b3043)
      .setOrigin(0, 1)

    const sidebar = this
      .add
      .rectangle(1600, 900, 250, 900, 0xFFFFFF)
      .setOrigin(1, 1)

    const inventory = this
      .add
      .rectangle(
        1600, 0, 250, 531.595, 0x666666
      )
      .setOrigin(1, 0)

    paper.setInteractive()

    const clickButton = this
      .add
      .text(100, 100, 'Click me!', { fill: '#0f0' })
      .setInteractive()
      .on('pointerdown', () => console.log('$'))

    paper.on(
      'pointerup',
      () => console.log('test')
    )
  }
}
