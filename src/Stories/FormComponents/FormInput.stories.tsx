import React from 'react';
import { Story, Meta } from '@storybook/react';
import FormInput from '../../FormComponents/FormInput';
import type { FormInputProps } from '../../FormComponents/FormInput';

export default {
  title: 'FormComponents/FormInput',
  component: FormInput,
  argTypes: {
    size: {
      control: { type: 'inline-radio', options: ['large', 'middle', 'small'] }
    }
  }
} as Meta;

const Template: Story<FormInputProps> = (args) => <FormInput {...args} />;

export const Input = Template.bind({});

Input.args = {
  value: '这是文本输入框',
  readOnly: false,
  size: 'middle',
  placeholder: '请输入文本'
};
