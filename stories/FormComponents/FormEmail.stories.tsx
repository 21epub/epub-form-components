import React from 'react';
import type { Story, Meta } from '@storybook/react';
import FormEmail from '../../src/FormComponents/FormEmail';
import type { FormEmailProps } from '../../src/FormComponents/FormEmail';

export default {
  title: '表单组件/邮箱输入框（FormEmail）',
  component: FormEmail,
  argTypes: {
    size: {
      control: { type: 'inline-radio', options: ['large', 'middle', 'small'] },
    },
  },
} as Meta;

const Template: Story<FormEmailProps> = (args) => <FormEmail {...args} />;

export const 邮箱输入框 = Template.bind({});

邮箱输入框.args = {
  placeholder: '请输入邮箱',
};
