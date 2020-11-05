import Figure from './index'

import realPosition from '../lib/game'

export default class Region extends Figure {
  constructor ({
    scene,
    name,
    topLeft,
    bottomRight,
    hover
  }) {
    const realTopLeft = realPosition(topLeft)
    const region = scene
      .game
      .add
      .graphics(realTopLeft.x, realTopLeft.y)

    console.log('region constructor test:', region)

    const realBottomRight = realPosition(bottomRight)
    region
      .drawRect(realBottomRight.x, realBottomRight.y)

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
