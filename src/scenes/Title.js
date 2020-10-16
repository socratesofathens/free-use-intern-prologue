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
      'icon-power',
      'icon-power-selected',
      'icon-phone',
      'icon-phone-selected',
      'icon-email',
      'icon-email-selected',
      'icon-web',
      'icon-web-selected',
      'icon-camera',
      'icon-camera-selected',
      'icon-photos',
      'icon-photos-selected',
      'icon-home',
      'icon-home-selected',
      'icon-selfie',
      'icon-selfie-selected',
      'icon-emma',
      'icon-emma-selected',
      'pic-emma',
      'intercom',
      'office',
      'boss',
      'bosssex1',
      'bosssex2',
      'blank'
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
