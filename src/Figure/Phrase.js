import Figure from './index'

class Phrase extends Figure {
  constructor ({
    scene,
    position,
    text,
    options,
    uses
  }) {
    const element = scene.addText({
      position,
      content: text,
      options
    })

    super({
      scene, position, element, uses
    })
  }
}

export default Phrase
