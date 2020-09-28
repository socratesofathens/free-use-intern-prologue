import Room from './Room'

class Introduction extends Room {
  constructor () {
    super('introduction', 0xaa11aa)

    this.name = 'Cyan Room'
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
      }
    ]

    super.setup()
  }
}

export default Introduction
