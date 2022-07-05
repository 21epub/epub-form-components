import React from 'react';
import type { Story, Meta } from '@storybook/react';
import FormInput from '..';
import type { FormInputProps } from '..';

export default {
  title: '表单组件/文本输入框（FormInput）',
  component: FormInput,
  argTypes: {
    size: {
      control: { type: 'inline-radio', options: ['large', 'middle', 'small'] },
    },
  },
} as Meta;

const Template: Story<FormInputProps> = (args) => <FormInput {...args} />;

export const 文本输入框 = Template.bind({});

文本输入框.args = {
  placeholder: '请输入文本',
};
