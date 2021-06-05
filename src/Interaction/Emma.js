import Interaction from './index'

class Emma extends Interaction {
  constructor ({ scene }) {
    const first = [
      {
        title: 'emma-back', remove: true
      },
      {
        name: 'emma',
        position: { x: 0.4717463564, y: 0.6881818182 },
        title: 'emma-front'
      }
    ]

    const last = [
      {
        name: 'emma',
        scale: 0.7528,
        position: { x: 0.2267962158, y: 0.6190909091 },
        title: 'emma-back',
        hover: 'Talk to Emma'
      },
      {
        title: 'emma-front',
        remove: true
      }
    ]

    super({
      scene,
      first,
      last,
      name: 'emma'
    })

    const base = this.setup([
      {
        speakerName: 'Quinn',
        dialogue: "Man, can you believe we're here?"
      },
      {
        speakerName: 'Emma',
        dialogue: "I'm so nervous. What if I screw up and get us both fired?"
      },
      {
        speakerName: 'Quinn',
        dialogue: "That doesn't seem likely, Em."
      },
      {
        speakerName: 'Emma',
        dialogue: 'I\'m sure I\'ll feel better once I\'m upstairs.'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'Let me figure out how to get in.'
      }
    ])

    function addEmma (state) {
      state.emma = state.emma + 1

      return state
    }

    const emma1 = this.setup([
      {
        speakerName: 'Quinn',
        dialogue: 'Emma, I\'m not having any luck. Please, can you just talk to them?'
      },
      {
        speakerName: 'Emma',
        dialogue: 'Quinn, I really can\'t. I\'m too nervous.'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'Emma, c\'mon. C\'mon...'
      },
      {
        speakerName: 'Emma',
        dialogue: 'I\'m sorry, Quinn.'
      },
      { state: addEmma }
    ])

    const emma5 = this.setup([
      {
        speakerName: 'Quinn',
        dialogue: 'Emma, I\'m not having any luck. Please, can you just talk to them?'
      },
      {
        speakerName: 'Emma',
        dialogue: 'You really aren\'t getting anywhere?'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'I can\'t work out what to do.'
      },
      {
        speakerName: 'Emma',
        dialogue: 'Did you try using Cloo? I find it helps me out whenever I get stuck.'
      },
      { state: addEmma }
    ])

    const emma6 = this.setup([
      {
        speakerName: 'Quinn',
        dialogue: 'Emma, I\'m not having any luck. Please, can you just talk to them?'
      },
      {
        speakerName: 'Emma',
        dialogue: 'You really aren\'t getting anywhere?'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'Please, Emma. I need your help.'
      },
      {
        speakerName: 'Emma',
        dialogue: '...okay.'
      },
      {
        dialogue: 'That\'s the thing about my best friend: she can\'t say no.'
      },
      {
        dialogue: 'To anyone.'
      },
      {
        speakerName: 'Emma',
        dialogue: 'Uh, hello?'
      },
      {
        speakerName: 'Intercom',
        dialogue: 'Hubba hubba! Are you one of the new interns?'
      },
      {
        speakerName: 'Emma',
        dialogue: 'Yeah...'
      },
      {
        speakerName: 'Intercom',
        dialogue: 'If you\'re gonna be coming by every day, we might need to upgrade the camera gear. Didja come alone?'
      },
      {
        speakerName: 'Emma',
        dialogue: 'I\'m here with my best friend, Quinn.'
      },
      {
        dialogue: 'Is that all I\'ll ever be to her? Just a friend?'
      },
      {
        speakerName: 'Intercom',
        dialogue: 'And just to be clear: Quinn ain\'t a chick?'
      },
      {
        speakerName: 'Emma',
        dialogue: 'That\'s right.'
      },
      {
        speakerName: 'Intercom',
        dialogue: 'Cos my list says two chicks.'
      },
      {
        speakerName: 'Emma',
        dialogue: 'I promise, he\'s not a chick.'
      },
      {
        dialogue: 'Oh, good. So she HAS noticed.'
      },
      {
        speakerName: 'Intercom',
        dialogue: 'Mmmm, well. I\'m going to let you up. But only cos you\'re hot enough for two.'
      },
      {
        speakerName: 'Emma',
        dialogue: 'Oh! Um...thanks?'
      },
      {
        speakerName: 'Intercom',
        dialogue: 'Come on up.'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'Thanks, Emma.'
      },
      {
        scene: 'office'
      }
    ])

    const intercom = this.setup([
      {
        speakerName: 'Quinn',
        dialogue: 'Okay, slight problem...'
      },
      {
        speakerName: 'Emma',
        dialogue: 'Oh, no.'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'Yeah, they were expecting a woman. Because of my name.'
      },
      {
        speakerName: 'Emma',
        dialogue: 'Oh no...'
      },
      {
        speakerName: 'Quinn',
        dialogue: "So can you go talk to them? Show them that I'm not just some random guy?"
      },
      {
        speakerName: 'Emma',
        dialogue: "I don't know...I'm sort of freaking out."
      },
      {
        speakerName: 'Quinn',
        dialogue: "Emma, if you don't help, they won't let us in."
      },
      {
        speakerName: 'Emma',
        dialogue: "I'm sorry, Quinn, I can't. I'm too nervous. Can you sort it out? Pretty please?"
      },
      {
        speakerName: 'Quinn',
        dialogue: '...'
      },
      {
        speakerName: 'Emma',
        dialogue: 'For me?'
      },
      {
        speakerName: 'Quinn',
        dialogue: '-sigh- I\'ll see what I can do.'
      },
      {
        dialogue: 'The things we do for hot best friends.'
      },
      { state: { emma: 1 } }
    ])

    const untaken = this.setup([
      {
        images: [
          { name: 'pic-emma', depth: 2 }
        ],
        dialogue: "I pull out my phone and take a snap of Emma. God she's a hottie. My old phone had a thousand photos of her...they've all been safely backed up on my computer. I use them a lot when I'm alone at night.",
        photo: {
          name: 'Emma',
          hover: 'Select photo of Emma'
        }
      },
      {
        dialogue: 'Looks like this will be the first of my new collection.'
      },
      {
        dialogue: 'Quinn, stop it! You know how much I hate having my photo taken. Ugh, I bet I look like a total mess.',
        speakerName: 'Emma',
        images: [{
          name: 'pic-emma', remove: true
        }]
      },
      { state: { taken: true } }
    ])

    const taken = this.setup([
      {
        dialogue: "Noooo! Seriously, I'm already freaking out enough today. Please?",
        speakerName: 'Emma'
      },
      {
        dialogue: "I put my phone away. I just can't say no to that face. To those lips..."
      }
    ])

    const selfie = this.setup([{
      speakerName: 'Emma',
      dialogue: "Oh hey, that's a great pic of you! You're such a cutie - you're going to make some woman very happy someday."
    }])

    const emma = this.setup([{
      speakerName: 'Emma',
      dialogue: 'Nooooo...you should delete that! I look so gross.'
    }])

    const email = this.setup([{
      speakerName: 'Emma',
      dialogue: "Looks like this is definitely the right place. I'm so nervous!"
    }])

    const web = this.setup([{
      dialogue: "Looking Emma up on Cloo doesn't yield much. She prefers to stay out of the limelight."
    }])

    this.points = {
      base,
      intercom,
      untaken,
      taken,
      selfie,
      emma,
      email,
      web,
      emma1,
      emma5,
      emma6
    }
  }

  read (state) {
    super.read(state)

    const selected = this.select(state)

    const chosen = selected[state.point]

    return chosen
  }

  select (state) {
    const {
      intercom,
      taken,
      selected,
      emma
    } = state

    switch (selected) {
      case 'camera': {
        if (taken) {
          return this.points.taken
        }

        return this.points.untaken
      }
      case 'selfie':
        return this.points.selfie
      case 'emma':
        return this.points.emma
      case 'web':
        return this.points.web
      case 'email':
        return this.points.email
    }

    if (emma > 0 && emma < 5) {
      return this.points.emma1
    }

    if (emma === 5) {
      return this.points.emma5
    }

    if (emma === 6) {
      return this.points.emma6
    }

    if (intercom === 1) {
      return this.points.intercom
    }

    return this.points.base
  }
}

export default Emma
