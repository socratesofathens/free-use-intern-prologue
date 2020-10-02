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
    this.loadImage({ image: 'logo-1' })
    this.loadImage({ image: 'logo-2' })
    this.loadImage({ image: 'logo-3' })

    this.loadImage({ image: 'phone' })
    this.loadImage({ image: 'emma' })
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
