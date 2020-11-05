export const GAME_WIDTH = 3911

export const GAME_HEIGHT = 2200

export function scaleX (scalar) {
  return scalar * GAME_WIDTH
}

export function scaleY (scalar) {
  return scalar * GAME_HEIGHT
}

export function realPosition (position) {
  const { x, y } = position

  const realX = scaleX(x)
  const realY = scaleY(y)

  return { x: realX, y: realY }
}

export function realSize (size) {
  const { width, height } = size

  const realWidth = scaleX(width)
  const realHeight = scaleY(height)

  return {
    width: realWidth,
    height: realHeight
  }
}

export const GAME_SIZE = {
  width: GAME_WIDTH,
  height: GAME_HEIGHT
}

export function upY (height) {
  return 1.0 - height
}

export default GAME_SIZE
