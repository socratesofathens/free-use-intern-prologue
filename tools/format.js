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

function format (line) {
  if (!line.length) return null

  line = line.replace('’', "'")
  line = line.replace('"', '\\"')
  line = line.replace('…', '...')

  const point = {}

  const split = line.indexOf(':')
  const colon = split > -1
  if (colon) {
    const speakerName = line
      .slice(0, split)

    const space = split + 2

    const dialogue = line.slice(space)

    point.speakerName = speakerName
    point.dialogue = dialogue
  }

  const set = line.includes('SET')
  if (set) {
    const left = line.indexOf('<')
    const right = line.indexOf('>')

    const start = left + 1
    const key = line.slice(start, right)

    const space = right + 1
    const value = line.slice(space)

    point.state = { [key]: value }
  }

  if (!colon && !set) {
    point.dialogue = line
  }

  return point
}

const formatted = lines
  .map(format)
  .filter(x => x)

const output = JSON.stringify(formatted, null, 2)
console.log(output)
const outpath = path.join(
  __dirname, 'output.txt'
)

fs.writeFileSync(outpath, output)

clipboardy.writeSync(output)
