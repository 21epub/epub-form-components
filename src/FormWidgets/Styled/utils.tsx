import Border from './Border'
import Color from './Color'
import Font from './Font'

export const getStyled = (StyledType: string) => {
  const styledMap = {
    Border: Border,
    Color: Color,
    Font: Font
  }

  return Reflect.get(styledMap, StyledType) ?? Color
}
