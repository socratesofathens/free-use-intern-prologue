import Phaser from 'phaser'

import {
  GAME_SIZE, upY
} from '../lib/game'
import lorem from '../lib/lorem'
import ORIGIN from '../lib/origin'

import Sidebar from '../ui/Sidebar'

import Scene from './Scene'

class Room extends Scene {
  constructor (key, color) {
    super(key, color)

    this.characterName = null
    this.content = null
    this.dialogue = null
    this.fullscreen = null
    this.name = null
    this.sidebar = null
    this.tool = null
    this.save = 0
    this.interaction = null
    this.saves = []
    this.timer = null
    this.OFFSET = 10
  }

  setup () {
    super.setup()

    this.addBook()

    this.sidebar = new Sidebar(this)

    this.read()
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
      origin: { x: 0, y: 0 },
      action: this.advance
    })

    this.dialogue.setDepth(1)
  }

  addGroup = () => {
    return this.add.group({
      classType: Phaser.GameObjects.Image
    })
  }

  addPaper () {
    const height = 339
    const y = upY(height)
    const position = { x: 0, y }
    const size = { width: 3300, height }

    const paper = this.addRectangle({
      position,
      size,
      color: 0x2b3043,
      action: this.advance
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

      rectangle.on('pointerdown', action)
    }

    return rectangle
  }

  addText = ({
    content,
    position = ORIGIN,
    origin = { x: 0, y: 1 },
    options = {},
    action
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
      text.on('pointerdown', action)
    }

    return text
  }

  advance = () => {
    super.advance()

    console.log('this.save test:', this.save)
    this.save = this.save + 1

    this.registry.set(this.save, this.save)

    this.read()
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

  read () {
    const value = this.registry.get('save')
    if (value) this.save = value

    this.interaction = this
      .registry
      .get('interaction')

    const save = this.saves[this.save]

    console.log('save test:', save)

    if (save) {
      const {
        dialogue,
        speakerName,
        images,
        fullscreen
      } = save

      if (fullscreen) {
        console.log(
          'fullscreen test:', fullscreen
        )

        this.fullscreen = this.see({
          ...fullscreen,
          size: GAME_SIZE,
          origin: ORIGIN,
          depth: 2
        })

        this.input.on(
          'pointerup', this.advance
        )

        if (fullscreen.time) {
          this.timer = this
            .time
            .delayedCall(
              fullscreen.time,
              this.advance
            )
        }
      }

      this.setText(dialogue, speakerName)

      images?.forEach(this.see)
    }
  }

  setText = (dialogue, speakerName) => {
    this.dialogue.setText(dialogue)

    this.characterName.setText(speakerName)
  }
}

export default Room
