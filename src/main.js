import Phaser from 'phaser'

import HelloWorldScene from './scenes/HelloWorldScene'
import Title from './scenes/Title'

const config = {
  type: Phaser.AUTO,
  width: 1600,
  height: 900,
  physics: { default: 'arcade' },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  scene: [Title, HelloWorldScene]
}

export default new Phaser.Game(config)
