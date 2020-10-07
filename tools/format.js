const fs = require('fs')
const path = require('path')
const clipboardy = require('clipboardy')

const inpath = path.join(
  __dirname, 'input.txt'
)

const input = fs
  .readFileSync(inpath, 'utf8')

const lines = input.split(/\r?\n/)

function format (line) {
  if (!line.length) return null

  const colon = line.indexOf(':')

  if (colon > -1) {
    const speakerName = line
      .slice(0, colon)

    const space = colon + 2

    const dialogue = line.slice(space)

    return `{
    speakerName: '${speakerName}',

    dialogue: '${dialogue}'
  }`
  }

  return `{
    dialogue: '${line}'
  }`
}

const formatted = lines
  .map(format)
  .filter(x => x)

const joined = formatted.join(',\n  ')
const output = `[
  ${joined}
]`
const outpath = path.join(
  __dirname, 'output.txt'
)

fs.writeFileSync(outpath, output)

clipboardy.writeSync(output)
