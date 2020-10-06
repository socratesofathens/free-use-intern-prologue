import {
  upY, GAME_WIDTH
} from '../lib/game'

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

    this.LEFT = 3372.606
    this.RIGHT = 3631.817
    this.TOP = upY(1804.439)

    this.LENGTH = 207.309
    this.SIZE = {
      width: this.LENGTH,
      height: this.LENGTH
    }

    this.power = this.see({
      name: 'icon-power',
      size: this.SIZE,
      position: {
        x: this.LEFT, y: this.TOP
      },
      origin: { x: 0, y: 1 },
      depth: 1.2
    })

    this.camera = this.see({
      name: 'icon-camera',
      size: this.SIZE,
      position: {
        x: this.RIGHT, y: this.TOP
      },
      origin: { x: 0, y: 1 },
      depth: 1.2
    })

    this.close()
  }

  close () {
    this.group.setVisible(false)
  }

  open () {
    this.group.setVisible(true)
  }

  see (image) {
    const seen = this.scene.see(image)

    this.group.add(seen.element)
  }
}
