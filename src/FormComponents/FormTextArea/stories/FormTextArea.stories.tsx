import React from 'react';
import type { Story, Meta } from '@storybook/react';
import FormTextArea from '..';
import type { FormTextAreaProps } from '..';

export default {
  title: '表单组件/文本域输入框',
  component: FormTextArea,
  argTypes: {
    size: {
      control: { type: 'inline-radio', options: ['large', 'middle', 'small'] },
    },
  },
} as Meta;

const Template: Story<FormTextAreaProps> = (args) => <FormTextArea {...args} />;

export const TextArea = Template.bind({});

TextArea.args = {
  value: '这是文本域输入框',
  readOnly: false,
  size: 'middle',
  placeholder: '请输入文本',
};
