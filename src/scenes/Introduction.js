import Room from './Room'

class Introduction extends Room {
  constructor () {
    super('introduction', 0x000000)

    this.name = 'introduction'
  }

  setup = () => {
    this.saves = [
      {
        dialogue: 'So here’s the thing.'
      },
      {
        dialogue: 'Emma has been my best friend for as long as I can remember. We’ve known each other our whole lives - she’s the literal girl next door, and the kindest person I’ve ever met. You could mix sugar and honey together and pour it into a can of coke, and Emma would still be sweeter.'
      },
      {
        images: [{
          name: 'emma',
          position: { x: 1763, y: 510 },
          to: { x: 1773, y: 1626 },
          time: 5000
        }],
        dialogue: 'She’s funny, and smart, and hot as hell. Everyone who meets her falls in love with her...including me.'
      },
      {
        dialogue: 'Not that she’d ever notice. As far as I’m concerned, I’m just...Quinn. Best friend material, not boyfriend material.'
      },
      {
        dialogue: 'Sometimes I feel like I’m invisible to her. Like there’s nothing I could do that would ever let her see how crazy I am about her.'
      },
      {
        dialogue: 'Probably for the best. Someone as hot as her would never be interested in me. Not like that, y’know?'
      },
      {
        dialogue: 'This summer, we got an internship together. This tech company called Acuity. Emma wants to get into programming. Me? Honestly, I was just looking for an excuse to spend more time with her.'
      },
      {
        dialogue: 'She’s been super nervous about it. Freaking out that no one will like her, that she won’t fit in. I keep telling her that she’ll be fine. I’m sure everyone will love her. Everyone always does. But she’s weirdly nervous that there won’t be enough for her to do.'
      },
      {
        dialogue: 'I’m sure they’ll find some way to keep her busy.'
      },
      { 
        fullscreen: {
          name: 'logo-1', time: 400 
        }
      },
      { 
        fullscreen: {
          name: 'logo-2', time: 400
        }
      },
      {
        fullscreen: { name: 'logo-3' }
      }
    ]

    super.setup()
  }
}

export default Introduction
