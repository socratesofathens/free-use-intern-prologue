import Phaser from 'phaser'

import WebFont from 'webfontloader'

import Sidebar from '../ui/Sidebar'

import Rectangle from '../Figure/Rectangle'

export default class Interface extends Phaser.Scene {
  constructor () {
    super('interface')

    this.blue = null
    this.characterName = null
    this.sidebar = null
    this.tool = null
  }

  preload = () => {
    this.loadImage({
      image: 'logo',
      name: 'free-use-intern'
    })
    this.loadImage({ image: 'phone' })
  }

  create = () => {
    WebFont.load({
      custom: { families: ['futura'] },
      active: () => {
        this.setBackground('#12ffff')

        this.addBook()

        this.sidebar = new Sidebar(this)

        this.red = new Rectangle({
          scene: this,
          position: { x: 500, y: 400 },
          size: { width: 200, height: 200 },
          color: 0xFF0000
        })
      }
    })
  }

  loadImage = ({
    image,
    name,
    type = 'png'
  }) => {
    name = name || image

    const path = `assets/${name}.${type}`

    return this.load.image(image, path)
  }

  onRed = () => {
    this.red.setFillStyle(0xFF0000)

    if (this.tool) {
      this.tool.use()
    } else {
      this
        .setText('Give me some inspiration.')
    }
  }

  setText = (content, name) => {
    this.dialogue.setText(content)

    this.characterName.setText(name)
  }

  setBackground = color => {
    const { main } = this.cameras

    main.setBackgroundColor(color)
  }

  addBook = () => {
    const paper = this
      .add
      .rectangle(0, 900, 1350, 190, 0x2b3043)
      .setOrigin(0, 1)
    paper.setInteractive()
    paper.on(
      'pointerup',
      () => console.log('test')
    )

    this.characterName = this.addText(
      { x: 18, y: 654.84 },
      'Emma',
      { fontSize: '35px', color: 'black' }
    )

    this.dialogue = this.addText(
      { x: 18, y: 728 },
      "I need your semen for a science experiment. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      {
        fontSize: '31px',
        lineSpacing: 16,
        wordWrap: { width: 1314 }
      }
    )
  }

  addGroup = () => {
    return this.add.group({
      classType: Phaser.GameObjects.Image
    })
  }

  addItem = ({
    text,
    position = {},
    options = {}
  }) => {
    const positioned = {
      y: 829.919, ...position
    }

    const base = {
      fontSize: '28px', color: 'black'
    }
    const merged = { ...base, ...options }

    const item = this.addText(
      positioned, text, merged
    )
    item.setOrigin(0, 1)

    return item
  }

  addMenu = () => {
    this.addItem({
      position: { x: 1371.343 }, text: 'Save'
    })

    const load = this.addItem({
      position: { x: 1578.657 }, text: 'Load'
    })
    load.setOrigin(1, 1)

    const panther = this.addItem({
      position: { x: 1475, y: 882 },
      text: 'Panther VN'
    })

    panther.setOrigin(0.5, 1)
  }

  addText = (
    position, content = '', options = {}
  ) => {
    const base = { fontFamily: 'futura' }
    const merged = { ...base, ...options }

    return this.add.text(
      position.x, position.y, content, merged
    )
  }

  half = entity => {
    function halfEntry (entry) {
      const [key, value] = entry

      return [key, value / 2]
    }

    const entries = Object.entries(entity)
    const halved = entries.map(halfEntry)

    return Object.fromEntries(halved)
  }
}
