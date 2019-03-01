import Color from 'color'


// Colors
const primary = '#34449c'
const secondary = '#87cebb'
const black = Color(primary	).darken(0.5).string()
const background = Color(secondary).lighten(0.4).string()
const backgroundStart = background
const backgroundStop = Color(primary).lighten(0.9).string()


export {
	black,
	primary,
	secondary,
	background,
	backgroundStart,
	backgroundStop,
}
