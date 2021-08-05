import React from 'react';
import { Story, Meta } from '@storybook/react';
import ColorPickerWidget from '../../FormWidgets/ColorPickerWidget';
import type { ColorPickerWidgetProps } from '../../FormWidgets/ColorPickerWidget';

export default {
  title: 'FormWidgets/ColorPicker',
  component: ColorPickerWidget
} as Meta;

const Template: Story<ColorPickerWidgetProps> = (args) => (
  <ColorPickerWidget {...args} />
);

export const ColorPicker = Template.bind({});

ColorPicker.args = {
  color: '#66ccff'
};
