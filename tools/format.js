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

let point
const points = []

function getTitle (name) {
  const period = name.indexOf('.')
  const title = name.slice(0, period)

  return title
}

function format (line) {
  console.log('line test:', line)
  if (!line.length) return null

  line = line.replace('’', "'")
  line = line.replace('"', '\\"')
  line = line.replace('…', '...')

  const tokens = line.split(' ')
  const first = tokens[0]
  const three = first.length === 3
  if (three) {
    console.log('three test:', three)
    const plus = first === '+++'
    const minus = first === '---'
    const animation = first === '>>>'
    const image = plus || minus || animation
    if (image) {
      const entity = { }
      const name = tokens[1]
      const title = getTitle(name)
      entity.title = title

      if (plus || animation) {
        entity.x = tokens[2]
        entity.y = tokens[3]

        // TODO naive fullscreen
      }

      if (minus) {
        entity.remove = true
      }

      if (plus || minus) {
        point.images ??= []
        points.images.push(entity)
      }

      if (animation) {
        const name2 = tokens[4]
        const title2 = getTitle(name2)
        entity.name2 = title2
        entity.duration = tokens[5]
        entity.key = tokens[6]

        point.animations ??= []
        point.animations.push(entity)
      }

      return entity
    }

    const set = first === 'SET'
    const add = first === 'ADD'
    const state = set || add
    if (state) {
      const [, key, value] = tokens

      if (set) {
        point.state ??= {}
        point.state[key] = value
      }

      if (add) {
        point.add ??= {}
        point.add[key] = value
      }

      return point
    }
  }

  console.log('point test:', point)
  if (point) {
    console.log('pushing test:')
    points.push(point)
  }
  console.log('points test:', points)
  point = {}

  const goto = first === 'GOTO'
  if (goto) {
    point.scene = tokens[1]
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

    return point
  }

  point.dialogue = line
}

lines.forEach(format)
points.push(point)

const output = JSON.stringify(points, null, 2)
console.log(output)
const outpath = path.join(
  __dirname, 'output.txt'
)

fs.writeFileSync(outpath, output)

clipboardy.writeSync(output)
