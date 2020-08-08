// import Phaser from 'phaser'

export default class Item {
  constructor (
    scene, position, color = 0xFFFFFF
  ) {
    this.scene = scene
    this.color = color

    const SIZE = 84.79

    this.square = scene.add.rectangle(
      position.x, position.y, SIZE, SIZE, color
    )
    this.square.setOrigin(0, 1)
  }
}
