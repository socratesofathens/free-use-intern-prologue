import { GAME_WIDTH } from '../lib/game'

import Icons from './Icons'

export default class Phone {
  constructor (scene) {
    this.scene = scene

    this.group = this.scene.addGroup()

    this.background = this.see({
      name: 'phone',
      size: { height: 1300, width: 611 },
      origin: { x: 1, y: 0 },
      position: { x: GAME_WIDTH, y: 0 },
      depth: 1.1
    })

    this.icons = new Icons(this)

    this.close()
  }

  close () {
    this.group.setVisible(false)
  }

  open () {
    this.group.setVisible(true)

    this.icons.reset()
  }

  see (image) {
    const seen = this.scene.see(image)

    this.group.add(seen.element)

    return seen
  }
}
