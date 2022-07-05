import React from 'react';
import type { Story, Meta } from '@storybook/react';
import FormColorPicker from '..';
import type { FormColorPickerProps } from '..';

export default {
  title: '表单组件/颜色选择器（FormColorPicker）',
  component: FormColorPicker,
  argTypes: {
    value: {
      description: '设置颜色',
      control: 'color',
    },
    onChange: {
      description: '颜色改变时的回调',
    },
  },
} as Meta;

const Template: Story<FormColorPickerProps> = (args) => (
  <FormColorPicker {...args} />
);

export const 颜色选择器 = Template.bind({});

const onChange = (value: string) => {
  console.log(value);
};

颜色选择器.args = {
  value: '#66ccff',
  onChange,
};
