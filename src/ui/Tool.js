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
    this.key = null
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

    this.letter = this.scene.addText({
      position: { x: midX, y: midY },
      content: letter,
      options: { fontSize: '50px' },
      origin: { x: 0.5, y: 0.5 }
    })
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

  setItem = (item) => {
    const items = this
      .scene
      .registry
      .get('items')

    const has = items
      .find(has => has.key === item.key)

    if (!has) {
      items.push(item)

      this.scene.registry.set('items', items)
    }

    this.setTool(item)
  }

  setToggler = (letter) => {
    this.setup(
      letter, this.scene.sidebar.toggle
    )
  }

  setTool = ({
    key, label, letter
  }) => {
    letter = letter || key
    label = label || `The letter ${letter}.`

    this.label = label
    this.key = key

    const onClick = () => {
      const active = !this.active

      this.scene.sidebar.toolkit.reset()

      if (this.label) {
        this.active = active

        this.scene.setText(this.label)

        if (this.active) {
          this.scene.tool = this

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
}
