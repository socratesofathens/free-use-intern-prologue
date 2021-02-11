import Interaction from './index'

class Steve extends Interaction {
  constructor ({ scene }) {
    super({ scene, name: 'steve' })

    const first = this.setup([
      {
        speakerName: 'Quinn',
        dialogue: 'Hey Steve! It\'s Quinn.'
      },
      {
        speakerName: 'Steve',
        dialogue: 'Uh, hey dude. What\'s up?'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'Just calling to say hi!'
      },
      {
        speakerName: 'Steve',
        dialogue: 'Yeah, hi. I\'m at work at the moment, so...let\'s talk later?'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'Sure thing! I\'ll call you again later.'
      },
      {
        speakerName: 'Steve',
        dialogue: 'No, I didn\'t mean...'
      },
      {
        dialogue: 'I hang up on Steve. What a great guy.'
      }
    ])

    const second = this.setup([
      {
        speakerName: 'Quinn',
        dialogue: 'Hey Steve! It\'s me again. Quinn!'
      },
      {
        speakerName: 'Steve',
        dialogue: 'Yeah, I know who it is. Your name comes up on my phone.'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'Oh, great! How\'s work treating you?'
      },
      {
        speakerName: 'Steve',
        dialogue: 'I mean, it\'s fine. I really shouldn\'t be taking calls though. My boss is a bit of a dick, and he...oh, hi sir! No, I didn\'t mean you. No, I didn\'t call you a dick. No sir, I swear, I can explain...just give me a second. Quinn, I\'ve got to go. Can we talk later?'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'Sure thing! I\'ll call you in a bit.'
      },
      {
        speakerName: 'Steve',
        dialogue: 'No, that\'s not what I...-'
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
        dialogue: 'Quinn, why are you still calling me? You know I can\'t talk right now.'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'Then why are you still picking up?'
      },
      {
        speakerName: 'Steve',
        dialogue: 'Because I figured you\'d know I\'m at work, and only call if it was urgent!'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'Oh, so friendship isn\'t urgent?'
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
        dialogue: 'I gotta get back to work. Please, only call if it\'s an emergency.'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'Okay dude. I\'ll try to think of an emergency to call you about.'
      },
      {
        speakerName: 'Steve',
        dialogue: 'No! Only call if...-'
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
        dialogue: 'Quinn, you shouldn\'t have to "come up with" an emergency. An emergency is something out of your control.'
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
        dialogue: 'I mean, I guess....'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'Great! So what do you want to chat about? I saw a great movie last night.'
      },
      {
        speakerName: 'Steve',
        dialogue: 'Quinn, I told you, I\'m at work. If my boss catches me talking...-'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'But it\'s an emergency.'
      },
      {
        speakerName: 'Steve',
        dialogue: 'Technically. Sort of. But there\'s nothing we can do about it.'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'What do you mean?'
      },
      {
        speakerName: 'Steve',
        dialogue: 'I mean, it\'s a systemic issue. One person can\'t really change the system, no matter what Hollywood tells you. You have to address the root causes.'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'Well, what about two people?'
      },
      {
        speakerName: 'Steve',
        dialogue: 'No, Quinn, I...-'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'What about two BUDS?'
      },
      {
        speakerName: 'Steve',
        dialogue: 'Quinn...'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'Two BEST buds!'
      },
      {
        speakerName: 'Steve',
        dialogue: 'Quinn, I gotta go. We\'ll fix democracy later, okay?'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'Okay, cool. I\'ll call you back when I have a plan.'
      },
      {
        speakerName: 'Steve',
        dialogue: 'No! Please don\'t call me ba-...'
      },
      {
        dialogue: 'I hang up. Steve\'s such a smart guy. I can\'t wait to overthrow the system with him.'
      }
    ])

    const fifth = this.setup([
      {
        speakerName: 'Quinn',
        dialogue: 'Yo yo yo, how\'s my main man?'
      },
      {
        speakerName: 'Steve',
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
        dialogue: 'Yeah, I didn\'t take this job for the thrills.'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'Then why did you take it?'
      },
      {
        speakerName: 'Steve',
        dialogue: 'Well, because...Quinn, I can\'t really talk about this right now.'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'But it\'s work-related!'
      },
      {
        speakerName: 'Steve',
        dialogue: 'Yet somehow I don\'t think my boss will see it that way.'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'You should ask him.'
      },
      {
        speakerName: 'Steve',
        dialogue: 'I\'m hanging up now.'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'Okay, great! I\'ll call back later to hear what he said.'
      },
      {
        speakerName: 'Steve',
        dialogue: 'No! Fucking hell man, please stop call-...'
      },
      {
        dialogue: 'I hang up. Hopefully his boss appreciates the importance of friendship.'
      }
    ])

    const sixth = this.setup([
      {
        speakerName: 'Quinn',
        dialogue: 'Steve! I was worried you wouldn\'t answer.'
      },
      {
        speakerName: 'Steve',
        dialogue: 'I probably shouldn\'t! What are you calling about?'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'That!'
      },
      {
        speakerName: 'Steve',
        dialogue: 'What?'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'I was worried you wouldn\'t answer. I figured calling you was the only way to know for sure.'
      },
      {
        speakerName: 'Steve',
        dialogue: 'Quinn, I\'ve told you, only call me if it\'s urgent.'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'I was REALLY worried!'
      },
      {
        speakerName: 'Steve',
        dialogue: 'Well, I answered. Are you satisfied?'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'Yeah! It\'s really good to know that you\'ll answer every time I call.'
      },
      {
        speakerName: 'Steve',
        dialogue: 'No, Quinn. Not every time.'
      },
      {
        speakerName: 'Quinn',
        dialogue: '...what?'
      },
      {
        speakerName: 'Steve',
        dialogue: 'I\'m at work! I can\'t pick up every single time you call.'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'Well that\'s terrifying. I guess I\'ll have to keep on testing.'
      },
      {
        speakerName: 'Steve',
        dialogue: 'Quinn, no! Don\'t...-'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'Talk to you soon!'
      },
      {
        dialogue: 'I hang up, wondering if this is just Steve\'s way of keeping me calling. He must get really lonely at work.'
      }
    ])

    const seventh = this.setup([
      {
        speakerName: 'Quinn',
        dialogue: 'Hey buddy!'
      },
      {
        speakerName: 'Steve',
        dialogue: 'Quinn! Dude! You have to stop calling me!'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'Wait...are you breaking up with me!?'
      },
      {
        speakerName: 'Steve',
        dialogue: 'What? No!'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'Are we no longer best friends?'
      },
      {
        speakerName: 'Steve',
        dialogue: 'Dude, calm down. We\'re still best friends. Just quit calling me while I\'m at work!'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'So...we\'re still besties? BFFs? Heterosexual life partners?'
      },
      {
        speakerName: 'Steve',
        dialogue: '-sigh- Yes.'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'And you\'ll always come through for me, right? That\'s what friendship is all about!'
      },
      {
        speakerName: 'Steve',
        dialogue: 'I mean...yeah. I\'ll always be there for you. You\'re my best friend.'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'Awesome! I\'ll call you again in a bit!'
      },
      {
        speakerName: 'Steve',
        dialogue: 'No! You have to sto-....'
      },
      {
        dialogue: 'I hang up. What a pal, hey?'
      }
    ])

    const eighth = this.setup([
      {
        speakerName: 'Quinn',
        dialogue: 'Yo, Steve!'
      },
      {
        speakerName: 'Steve',
        dialogue: 'What. '
      },
      {
        speakerName: 'Steve',
        dialogue: 'Do. '
      },
      {
        speakerName: 'Steve',
        dialogue: 'You. '
      },
      {
        speakerName: 'Steve',
        dialogue: 'Want!?!'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'I just had a quick question for you. Do you have a henweigh I can borrow?'
      },
      {
        speakerName: 'Steve',
        dialogue: 'What?'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'Hmm?'
      },
      {
        speakerName: 'Steve',
        dialogue: 'What are you talking about?'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'What are YOU talking about?'
      },
      {
        speakerName: 'Steve',
        dialogue: 'What\'s a henweigh?'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'About 5 pounds!'
      },
      {
        speakerName: 'Steve',
        dialogue: 'Oh, for fuck\'s sa-...'
      },
      {
        dialogue: 'I hang up, cackling as I do. Pretty good one, hey?'
      }
    ])

    const ninth = this.setup([
      {
        speakerName: 'Quinn',
        dialogue: 'Hey best friend o\' mine.'
      },
      {
        speakerName: 'Steve',
        dialogue: 'Quinn, if this is another stupid prank call...'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'Aw, c\'mon. Have a sense of humor. It was just a pun. It wasn\'t like I used a hammerfore.'
      },
      {
        speakerName: 'Steve',
        dialogue: 'What\'s a hammerfore?'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'Getting nails into walls.'
      },
      {
        speakerName: 'Steve',
        dialogue: 'Oh, fuck off!'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'C\'mon man, you walked right into that one.'
      },
      {
        speakerName: 'Steve',
        dialogue: 'We are not friends any more.'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'Steve, don\'t be like that.'
      },
      {
        speakerName: 'Steve',
        dialogue: 'I mean it. I\'m so sick of this shit. We\'re done.'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'Seriously!?'
      },
      {
        speakerName: 'Steve',
        dialogue: 'Yes! Friendship ended with Quinn. Now Dahman is my best friend.'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'What? Who\'s Dahman??'
      },
      {
        speakerName: 'Steve',
        dialogue: 'I\'M DA MAN, BITCH!'
      },
      {
        dialogue: 'Steve hangs up.'
      },
      {
        dialogue: '...'
      },
      {
        dialogue: 'Okay, yeah, I gotta give him that one.'
      }
    ])

    const tenth = this.setup([
      {
        speakerName: 'Quinn',
        dialogue: 'Hey Steve McSteve.'
      },
      {
        speakerName: 'Steve',
        dialogue: 'Hey man, what\'s up? I can\'t talk for long.'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'Wait, you\'re not mad that I\'m calling?'
      },
      {
        speakerName: 'Steve',
        dialogue: 'Nah. My boss has stepped out. I seriously only have a minute though. What did you want to talk about?'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'Oh, shit. Um. Um.'
      },
      {
        speakerName: 'Steve',
        dialogue: 'Quinn, why did you call me?'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'I need to come up with something better.'
      },
      {
        speakerName: 'Steve',
        dialogue: 'What?'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'If we don\'t have much time, I don\'t want to waste it on what I was originally calling you about! What can we talk about in just a minute?? God, that\'s so little time.'
      },
      {
        speakerName: 'Steve',
        dialogue: 'Why did you call me??'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'No, Steve! Let it go! We can do so much better!'
      },
      {
        speakerName: 'Steve',
        dialogue: 'What the hell is wrong with you?'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'Okay, I\'ve got it! The perfect topic. It\'ll take exactly a minute to discuss, and we\'ll get so much out of it. '
      },
      {
        speakerName: 'Steve',
        dialogue: 'Cool. What is it?'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'It\'ll be so good for us, both individually AND together. This could be a true moment of personal growth for each of us, as well as strengthening our friendship.'
      },
      {
        speakerName: 'Steve',
        dialogue: 'Uh, okay. Sounds great. Hit me.'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'Okay! So, Steve, tell me – in your own words – exactly what you think about...-'
      },
      {
        speakerName: 'Steve',
        dialogue: 'Ah, shit. My boss is back. Gotta go! Talk to you later.'
      },
      {
        speakerName: 'Quinn',
        dialogue: 'Steve, no! We could have...we were going to...'
      },
      {
        dialogue: 'He hangs up. Damn it! I guess I\'ll never know which is his favorite Crash Bandicoot boss fight.'
      }
    ])

    this.points = [
      first,
      second,
      third,
      fourth,
      fifth,
      sixth,
      seventh,
      eighth,
      ninth,
      tenth
    ]
  }

  read (state) {
    const { steve, point } = state

    const index = steve || 0
    const indexed = this.points[index]
    const last = [
      {
        dialogue: 'It rings out. Huh. For some reason, Steve isn\'t answering. I should try him again later.'
      },
      {
        dialogue: ' '
      }
    ]
    const points = indexed || last

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
