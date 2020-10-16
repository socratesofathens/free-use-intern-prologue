import Interaction from './index'

class Intercom extends Interaction {
  constructor ({ scene }) {
    const first = [
      {
        name: 'intercom',
        position: { x: 1763, y: 993 }
      }
    ]

    const last = [
      {
        title: 'intercom',
        remove: true
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
        dialogue: 'Who’re you here to see?'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'Acuity. We’re the new interns.'
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
        dialogue: 'I don’t see no friend.'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'Quinn and Emma. We should be on the list.'
      },
      {
        speakerName: 'Intercom',
        dialogue: '…'
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
        dialogue: 'No, this happens a lot. I’m Quinn. It’s a guy’s name too.'
      },
      {
        speakerName: 'Intercom',
        dialogue: 'Doesn’t say it’s a guy’s name.'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'Yeah, but it’s my name. And I’m a guy.'
      },
      {
        speakerName: 'Intercom',
        dialogue: 'They don’t pay me to trust random guys.'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'Please, believe me. I’m here with my friend Emma...'
      },
      {
        speakerName: 'Intercom',
        dialogue: 'Weird name for a dude.'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'She’s not a dude! Can I speak to your boss? I’m sure we can get this cleared up.'
      },
      {
        speakerName: 'Intercom',
        dialogue: 'Look, I’m paid to make sure the right people get into this building. List says two chicks, and you’re one dude. Whaddya want me to do?'
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
      { state: { intercom: true } }
    ])

    const camera = this.setup([
      {
        dialogue: 'The intercom has a camera to show the security guard who they’re talking to. Using my camera on the intercom won’t show me who I’m talking to. It doesn’t work like that.'
      }
    ])

    const selfie = this.setup([
      {
        dialogue: 'I don’t need to show the intercom a photo of myself. It can see me through the camera.'
      }
    ])

    const email = this.setup([
      {
        dialogue: 'You hold the email up to the camera, so they can see that you’re meant to be here, but the doors don’t open. Maybe you should try using the intercom.'
      }
    ])

    const emailed = this.setup([
      {
        speakerName: 'Quinn',
        dialogue: 'See! I’m meant to be here. I have the email and everything.'
      },
      {
        speakerName: 'Intercom',
        dialogue: 'How do I know that you didn’t steal that email from the real girls? Maybe you’re one of them cyber hackers.'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'You think I hacked into someone’s email account...so I could get into an unpaid internship?'
      },
      {
        speakerName: 'Intercom',
        dialogue: 'Yeah.'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'Well, I didn’t!'
      },
      {
        speakerName: 'Intercom',
        dialogue: 'Well, I ain’t letting you in. Not until you prove to me that you’ve got a chick with you.'
      }
    ])

    const web = this.setup([
      {
        dialogue: 'I quickly find the intercom’s serial number and search for it on Cloo. It’s an LT22-151212 model. Downloading a PDF version of the manual shows that it’s fairly easy to use. All I have to do is press the button. Y’know, much like every other intercom ever.'
      }
    ])

    const webbed = this.setup([
      {
        dialogue: 'I decide to see if Cloo can help me work out what to do next. “How to get past idiot security guard” doesn’t yield any results. '
      },
      {
        dialogue: '“How to trick intercom” leads to an interesting forum discussion - apparently the camera on this particular model has a pretty low resolution. '
      },
      {
        dialogue: 'I don’t need to get Emma to the intercom...I just have to trick the camera into thinking that she’s there.'
      }
    ])

    const emma = this.setup([
      {
        dialogue: 'Maybe I should try talking to it first.'
      }
    ])

    const emmaed = this.setup([
      {
        dialogue: 'I hold up the photo of Emma to the intercom, trying to fool it into thinking she’s standing in front of the camera.'
      },
      {
        speakerName: 'Intercom',
        dialogue: 'Wow! Hallo, gorgeous. You must be one of the new Acuity interns! I’ll buzz you right up.'
      },
      {
        dialogue: 'There’s a loud buzzing sound, and the door opens.'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'Emma, I got us inside!'
      },
      {
        speakerName: 'Emma',
        dialogue: 'Great work, Quinn! Let’s go up and…'
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
        dialogue: 'Oh, Quinn. You’re so sweet.'
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
      email,
      emailed,
      web,
      webbed,
      emma,
      emmaed
    }
  }

  read (state) {
    super.read(state)

    const selected = this.select(state)

    console.log('selected test:', selected)

    console.log('state.point test:', state.point)

    const selection = selected[state.point]

    console.log('selection test:', selection)

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
        if (intercom) {
          return this.points.emailed
        }

        return this.points.email
      }
      case 'web':
        if (intercom) {
          return this.points.webbed
        }

        return this.points.web
      case 'emma':
        if (intercom) {
          return this.points.emmaed
        }

        return this.points.emma
    }

    if (!intercom) {
      return this.points.base
    }

    return []
  }
}

export default Intercom
