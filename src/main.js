import Phaser from 'phaser'

import {
  GAME_WIDTH, GAME_HEIGHT
} from './lib/game'

import Introduction from './scenes/Introduction'
import Title from './scenes/Title'
import Prologue from './scenes/Prologue'
import PrologueResolution from './scenes/PrologueResolution'
import One from './scenes/One'

const config = {
  type: Phaser.AUTO,
  width: GAME_WIDTH,
  height: GAME_HEIGHT,
  physics: { default: 'arcade' },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  scene: [Title, Introduction, Prologue, PrologueResolution, One]
}

export default new Phaser.Game(config)
