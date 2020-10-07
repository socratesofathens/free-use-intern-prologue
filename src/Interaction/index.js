export default class Interaction {
  constructor ({ scene, points }) {
    this.scene = scene

    this.points = points
  }

  read (state) {
    return this.points[state.point]
  }
}
