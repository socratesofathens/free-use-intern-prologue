export default class Interaction {
  constructor ({ scene, first, last }) {
    this.scene = scene
    this.first = first
    this.last = last
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
  }

  setup (points) {
    const [first] = points
    this.addImages(first, this.first)

    const last = points[points.length - 1]
    this.addImages(last, this.last)

    return points
  }
}
