import React from 'react';
import type { Story, Meta } from '@storybook/react';
import FormPhone from '..';
import type { FormPhoneProps } from '..';

export default {
  title: '表单组件/手机号输入框（FormPhone）',
  component: FormPhone,
  argTypes: {
    size: {
      control: { type: 'inline-radio', options: ['large', 'middle', 'small'] },
    },
  },
} as Meta;

const Template: Story<FormPhoneProps> = (args) => <FormPhone {...args} />;

export const 手机号输入框 = Template.bind({});

手机号输入框.args = {
  placeholder: '请输入手机号',
};
