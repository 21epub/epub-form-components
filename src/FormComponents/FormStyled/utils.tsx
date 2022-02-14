import Border from './Border';
import Color from './Color';
import Font from './Font';

// 获取对应的组件
export const getStyled = (StyledType: string) => {
  const styledMap = {
    Border,
    Color,
    Font,
  };

  return Reflect.get(styledMap, StyledType) || Color;
};
