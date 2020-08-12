import Figure from './index'

class Phrase extends Figure {
  constructor ({
    scene,
    position,
    text,
    options
  }) {
    const element = scene.addText({
      position,
      content: text,
      options
    })

    super({
      scene, position, element
    })
  }
}

export default Phrase
