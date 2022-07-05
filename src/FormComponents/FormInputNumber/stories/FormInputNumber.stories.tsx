import React from 'react';
import type { Story, Meta } from '@storybook/react';
import FormInputNumber from '..';
import type { FormInputNumberProps } from '..';

export default {
  title: '表单组件/数字输入框（FormInputNumber）',
  component: FormInputNumber,
  argTypes: {
    size: {
      control: { type: 'inline-radio', options: ['large', 'middle', 'small'] },
    },
  },
} as Meta;

const Template: Story<FormInputNumberProps> = (args) => (
  <FormInputNumber {...args} />
);

export const 数字输入框 = Template.bind({});

数字输入框.args = {
  defaultValue: 616,
  readOnly: false,
  size: 'middle',
  step: 1,
  placeholder: '请输入数字',
};
