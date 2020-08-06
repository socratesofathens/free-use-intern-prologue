import Phaser from 'phaser'

export default class Title extends Phaser.Scene {
  constructor () {
    super('title')
  }

  preload = () => {
    this.load.image('logo', 'assets/free-use-intern.png')
  }

  create = () => {
    this.physics.add.image(800, 450, 'logo')

    const advance = () => {
      this.scene.start('interface')
    }

    this
      .input
      .on('pointerup', advance, this)

    const space = this.input.keyboard.addKey('SPACE')
    space.on('down', advance)

    this.add.text(0, 0, '', { font: 'futura' })

    this.cameras.main.setBackgroundColor('#FFFFFF')
  }
}
