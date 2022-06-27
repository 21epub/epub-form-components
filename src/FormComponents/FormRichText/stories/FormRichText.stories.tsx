import React from 'react';
import type { Story, Meta } from '@storybook/react';
import FormRichText from '..';
import type { FormRichTextProps } from '..';

export default {
  title: '表单组件/富文本',
  component: FormRichText,
  argTypes: {
    size: {
      control: { type: 'inline-radio', options: ['large', 'middle', 'small'] },
    },
  },
} as Meta;

const Template: Story<FormRichTextProps> = (args) => <FormRichText {...args} />;

export const RichText = Template.bind({});

RichText.args = {
  defaultValue: '这是富文本编辑器',
  readOnly: false,
  placeholder: '请编辑内容',
};
