import { upY, realPosition, realSize, scaleX } from '../lib/game'
import lorem from '../lib/lorem'
import ORIGIN from '../lib/origin'

import Steve from '../Interaction/Steve'
import Emma from '../Interaction/Emma'
import Intercom from '../Interaction/Intercom'

import Phone from '../ui/Phone'
import Sidebar from '../ui/Sidebar'

import Scene from './Scene'

class Room extends Scene {
  constructor (name, color) {
    super(name, color)

    console.log('room name test:', name)

    this.speakerName = null
    this.content = null
    this.dialogue = null
    this.sidebar = null
    this.tool = null
    this.interaction = null
    this.interactions = {}
    this.OFFSET = 0.004545454545
  }

  addBook = () => {
    this.HEIGHT = 0.1540909091
    this.TOP = upY(this.HEIGHT)
    this.MARGIN = 0.01590909091

    this.addPaper()

    this.addSpeakerName()

    this.addDialogue()
  }

  addDialogue () {
    const topline = this.TOP + this.MARGIN
    const y = topline - this.OFFSET

    const WIDTH = 0.8361032984
    const width = scaleX(WIDTH)

    this.dialogue = this.addText({
      position: { x: this.MARGIN, y },
      content: lorem,
      options: {
        fontSize: '56.25247765pt',
        lineSpacing: 5,
        wordWrap: { width },
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
    const height = 0.1540909091
    const y = upY(height)
    const position = { x: 0, y }
    const size = { width: 0.8437739709, height }

    const paper = this.addRectangle({
      position,
      size,
      color: 0x2b3043
    })

    paper.setDepth(1)

    return paper
  }

  addPhoto = (photo) => {
    const { name } = photo
    const lower = name.toLowerCase()

    const { photos } = this.phone
    if (!photos[lower]) {
      const icon = photos.addIcon(photo)
      photos[icon.lower] = icon

      this
        .game
        .state
        .photos
        .push(photo)

      return icon
    } else {
      console
        .warn('Photo already added:', photo)
    }
  }

  addRectangle ({
    size,
    position,
    color,
    origin = ORIGIN,
    action
  }) {
    const { x, y } = realPosition(position)
    const { width, height } = realSize(size)
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

  addSpeakerName () {
    const y = upY(443.481)
    this.speakerName = this.addText({
      position: { x: this.MARGIN, y },
      content: 'Emma',
      origin: { x: 0, y: 0 },
      depth: 2
    })
  }

  addText = ({
    content,
    position = ORIGIN,
    origin = { x: 0, y: 1 },
    options = {},
    action,
    depth
  }) => {
    console.log('content test:', content)
    const base = {
      fontFamily: 'futura',
      fontSize: '67.50299835pt',
      color: 'black'
    }
    const merged = { ...base, ...options }

    const { x, y } = realPosition(position)
    console.log('y test:', y)
    const offset = y - this.OFFSET
    console.log('offeset test:', offset)
    const text = this.add.text(
      x, offset, content, merged
    )
    text.setOrigin(origin.x, origin.y)

    if (action) {
      text.setInteractive()

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

  loadState () {
    super.loadState()

    const { photos } = this.game.state
    photos
      .forEach(this.addPhoto)
  }

  openPhone () {
    this.setText('To celebrate the internship, I bought a brand new phone, an Acuity 556D.')

    this.phone.open()
  }

  render () {
    super.render()

    if (this.save) {
      console.log('this.save test:', this.save)
      const {
        dialogue,
        speakerName,
        photo,
        photos,
        open,
        apps,
        interaction,
        point
      } = this.save

      if (interaction) {
        console.log('this.interactions test:', this.interactions)
        const i = this
          .interactions[interaction]

        this.interact({
          interaction: i,
          point: point
        })
      }

      if (open) {
        this.phone.open()
      }

      if (dialogue || speakerName) {
        this
          .setText(dialogue, speakerName)
      }

      if (photo) {
        this.addPhoto(photo)
      }

      if (photos) {
        photos.forEach(this.addPhoto)
      }

      if (apps === false) {
        this.phone.openPhotos()
      }
    }
  }

  select (figure) {
    this.selected = figure

    return figure?.select()
  }

  setText = (dialogue, speakerName) => {
    this.dialogue.setText(dialogue)

    this
      .speakerName
      .setText(speakerName)

    this
      .game
      .state
      .dialogue = dialogue

    this
      .game
      .state
      .speakerName = speakerName
  }

  setup () {
    this.game.state.scene = this.name

    this.addBook()

    this.sidebar = new Sidebar(this)
    this.phone = new Phone(this)

    this.steve = new Steve({
      scene: this
    })
    this.emma = new Emma({
      scene: this
    })
    this.intercom = new Intercom({
      scene: this
    })

    super.setup()
  }

  use (figure, wet = true) {
    const { name, title } = figure
    console.log('name test:', name)
    super.use(name)

    const save = this.extract(1)
    if (save && !this.selecting) return save

    const { apps, photos } = this.phone

    const { state } = this.game

    switch (name) {
      case 'item-phone':
        return wet && this.openPhone()
      case 'icon-power':
        return wet && this.phone.close()
      case 'icon-phone': {
        if (wet) {
          this.phone.reset()

          state.steve ??= -1
          state.steve = state.steve + 1
        }

        return this.interact({
          interaction: this.steve, dry: !wet
        })
      }
      case 'icon-email':
        if (wet) {
          apps.email.select()

          return this.setText(
            'To look more professional, I made a new email address for internship applications. Goodbye, kingpin_quinn@hottmail.'
          )
        }
      case 'icon-web':
        if (wet) {
          apps.web.select()

          return this.setText(
            'I can look up pretty much anything on Cloo. It’s great for when I’m not sure what to do next.'
          )
        }
      case 'icon-camera':
        if (wet) {
          apps.camera.select()

          return this.setText(
            'This phone has a great high-res camera. I can’t wait to take some photos with it.'
          )
        }
      case 'icon-photos':
        if (wet) {
          this.phone.openPhotos()

          this.game.state.apps = false

          return this.setText(
            'My old phone had thousands of pics, but I couldn’t work out how to transfer them over.'
          )
        }
      case 'icon-home':
        if (wet) {
          this.game.state.apps = true

          return this.phone.openApps()
        }
      case 'icon-selfie':
        if (wet) {
          photos.selfie.select()

          return this.setText(
            'It’s-a me! I took a selfie to test my new camera.'
          )
        }
      case 'icon-emma':
        if (wet) {
          photos.emma.select()

          return this.setText(
            'My best friend, Emma. God she’s a hottie....'
          )
        }
      case 'emma': {
        console.log('title test:', title)
        const back = title === 'emma-back'

        return back && this.interact({
          interaction: this.emma, dry: !wet
        })
      }
      case 'blank': {
        console.log('blank test')
        return this.interact({
          interaction: this.intercom, dry: !wet
        })
      }
    }

    if (name.includes('-selected')) {
      this.game.state.selected = null

      this.phone.reset()
    }
  }

  validate () {
    const next = this.extract(1)
    console.log('validate next test:', next)

    const free = !this.selecting
    console.log('validate free test:', free)

    return !next && free
  }
}

export default Room
