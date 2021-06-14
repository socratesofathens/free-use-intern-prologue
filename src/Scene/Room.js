import {
  upY, realPosition, realSize, scaleX
} from '../lib/game'
import lorem from '../lib/lorem'
import ORIGIN from '../lib/origin'

import Steve from '../Interaction/Steve'

import Phone from '../ui/Phone'
import Sidebar from '../ui/Sidebar'

import Scene from './index'

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

    if (!this.game.state.photos.includes(photo)) {
      this.game.state.photos.push(photo)
    } else {
      console.warn('State already has photo', photo)
    }

    const { photos } = this.phone
    if (!photos[lower]) {
      const icon = photos.addIcon(photo)
      photos[icon.lower] = icon

      return icon
    } else {
      console
        .warn('Phone already has photo:', photo)
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
    const color = this.contrast ? 'white' : 'black'
    this.speakerName = this.addText({
      position: { x: this.MARGIN, y },
      content: 'Emma',
      origin: { x: 0, y: 0 },
      depth: 2,
      options: { color }
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

  advance () {
    this.setText(' ')

    super.advance()
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
        this.setText(dialogue, speakerName)
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
    const name = '[name]'
    const names = [
      name,
      'Quib',
      'Queasy',
      'Quesadilla',
      'Quasimodo',
      'Quidditch',
      'Qwerty',
      'Queen’s Gambit',
      'Quarantine Daze',
      'Quest For Glory V: Dragon Fire'
    ]
    const bossChat = this.game.state['boss-chat']
    const nameValue = names[bossChat]

    const named = dialogue.replaceAll(name, nameValue)

    const description = '[description]'
    const descriptions = [
      description,
      'It has a drawing of what looks like two lions fighting over a shield.',
      'It looks like it has that guy from The Hangover on it. Not that guy, the other one. No, the other other one.',
      'It has a piece of art on it: it looks like someone tried to draw a dog’s face but got lost along the way.',
      'It has a dude on it. Looks like a grizzled French war veteran.',
      'It has blue cotton candy on it. Weird.',
      'It looks like it has some kind of robot donut on it. Electro-yum.',
      'It’s got a kid on it.',
      'It has a flea on it, for some reason.',
      'It looks like it’s gone through the dishwasher too many times and the smiley face on it melted.',
      'It has a logo on it, looks like it’s from a kid’s film.',
      'It looks like a promotional mug from a tropical resort.'
    ]
    const bossDescription = '[boss-description]'
    const bossDescriptions = [
      bossDescription,
      'the Amsterdam one',
      'With my old acapella buddy’s face on it.',
      'With the beautiful foreign land. I’d love to visit someday.',
      'The Metal Gear Solid one.',
      'With the beard.',
      'The Halo one.',
      'The Limbo one.',
      'With the silt strider!',
      'The Oddworld one.',
      'The Snow Daze one. Such a well-written game.',
      'The Summertime Saga one. Don’t tell anyone, but Roz is my favorite.'
    ]

    const { mug } = this.game.state
    const descriptionValue = descriptions[mug]
    const bossDescriptionValue = bossDescriptions[mug]
    const described = named
      .replaceAll(description, descriptionValue)
    const bossDescribed = described
      .replaceAll(bossDescription, bossDescriptionValue)

    this.dialogue.setText(bossDescribed)

    this
      .speakerName
      .setText(speakerName)

    this
      .game
      .state
      .dialogue = named

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

    this.zones?.forEach(zone => {
      this.spot(zone)
    })
  }

  use (figure, wet = true) {
    const { name } = figure
    super.use(name)

    const save = this.extract(1)
    if (save && !this.selecting) return save

    const { apps, photos } = this.phone

    switch (name) {
      case 'leave-mugs': {
        return this.interact({
          interaction: this.leaveMugs, dry: !wet
        })
      }
      case 'salesman': {
        return this.interact({
          interaction: this.salesman, dry: !wet
        })
      }
      case 'leave-supply-closet': {
        return this.interact({
          interaction: this.leaveSupplyCloset, dry: !wet
        })
      }
      case 'fridge': {
        return this.interact({
          interaction: this.fridge, dry: !wet
        })
      }
      case 'sugar': {
        return this.interact({
          interaction: this.sugar, dry: !wet
        })
      }
      case 'coffee-machine': {
        return this.interact({
          interaction: this.coffeeMachine, dry: !wet
        })
      }
      case 'mugs': {
        return this.interact({
          interaction: this.mugs, dry: !wet
        })
      }
      case 'it-guy': {
        return this.interact({
          interaction: this.itGuy, dry: !wet
        })
      }
      case 'leave-kitchenette': {
        return this.interact({
          interaction: this.leaveKitchenette, dry: !wet
        })
      }
      case 'picture': {
        return this.interact({
          interaction: this.picture, dry: !wet
        })
      }
      case 'supply-closet-door': {
        return this.interact({
          interaction: this.supplyClosetDoor, dry: !wet
        })
      }
      case 'kitchenette-door': {
        return this.interact({
          interaction: this.kitchenetteDoor, dry: !wet
        })
      }
      case 'office-door': {
        return this.interact({
          interaction: this.officeDoor, dry: !wet
        })
      }

      case 'cradle-under': {
        return this.interact({
          interaction: this.cradleUnder, dry: !wet
        })
      }
      case 'upskirt': {
        return this.interact({
          interaction: this.upskirt, dry: !wet
        })
      }
      case 'leave-office': {
        return this.interact({
          interaction: this.leaveOffice, dry: !wet
        })
      }
      case 'cradle': {
        return this.interact({
          interaction: this.cradle, dry: !wet
        })
      }
      case 'bossemma':
        return this.interact({
          interaction: this.bossemma, dry: !wet
        })
      case 'item-teabag':
        if (wet) {
          this.game.state.selected = 'teabag'
          this.game.state.selecting = true
          return this.saveText('Tea contains several stimulants including caffeine, theobromine, theophylline and L-theanine.')
        }
        return 'dry'
      case 'item-panties':
        if (wet) {
          this.game.state.selected = 'panties'
          this.game.state.selecting = true
          return this.saveText('Still warm.')
        }
        return 'dry'
      case 'item-phone':
        if (wet) {
          return this.openPhone()
        }

        return 'dry'
      case 'icon-power':
        return wet ? this.phone.close() : 'dry'
      case 'icon-phone': {
        if (wet) {
          this.phone.reset()
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
      case 'icon-fucking':
        if (wet) {
          photos.fucking.select()

          return this.saveText('Emma and the boss fucking.')
        }

        return 'dry'
      case 'icon-upskirt':
        if (wet) {
          photos.upskirt.select()

          return this.saveText('Those stockings are going right in the trash.')
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
      case 'emmaction': {
        return this.interact({
          interaction: this.emma, dry: !wet
        })
      }
      case 'intercom': {
        return this.interact({
          interaction: this.intercom, dry: !wet
        })
      }
    }

    if (name.includes('mug')) {
      if (name.includes('item')) {
        if (wet) {
          this.game.state.selected = 'mug'
          this.game.state.selecting = true

          return this.saveText('[description]')
        }

        return 'dry'
      }

      const mug = this.mugs[name]

      return this.interact({
        interaction: mug, dry: !wet
      })
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
