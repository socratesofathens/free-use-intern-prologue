import Toolkit from './Toolkit'

export default class Phone extends Toolkit {
  constructor (scene) {
    super(scene)

    this.scene = scene
    this.scene.sidebar.phone = this

    this.background = this.scene.add.image(
      1350, 531.595, 'phone'
    )
    this.background.setDisplaySize(
      251.611, 531.595
    )
    this.background.setOrigin(0, 1)
    this.elements.push(this.background)

    this.addItems()

    this.toggle()
    this.virgin = true
  }

  addItems = () => {
    const {
      left: power, right: phone
    } = this.addRow(this.TOP)

    power.setToggler('X')

    const chris = () => {
      const message = 'Chris is not answering his phone for some reason...'

      this.scene.setText(message)
    }

    phone.setup('P', chris)

    const {
      left: email
    } = this.addRow(this.MIDDLE)

    email.setTool({
      key: 'E',
      label: 'Your email app.'
    })

    this.addRow(this.BOTTOM)
  }

  toggle () {
    super.toggle()

    if (this.virgin) {
      this.scene.setText('Your phone is an Accuity 556D. It has all kinds of cool apps.')

      this.virgin = false
    }
  }
}
