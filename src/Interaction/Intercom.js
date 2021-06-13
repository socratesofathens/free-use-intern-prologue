import Interaction from './index'

class Intercom extends Interaction {
  constructor ({ scene }) {
    const first = [
      {
        name: 'intercom',
        title: 'intercom-front'
      },
      { name: 'emma-side', remove: true }
    ]

    const last = [
      {
        title: 'intercom-front',
        remove: true
      },
      {
        name: 'emma-side'
      }
    ]

    super({
      scene,
      first,
      last,
      name: 'intercom'
    })

    const base = this.setup([
      {
        speakerName: 'Quinn',
        dialogue: 'Uh, hello?'
      },
      {
        speakerName: 'Intercom',
        dialogue: "Who're you here to see?"
      },
      {
        speakerName: 'Quinn',
        dialogue: "Acuity. We're the new interns."
      },
      {
        speakerName: 'Intercom',
        dialogue: 'We?'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'Yes, me and my friend.'
      },
      {
        speakerName: 'Intercom',
        dialogue: "I don't see no friend."
      },
      {
        speakerName: 'Quinn',
        dialogue: 'Quinn and Emma. We should be on the list.'
      },
      {
        speakerName: 'Intercom',
        dialogue: '...'
      },
      {
        speakerName: 'Intercom',
        dialogue: 'The list says that there are two chicks starting at Acuity today.'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'Oh no, no. That must be a mistake.'
      },
      {
        speakerName: 'Intercom',
        dialogue: 'Says here, Quinn and Emma. No scrawny white dudes on the list.'
      },
      {
        speakerName: 'Quinn',
        dialogue: "No, this happens a lot. I'm Quinn. It's a guy's name too."
      },
      {
        speakerName: 'Intercom',
        dialogue: "Doesn't say it's a guy's name."
      },
      {
        speakerName: 'Quinn',
        dialogue: "Yeah, but it's my name. And I'm a guy."
      },
      {
        speakerName: 'Intercom',
        dialogue: "They don't pay me to let random guys into the building."
      },
      {
        speakerName: 'Quinn',
        dialogue: "Please, believe me. I'm here with my friend Emma..."
      },
      {
        speakerName: 'Intercom',
        dialogue: 'Weird name for a dude.'
      },
      {
        speakerName: 'Quinn',
        dialogue: "She's not a dude! Can I speak to your boss? I'm sure we can get this cleared up."
      },
      {
        speakerName: 'Intercom',
        dialogue: "Look, I'm paid to make sure the right people get into this building. List says two chicks, and you're one dude. Whaddya want me to do?"
      },
      {
        speakerName: 'Quinn',
        dialogue: '...'
      },
      {
        speakerName: 'Intercom',
        dialogue: 'Come back if you magically become a chick.'
      },
      {
        speakerName: 'Quinn',
        dialogue: '...sure. Thanks.'
      },
      {
        speakerName: 'Intercom',
        dialogue: 'No problem.'
      },
      { state: { intercom: 1 } }
    ])

    const intercom1 = this.setup([
      {
        speakerName: 'Quinn',
        dialogue: 'Uh, hi.'
      },
      {
        speakerName: 'Intercom',
        dialogue: 'Oh, it\'s you again. Did you magically become a chick?'
      },
      {
        speakerName: 'Quinn',
        dialogue: '...yes?'
      },
      {
        speakerName: 'Intercom',
        dialogue: 'Prove it. Show us your tits.'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'No!'
      },
      {
        speakerName: 'Intercom',
        dialogue: 'Unless you can prove that you\'re either a chick or have one with you, you ain\'t coming up.'
      }
    ])

    const camera = this.setup([
      {
        dialogue: 'Maybe if I take a photo of the intercom, I can show it TO the intercom, and convince it that I\'m also an intercom. It\'s sure to let me in then, right?'
      },
      {
        dialogue: 'Wait, no. That\'s stupid. Never mind.'
      }
    ])

    const selfie = this.setup([
      {
        dialogue: "I don't need to show the intercom a photo of myself. It can see me through the camera."
      }
    ])

    const email0 = this.setup([
      {
        dialogue: "You hold the email up to the camera, so they can see that you're meant to be here, but the doors don't open. Maybe you should try using the intercom."
      }
    ])

    const email1 = this.setup([
      {
        speakerName: 'Quinn',
        dialogue: "See! I'm meant to be here. I have the email and everything."
      },
      {
        speakerName: 'Intercom',
        dialogue: "How do I know that you didn't steal that email from the real girls? Maybe you're one of them cyber hackers."
      },
      {
        speakerName: 'Quinn',
        dialogue: "You think I hacked into someone's email account...so I could get into an unpaid internship?"
      },
      {
        speakerName: 'Intercom',
        dialogue: 'Yeah.'
      },
      {
        speakerName: 'Quinn',
        dialogue: "Well, I didn't!"
      },
      {
        speakerName: 'Intercom',
        dialogue: "Well, I ain't letting you in. Not until you prove to me that you've got a chick with you."
      },
      { state: { intercom: 2 } }
    ])

    const email2 = this.setup([
      {
        speakerName: 'Quinn',
        dialogue: 'Look, there are two options.'
      },
      {
        speakerName: 'Intercom',
        dialogue: 'Oh yeah?'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'Either I have the email because I\'m the intern who\'s meant to be here...'
      },
      {
        speakerName: 'Intercom',
        dialogue: 'Unlikely. List says two chicks.'
      },
      {
        speakerName: 'Quinn',
        dialogue: '...or I\'m a master hacker who stole the email.'
      },
      {
        speakerName: 'Intercom',
        dialogue: 'Yeah! You look the type.'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'And if it\'s the latter, do you really want to get on my bad side? I could hack into your phone, and share your pictures with the world...'
      },
      {
        speakerName: 'Intercom',
        dialogue: 'No!'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'Well then, you\'d better let us in, or all your friends will see your, um...'
      },
      {
        speakerName: 'Intercom',
        dialogue: '...collection of My Little Pony toys?'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'Exactly.'
      },
      {
        speakerName: 'Intercom',
        dialogue: 'Fine, master hacker. You win this round. Buzzing you up now.'
      },
      {
        scene: 'office'
      }
    ])

    const web0 = this.setup([
      {
        dialogue: "I quickly find the intercom's serial number and search for it on Cloo. It's an LT22-151212 model. Downloading a PDF version of the manual shows that it's fairly easy to use. All I have to do is press the button. Y'know, much like every other intercom ever."
      }
    ])

    const web1 = this.setup([
      {
        dialogue: 'I decide to see if Cloo can help me work out what to do next. "How to get past idiot security guard" doesn\'t yield any results.'
      },
      {
        dialogue: '"How to trick intercom" leads to an interesting forum discussion - apparently the camera on this particular model has a pretty low resolution.'
      },
      {
        dialogue: "I don't actually need to get Emma to the intercom...I just have to trick the camera into thinking that she's there."
      }
    ])

    const emma0 = this.setup([
      {
        dialogue: 'Maybe I should try talking to it first.'
      }
    ])

    const emma1 = this.setup([
      {
        dialogue: "I hold up the photo of Emma to the intercom, trying to fool it into thinking she's standing in front of the camera."
      },
      {
        speakerName: 'Intercom',
        dialogue: "Wow! Hallo, gorgeous. You must be one of the new Acuity interns! I'll buzz you right up."
      },
      {
        dialogue: "There's a loud buzzing sound, and the door opens."
      },
      {
        speakerName: 'Quinn',
        dialogue: 'Emma, I got us inside!'
      },
      {
        speakerName: 'Emma',
        dialogue: "Great work, Quinn! Let's go up and..."
      },
      {
        speakerName: 'Emma',
        dialogue: '-gulp-'
      },
      {
        speakerName: 'Emma',
        dialogue: '...meet our new workmates! Does my hair look okay?'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'You look great, Emma. Like always.'
      },
      {
        speakerName: 'Emma',
        dialogue: "Oh, Quinn. You're so sweet."
      },
      {
        dialogue: 'Sweet. Great. Is she ever going to see me as anything more than that?'
      },
      {
        scene: 'office'
      }
    ])

    this.points = {
      base,
      camera,
      selfie,
      email0,
      email1,
      email2,
      web0,
      web1,
      emma0,
      emma1,
      intercom1
    }
  }

  read (state) {
    super.read(state)

    const selected = this.select(state)

    const selection = selected[state.point]

    return selection
  }

  select (state) {
    const { intercom, selected } = state

    switch (selected) {
      case 'camera': {
        return this.points.camera
      }
      case 'selfie':
        return this.points.selfie
      case 'email': {
        if (intercom === 0) {
          return this.points.email0
        }

        if (intercom === 1) {
          return this.points.email1
        }

        return this.points.email2
      }
      case 'web':
        if (intercom === 0) {
          return this.points.web0
        }

        return this.points.web1
      case 'emma':
        if (intercom === 0) {
          return this.points.emma0
        }

        return this.points.emma1
    }

    if (intercom === 0) {
      return this.points.base
    }

    if (intercom > 0) {
      return this.points.intercom1
    }

    return []
  }
}

export default Intercom
