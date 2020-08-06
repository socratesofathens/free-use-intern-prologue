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

    this
      .input
      .on(
        'pointerup',
        () => this.scene.start('interface'),
        this
      )

    this.cameras.main.setBackgroundColor('#FFFFFF')
  }
}
