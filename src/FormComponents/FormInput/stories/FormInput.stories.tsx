import React from 'react';
import type { Story, Meta } from '@storybook/react';
import FormInput from '..';
import type { FormInputProps } from '..';

export default {
  title: '表单组件/文本输入框',
  component: FormInput,
  argTypes: {
    size: {
      control: { type: 'inline-radio', options: ['large', 'middle', 'small'] },
    },
  },
} as Meta;

const Template: Story<FormInputProps> = (args) => <FormInput {...args} />;

export const Input = Template.bind({});

Input.args = {
  placeholder: '请输入文本',
};
