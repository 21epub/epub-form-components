import React, { useState } from 'react';
import { StyledValue } from '../index';
import { TwitterPicker, ColorResult } from 'react-color';
import { FlexBox, Swatch, Popover } from './Styled';
import FormSelect from '../../../FormComponents/FormSelect';
import type { OptionsConfigType } from '../../../FormComponents';

export interface ReturnValue {
  [styled: string]: string;
}

export interface Option {
  label: string;
  value: string;
}

export interface BorderProps {
  label: string;
  defaultValue: {
    borderStyle: string;
    borderColor: string;
  };
  styledValue: StyledValue;
  onChange: (value: ReturnValue) => void;
}

const Border: React.FC<BorderProps> = (props) => {
  const { label, defaultValue, styledValue, onChange } = props;
  const [displayColorPicker, setDisplayColorPicker] = useState<boolean>(false);
  let borderStyle: string =
    styledValue?.borderStyle || defaultValue.borderStyle;
  let borderColor: string =
    styledValue?.borderColor || defaultValue.borderColor;

  const optionsConfig: OptionsConfigType = {
    type: 'Radio',
    defaultValue: 'solid',
    options: [
      { label: '实线边框', value: 'solid', checked: false, index: 0 },
      { label: '点线边框', value: 'dotted', checked: false, index: 1 },
      { label: '虚线边框', value: 'dashed', checked: true, index: 2 },
      { label: '双层边框', value: 'double', checked: false, index: 3 }
    ]
  };

  // 颜色改变时触发更新
  const onBorderChange = (
    changeBorderStyle: string,
    changeBorderColor: string
  ) => {
    onChange({
      borderStyle: changeBorderStyle,
      borderColor: changeBorderColor
    });
  };

  // 边框样式改变时触发更新
  const onSelectChange = (value: string) => {
    borderStyle = value || borderStyle;
    onBorderChange(borderStyle, borderColor);
  };

  // 点击时控制颜色选择面板显示或隐藏
  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  // 关闭颜色选择面板
  const handleClose = () => {
    setDisplayColorPicker(false);
    onBorderChange(borderStyle, borderColor);
  };

  // 颜色选择面板数据改变时
  const handleChange = (color: ColorResult) => {
    borderColor = color.hex;
    /**
     * 当用户输入16进制颜色值只有三位时，不触发更新，通过关闭按钮触发更新。
     * 用于避免用户只输入了三个值，就触发更新导致面板关闭，无法输入完整六位的16进制颜色
     * */
    !(
      color.hex[1] === color.hex[2] &&
      color.hex[3] === color.hex[4] &&
      color.hex[5] === color.hex[6]
    ) && onBorderChange(borderStyle, color.hex);
  };

  return (
    <FlexBox>
      <span>{label}:</span>
      <FormSelect
        className='flexbox-select'
        optionsConfig={optionsConfig}
        size='small'
        value={borderStyle}
        onChange={onSelectChange}
      />
      <Swatch onClick={handleClick}>
        <div className='swatch-color' style={{ background: borderColor }} />
      </Swatch>
      {displayColorPicker && (
        <Popover>
          <div className='popover-cover' onClick={handleClose} />
          <TwitterPicker
            width='206px'
            color={borderColor}
            onChangeComplete={handleChange}
          />
        </Popover>
      )}
    </FlexBox>
  );
};

export default Border;
