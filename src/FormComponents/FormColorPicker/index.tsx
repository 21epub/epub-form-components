import React from 'react';
import { ColorPicker } from '@21epub-ui/color-picker';
import type { ColorPickerProps } from '@21epub-ui/color-picker';
import { Wrapper } from './Styled';

/**
 * @param color 需要透明度时请传入 rgba 格式的颜色数值
 * @param onChange 颜色值修改时回调
 */
export interface FormColorPickerProps
  extends Omit<ColorPickerProps, 'onChange'> {
  value?: string;
  styled?: string;
  onChange?: (color: string) => void;
}

const FormColorPicker: React.FC<FormColorPickerProps> = (props) => {
  const { value, styled, ...rest } = props;

  return (
    <Wrapper styled={styled}>
      <ColorPicker
        color={value}
        styles={{ picker: { zIndex: 1050 } } as any}
        {...rest}
      />
    </Wrapper>
  );
};

export default FormColorPicker;
