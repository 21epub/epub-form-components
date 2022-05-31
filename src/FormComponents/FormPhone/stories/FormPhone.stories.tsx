import React from 'react';
import type { Story, Meta } from '@storybook/react';
import FormPhone from '..';
import type { FormPhoneProps } from '..';

export default {
  title: '表单组件/电话输入框',
  component: FormPhone,
  argTypes: {
    size: {
      control: { type: 'inline-radio', options: ['large', 'middle', 'small'] },
    },
  },
} as Meta;

const Template: Story<FormPhoneProps> = (args) => <FormPhone {...args} />;

export const Input = Template.bind({});

Input.args = {
  placeholder: '请输入电话',
};
