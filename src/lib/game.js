export const GAME_WIDTH = 3911

export const GAME_HEIGHT = 2200

export function realWidth (scalar) {
  return scalar * GAME_WIDTH
}

export function realHeight (scalar) {
  return scalar * GAME_HEIGHT
}

export function realSize (size) {
  const { width, height } = size

  const realizedWidth = realWidth(width)
  const realizedHeight = realHeight(height)

  return {
    width: realizedWidth,
    height: realizedHeight
  }
}

export const GAME_SIZE = {
  width: GAME_WIDTH,
  height: GAME_HEIGHT
}

export function upY (height) {
  return GAME_HEIGHT - height
}

export default GAME_SIZE
