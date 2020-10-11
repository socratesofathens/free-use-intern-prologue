import Interaction from './index'

class Emma extends Interaction {
  constructor ({ scene }) {
    const first = [
      {
        title: 'emma-back', remove: true
      },
      {
        name: 'emma',
        position: { x: 1845, y: 1514 },
        title: 'emma-front'
      }
    ]

    const last = [
      {
        name: 'emma',
        scale: 0.7528,
        position: { x: 887, y: 1362 },
        title: 'emma-back'
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
        dialogue: 'Man, can you believe we’re here?'
      },
      {
        speakerName: 'Emma',
        dialogue: 'I’m so nervous. What if I screw up and get us both fired?'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'That doesn’t seem likely, Em.'
      },
      {
        speakerName: 'Emma',
        dialogue: 'Can you work out how to get into the office? I’m sure I’ll feel better once I’m upstairs.'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'Yeah, I’m sure I can figure it out.'
      }
    ])

    const intercom = this.setup([
      {
        speakerName: 'Quinn',
        dialogue: 'Okay, slight problem…'
      },
      {
        speakerName: 'Emma',
        dialogue: 'Oh, no. '
      },
      {
        speakerName: 'Quinn',
        dialogue: 'Yeah, they were expecting a woman. Because of my name.'
      },
      {
        speakerName: 'Emma',
        dialogue: 'Oh no…'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'So can you go talk to them? Show them that I’m not just some random guy?'
      },
      {
        speakerName: 'Emma',
        dialogue: 'I don’t know...I’m sort of freaking out.'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'Emma, if you don’t help, they won’t let us in.'
      },
      {
        speakerName: 'Emma',
        dialogue: 'I’m sorry, Quinn, I can’t. I’m too nervous. Can you sort it out? Pretty please?'
      },
      {
        speakerName: 'Quinn',
        dialogue: '…'
      },
      {
        speakerName: 'Emma',
        dialogue: 'For me?'
      },
      {
        speakerName: 'Quinn',
        dialogue: '(sigh) I’ll see what I can do.'
      },
      {
        dialogue: 'The things we do for hot best friends.'
      }
    ])

    const untaken = this.setup([
      {
        images: [
          { name: 'pic-emma', depth: 2 }
        ],
        dialogue: 'I pull out my phone and take a snap of Emma. God she’s a hottie. My old phone had a thousand photos of her...they’ve all been safely backed up on my computer. I use them a lot when I’m alone at night.',
        photo: 'Emma'
      },
      {
        dialogue: 'Looks like this will be the first of my new collection.'
      },
      {
        dialogue: 'Quinn, stop it! You know how much I hate having my photo taken. Ugh, I bet I look like a total mess.',
        speakerName: 'Emma',
        state: { taken: true },
        images: [{
          name: 'pic-emma', remove: true
        }]
      }
    ])

    const taken = this.setup([
      {
        dialogue: 'Noooo! Seriously, I’m already freaking out enough today. Don’t take my picture again. Please?',
        speakerName: 'Emma'
      },
      {
        dialogue: 'I put my phone away. I just can’t say no to that face. To those lips...'
      }
    ])

    const selfie = this.setup([{
      speakerName: 'Emma',
      dialogue: 'Oh hey, that’s a great pic of you! You’re such a cutie - you’re going to make some woman very happy someday.'
    }])

    const emma = this.setup([{
      speakerName: 'Emma',
      dialogue: 'Nooooo...you should delete that! I look so gross.'
    }])

    const email = this.setup([{
      speakerName: 'Emma',
      dialogue: 'Yeah, this is definitely the right place. I’m so nervous!'
    }])

    const web = this.setup([{
      dialogue: 'Looking Emma up on Cloo doesn’t yield much. She prefers to stay out of the limelight.'
    }])

    this.points = {
      base,
      intercom,
      untaken,
      taken,
      selfie,
      emma,
      email,
      web
    }
  }

  read (state) {
    super.read(state)

    const selected = this.select(state)

    return selected[state.point]
  }

  select (state) {
    const {
      intercom,
      taken,
      selected
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

    if (intercom) {
      return this.points.intercom
    }

    return this.points.base
  }
}

export default Emma
