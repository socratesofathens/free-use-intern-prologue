import {
  upY, realPosition, realSize, scaleX
} from '../lib/game'
import lorem from '../lib/lorem'
import ORIGIN from '../lib/origin'

import Steve from '../Interaction/Steve'

import Phone from '../ui/Phone'
import Sidebar from '../ui/Sidebar'

import Scene from './Scene'

class Room extends Scene {
  constructor (name, color) {
    super(name, color)

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

    const WIDTH = 0.8361032984 - this.OFFSET
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
    const y = this.TOP - 0.055
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
    const base = {
      fontFamily: 'futura',
      fontSize: '67.50299835pt',
      color: 'black'
    }
    const merged = { ...base, ...options }

    const { x, y } = realPosition(position)
    const offset = y - this.OFFSET
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

    if (!this.game.state.open) {
      this.phone.close()
    }

    this.sidebar.panther.setColor('black')
  }

  openPhone () {
    this.saveText('To celebrate the internship, I bought a brand new phone, an Acuity 556D.')

    this.phone.open(true)
  }

  render () {
    super.render()

    if (this.save) {
      const {
        dialogue,
        speakerName,
        photo,
        photos,
        open,
        apps,
        interaction,
        point,
        final
      } = this.save

      const isZero = interaction === 0

      if (isZero) {
        this.reset()
      } else if (interaction) {
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

      if (apps === false && open) {
        this.phone.openPhotos()
      }

      if (final) {
        this.sidebar.panther.setColor('red')
      }
    }
  }

  select (figure) {
    this.selected = figure

    return figure?.select()
  }

  saveText (dialogue) {
    this.setText(dialogue)

    this.was = dialogue
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

    super.setup()
  }

  use (figure, wet = true) {
    const { name, title } = figure
    super.use(name)

    const save = this.extract(1)
    if (save && !this.selecting) return save

    const { apps, photos } = this.phone

    const { state } = this.game

    switch (name) {
      case 'item-phone':
        if (wet) {
          this.saveText('To celebrate the internship, I bought a brand new phone, an Acuity 556D.')

          return this.openPhone()
        }

        return 'dry'
      case 'icon-power':
        return wet ? this.phone.close() : 'dry'
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

          return this.saveText(
            'To look more professional, I made a new email address for internship applications. Goodbye, kingpin_quinn@hottmail.'
          )
        }

        return 'dry'
      case 'icon-web':
        if (wet) {
          apps.web.select()

          return this.saveText(
            "I can look up pretty much anything on Cloo. It's great for when I'm not sure what to do next."
          )
        }

        return 'dry'
      case 'icon-camera':
        if (wet) {
          apps.camera.select()

          return this.saveText(
            "This phone has a great high-res camera. I can't wait to take some photos with it."
          )
        }

        return 'dry'
      case 'icon-photos':
        if (wet) {
          this.phone.openPhotos()

          this.game.state.apps = false

          return this.saveText(
            "My old phone had thousands of pics, but I couldn't work out how to transfer them over."
          )
        }

        return 'dry'
      case 'icon-home':
        if (wet) {
          this.game.state.apps = true

          return this.phone.openApps()
        }

        return 'dry'
      case 'icon-selfie':
        if (wet) {
          photos.selfie.select()

          return this.saveText(
            "It's-a me! I took a selfie to test my new camera."
          )
        }

        return 'dry'
      case 'icon-emma':
        if (wet) {
          photos.emma.select()

          return this.saveText(
            "My best friend, Emma. God she's a hottie...."
          )
        }

        return 'dry'
      case 'emma': {
        const back = title === 'emma-back'

        return back && this.interact({
          interaction: this.emma, dry: !wet
        })
      }
      case 'blank': {
        return this.interact({
          interaction: this.intercom, dry: !wet
        })
      }
    }

    if (wet && name.includes('-selected')) {
      this.game.state.selected = null

      this.phone.reset()
    }
  }

  validate (pass) {
    const next = this.extract(1)
    const not = !next

    const free = pass || !this.selecting

    const valid = not && free

    return valid
  }
}

export default Room
