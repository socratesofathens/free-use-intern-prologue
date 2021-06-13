export default class Interaction {
  constructor ({
    scene, first = [], last = [], name
  }) {
    this.scene = scene
    this.first = first
    this.last = last
    this.name = name

    this
      .scene
      .interactions[this.name] = this
  }

  addImages (point, images) {
    const oldImages = point.images || []

    const newImages = [
      ...oldImages, ...images
    ]

    point.images = newImages
  }

  read (state) {
    this.scene.phone.reset()

    const selected = this.select(state) || []

    const selection = selected[state.point]

    return selection
  }

  setup = (points) => {
    if (this.first) {
      const [first] = points
      this.addImages(first, this.first)
    }

    if (this.last) {
      const last = points[points.length - 1]

      if (!last.dialogue) {
        last.dialogue = ' '
        last.interaction = 0
      }

      this.addImages(last, this.last)
      last.last = true
    }

    return points
  }
}
