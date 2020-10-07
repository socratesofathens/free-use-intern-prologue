export default class Interaction {
  constructor ({ scene, points }) {
    this.scene = scene

    this.points = points
  }

  read (state) {
    this.scene.phone.reset()
  }
}
