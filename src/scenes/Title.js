import Scene from './Scene'

class Title extends Scene {
  constructor () {
    super('title')

    this.name = 'Title'

    this.IMAGES = [
      'panther-vn',
      'interface-logo',
      'emma',
      'logo-1',
      'logo-2',
      'logo-3',
      'doors',
      'item-phone',
      'phone',
      'icon-camera'
    ]
  }

  preload = () => {
    this
      .IMAGES
      .forEach(image => this
        .loadImage({ image })
      )
  }

  setup = () => {
    this.saves = [
      {
        fullscreen: {
          name: 'panther-vn'
        }
      },
      {
        scene: 'introduction'
      }
    ]

    super.setup()
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
