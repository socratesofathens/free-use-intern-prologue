import Figure from './index'

export default class Region extends Figure {
  constructor ({
    scene,
    name,
    topLeft,
    bottomRight,
    hover
  }) {
    const region = scene
      .game
      .add
      .graphics(topLeft.x, topLeft.y)

    console.log('region constructor test:', region)

    region
      .drawRect(bottomRight.x, bottomRight.y)

    super({
      scene,
      element: region,
      name,
      hover
    })

    this.topLeft = topLeft
    this.bottomRight = bottomRight
  }
}
