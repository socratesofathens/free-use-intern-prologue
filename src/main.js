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
import UnderDesk from './Scene/UnderDesk'
import Hallway from './Scene/Hallway'
import Kitchenette from './Scene/Kitchenette'
import Mugs from './Scene/Mugs'
import SupplyCloset from './Scene/SupplyCloset'
import Chapter1End from './Scene/Chapter1End'
import Chapter1ResolutionBestEnding from './Scene/Chapter1ResolutionBestEnding'
import Chapter1ResolutionHallway from './Scene/Chapter1ResolutionHallway'
import Chapter1ResolutionOffice from './Scene/Chapter1ResolutionOffice'
import Chapter1ResolutionOfficeGroping from './Scene/Chapter1ResolutionOfficeGroping'

const config = {
  type: Phaser.AUTO,
  width: GAME_WIDTH,
  height: GAME_HEIGHT,
  physics: { default: 'arcade' },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  scene: [
    Title,
    Introduction,
    Prologue,
    PrologueResolution,
    One,
    Office,
    UnderDesk,
    Hallway,
    Kitchenette,
    Mugs,
    SupplyCloset,
    Chapter1End,
    Chapter1ResolutionBestEnding,
    Chapter1ResolutionHallway,
    Chapter1ResolutionOffice,
    Chapter1ResolutionOfficeGroping
  ]
}

export default new Phaser.Game(config)
