import ORIGIN from '../lib/origin'

import Emma from '../Interaction/Emma'
import Intercom from '../Interaction/Intercom'

import Room from './Room'

class Prologue extends Room {
  constructor () {
    super('prologue', 0x000000)

    this.loadPngs([
      'blank',
      'doors',
      'emma',
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

    this.saves = [
      {
        background: 'doors',
        images: [
          {
            name: 'blank',
            position: { x: 0.5786243927, y: 0.4318181818 },
            size: { width: 0.08616722066, height: 0.1227272727 },
            origin: ORIGIN,
            hover: 'Talk to Intercom',
            title: 'intercom-back'
          },
          {
            name: 'emma',
            scale: 0.7528,
            position: { x: 0.2267962158, y: 0.6190909091 },
            title: 'emma-back',
            hover: 'Talk to Emma'
          },
          {
            title: 'emma-animation',
            remove: true
          }
        ],
        dialogue: 'Somewhere in this huge building is Acuity, our workplace for the summer. The email said to be here by 9. We\'re running a little early, so all we need to do is get inside.',
        item: {
          name: 'phone',
          position: { x: 0.940935822, y: 0.1413636364 },
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
