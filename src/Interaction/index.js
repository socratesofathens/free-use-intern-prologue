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
    console.log('point test:', point)
    const oldImages = point.images || []

    const newImages = [
      ...oldImages, ...images
    ]

    point.images = newImages
  }

  read (/* state */) {
    this.scene.phone.reset()
  }

  setup (points) {
    const [first] = points
    this.addImages(first, this.first)

    const last = points[points.length - 1]

    if (last.dialogue) {
      const reset = { dialogue: ' ' }
      this.addImages(reset, this.last)

      points.push(reset)
    } else {
      this.addImages(last, this.last)

      last.dialogue = ' '
    }

    return points
  }
}
