import Border from './Border/Border'
import Color from './Color/Color'
import Font from './Font/Font'

export const getStyled = (StyledType: string) => {
  const styledMap = {
    Border: Border,
    Color: Color,
    Font: Font
  }

  return Reflect.get(styledMap, StyledType) ?? Color
}
