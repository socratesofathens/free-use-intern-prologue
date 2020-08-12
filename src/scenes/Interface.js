import Phaser from 'phaser'

import WebFont from 'webfontloader'

import Sidebar from '../ui/Sidebar'

import Rectangle from '../Figure/Rectangle'
import Phrase from '../Figure/Phrase'

class Interface extends Phaser.Scene {
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

        this.wrench = new Phrase({
          scene: this,
          position: { x: 1000, y: 500 },
          text: 'Wrench',
          options: { fontSize: '40px' }
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

    this.characterName = this.addText({
      position: { x: 18, y: 654.84 },
      content: 'Emma',
      options: {
        fontSize: '35px', color: 'black'
      },
      origin: { x: 0, y: 0 }
    })

    this.dialogue = this.addText({
      position: { x: 18, y: 728 },
      content: "I need your semen for a science experiment. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      options: {
        fontSize: '31px',
        lineSpacing: 16,
        wordWrap: { width: 1314 },
        color: 'white'
      },
      origin: { x: 0, y: 0 }
    })
  }

  addGroup = () => {
    return this.add.group({
      classType: Phaser.GameObjects.Image
    })
  }

  addText = ({
    content,
    position = {},
    origin = { x: 0, y: 1 },
    options = {}
  }) => {
    const positioned = {
      y: 829.919, ...position
    }

    const base = {
      fontFamily: 'futura',
      fontSize: '28px',
      color: 'black'
    }
    const merged = { ...base, ...options }

    const { x, y } = positioned
    const text = this.add.text(
      x, y, content, merged
    )
    text.setOrigin(origin.x, origin.y)

    return text
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

export default Interface
