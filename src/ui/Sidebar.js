import Inventory from '../ui/Inventory'

import Phone from '../ui/Phone'

export default class Sidebar {
  constructor (scene) {
    this.scene = scene
    this.scene.sidebar = this

    this.sidebarGroup = this.scene.addGroup()

    this.background = this
      .scene
      .add
      .rectangle(1600, 900, 250, 900, 0xFFFFFF)
    this.background.setOrigin(1, 1)

    this.addMenu()

    const logo = this.sidebarGroup.create(
      1371.343, 547.264, 'logo'
    )
    logo.setOrigin(0, 0)
    logo.setDisplaySize(178.527, 228.662)

    this.inventory = new Inventory(
      this.scene, this
    )
    this.toolkit = this.inventory

    this.phone = new Phone(this.scene)
  }

  addMenu = () => {
    this.scene.addText({
      content: 'Save',
      position: { x: 1371.343 }
    })

    const load = this.scene.addText({
      content: 'Load',
      position: { x: 1578.657 }
    })
    load.setOrigin(1, 1)

    const panther = this.scene.addText({
      content: 'Panther VN',
      position: { x: 1475, y: 882 }
    })

    panther.setOrigin(0.5, 1)
  }

  reset = () => {
    this.phone.reset()

    this.inventory.reset()
  }

  toggle = () => {
    this.reset()

    if (
      this.toolkit === this.inventory
    ) {
      this.toolkit = this.phone
    } else {
      this.toolkit = this.inventory
    }

    this.inventory.toggle()

    this.phone.toggle()
  }
}
