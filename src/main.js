import Phaser from 'phaser'

import {
  GAME_WIDTH, GAME_HEIGHT
} from './lib/game'

import Introduction from './scenes/Introduction'
import Pink from './scenes/Pink'
import Title from './scenes/Title'

const config = {
  type: Phaser.AUTO,
  width: GAME_WIDTH,
  height: GAME_HEIGHT,
  physics: { default: 'arcade' },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  scene: [Title, Introduction, Pink]
}

export default new Phaser.Game(config)
