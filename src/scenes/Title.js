import Scene from './Scene'

class Title extends Scene {
  constructor () {
    super('title')

    this.name = 'Title'

    this.assets.push({ name: 'panther-vn', type: 'png' })
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
}

export default Title
