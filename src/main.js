import Phaser from 'phaser'

import {
  GAME_WIDTH, GAME_HEIGHT
} from './lib/game'

import Introduction from './Scene/Introduction'
import Title from './Scene/Title'
import Prologue from './Scene/Prologue'
import PrologueResolution from './Scene/PrologueResolution'
import One from './Scene/One'
import Office from './Scene/Office'

const config = {
  type: Phaser.AUTO,
  width: GAME_WIDTH,
  height: GAME_HEIGHT,
  physics: { default: 'arcade' },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  scene: [Title, Introduction, Prologue, PrologueResolution, One, Office]
}

export default new Phaser.Game(config)
