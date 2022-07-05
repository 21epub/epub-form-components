import React from 'react';
import type { Story, Meta } from '@storybook/react';
import TextWidget from '..';
import type { TextWidgetProps } from '..';

export default {
  title: '工具组件/文本展示（TextWidget）',
  component: TextWidget,
} as Meta;

const Template: Story<TextWidgetProps> = (args) => <TextWidget {...args} />;

export const 文本展示 = Template.bind({});

文本展示.args = {
  text: '文本',
};
