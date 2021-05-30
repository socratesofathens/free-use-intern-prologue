import ORIGIN from '../lib/origin'

import Room from './Room'

class Introduction extends Room {
  constructor () {
    super('introduction', 0x000000)

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
      'logo-1',
      'logo-2',
      'logo-3',
      'phone',
      'pic-emma'
    ])
  }

  setup = () => {
    this.saves = [
      {
        dialogue: 'So here\'s the thing.',
        photo: {
          name: 'Selfie',
          hover: 'Select selfie'
        }
      },
      {
        dialogue: 'Emma has been my best friend for as long as I can remember. We\'ve known each other our whole lives - she\'s the literal girl next door, and the kindest person I\'ve ever met. If you mixed sugar and honey together and poured it into a can of coke, Emma would still be sweeter.'
      },
      {
        images: [{
          name: 'emma',
          position: { x: 0.4507798517, y: 0.2318181818 },
          to: { x: 0.4507798517, y: 0.7390909091 },
          time: 5000,
          title: 'emma-animation'
        }],
        dialogue: 'She\'s funny, and smart, and hot as hell. Everyone who meets her falls in love...including me.'
      },
      {
        dialogue: 'Not that she\'d ever notice. As far as she\'s concerned, I\'m just...Quinn. Her best friend. Not boyfriend material.'
      },
      {
        dialogue: 'Sometimes I feel like I\'m invisible to her. Like there\'s nothing I could do that would ever let her see how crazy I am about her.'
      },
      {
        dialogue: 'Probably for the best. Someone as hot as her would never be interested in me. Not like that, y\'know?'
      },
      {
        dialogue: 'This summer, we got an internship together. This tech company, Acuity. Emma wants to get into programming...and, well, I wanted to get into Emma. '
      },
      {
        dialogue: 'I figured if we spent the whole summer together, working side-by-side...maybe she\'d finally notice me. See me as more than a friend.'
      },
      {
        dialogue: 'A man can dream, right?'
      },
      {
        dialogue: 'Emma\'s been so nervous about the job. Freaking out that no one will like her, that she won\'t fit in. I keep telling her that she\'ll be fine, that everyone will love her. Everyone always does. But she\'s weirdly nervous that there won\'t be enough for her to do.'
      },
      {
        dialogue: 'I\'m sure they\'ll find some way to keep her busy.'
      },
      {
        fullscreen: {
          name: 'logo-1', time: 800
        }
      },
      {
        fullscreen: {
          name: 'logo-2', time: 800
        }
      },
      {
        fullscreen: { name: 'logo-3' }
      },
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
        }
      },
      { dialogue: ' ' }
    ]

    super.setup()
  }
}

export default Introduction
