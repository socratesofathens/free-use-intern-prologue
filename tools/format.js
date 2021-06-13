const fs = require('fs')
const path = require('path')
const clipboardy = require('clipboardy')

const inpath = path.join(
  __dirname, 'input.txt'
)

const file = fs
  .readFileSync(inpath, 'utf8')

const clip = clipboardy.readSync()

const input = clip && clip.length
  ? clip
  : file

const lines = input.split(/\r?\n/)

const points = []
let point = {}
let touched = false

function getTitle (name) {
  const period = name.indexOf('.')
  const title = name.slice(0, period)

  return title
}

function push () {
  points.push(point)

  point = {}
  touched = false
}

function format (line) {
  if (!line.length) return null

  line = line.replaceAll('’', "'")
  line = line.replaceAll('“', '"')
  line = line.replaceAll('”', '"')
  line = line.replaceAll('"', `"${''}`)
  line = line.replaceAll('…', '...')

  const tokens = line.split(' ')
  const first = tokens[0]

  const plus = first === '+++'
  const minus = first === '---'
  const animation = first === '>>>'
  const image = plus || minus || animation

  const set = first === 'SET'
  const add = first === 'ADD'
  const state = set || add

  const item = first === 'ITEM'
  const photo = first === 'PHOTO'

  const sub = image || state || item || photo
  if (sub) {
    if (image) {
      const entity = { }
      const name = tokens[1]
      const title = getTitle(name)

      if (plus || minus) {
        entity.title = title
        point.images ??= []
        point.images.push(entity)
      }

      if (minus) {
        entity.remove = true
      }

      if (animation) {
        const name2 = tokens[2]
        const title2 = getTitle(name2)
        entity.keys = [title, title2]

        entity.duration = tokens[3]
        entity.key = tokens[4]

        point.animations ??= []
        point.animations.push(entity)
      }
    }

    if (state) {
      const [, key, value] = tokens

      if (set) {
        point.state ??= {}

        if (value === 'TRUE') {
          point.state[key] = true
        } else if (value === 'FALSE') {
          point.state[key] = false
        } else {
          point.state[key] = value
        }
      }

      if (add) {
        point.add ??= {}
        point.add[key] = value
      }
    }

    if (item) {
      const name = tokens[1]
      const title = getTitle(name)
      const hover = `Use ${title}`

      point.item = { name: title, hover }
    }

    if (photo) {
      const name = tokens[1]
      const title = getTitle(name)
      const short = title.replace('pic-', '')
      const hover = `Select ${short}`

      point.photo = { name: short, hover }
    }

    return
  }

  if (touched) {
    push()
  }

  touched = true

  const fullscreen = first === '!!!'
  if (fullscreen) {
    const file = tokens[1]
    const name = getTitle(file)
    point.fullscreen = { name }

    return
  }

  const goto = first === 'GOTO'
  if (goto) {
    point.scene = tokens[1]

    return
  }

  const split = line.indexOf(':')
  const colon = split > -1
  if (colon) {
    const speakerName = line
      .slice(0, split)

    const space = split + 2

    const dialogue = line.slice(space)

    point.speakerName = speakerName
    point.dialogue = dialogue

    return
  }

  point.dialogue = line
}

lines.forEach(format)

push()

const output = JSON.stringify(points, null, 2)
console.log(output)
const outpath = path.join(
  __dirname, 'output.txt'
)

fs.writeFileSync(outpath, output)

clipboardy.writeSync(output)
