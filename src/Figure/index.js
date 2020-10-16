export default class Figure {
  constructor ({
    scene,
    position,
    element,
    uses = [],
    action,
    name,
    title,
    hover
  }) {
    this.scene = scene
    this.scene.figures.push(this)

    this.title = title
    this.position = position

    this.action = action
    this.element = element

    this.hover = hover

    this.element.setInteractive()
    this.element.on(
      'pointerdown', this.onClick
    )

    this
      .element
      .on(
        'pointerover',
        this.inRoom(() => {
          this.scene.setText(this.hover)
        })
      )

    this.element.on('pointerout', this.inRoom(() => {
      this.scene.setText('')
    }))

    this.name = name

    this.uses = uses
  }

  destroy () {
    this.element.destroy()
  }

  do ({ text, callback }) {
    if (text) this.scene.setText(text)

    if (callback) {
      const onClick = () => {
        callback(this.scene, this.element)
      }

      onClick()
    }
  }

  inRoom (callback) {
    return () => {
      if (this.scene.validate) {
        const valid = this.scene.validate()
        console.log('this.name test:', this.name)
        console.log('this.hover test:', this.hover)
        console.log('valid test:', valid)

        if (this.scene.dialogue && valid && this.hover) {
          callback()
        }
      }
    }
  }

  onClick = () => {
    this.reset()

    this.uses.forEach(this.use, this)

    if (this.action) {
      this.action()
    }

    if (this.name) {
      this.scene.use(this)
    }
  }

  reset () {}

  use ({ key, text, color, callback }) {
    const { tool } = this.scene
    const match = key
      ? key === ' '
        ? !tool
        : tool && tool.key === key
      : true

    if (match) {
      this.do({ text, color, callback })
    }
  }
}
