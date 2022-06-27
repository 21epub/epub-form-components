import React from 'react';
import type { Story, Meta } from '@storybook/react';
import FormEmail from '..';
import type { FormEmailProps } from '..';

export default {
  title: '表单组件/电话输入框',
  component: FormEmail,
  argTypes: {
    size: {
      control: { type: 'inline-radio', options: ['large', 'middle', 'small'] },
    },
  },
} as Meta;

const Template: Story<FormEmailProps> = (args) => <FormEmail {...args} />;

export const Input = Template.bind({});

Input.args = {
  placeholder: '请输入邮箱',
};
