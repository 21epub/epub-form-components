import React from 'react';
import type { Story, Meta } from '@storybook/react';
import { FormInput } from '../../src/FormComponents';
import type { FormInputProps } from '../../src/FormComponents';

export default {
  title: '表单组件/FormInput',
  component: FormInput,
  argTypes: {
    size: {
      control: { type: 'inline-radio', options: ['large', 'middle', 'small'] },
    },
  },
} as Meta;

const Template: Story<FormInputProps> = (args) => <FormInput {...args} />;

export const 文本框 = Template.bind({});
文本框.args = {
  placeholder: '请输入文本',
};

export const 手机号 = Template.bind({});
手机号.args = {
  placeholder: '请输入手机号',
};

export const 邮箱 = Template.bind({});
邮箱.args = {
  placeholder: '请输入邮箱',
};
