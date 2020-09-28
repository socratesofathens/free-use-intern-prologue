import GAME_SIZE from '../lib/game'
import ORIGIN from '../lib/origin'

import Scene from './Scene'

class Title extends Scene {
  constructor () {
    super('title')

    this.name = 'Title'
  }

  preload = () => {
    this.loadImage({ image: 'panther-vn' })
    this.loadImage({
      image: 'interface-logo'
    })
    this.loadImage({ image: 'phone' })
    this.loadImage({ image: 'emma' })
  }

  setup = () => {
    super.setup()

    this.see({
      name: 'panther-vn',
      position: ORIGIN,
      origin: ORIGIN,
      size: GAME_SIZE
    })

    this.input.on('pointerup', this.advance)
  }

  advance = () => {
    this.scene.start('introduction')
  }

  loadImage = ({
    image,
    name,
    type = 'png'
  }) => {
    name = name || image

    const path = `${name}.${type}`

    return this.load.image(image, path)
  }
}

export default Title
