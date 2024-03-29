import React from 'react';
import type { Story, Meta } from '@storybook/react';
import { FormRichText } from '../../src/FormComponents';
import type { FormRichTextProps } from '../../src/FormComponents';

export default {
  title: '表单组件/FormRichText',
  component: FormRichText,
  argTypes: {
    size: {
      control: { type: 'inline-radio', options: ['large', 'middle', 'small'] },
    },
  },
} as Meta;

const Template: Story<FormRichTextProps> = (args) => <FormRichText {...args} />;

export const 富文本编辑器 = Template.bind({});

富文本编辑器.args = {
  defaultValue: '这是富文本编辑器',
  readOnly: false,
  placeholder: '请编辑内容',
};
