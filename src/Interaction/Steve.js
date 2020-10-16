import Interaction from './index'

class Steve extends Interaction {
  constructor ({ scene }) {
    super({ scene, name: 'steve' })

    const first = this.setup([
      {
        speakerName: 'Quinn',
        dialogue: 'Hey Steve! It’s Quinn.'
      },
      {
        speakerName: 'Steve',
        dialogue: 'Uh, hey dude. What’s up?'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'Just calling to say hi!'
      },
      {
        speakerName: 'Steve',
        dialogue: 'Yeah, hi. I’m at work at the moment, so...let’s talk later?'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'Sure thing! I’ll call you again later.'
      },
      {
        speakerName: 'Steve',
        dialogue: 'No, I didn’t mean…'
      },
      {
        dialogue: 'I hang up on Steve. What a great guy.'
      }
    ])

    const second = this.setup([
      {
        speakerName: 'Quinn',
        dialogue: 'Hey Steve! It’s me again. Quinn!'
      },
      {
        speakerName: 'Steve',
        dialogue: 'Yeah, I know who it is. Your name comes up on my phone.'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'Oh, great! How’s work treating you?'
      },
      {
        speakerName: 'Steve',
        dialogue: 'I mean, it’s fine. I really shouldn’t be taking calls though. My boss is a bit of a dick, and he...oh, hi sir! No, I didn’t mean you. No, I didn’t call you a dick. No sir, I swear, I can explain...just give me a second. Quinn, I’ve got to go. Can we talk later?'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'Sure thing! I’ll call you in a bit.'
      },
      {
        speakerName: 'Steve',
        dialogue: 'No, that’s not what I…-'
      },
      {
        dialogue: 'I hang up on Steve. Love talking to that dude.'
      }
    ])

    const third = this.setup([
      {
        speakerName: 'Quinn:',
        dialogue: 'Steve, guess who it is!'
      },
      {
        speakerName: 'Steve',
        dialogue: 'Quinn, why are you still calling me? You know I can’t talk right now.'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'Then why are you still picking up?'
      },
      {
        speakerName: 'Steve',
        dialogue: 'Because I figured you’d know I’m at work, and only call if it was urgent!'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'Oh, so friendship isn’t urgent?'
      },
      {
        speakerName: 'Steve',
        dialogue: 'No! It definitionally is not!'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'Wow. Harsh.'
      },
      {
        speakerName: 'Steve',
        dialogue: 'I gotta get back to work. Please, only call if it’s an emergency.'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'Okay dude. I’ll try to think of an emergency to call you about.'
      },
      {
        speakerName: 'Steve',
        dialogue: 'No! Only call if…-'
      },
      {
        dialogue: 'I hang up on my friend. I should call him again if I can think of something urgent to talk about.'
      }
    ])

    const fourth = this.setup([
      {
        speakerName: 'Quinn',
        dialogue: 'Steve, I came up with an emergency!'
      },
      {
        speakerName: 'Steve',
        dialogue: 'Quinn, you shouldn’t have to “come up with” an emergency. An emergency is something out of your control.'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'Oh yeah, this is definitely out of my control.'
      },
      {
        speakerName: 'Steve',
        dialogue: '-sigh- What is it?'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'I think our democracy is collapsing.'
      },
      {
        speakerName: 'Steve',
        dialogue: '...okay, sure.'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'Does that qualify as urgent?'
      },
      {
        speakerName: 'Steve',
        dialogue: 'I mean, I guess….'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'Great! So what do you want to chat about? I saw a great movie last night.'
      },
      {
        speakerName: 'Steve',
        dialogue: 'Quinn, I told you, I’m at work. If my boss catches me talking…-'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'But it’s an emergency.'
      },
      {
        speakerName: 'Steve',
        dialogue: 'Technically. Sort of. But there’s nothing we can do about it.'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'What do you mean?'
      },
      {
        speakerName: 'Steve',
        dialogue: 'I mean, it’s a systemic issue. One person can’t really change the system, no matter what Hollywood tells you. You have to address the root causes.'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'Well, what about two people?'
      },
      {
        speakerName: 'Steve',
        dialogue: 'No, Quinn, I…-'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'What about two BUDS?'
      },
      {
        speakerName: 'Steve',
        dialogue: 'Quinn, I gotta go. We’ll fix democracy later, okay?'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'Okay, cool. I’ll call you back when I have a plan.'
      },
      {
        speakerName: 'Steve',
        dialogue: 'No! Please don’t call me ba-...'
      },
      {
        dialogue: 'I hang up. Steve’s such a smart guy. I can’t wait to overthrow the system with him.'
      }
    ])

    const fifth = this.setup([
      {
        speakerName: 'Quinn',
        dialogue: 'Yo yo yo, how’s my main man?'
      },
      {
        speakerName: 'rSteve',
        dialogue: 'At work, Quinn. At my job. Where I am not allowed to take personal calls.'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'I mean, does this count as personal?'
      },
      {
        speakerName: 'Steve',
        dialogue: 'Unless it has to do with the distribution of lactose-free milk throughout the tri-county area: yes. Yes, this counts as personal.'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'That sounds boring.'
      },
      {
        speakerName: 'Steve',
        dialogue: 'Yeah, I didn’t take this job for the thrills.'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'Then why did you take it?'
      },
      {
        speakerName: 'Steve',
        dialogue: 'Well, because...Quinn, I can’t really talk about this right now.'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'But it’s work-related!'
      },
      {
        speakerName: 'Steve',
        dialogue: 'Yet somehow I don’t think my boss will see it that way.'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'You should ask him.'
      },
      {
        speakerName: 'Steve',
        dialogue: 'I’m hanging up now.'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'Okay, great! I’ll call back later to hear what he said.'
      },
      {
        speakerName: 'Steve',
        dialogue: 'No! Fucking hell man, please stop call-...'
      },
      {
        dialogue: 'I hang up. Hopefully his boss appreciates the importance of friendship.'
      }
    ])

    this.points = [
      first,
      second,
      third,
      fourth,
      fifth
    ]
  }

  read (state) {
    const { steve, point } = state

    const index = steve || 0
    const indexed = this.points[index]
    const sixth = [
      {
        dialogue: 'It rings out. Huh. For some reason, Steve isn’t answering. I should try him again later.'
      }
    ]
    const points = indexed || sixth

    const introduction = {
      dialogue: 'I only have one number in here, my friend Steve. I should call him.'
    }

    const introduced = [
      introduction, ...points
    ]

    return introduced[point]
  }
}

export default Steve
