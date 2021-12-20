import React from 'react';
import type { Story, Meta } from '@storybook/react';
import ColorPickerWidget from '../../FormWidgets/ColorPickerWidget';
import type { ColorPickerWidgetProps } from '../../FormWidgets/ColorPickerWidget';

export default {
  title: 'FormWidgets/ColorPicker',
  component: ColorPickerWidget,
  argTypes: {
    value: {
      description: '设置颜色',
      control: 'color'
    },
    onChange: {
      description: '颜色改变时的回调'
    }
  }
} as Meta;

const Template: Story<ColorPickerWidgetProps> = (args) => (
  <ColorPickerWidget {...args} />
);

export const ColorPicker = Template.bind({});

const onChange = (value: string) => {
  console.log(value);
};

ColorPicker.args = {
  value: '#000000',
  onChange
};
