import Room from '../Room'

import jsons from './*.json'

export default class Chapter1End extends Room {
  constructor () {
    super('chapter-1-end', 0x000000)

    this.contrast = true
  }

  setup = () => {
    const {
      'correct-mug': correctMug,
      'mug-full': mugFull,
      'sugar-mug': sugarMug,
      'boss-mood': bossMood,
      'boss-teabag': bossTeabag
    } = this.game.state

    if (correctMug) {
      if (mugFull === 'COFFEE') {
        if (sugarMug) {
          this.saves = jsons.coffeeUnsugar
        } else {
          if (bossMood <= 4) {
            this.saves = jsons.coffeeSugar0
          } else {
            this.saves = jsons.coffeeSugar5
          }
        }
      }
      if (mugFull === 'TEA') {
        if (bossTeabag) {
          if (sugarMug) {
            this.saves = jsons.teaSugar
          } else {
            if (bossMood) {
              this.saves = jsons.teaBoss1
            } else {
              this.saves = jsons.teaBoss0
            }
          }
        } else {
          this.saves = jsons.teaBoss0
        }
      }
    } else {
      this.saves = jsons.incorrect
    }

    this.saves[0].images = [
      {
        name: 'office'
      },
      {
        title: 'office-arrow'
      }
    ]
    this.saves[0].animations = [
      {
        keys: [
          'bosssex1',
          'bosssex2'
        ],
        duration: '650',
        key: 'bosssex'
      }
    ]

    super.setup()
  }
}
