import toggle from '../lib/toggle'

export default class Tool {
  constructor ({
    scene,
    position,
    color = 0xFFFFFF,
    toolkit
  }) {
    this.scene = scene
    this.color = color
    this.position = position
    this.toolkit = toolkit

    this.active = false
    this.dialogue = null
    this.fill = null
    this.label = null
    this.letter = null

    const SIZE = 84.79

    this.square = scene.add.rectangle(
      position.x, position.y, SIZE, SIZE, color
    )
    this.square.setOrigin(0, 1)

    this.toolkit.tools.push(this)
  }

  addLetter = (letter) => {
    const HALF = 42.395

    const midX = this.position.x + HALF
    const midY = this.position.y - HALF

    this.letter = this.scene.addText(
      { x: midX, y: midY },
      letter,
      { fontSize: '50px' }
    )
    this.letter.setOrigin(0.5, 0.5)
    this.letter.setColor('black')

    return this.letter
  }

  interact = (callback) => {
    this.square.setInteractive()

    this.square.on('pointerdown', callback)
  }

  reset = () => {
    this.active = false

    this.set(0xFFFFFF, 'black')
  }

  set = (square, letter) => {
    this.square.setFillStyle(square)

    if (this.letter) {
      this.letter.setColor(letter)
    }

    if (this.active) {
      this.scene.tool = this
    } else {
      this.scene.tool = null
    }
  }

  setToggler = (letter) => {
    const toggle = () => {
      this.scene.sidebar.toggle()
    }

    this.setup(letter, toggle)
  }

  setTool = (
    letter, label, dialogue, fill
  ) => {
    this.label = label
    this.dialogue = dialogue
    this.fill = fill

    const onClick = () => {
      console.log('onClick')
      const active = !this.active

      this.scene.sidebar.toolkit.reset()

      if (this.label) {
        this.active = active

        this.scene.setText(this.label)

        if (this.active) {
          this.scene.tool = this

          console.log('this.scene.tool test:', this.scene.tool)

          this.set(0xFF0000, 'white')
        } else {
          this.reset()
        }
      }
    }
    this.setup(letter, onClick)
  }

  setup = (letter, callback) => {
    this.addLetter(letter)

    this.interact(callback)
  }

  toggle = () => {
    toggle(this.square)

    if (this.letter) toggle(this.letter)
  }

  use = () => {
    this.scene.setText(this.dialogue)

    if (this.fill) {
      this.scene.red.setFillStyle(this.fill)
    }
  }
}
