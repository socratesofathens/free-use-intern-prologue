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

    const inPointerover = () => {
      // console.log('inPointerover name test:', name)
      this.scene.was = this.scene.game.state.dialogue
      // console.log('inPointerover this.scene.was test:', this.scene.was)

      this.scene.setText(this.hover)
    }

    const onPointerover = this.inRoom(inPointerover)
    this
      .element
      .on('pointerover', onPointerover)

    const inPointerout = () => {
      // console.log('inPointerout name test:', name)
      // console.log('inPointerout this.scene.was test:', this.scene.was)
      this.scene.setText(this.scene.was)
    }
    const onPointerout = this.inRoom(inPointerout)
    this
      .element
      .on('pointerout', onPointerout)

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
        // console.log('inRoom this.name test:', this.name)
        const icon = this.name.includes('icon-')
        const selected = this.name.includes('-selected')
        // console.log('icon test:', icon)
        const pass = icon && !selected
        // console.log('inRoom pass test')
        const valid = this.scene.validate(pass)
        // console.log('inRoom valid test:', valid)
        // console.log('inRoom this.hover test:', this.hover)

        if (
          this.scene.dialogue &&
          valid &&
          this.hover
        ) {
          const { interaction } = this.scene

          const used = this.scene.use(this, false)
          // console.log('used test:', used)
          const dry = used === 'dry'

          const next = this.scene.extract(null, 0)
          // console.log('next test:', next)

          this.scene.interaction = interaction

          if (next || dry) {
            callback()
          }
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
