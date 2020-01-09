import Color from "color"

// Colors
const primary = "#777"
const secondary = "#aaa"
const black = "#000"
const background = Color(secondary)
  .lighten(0.4)
  .string()
const backgroundStart = background
const backgroundStop = Color(primary)
  .lighten(0.9)
  .string()

export {
  black,
  primary,
  secondary,
  background,
  backgroundStart,
  backgroundStop,
}
