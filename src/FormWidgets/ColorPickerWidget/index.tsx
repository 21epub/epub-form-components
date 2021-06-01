import React, { FC, useEffect, useMemo, useRef, useState } from 'react';
import type { ColorResult, RGBColor, SketchPickerProps } from 'react-color';
import { Button } from 'antd';
import { SketchPicker } from 'react-color';
import {
  Actions,
  Buttons,
  ColorCube,
  ColorCubeContainer,
  ColorCubes,
  ColorPickerContainer
} from './Styled';

const obj2rgb = ({ r, g, b, a }: RGBColor) => `rgba(${r},${g},${b},${a ?? 1})`;

/**
 * @param color 需要透明度时请传入 rgba 格式的颜色数值
 * @param onChange 颜色值修改时回调
 * @param onChangeComplete 颜色值修改完成时回调
 */
export interface ColorPickerWidgetProps
  extends Omit<SketchPickerProps, 'onChange' | 'onChangeComplete'> {
  color?: string;
  onChange?: (color: string) => void;
  onChangeComplete?: (color: string) => void;
}

const ColorPickerWidget: FC<ColorPickerWidgetProps> = ({
  color = '#000000',
  onChange,
  onChangeComplete,
  ...props
}) => {
  const [pickerVisible, setPickerVisible] = useState(false);
  const [currColor, setCurrColor] = useState(color);
  const [position, setPosition] = useState<{ x: number; y: number }>();
  const ref = useRef<HTMLDivElement>(null);

  // eslint-disable-next-line
  const initColor = useMemo(() => color, [pickerVisible]);

  useEffect(() => {
    const hidingPicker = (e: MouseEvent) => {
      if (ref.current?.contains(e.target as Node)) return;
      setPickerVisible(false);
    };
    document.addEventListener('mousedown', hidingPicker);
    return () => document.removeEventListener('mousedown', hidingPicker);
  }, []);

  const onColorChange = ({ rgb }: ColorResult) => {
    const value = obj2rgb(rgb);
    setCurrColor(value);
    onChange && onChange(value);
  };

  const onButtonClick = (value: string) => {
    onChange && onChange(value);
    onChangeComplete && onChangeComplete(value);
  };

  return (
    <div>
      <ColorCubeContainer
        onClick={(e) => {
          setPickerVisible(!pickerVisible);
          setPosition({ x: e.clientX, y: e.clientY });
          e.stopPropagation();
        }}
      >
        <ColorCube color={color} />
      </ColorCubeContainer>
      {pickerVisible && (
        <ColorPickerContainer ref={ref} x={position?.x} y={position?.y}>
          <SketchPicker
            styles={{
              default: {
                picker: { boxShadow: 'none' },
                color: { display: 'none' }
              }
            }}
            color={color}
            width='250px'
            onChange={onColorChange}
            onChangeComplete={onColorChange}
            presetColors={[
              '#D0021B',
              '#F5A623',
              '#F8E71C',
              '#8B572A',
              '#7ED321',
              '#417505',
              '#BD10E0',
              '#9013FE',
              '#4A90E2',
              '#50E3C2',
              '#B8E986',
              '#000000',
              '#4A4A4A',
              '#9B9B9B',
              '#FFFFFF',
              'transparent'
            ]}
            {...props}
          />
          <Actions>
            <Buttons>
              <Button
                size='small'
                type='primary'
                onClick={() => {
                  onButtonClick(currColor);
                  setPickerVisible(false);
                }}
              >
                确定
              </Button>
              <Button
                size='small'
                onClick={() => {
                  onButtonClick(initColor);
                  setCurrColor(initColor);
                }}
              >
                复位
              </Button>
            </Buttons>
            <ColorCubes>
              <div>新的</div>
              <ColorCube width='48px' height='32px' color={currColor} />
              <ColorCube
                width='48px'
                height='32px'
                onClick={() => onButtonClick(initColor)}
                color={initColor}
              />
              <div>之前</div>
            </ColorCubes>
          </Actions>
        </ColorPickerContainer>
      )}
    </div>
  );
};

export default ColorPickerWidget;
