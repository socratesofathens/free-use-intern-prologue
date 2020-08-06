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

    this.add.rectangle(0, 748, 18, 18, 0xFF0000).setOrigin(0, 0)

    this
      .add
      .text(
        18,
        728,
        "I need your semen for a science experiment. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        {
          fontFamily: 'futura',
          fontSize: '31px',
          wordWrap: { width: 1314, height: 150 }
        }
      )

    paper.on(
      'pointerup',
      () => console.log('test')
    )
  }
}
