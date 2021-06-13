import Phaser from 'phaser'

import {
  GAME_WIDTH, GAME_HEIGHT
} from './lib/game'

import Introduction from './scene/Introduction'
import Title from './scene/Title'
import Prologue from './scene/Prologue'
import PrologueResolution from './scene/PrologueResolution'
import One from './scene/One'
import Office from './scene/Office'

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
