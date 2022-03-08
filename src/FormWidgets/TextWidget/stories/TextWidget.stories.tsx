import React from 'react';
import type { Story, Meta } from '@storybook/react';
import TextWidget from '..';
import type { TextWidgetProps } from '..';

export default {
  title: '工具组件/文本展示',
  component: TextWidget,
} as Meta;

const Template: Story<TextWidgetProps> = (args) => <TextWidget {...args} />;

export const Alert = Template.bind({});

Alert.args = {
  text: '文本',
};
