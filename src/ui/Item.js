import Tool from './Tool'

export default class Item extends Tool {
  constructor ({
    scene,
    position,
    color = 0xFFFFFF,
    toolkit
  }) {
    super({
      scene,
      position,
      color,
      toolkit
    })
  }
}
