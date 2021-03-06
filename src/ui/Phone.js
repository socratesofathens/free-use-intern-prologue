import Icons from './Icons'

export default class Phone {
  constructor (scene) {
    this.scene = scene

    this.group = this.scene.addGroup()

    this.background = this.see({
      name: 'phone',
      size: { width: 0.1562260291, height: 0.5909090909 },
      origin: { x: 1, y: 0 },
      position: { x: 1, y: 0 },
      depth: 1.1
    })

    this.apps = new Icons({
      names: [
        { name: 'Power', hover: 'Close phone' },
        {
          name: 'Phone',
          hover: 'Make call'
        },
        {
          name: 'Email',
          hover: 'Use Email app'
        },
        {
          name: 'Web',
          hover: 'Use Cloo'
        },
        {
          name: 'Camera',
          hover: 'Use Camera app'
        },
        {
          name: 'Photos',
          hover: 'View Photos'
        }
      ],
      phone: this
    })

    this.photos = new Icons({
      names: [{ name: 'Home', hover: 'Close photos' }],
      phone: this
    })

    this.openApps(true)

    this.close()
  }

  close () {
    this.deselect()

    this.group.setVisible(false)

    this.scene.game.state.open = false
  }

  open (opening) {
    this.group.setVisible(true)

    this.openApps(opening)

    this.scene.game.state.open = true
  }

  openApps (opening) {
    this.deselect(opening)

    this.apps.open()
    this.photos.close()
  }

  openPhotos (opening) {
    this.deselect(opening)

    this.apps.close()
    this.photos.open()
  }

  deselect (opening) {
    this.scene.selecting = false
    this.scene.selected = null
    this.scene.game.state.selected = null

    if (!opening) {
      this.scene.saveText(' ')
    }
  }

  reset () {
    this.apps.reset()
    this.photos.reset()
  }

  see (image) {
    const seen = this.scene.see(image)

    this.group.add(seen.element)

    return seen
  }
}
