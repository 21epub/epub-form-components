import Border from './Border';
import Color from './Color';
import Font from './Font';

// 获取对应的组件
export const getStyled = (StyledType: string) => {
  const styledMap = {
    Border: Border,
    Color: Color,
    Font: Font
  };

  return Reflect.get(styledMap, StyledType) || Color;
};
