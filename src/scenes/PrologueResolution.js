import Room from './Room'

class Office extends Room {
  constructor () {
    super('prologue-resolution', 0x000000)

    this.loadPngs([
      'boss',
      'bosssex1',
      'bosssex2'
    ])

    this.assets.push({ name: 'office', type: 'jpg' })
  }

  setup = () => {
    this.saves = [
      {
        background: 'office',
        images: [
          {
            name: 'boss'
          }
        ],
        dialogue: 'Once we got inside the building, it wasn\'t hard to find our new workplace. We were told to go find the boss. He looked pleased to see Emma...and surprised to see me.'
      },
      {
        speakerName: 'Boss',
        dialogue: 'Well now. What have we got here?'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'Uh, hi. My name\'s Quinn, and this is...-'
      },
      {
        speakerName: 'Boss',
        dialogue: 'Wait. You\'re Quinn?'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'That\'s right.'
      },
      {
        speakerName: 'Boss',
        dialogue: 'I was expecting a woman.'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'Yeah. I get that a lot.'
      },
      {
        speakerName: 'Boss',
        dialogue: 'Huh. A male intern. How interesting.'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'Is there a problem, sir?'
      },
      {
        speakerName: 'Boss',
        dialogue: 'Hmm. What do you know about Acuity?'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'Uh...'
      },
      {
        speakerName: 'Emma',
        dialogue: 'Originally a Japanese company, Acuity quickly made its mark on the international market with a wide range of electronic products.'
      },
      {
        speakerName: 'Boss',
        dialogue: 'That\'s right, young lady. You must be Emma.'
      },
      {
        speakerName: 'Emma',
        dialogue: 'Yes, sir.'
      },
      {
        speakerName: 'Boss',
        dialogue: 'And what do you know about our free use policy?'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'Free...use?'
      },
      {
        speakerName: 'Boss',
        dialogue: 'At Acuity, female employees are able to be freely used for sexual relief by the rest of the staff. That\'s why we normally take on female interns.'
      },
      {
        dialogue: 'Wait, what?'
      },
      { dialogue: 'I can\'t have heard that right.' },
      { dialogue: 'That would mean that Emma...' },
      { dialogue: 'My eyes widened at the thought. My best friend, being freely used by the company\'s entire staff.' },
      { dialogue: 'Why did I find that idea so...exciting?' },
      {
        speakerName: 'Quinn',
        dialogue: 'Really?'
      },
      {
        speakerName: 'Boss',
        dialogue: 'It\'s really very simple. Emma, why don\'t you come over here and we\'ll demonstrate.'
      },
      {
        speakerName: 'Emma',
        dialogue: 'Uh...'
      },
      {
        dialogue: 'Emma looked at me, unsure what to do. But I...I had no idea what I wanted. So I just shrugged. Our new boss was looking at Emma expectantly, so she slowly made her way behind his desk.'
      },
      {
        dialogue: 'Why was she agreeing to this? She’s always been a people-pleaser, but...'
      },
      {
        dialogue: 'Oh, god. All these years I\'d been lusting after Emma; maybe all I\'d needed to do was...ask.'
      },
      {
        speakerName: 'Boss',
        dialogue: 'Ah, yes. Exactly what I was hoping. Yes, Emma, we\'re going to enjoy you.',
        images: [
          { title: 'boss', remove: true }
        ],
        animations: [
          {
            key: 'bosssex',
            duration: 650,
            real: {
              x: 1585, y: 1082
            },
            keys: ['bosssex1', 'bosssex2']
          }
        ]
      },
      {
        speakerName: 'Emma',
        dialogue: 'T-thank you, sir.'
      },
      {
        speakerName: 'Boss',
        dialogue: 'Now, Quintin...I\'m sorry to say, we don\'t really have much use for a male intern.'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'But...sir...'
      },
      {
        speakerName: 'Boss',
        dialogue: 'You can stick around for the rest of the day, but there\'s no need to come back tomorrow.'
      },
      {
        dialogue: 'Oh, no. All of a sudden, I could see my summer with Emma slipping away.'
      },
      {
        dialogue: 'I\'d be at home alone, while she was in the office...being used by all the Acuity employees.'
      },
      {
        speakerName: 'Boss',
        dialogue: 'But while you\'re here, grab me a coffee. See if anyone else wants anything, too. And hey - if you finish your tasks before the end of the day, you can have a turn with Emma as well.'
      },
      {
        dialogue: 'My eyes widened, and other parts of my body stood to attention as well.'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'R-Really, sir?'
      },
      {
        speakerName: 'Boss',
        dialogue: 'Of course, lad! After all, you work here too. Until the end of the workday, that is.'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'Thank you, sir. I\'ll be back with your coffee ASAP.'
      },
      {
        speakerName: 'Boss',
        dialogue: 'No need to rush. Isn\'t that right, Emma?'
      },
      {
        speakerName: 'Emma',
        dialogue: 'Y-yes, sir...'
      },
      {
        dialogue: 'I couldn\'t do anything but stare as my best friend got nailed by our new boss. And from what he\'d said...I could be the next to take her like that.'
      },
      {
        dialogue: "This might just be the best job I've ever had."
      },
      {
        scene: 'one'
      }
    ]

    super.setup()
  }
}

export default Office
