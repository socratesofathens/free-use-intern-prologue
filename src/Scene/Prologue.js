import Emma from '../Interaction/Emma'
import Intercom from '../Interaction/Intercom'

import Room from './Room'

class Prologue extends Room {
  constructor () {
    super('prologue', 0x000000)

    this.loadPngs([
      'blank',
      'doors',
      'emma-side',
      'emma-study',
      'emma-talk',
      'icon-power',
      'icon-power-selected',
      'icon-phone',
      'icon-phone-selected',
      'icon-email',
      'icon-email-selected',
      'icon-web',
      'icon-web-selected',
      'icon-camera',
      'icon-camera-selected',
      'icon-photos',
      'icon-photos-selected',
      'icon-home',
      'icon-home-selected',
      'icon-selfie',
      'icon-selfie-selected',
      'icon-emma',
      'icon-emma-selected',
      'intercom',
      'interface-logo',
      'item-phone',
      'phone',
      'pic-emma'
    ])
  }

  setup = () => {
    this.emma = new Emma({
      scene: this
    })
    this.intercom = new Intercom({
      scene: this
    })

    this.zones = [
      {
        name: 'intercom',
        left: { x: 2263, y: 950 },
        right: { x: 2600, y: 1220 },
        hover: 'Talk to Intercom'
      },
      {
        name: 'emmaction',
        left: { x: 534, y: 58 },
        right: { x: 1189, y: 1806 },
        hover: 'Talk to Emma'
      }
    ]

    this.saves = [
      {
        background: 'doors',
        images: [
          {
            name: 'emma-side'
          },
          {
            title: 'emma-animation',
            remove: true
          }
        ],
        dialogue: 'Somewhere in this huge building is Acuity, our workplace for the summer. The email said to be here by 9. We\'re running a little early, so all we need to do is get inside.',
        item: {
          name: 'phone',
          hover: 'Use phone'
        },
        state: {
          steve: 0,
          intercom: 0,
          take: false,
          emma: 0
        }
      },
      { dialogue: ' ' }
    ]

    super.setup()
  }
}

export default Prologue
