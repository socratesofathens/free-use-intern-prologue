import Room from './Room'

class Office extends Room {
  constructor () {
    super('office', 0x000000)
  }

  setup = () => {
    this.saves = [
      {
        background: 'office',
        images: [
          {
            name: 'boss',
            position: { x: 0.4507798517, y: 0.5131818182 }
          }
        ],
        dialogue: 'Once we got inside the building, it wasn\'t hard to find our new workplace. We were told to go find the boss, who looked pretty pleased to see Emma...and surprised to see me.'
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
        dialogue: 'I was expecting a woman. Like your friend here.'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'Yeah. I get that a lot.'
      },
      {
        speakerName: 'Boss',
        dialogue: 'Huh. A male intern.'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'Is there a problem, sir?'
      },
      {
        speakerName: 'Boss',
        dialogue: 'No, no. What do you know about Acuity?'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'Uh...'
      },
      {
        speakerName: 'Emma',
        dialogue: 'Originally a Japanese company, Acuity quickly made its mark on the international market with its wide range of electronic products.'
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
        dialogue: 'And do you know about our free use policy?'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'Free...use?'
      },
      {
        speakerName: 'Boss',
        dialogue: 'That\'s right. Female employees are able to be freely used for sexual relief by the rest of the staff. That\'s why we normally take on female interns.'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'Really?'
      },
      {
        speakerName: 'Boss',
        dialogue: 'Emma, why don\'t you come over here and we\'ll demonstrate.'
      },
      {
        speakerName: 'Emma',
        dialogue: 'Uh...'
      },
      {
        dialogue: 'Emma looked at me, unsure what to do, and I just shrugged. Our new boss was looking at her expectantly, so she slowly made her way behind his desk.'
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
            position: {
              x: 0.4507798517, y: 0.4831818182
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
        dialogue: 'Now, Quinn...I\'m not sure if there\'s really going to be much for you to do. I\'ll tell you what, why don\'t you run along and get me a coffee?'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'Uh, yes sir.'
      },
      {
        speakerName: 'Boss',
        dialogue: 'See if anyone else wants anything, too. And hey - once you\'re done with your tasks, you can have a turn with Emma here.'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'Really, sir?'
      },
      {
        speakerName: 'Boss',
        dialogue: 'Of course, lad! After all, you work here too.'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'Thank you, sir. I\'ll be back with your coffee shortly.'
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
        dialogue: 'Free Use Intern will continue in Chapter 1: Hot Coffee.'
      },
      {
        dialogue: 'To show your support, help us, get the next chapter out as quickly as possible, and let Quinn start using his friend, visit patreon.com/pan '
      },
      {
        dialogue: 'Patrons get previews of upcoming art, early access to new releases, and votes on what content is included in the game.'
      },
      { dialogue: ' ' }
    ]

    super.setup()
  }
}

export default Office
