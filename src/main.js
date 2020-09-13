import Phaser from 'phaser'

import Introduction from './scenes/Introduction'
import Pink from './scenes/Pink'
import Title from './scenes/Title'

const config = {
  type: Phaser.AUTO,
  width: 3911,
  height: 2200,
  physics: { default: 'arcade' },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  scene: [Title, Introduction, Pink]
}

export default new Phaser.Game(config)
