import Phaser from 'phaser'

import { upY } from '../lib/game'
import lorem from '../lib/lorem'
import ORIGIN from '../lib/origin'
import Phone from '../ui/Phone'

import Sidebar from '../ui/Sidebar'

import Scene from './Scene'

class Room extends Scene {
  constructor (key, color) {
    super(key, color)

    this.characterName = null
    this.content = null
    this.dialogue = null
    this.name = null
    this.sidebar = null
    this.tool = null
    this.interaction = null
    this.OFFSET = 10
  }

  setup () {
    this.addBook()

    this.sidebar = new Sidebar(this)
    this.phone = new Phone(this)

    super.setup()
  }

  addBook = () => {
    this.HEIGHT = 339
    this.TOP = upY(this.HEIGHT)
    this.MARGIN = 35

    this.addPaper()

    this.addCharacterName()

    this.addDialogue()
  }

  addCharacterName () {
    const y = upY(443.481)
    this.characterName = this.addText({
      position: { x: this.MARGIN, y },
      content: 'Emma',
      origin: { x: 0, y: 0 }
    })
  }

  addDialogue () {
    const topline = this.TOP + this.MARGIN
    const y = topline - this.OFFSET

    this.dialogue = this.addText({
      position: { x: this.MARGIN, y },
      content: lorem,
      options: {
        fontSize: '56.25247765pt',
        lineSpacing: 5,
        wordWrap: { width: 3270 },
        color: 'white'
      },
      origin: { x: 0, y: 0 }
    })

    this.dialogue.setDepth(1)
  }

  addGroup = () => {
    return this.add.group()
  }

  addPaper () {
    const height = 339
    const y = upY(height)
    const position = { x: 0, y }
    const size = { width: 3300, height }

    const paper = this.addRectangle({
      position,
      size,
      color: 0x2b3043
    })

    paper.setDepth(1)

    return paper
  }

  addRectangle ({
    size,
    position,
    color,
    origin = ORIGIN,
    action
  }) {
    const { x, y } = position
    const { width, height } = size
    const rectangle = this
      .add
      .rectangle(x, y, width, height, color)

    if (origin) {
      const { x, y } = origin

      rectangle.setOrigin(x, y)
    }

    if (action) {
      rectangle.setInteractive()

      rectangle.on(
        'pointerdown', action, this
      )
    }

    return rectangle
  }

  addText = ({
    content,
    position = ORIGIN,
    origin = { x: 0, y: 1 },
    options = {},
    action,
    depth
  }) => {
    const base = {
      fontFamily: 'futura',
      fontSize: '67.50299835pt',
      color: 'black'
    }
    const merged = { ...base, ...options }

    const { x, y } = position
    const offset = y - this.OFFSET
    const text = this.add.text(
      x, offset, content, merged
    )
    text.setOrigin(origin.x, origin.y)

    if (action) {
      const rectangle = new Phaser
        .Geom
        .Rectangle(
          0, 0, text.width, text.height
        )

      text
        .setInteractive(
          rectangle,
          Phaser.Geom.Rectangle.Contains
        )

      text.on('pointerdown', action, this)
    }

    if (depth) {
      text.setDepth(depth)
    }

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

  openPhone () {
    this.setText('To celebrate the internship, I bought a brand new phone, an Acuity 556D.')

    this.phone.open()
  }

  read () {
    super.read()

    if (this.save) {
      const {
        dialogue,
        speakerName
      } = this.save

      this.setText(dialogue, speakerName)
    }
  }

  select (figure) {
    this.selected = figure

    return figure?.select()
  }

  setText = (dialogue, speakerName) => {
    this.dialogue.setText(dialogue)

    this
      .characterName
      .setText(speakerName)
  }

  use (name) {
    super.use(name)

    switch (name) {
      case 'item-phone':
        return this.openPhone()
      case 'icon-power':
        return this.phone.close()
      case 'icon-phone':
        return this.setText(
          'I only have one number in here, my friend Steve. I should call him.'
        )
      case 'icon-email':
        return this.setText(
          'To look more professional, I made a new email address for internship applications. Goodbye, kingpin_quinn@hottmail.'
        )
      case 'icon-web':
        return this.setText(
          'I can look up pretty much anything on Cloo. It’s great for when I’m not sure what to do next.'
        )
      case 'icon-camera':
        return this.setText(
          'This phone has a great high-res camera. I can’t wait to take some photos with it.'
        )
      case 'icon-photos':
        this.phone.openPhotos()

        return this.setText(
          'My old phone had thousands of pics, but I couldn’t work out how to transfer them over.'
        )
      case 'icon-close':
        return this.phone.openApps()
    }
  }
}

export default Room
