export default function parse (point) {
  const x = parseInt(point.x)
  const y = parseInt(point.y)

  return { x, y }
}
