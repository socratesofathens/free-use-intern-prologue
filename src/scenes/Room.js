import Phaser from 'phaser'

import WebFont from 'webfontloader'

import Sidebar from '../ui/Sidebar'

class Room extends Phaser.Scene {
  constructor (key, color) {
    super(key)

    this.color = color

    this.characterName = null
    this.content = null
    this.dialogue = null
    this.name = null
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
    this.setBackground(this.color)

    WebFont.load({
      custom: { families: ['futura'] },
      active: () => {
        this.addBook()

        this.sidebar = new Sidebar(this)

        this.setup()
      }
    })
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

  figure = ({
    key,
    Figure,
    position,
    text,
    label
  }) => {
    key = key || text[0]

    const done = this.registry.get(key)

    if (!done) {
      const lower = label.toLowerCase()

      const callback = (scene, element) => {
        const text = `You picked up ${lower}.`
        scene.setText(text)

        this.registry.set(key, true)

        this
          .sidebar
          .inventory
          .setItem({ key, label })

        element.destroy()
      }

      return new Figure({
        scene: this,
        position,
        text,
        options: { fontSize: '40px' },
        uses: [{ text, callback }]
      })
    }
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

  setup () {}
}

export default Room
