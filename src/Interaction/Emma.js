import Interaction from './index'

class Emma extends Interaction {
  constructor ({ scene }) {
    const base = [
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
    ]

    const intercom = [
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
    ]

    const untaken = [
      {
        images: [
          { name: 'pic-emma' }
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
    ]

    const taken = [
      {
        dialogue: 'Noooo! Seriously, I’m already freaking out enough today. Don’t take my picture again. Please?',
        speakerName: 'Emma'
      },
      {
        dialogue: 'I put my phone away. I just can’t say no to that face. To those lips...'
      }
    ]

    const selfie = [{
      speakerName: 'Emma',
      dialogue: 'Oh hey, that’s a great pic of you! You’re such a cutie - you’re going to make some woman very happy someday.'
    }]

    const emma = [{
      speakerName: 'Emma',
      dialogue: 'Nooooo...you should delete that! I look so gross.'
    }]

    const email = [{
      speakerName: 'Emma',
      dialogue: 'Yeah, this is definitely the right place. I’m so nervous!'
    }]

    const web = [{
      dialogue: 'Looking Emma up on Cloo doesn’t yield much. She prefers to stay out of the limelight.'
    }]

    const points = {
      base,
      intercom,
      untaken,
      taken,
      selfie,
      emma,
      email,
      web
    }

    super({ scene, points })
  }

  read (state) {
    super.read(state)

    const {
      intercom,
      taken,
      point,
      selected
    } = state

    if (intercom) {
      return this.points.intercom[point]
    }

    switch (selected) {
      case 'camera': {
        if (taken) {
          return this.points.taken[point]
        }

        return this.points.untaken[point]
      }
      case 'selfie':
        return this.points.selfie[point]
      case 'emma':
        return this.points.emma[point]
      case 'web':
        return this.points.web[point]
      case 'email':
        return this.points.email[point]
    }

    return this.points.base[point]
  }
}

export default Emma
