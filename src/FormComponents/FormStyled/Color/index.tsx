import React, { useState } from 'react';
import type { StyledValue } from '..';
import type { ColorResult } from 'react-color';
import { TwitterPicker } from 'react-color';
import { FlexBox, Swatch, Popover } from './Styled';

export interface ReturnValue {
  [styled: string]: string;
}

export interface ColorProps {
  label: string;
  name: string;
  defaultValue: string;
  styledValue: StyledValue;
  onChange: (value: ReturnValue) => void;
}

const Color: React.FC<ColorProps> = (props) => {
  const { label, name, defaultValue, styledValue, onChange } = props;
  const [displayColorPicker, setDisplayColorPicker] = useState<boolean>(false);
  let color: string = styledValue?.[name] || defaultValue;

  const colors: string[] = [
    '#EB144C',
    '#a83e39',
    '#FF6900',
    '#FCB900',
    '#00D084',
    '#7BDCB5',
    '#8ED1FC',
    '#0693E3',
    '#9901EF',
    '#989898'
  ];

  // onChange触发更新
  const onColorChange = (colorChange: string) => {
    const value: ReturnValue = {};
    value[name] = colorChange || defaultValue;
    onChange(value);
  };

  // 点击时控制颜色选择面板显示或隐藏
  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  // 关闭颜色选择面板
  const handleClose = () => {
    setDisplayColorPicker(false);
    onColorChange(color);
  };

  // 颜色选择面板数据改变时
  const handleChange = (ColorResult: ColorResult) => {
    color = ColorResult.hex;
    /**
     * 当用户输入16进制颜色值只有三位时，不触发更新，通过关闭按钮触发更新。
     * 用于避免用户只输入了三个值，就触发更新导致面板关闭，无法输入完整六位的16进制颜色
     * */
    !(
      ColorResult.hex[1] === ColorResult.hex[2] &&
      ColorResult.hex[3] === ColorResult.hex[4] &&
      ColorResult.hex[5] === ColorResult.hex[6]
    ) && onColorChange(ColorResult.hex);
  };

  return (
    <FlexBox>
      <span>{label}:</span>
      <Swatch onClick={handleClick}>
        <div className='swatch-color' style={{ background: color }} />
      </Swatch>
      {displayColorPicker && (
        <Popover>
          <div className='popover-cover' onClick={handleClose} />
          <TwitterPicker
            colors={colors}
            width='206px'
            color={color}
            onChangeComplete={handleChange}
          />
        </Popover>
      )}
    </FlexBox>
  );
};

export default Color;
