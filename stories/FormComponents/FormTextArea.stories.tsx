import React from 'react';
import type { Story, Meta } from '@storybook/react';
import FormTextArea from '../../src/FormComponents/FormTextArea';
import type { FormTextAreaProps } from '../../src/FormComponents/FormTextArea';

export default {
  title: '表单组件/文本域输入框（FormTextArea）',
  component: FormTextArea,
  argTypes: {
    size: {
      control: { type: 'inline-radio', options: ['large', 'middle', 'small'] },
    },
  },
} as Meta;

const Template: Story<FormTextAreaProps> = (args) => <FormTextArea {...args} />;

export const 文本域输入框 = Template.bind({});

文本域输入框.args = {
  defaultValue: '这是文本域输入框',
  readOnly: false,
  size: 'middle',
  placeholder: '请输入文本',
};
